---
redirect_from:
  - /blog/faire-un-tracker-bittorrent-en-php-sous-linux
layout: post
title: 'Faire un tracker BitTorrent en PHP sous Linux'
date: '2005-06-21 09:53:03'
author: j0k
tags: blabla
excerpt: "Le BitTorrent fait aujourd'hui partie des technologies très en vogue sur Internet pour transmettre des fichiers volumineux à un grand nombre d'individus.     \nVous connaissez certainement le fonctionnement de BitTorrent, lorsque vous téléchargez un fichier .torrent ce dernier contient deux informations importantes : le HASH File et l'URL du tracker.  \n     …"
---

Le BitTorrent fait aujourd'hui partie des technologies très en vogue sur Internet pour transmettre des fichiers volumineux à un grand nombre d'individus.

Vous connaissez certainement le fonctionnement de BitTorrent, lorsque vous téléchargez un fichier .torrent ce dernier contient deux informations importantes : le HASH File et l'URL du tracker.   Votre client BitTorrent contacte le tracker indiqué dans le fichier .torrent et demande quelles sont les sources disponibles pour le fichier possédant ce HASH File, le tracker vous indique une liste d'IP à contacter, dès lors votre client contacte directement ces adresses et commence le téléchargement.

Voici un [article](http://gael-donat.developpez.com/os/fc-bittorrent/) qui vous explique l'installation du tracker BitTorrent ainsi que d'un client BitTorrent pour faire du seeding sur le serveur.
