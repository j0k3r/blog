---
layout: post
title: 'Faire revivre les ThermoPeanut de Sense grâce à Bref et React Native'
date: '2023-09-07 20:41:34'
author: j0k
tags: php bref aws react
excerpt: "Comment j'ai bidouillé une API en PHP avec une appli iOS en React Native pour ne pas jeter mes thermomètres connectés suite à la fermeture des serveurs de la boite qui les fournissait. Je me suis bien amusé alors je vous partage tout ça !"
---
_Note : j'ai créé ce projet y'a 3 ans (en aout 2019), j'ai commencé à écrire cet article en février 2020 et depuis j'ai tout le temps repousser le moment de le finir, jusqu'à aujourd'hui ! :)_

Fin 2015, la startup française Sense lance plusieurs [appareils connectés](https://www.iphon.fr/post/capteurs-peanut-autonomes-sense-841214). Dans le lot, il y en a un qui permet de recueillir la température : le **ThermoPeanut**. Il collecte la température, une application mobile récupère ses informations via le Bluetooth, les envoie vers leurs serveurs et affiche ensuite de belles courbes.

Mais deux ans plus tard, fin 2017, [la startup est en liquidation](https://www.mac4ever.com/actu/129742_sen-se-la-fin-des-peanuts). Les serveurs ont commencé à fonctionner par intermittence. Et début 2018, ils ont été coupés. L’application permet toujours d’afficher la température actuelle mais les graphiques ne sont plus mis à jour.

Ne voulant pas rester avec mes 4 Thermo Peanuts inutiles, j’ai commencé à chercher une solution.

Les objectifs étaient :

1. de garder mes thermomètres
2. d'avoir une application iOS avec des graphiques
3. que ça ne coute rien (ou presque rien) au fonctionnement

## Lire les données

### Récupérer directement les données depuis les objets connectés ❌
L'avantage serait évidemment de lire directement les infos en Bluetooth. Problème, je n’ai pas réussi à établir une connection avec les devices.
J’ai trouvé des vieux projets en JS qui permettait de le faire depuis une page web. Mais évidemment, ils ne fonctionnent plus.
En ligne de commande directement, impossible de les trouver non plus. Même en ayant leur adresse MAC (trouvée en sniffant les appels réseaux de l'app), impossible de m'y connecter.

Échec.

### Changer l’URL de l’API utilisée dans l’application ❌
L’iPhone faisant tourner l’application est un 5c jailbreaké (l'app est en 32 bits). J’ai récupéré le code de l’application et j’ai commencé à regarder pour changer cette url. Mais impossible de trouver une variable qui contiendrait cette information.

Nouvel échec.

### Proxifier les appels vers l’API ✅
Dernière solution, intercepter les appels à l’API via un proxy.

En jouant avec Charles Proxy, j’ai pu récupérer les données envoyées au serveur par l’application et les interpréter.

C'était gros fichier JSON avec plein d'infos différentes non-encore synchronisées avec le serveur :

- l'état de la batterie (`battery`)
- la température (`temperature`)
- l'état du thermomètre (connecté ou non) (`presence`)

J'ai résumé les 3 types mais le fichier en contenait des centaines.

```json
[
  {
    "gatewayNodeUid": "5qQBoq9AJwhxdLbBdIqtVg8vlz7cGWsq",
    "signal": -96,
    "data": {
      "code": 200,
      "body": "Present"
    },
    "type": "presence",
    "dateEvent": "2018-06-03T19:38:04.761Z"
  },
  {
    "gatewayNodeUid": "5qQBoq9AJwhxdLbBdIqtVg8vlz7cGWsq",
    "signal": -83,
    "data": {
      "centidegreeCelsius": 2416
    },
    "type": "temperature",
    "dateEvent": "2018-06-03T19:41:30.131Z"
  },
  {
    "gatewayNodeUid": "5qQBoq9AJwhxdLbBdIqtVg8vlz7cGWsq",
    "signal": -83,
    "data": {
      "levelMillivolt": 3000
    },
    "type": "battery",
    "dateEvent": "2018-06-03T19:41:30.131Z"
  }
]
```

## Mise en place du proxy
Inconvénient à cette solution : il faut une tierce personne pour faire le proxy. Il faut rediriger le trafic allant vers `https://app-00.sen.se` vers une autre url.

Pour faire ça, j’ai acheté un Raspberry Zéro. J’ai installé Charles Proxy et avec un simple « Map Remote » le boulot était fait.

![image](https://user-images.githubusercontent.com/62333/64076153-79755d80-ccc1-11e9-9772-bfd61f2e0e45.png)

J’avais essayé plusieurs autres solutions dont [ssl-proxy](https://github.com/suyashkumar/ssl-proxy), [pound](https://www.apsis.ch/pound.html), [mitmproxy](https://mitmproxy.org/) et [hiproxy](http://hiproxy.org/) sans succès. Il faudrait que je me re-penche dessus car Charles Proxy est trop gourmand en RAM et fait planter le Raspberry de temps en temps.

## Mise en place des données via une API
Le proxy en place, je me suis dit que la façon la plus simple et rapide d’avoir une API c’était de passer par AWS avec une Lambda appelée via une API Gateway. Je connais déjà très bien cet environnement avec des lambdas en Node.js mais je me suis dit que **c’était l’occasion de tester [BrefPHP](https://bref.sh/)**.

L’application est plutôt basique :
- un endpoint pour enregistrer les données venant de l’application.
    Par exemple, l'enregistrement d'un relevé de température :
    ```php
    $this->influx->writePoints([
        new \InfluxDB\Point(
            'temperature',
            2416,
            ['mac' => '00:0A:95:9D:68:16'],
            [],
            1528055638198
        ),
    ], \InfluxDB\Database::PRECISION_MILLISECONDS);
    ```
- un endpoint pour lister les thermomètres connectés
- un endpoint pour afficher les détails d’un thermomètre
    Par exemple, la requête vers InfluxDB pour récupérer la moyenne sur les 30 dernières minutes :
    ```sql
    SELECT MEAN("value")/100 FROM "temperature" WHERE time > now() - 24h AND "mac"='00:0A:95:9D:68:16' GROUP BY time(30m)
    ```

L’application devant fournir des graphiques sur plusieurs échelles (dernières 24h, 30 derniers jours et 12 derniers mois) **je me suis tourné vers InfluxDB** pour le stockage des métriques. AWS ne proposant pas encore de base de données de type « time serie », j’ai une petite instance EC2 pour InfluxDB uniquement (ndlr: ils proposent maintenant AWS Timestream, mais c'est beaucoup trop cher).

Enfin, pour le stockage des différents thermomètres avec les dernières valeurs et leur nom, **j’ai opté pour une table dans DynamoDB** pour la simplicité d’utilisation et le coût minime.

Le [code est disponible sur GitHub](https://github.com/j0k3r/thermo-proxy-aws).

## Affichage des données depuis une application en React Native
La finalité de tout ça, c’est quand même de pouvoir consulter la température depuis n’importe où avec mon téléphone.

J’aurais pu partir sur une simple application en ligne de type PWA mais je me suis dit que c’était l’occasion de tester quelque chose de nouveau. **J’ai opté pour une application en React Native en utilisant la plateforme [Expo](https://expo.dev/)**.

Je suis rapidement arrivé à une interface concluante pour le listing. J’ai surtout refait l’interface de l’ancienne application de Sense pour ne pas trop être perdu (et puis le design, c'est pas mon truc).
Pour les graphiques, j’ai utilisé la librairie Victory qui permet d’avoir le choix dans le rendu.

{% cloudinary /assets/images/thermo-app/home_light.jpg alt="La home en mode jour" %}
{% cloudinary /assets/images/thermo-app/view_dark.jpg alt="Les graphiques d'un thermomètre en mode sombre" %}
{% cloudinary /assets/images/thermo-app/view_light.jpg alt="Les graphiques d'un thermomètre en mode jouer" %}

Le [code est disponible sur GitHub](https://github.com/j0k3r/thermo-app).

## Le bilan
Une fois tout ça en place je peux maintenant connaître (à nouveau) la température qu’il fait dans les différentes pièces de mon appartement depuis n’importe où et avoir les graphiques pour connaître l’historique.

Les seuls bémols :
- le téléphone faisant tourner l’application Sense doit toujours être allumé
- l’application iOS n’est pas compatible 64 bits (donc incompatible avec iOS > 11)
- le proxy depuis le Raspberry doit aussi être tout le temps allumé

Mais ce petit projet m’a permis de :
- découvrir la simplicité avec laquelle il est possible de faire fonctionner une application PHP dans une Lambda grâce à Bref (bravo Matthieu !!)
- découvrir la puissance et la simplicité d’InfluxDB pour stocker des données pour faire des graphiques
- jouer avec Expo pour faire une application iOS en React Native
- jouer avec une table DynamoDB très basique

La seule dépense que j’ai faite dans tout ça (outre l’achat des thermomètres en 2015) c’est le Raspberry Pi Zéro puisque tout le reste tourne sur AWS et que grâce aux [crédits AWS](https://www.j0k3r.net/recevoir-1200-dollars-credit-aws) annuel que j’ai, elle ne me coûte rien !
