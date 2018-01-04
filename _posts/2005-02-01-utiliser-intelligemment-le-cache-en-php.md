---
layout: post
title: 'Utiliser intelligemment le cache en PHP'
date: '2005-02-01 12:03:11'
author: j0k
tags: '[]'
excerpt: "Le journal du net publie un article fort intéressant sur l'utilisation du cache en PHP : [Le cache par la pratique](http://developpeur.journaldunet.com/tutoriel/php/050131-php-directionphp-cache-6.shtml).     \nComme tout le monde le sait, et comme le fait remarquer la *Rédaction JDN Développeurs*, quand on veut optimiser un script PHP on pense d'abord à de      …"
---

Le journal du net publie un article fort intéressant sur l'utilisation du cache en PHP : [Le cache par la pratique](http://developpeur.journaldunet.com/tutoriel/php/050131-php-directionphp-cache-6.shtml).
Comme tout le monde le sait, et comme le fait remarquer la *Rédaction JDN Développeurs*, quand on veut optimiser un script PHP on pense d'abord à de l'optimisation du code PHP lui même, en réduisant les fonctions, en "factorisant". Ensuite en essayant de faire le maximum de travail via les requêtes SQL, c'est à dire, de "macher" le travail pour avoir un minimum de code PHP pour le traitement de cette requête.

Mais personne ne pense à voir ce qu'il se passe du coté du cache. Une requete bien lourde qui prends du temps, on l'a fait une fois, et on la stocke dans le cache pour y accéder plutard et ainsi alléger le temps d'exécution du script. (L'exemple est un peu simplifié).

C'est le but de cet article, très bien écrit et détaillé. Je vous conseille de le lire :)
