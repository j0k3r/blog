---
layout: post
title: 'Intégrer un flux RSS protégé dans Google Reader'
date: '2008-08-17 01:07:47'
author: j0k
tags: google reader rss twitter
excerpt: 'Ayant récemment repris mon activité sur [Twitter](http://twitter.com/j0k) (un compte ouvert il y a près d''un an, jamais utilisé...), il était évidemment que pour suivre au mieux l''activité de mes amis sur Twitter, le flux RSS était la meilleure solution.'
---

Ayant récemment repris mon activité sur [Twitter](http://twitter.com/j0k) (un compte ouvert il y a près d'un an, jamais utilisé...), il était évidemment que pour suivre au mieux l'activité de mes amis sur Twitter, le flux RSS était la meilleure solution.

 ![image](http://kwout.com/cutout/m/ty/jz/8pm_bor_rou_f4f4f4.jpg)

Cependant, le flux RSS "friends_timeline" est protégé par votre login et mot de passe Twitter. Ce qui en soit est plutôt rassurant: tout le monde ne peut pas suivre tout ce que font vos amis. Netvibes gère très bien les flux protégés mais ce n'est malheureusement pas le cas de Google Reader (!!).   Après avoir cherché des astuces à droite à gauche pour intégrer un flux protégé par une authentification, je suis finalement tombé sur [Yahoo! Pipes](http://pipes.yahoo.com/pipes/). Yahoo! Pipes permet de créer des mashups d'un peu ce qu'on veut à partir de n'importe quelle URL.   L'interface est vraiment bien faite et on peut facilement créer des flux RSS à partir d'autre flux RSS, faire des combinaisons, etc ...

[David](http://dblume.livejournal.com/112262.html) a [trouvé la solution](http://pipes.yahoo.com/pipes/pipe.edit?_id=EjGlyDlj3RGWvS6L1JzWFw) pour générer le flux des activités des amis sur Twitter.    Voici en détail la procédure :

 ![image](http://kwout.com/cutout/8/en/ij/bqs_bor_rou_f4f4f4.jpg)

L'idée c'est tout simplement de régénérer le flux RSS de Twitter avec les bons paramètres pour l'authentification :

* le premier champ du bloc "String Builder" correspond à votre login Twitter (ici: dblume)
* Renseignez ensuite votre mot de passe dans le bloc "String password"
* Une fois ces informations renseignées, il ne reste plus qu'à sélectionner le bloc "Pipe Output" et de cliquer sur "Refresh" tout en bas de la page, vous verrez ainsi le début de votre flux
* Revenez sur "vos pipes", sélectionnez le pipe que vous venez de créer et vous aurez la possibilité d'afficher le résultat au format RSS

Une fois le pipe réaliser et fonctionnel, il suffit ensuite de prendre le flux RSS généré par le pipe et de l'ajouter dans Google Reader. Et voilà, le tour est joué, vous pouvez  maintenant intégrer n'importe quel flux RSS protégé par une authentification dans Google Reader grâce à Yahoo! Pipes !
