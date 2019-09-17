---
redirect_from:
  - /blog/mettre-en-place-la-compression-gzip-sur-apache-et-iis
layout: post
title: 'Mettre en place la compression Gzip sur Apache et IIS'
date: '2006-12-12 10:04:55'
author: j0k
tags: blabla
excerpt: "La compression Gzip permet de réduire le cout de la bande passante sur votre serveur. Le principe est de zipper (en quelques sortes) les données sur le serveur pour les transmettre au client qui les dézippe de son côté.   La méthode est reconnue par tous les navigateurs, pour une fois, c'est rare ..  \n  \nApache et IIS étant les deux serveurs les plus      …"
---

La compression Gzip permet de réduire le cout de la bande passante sur votre serveur. Le principe est de zipper (en quelques sortes) les données sur le serveur pour les transmettre au client qui les dézippe de son côté.   La méthode est reconnue par tous les navigateurs, pour une fois, c'est rare ..

Apache et IIS étant les deux serveurs les plus utilisés sur internet, le JDN propose [un tutoriel](http://developpeur.journaldunet.com/tutoriel/out/061207-apache-iis-compression-gzip.shtml) pour mettre en place pas à pas la compression Gzip.

Attention tout de même, Gzip peut parfois être gourmant en ressource côté serveur... C'est peut etre plus pratique pour le client, mais c'est quand même votre serveur qui pourrai trinquer derrière :)
