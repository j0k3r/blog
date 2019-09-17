---
redirect_from:
  - /blog/manipuler-des-videos-et-du-son-avec-php
layout: post
title: 'Manipuler des vidéos et du son avec PHP'
date: '2005-06-21 10:24:42'
author: j0k
tags: blabla
excerpt: "PHP sait déjà faire beaucoup de choses. Grâce notamment à la librairie GD, il est tout à fait possible de faire du traitement d'image, du recadrage et bien d'autres choses.     \nMais concernant la vidéo et le son, PHP a des lacunes et il est même impossible de faire du traitement vidéo/son en utilisant PHP tel quel.   Un projet Open Source autorise les      …"
---

PHP sait déjà faire beaucoup de choses. Grâce notamment à la librairie GD, il est tout à fait possible de faire du traitement d'image, du recadrage et bien d'autres choses.

Mais concernant la vidéo et le son, PHP a des lacunes et il est même impossible de faire du traitement vidéo/son en utilisant PHP tel quel.   Un projet Open Source autorise les développeurs à travailler avec les données des fichiers multimédias comme ils le feraient avec des images classiques. Ce projet s'appelle [FFmpeg-PHP](http://ffmpeg-php.sourceforge.net/).   Elle utilise pour cela le convertisseur FFmpeg, également Open-Source, qui doit être installé sur le serveur.

On peut grâce à cette API, extraire une image d'une vidéo pour ensuite la manipuler avec GD, ou encore récupérer les infos d'un MP3, comme son titre, son artiste ...

Une API prometteuse, dont le [JDN](http://developpeur.journaldunet.com/tutoriel/php/050620-php-exploiter-video-audio-ffmpeg-api.shtml) fait une très rapide introduction.
