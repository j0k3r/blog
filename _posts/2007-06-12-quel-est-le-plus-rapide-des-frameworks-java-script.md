---
layout: post
title: 'Quel est le plus rapide des frameworks JavaScript ?'
date: '2007-06-12 11:31:45'
author: j0k
tags: cssQuery ext framework javascript jquery mootools prototype
excerpt: 'Je pense qu''on est tous d''accord pour dire qu''il y a toujours beaucoup de framework dans un peu tous les langages de programmation, que ce soit en PHP, en JavaScript ... et il faut bien souvent faire des choix avant de commencer à développer.    Ces choix sont souvent influencer par une utilisation précédent ou des "on m''a dit que". J''utilise par exemple      ...'
---

Je pense qu'on est tous d'accord pour dire qu'il y a toujours beaucoup de framework dans un peu tous les langages de programmation, que ce soit en PHP, en JavaScript ... et il faut bien souvent faire des choix avant de commencer à développer.    Ces choix sont souvent influencer par une utilisation précédent ou des "on m'a dit que". J'utilise par exemple scriptaculous depuis un bon moment déjà et je commence à le connaitre un peu (en plus il est inclut de base dans Symfony). Mais quand je vois les performances de Mootools et la flopée de fonction autour mais aussi le fait de pouvoir cibler uniquement les fichiers dont à besoin, ça me plait beaucoup !

Tout ça pour nous emmener au fait que la rapidité joue un rôle très important dans un framework. Mootools a mis en place [une plateforme de test](http://mootools.net/slickspeed/) qui se veut tester les frameworks suivant :

 * prototype 1.5.1
 * jQuery 1.1.2dev
 * MooTools 1.2dev
 * ext 1.1b1
 * cssQuery 2.02

Tous les tests sont effectués dans des iframes bien distinctes de façon à ce que le test soit le plus réel possible et pour éviter tout favoritisme.

Je pense que les tests dépendent aussi du navigateur. J'ai fait le test sous Firefox et il s'avère que **prototype est premier** avec un total de 282ms suivi de prêt par Mootools à 315ms. Loin derrière on retrouve ext avec 2074s et dans le fond jQuery avec 8716ms (!!) et cssQuery avec 11664ms (!!!).

[A vous de juger](http://mootools.net/slickspeed/) !
