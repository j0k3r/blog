---
redirect_from:
  - /blog/ou-sont-vos-fichiers-inclus
layout: post
title: 'Ou sont vos fichiers inclus ?'
date: '2005-03-28 11:05:10'
author: j0k
tags: blabla
excerpt: "Un court mais bref article de [Chris Shiflett](http://shiflett.org/archive/110), parle des fichiers de types .inc. C'est à dire les fichiers dans lesquels on stocke en général les identifiants pour se connecter à la base de donnée.     \nIl dit que le fait de stocker ces fichiers dans la racine de votre site (acceccible à tous le monde donc) est une      …"
---

Un court mais bref article de [Chris Shiflett](http://shiflett.org/archive/110), parle des fichiers de types .inc. C'est à dire les fichiers dans lesquels on stocke en général les identifiants pour se connecter à la base de donnée.
Il dit que le fait de stocker ces fichiers dans la racine de votre site (acceccible à tous le monde donc) est une pratique de personnes non-initiés et que c'est une terrible habitude. Puisque PHP est un langage "server side" (côté serveur), nous pouvons l'employer pour inclure dynamiquement ces éléments dans nos pages en collant une simple ligne code au lieu du gros morceau entier chaque fois que nous voulons qu'il apparaisse dans une page.    Une raison pour laquelle Chris conseille de ne pas stocker votre fichier .inc dans la racine de votre site : [http://www.google.com/search?q=inurl%3Adb.inc](http://www.google.com/search?q=inurl%3Adb.inc).      Et oui comme cela on peut directement accéder au fichier .inc non protégé que les robots de google ont parcourut...

Il recommandent ainsi :
* de ne pas appeller vos fichier .inc avec l'extension .php (.inc.php)
* d'interdire l'accès au dossier qui contient ces fichiers (Order allow,deny Deny from all)

Le problème n'est pas que ces techniques sont mauvaises, mais plut$ot qu'elles ne sont ni optimales ni suffisantes. Si vous utilisez ces techniques, faites pour adhérer ainsi seulement au principe de la défense détaillé. Si vous allez seulement mettre en application une sauvegarde, choisissez le meilleur.

Article à lire (même si je l'ai partiellement traduit), mais surtout les commentaires interessants qui suivent !
