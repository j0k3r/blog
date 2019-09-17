---
redirect_from:
  - /blog/construire-un-systeme-de-cache-en-php
layout: post
title: 'Construire un système de cache en PHP'
date: '2005-11-07 06:48:06'
author: j0k
tags: blabla
excerpt: "Quand votre site commence à recevoir beaucoup de visiteurs et que vous ne possédez pas (encore) un hébergement assez costaud pour encaisser tout cela, il est bon de ce tourner vers un système de cache en PHP qui réduira fortement le temps de réponse de votre site.     \nEn plaçant en cache les données les plus visitées, par exemple, la page d'accueil ou encore les      …"
---

Quand votre site commence à recevoir beaucoup de visiteurs et que vous ne possédez pas (encore) un hébergement assez costaud pour encaisser tout cela, il est bon de ce tourner vers un système de cache en PHP qui réduira fortement le temps de réponse de votre site.
En plaçant en cache les données les plus visitées, par exemple, la page d'accueil ou encore les données provenant de MySQL, vous gagnerez un temps fou sur l'affichage.

[Cet article](http://www.phpit.net/article/build-caching-system-php/2/) en anglais, sur deux pages, vous montre comment en créer un rapidement et simplement. Cependant pour les plus courageux, vous pouvez aussi vous attaquez à quelques choses de plus complexe (et forcément plus puissant) proposé à la fin du tutoriel.

Le piège d'un tel cache est qu'il ne faut pas tomber dans l'excès et ainsi mettre en cache plein de page, notamment les pages qui concerne l'utilisateur. Étant tout le temps différentes selon les utilisateurs, ils pourraient se retrouver avec la page d'un autre, par forcément bien. Il faut donc l'utiliser seulement pour les pages qui ne changent d'utilisateur en utilisateur.
