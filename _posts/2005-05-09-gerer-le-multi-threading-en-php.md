---
layout: post
title: 'Gérer le Multi-threading en PHP'
date: '2005-05-09 02:25:08'
author: j0k
tags: '[]'
excerpt: "[Nexen](http://www.nexen.net/news/gen.php/2005/05/09/4193,0,0,0,0.php) nous indique un lien fort sympatique (mais en anglais ^^) sur le Multi-threading en PHP     \nWez Furlong explique comment réaliser simultanément plusieurs taches en PHP en même temps. En se basant sur les flux (et PHP 5) ou les sockets (PHP 4), il est possible d'ouvrir des connexions      …"
---

[Nexen](http://www.nexen.net/news/gen.php/2005/05/09/4193,0,0,0,0.php) nous indique un lien fort sympatique (mais en anglais ^^) sur le Multi-threading en PHP
Wez Furlong explique comment réaliser simultanément plusieurs taches en PHP en même temps. En se basant sur les flux (et PHP 5) ou les sockets (PHP 4), il est possible d'ouvrir des connexions simultanées et asynchrones. La fonction stream_select() étudie alors ce groupe de connexions, et retourne la permière qui donne des informations.

De cette manière, on peut ouvrir simultanément des connexions, et traiter les retours au fur et à mesure de leur arrivée.
