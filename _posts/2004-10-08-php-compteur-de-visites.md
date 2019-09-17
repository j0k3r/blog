---
layout: post
title: 'PHP - Compteur de visites'
date: '2004-10-08 20:03:33'
author: j0k
tags: développement
excerpt: "Il est toujours gratifiant et surtout intéressant de connaître le nombre de personne qui fréquente son site.  Je vais donc vous présenter comment en mettre un sur votre site. Bien sûr ce n'est que le minimum, libre à vous de l'améliorer :p"
---

Il est toujours gratifiant et surtout intéressant de connaître le nombre de personne qui fréquente son site.

Je vais donc vous présenter comment en mettre un sur votre site. Bien sûr ce n'est que le minimum, libre à vous de l'améliorer :p

## **Fonctionnement**

Le compteur tourne autour d'un cookie et d'un fichier texte (ou .dat).

Le cookie permet de vérifier/valider que le visiteur est déjà venu, pas encore venu ou déjà venu mais il y a longtemps. Le fichier *visit.dat* stocke le nombre de visite.

En arrivant sur la page, le script vérifie si le cookie est présent sur la machine du visiteur. Si le cookie est présent, on lit seulement la valeur qui se trouve dans le fichier *visit.dat*, qui contient le nombre de visite, et on a le nombre de notre compteur : *$visiteur*

```php
//on vérifie si le cookie est là
if (isset($_COOKIE["CompteurVisite"]))
{
    //on récupère le nombre de visite
    $dataf = file("visit.dat");
    //on l'enregistre dans la variable adéquate
    $visiteur = $dataf[0];
}
```

Si le cookie n'est pas présent, on en mets un avec une durée de vie limitée (Durée que vous déterminez...ccf le chiffre souligné dans le code, à exprimer en secondes) puis on récupère l'ancien nombre de visite dans le fichier *visit.dat*, on l'incrémente de *1* et on ré-enregistre le nouveau membre dans le fichier.

```php
else
{
    //création du cookie
    setcookie("CompteurVisite",1,time()+18000);
    //ouverture d'un flux sur le fichier
    $fd = fopen("visit.dat", "r+");
    //lecture du nombre de visite
    $last = fgets($fd, 10);
    //incrémentation du nombre de visite
    $last += 1;
    //on replace le curseur en début de fichier
    fseek($fd, 0);
    //on enregistre le nouveau nombre
    fputs($fd, $last);
    //on ferme le flux
    fclose($fd);
    //on enregistre le nouveau nombre dans la variable adéquouate
    $visiteur = $last;
}
```

  Tout ce code est a placé avant la balise <html> pour éviter d'avoir une erreur de création de cookie.

 Une fois le code placé, il ne vous reste plus qu'à afficher le nombre de visite :

```php
echo "Nombre de visites : ".$visiteur;
```

## **Aller plus loin ...**

Pour en faire un peu plus, il faudrait faire un petit script qui gère l'installation de cookie pour ne pas compter votre visite, par exemple.

On pourrai aussi faire un système, grâce aux cookies, qui affiche le nombre de visite par visiteur. C'est à dire que l'on aurait toujours le nombre de visite du site mais aussi le nombre de visite **du** visiteur.

Bref on pourrai faire plein de choses  :mdr:

Penser tout de même que certaines personnes n'acceptent pas les cookies (elles sont rares mais il ne faut pas les oublier)...
