---
redirect_from:
  - /article/ajax-l-objet-xml-http-request
layout: post
title: 'Ajax - L''objet XmlHttpRequest'
date: '2006-02-24 22:08:24'
author: j0k
tags: développement
excerpt: 'Comme je vous l''ai dit dans l''[introduction à AJAX](http://www.j0k3r.net/ajax-introduction-a-ajax-1.html "Lien"), l''objet XmlHttpRequest a été introduit par Microsoft via Internet Explorer 5 pour Windows sous la forme d''un ActiveX. La fondation Mozilla a, par la suite, implémenté une version compatible avec sa suite (et dans la foulée avec NetScape). Apple a fait la même chose pour son navigateur Safari.'
---

**L'histoire**

Comme je vous l'ai dit dans l'[introduction à AJAX](http://www.j0k3r.net/ajax-introduction-a-ajax-1.html), l'objet XmlHttpRequest a été introduit par Microsoft via Internet Explorer 5 pour Windows sous la forme d'un ActiveX. La fondation Mozilla a, par la suite, implémenté une version compatible avec sa suite (et dans la foulée avec NetScape). Apple a fait la même chose pour son navigateur Safari.


 **Le principe**

 En apparence, l'objet XmlHttpRequest pourrait ne traiter que des données XML, ce qui est faux. Il peut aussi (et heureusement) attaquer toutes sortes de données. Si vous êtes un peu familier avec la programmation orientée objet l'utilisation de cet objet vous sera facile.

  _1. Création de l'objet_

 Il faut en premier lieu créer l'objet XMLHttpRequest. Etant donné que son implémentation par les différents navigateurs n'est pas la même, il faut, selon le navigateur, le créé autrement.

  On utilise une syntaxe comme celle ci pour Safari et Mozilla :

```js
var req = new XMLHttpRequest();
```

 Tandis que pour l'ActiveX de Microsoft, il faut procéder ainsi :

```js
var req = new ActiveXObject("Microsoft.XMLHTTP");
```

  _2.Utilisation des différentes méthodes_

 Une fois l'objet implémenté, on peut maintenant l'exploiter pleinement.

  Voici quelques unes des méthodes susceptible de vous intéresser :

 - *getAllResponseHeaders()* : Récupère l'ensemble des en-têtes de réponse
 - *open()* : Met fin à la requête en cours et en prépare une nouvelle, en indiquant la méthode (GET ou POST) et l'URL.
 - *setRequestHeader()* : Assigne un couple nom/valeur à l'en-tête accompagnant la requête
 - *send()* : Lance la requête

_3. Petit tour du côté des propriétés_

 Les principales propriétés à connaître :

 - *readyState* : Un entier indiquant l'état de l'objet. Peut prendre 5 valeurs (0 = non initialisé, 1 = en cours de chargement, 2 = chargé, 3 = interaction, 4 = terminé)
 - *responseText* : Chaîne correspondant à la réponse du serveur à la requête
 - *responseXML* : Version XML de la chaîne de réponse

**La suite**

 Cette partie a juste pour but de vous présenter rapidement l'objet XmlHttpRequest qui est quand même un des piliers d'AJAX. Dans les différents scripts que je vous présenterai, nous utiliserons un [framework AJAX](http://www.j0k3r.net/ajax-les-frameworks-ajax-3.html) qui nous évitera de mettre en place le traitement de cet objet pour se focaliser sur le développement.

  Si vous voulez en savoir plus sur cet objet, je vous invite à lire les articles sur lesquels je me suis en partie appuyés :

 - [Chez Apple](http://developer.apple.com/internet/webcontent/xmlhttpreq.html)
 - [Chez OpenWeb](http://openweb.eu.org/articles/objet_xmlhttprequest/)
 - [Sur le JDN](http://developpeur.journaldunet.com/tutoriel/dht/050406-javascript-ajax-xmlhttprequest-1.shtml)
