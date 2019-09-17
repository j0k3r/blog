---
layout: post
title: 'Digg et PHP'
date: '2006-04-13 02:14:18'
author: j0k
tags: blabla
excerpt: "Vous connaissez certainement Digg, qui permet de mettre en avant un site internet / article et gère aussi le social bookmarking (comme blogmarks).     \nDigg utilise PHP et il est donc intéressant de savoir comment PHP gère toute la charge que génère Digg. On apprend qu'en fait, le plus gros problème de Digg ne sont venus que très rarement de PHP mais plus des      …"
---

Vous connaissez certainement Digg, qui permet de mettre en avant un site internet / article et gère aussi le social bookmarking (comme blogmarks).
Digg utilise PHP et il est donc intéressant de savoir comment PHP gère toute la charge que génère Digg. On apprend qu'en fait, le plus gros problème de Digg ne sont venus que très rarement de PHP mais plus des bases de données.

Dans une [interview d'Owen Byrne](http://www.oreillynet.com/onlamp/blog/2006/04/digg_phps_scalability_and_perf.html), le co-fondateur et le principal développeur de Digg, on en apprend plus ce qu'utilise Digg :

* Digg utilise le framework [WASP](http://wasp.sourceforge.net/)
* Génère 200 millions de pages par mois
* Utilise 3 serveurs Web et 8 serveurs de bases de données
* Utilise [APC](http://pecl.php.net/package/APC) et MCache

A garder de côté, vu la charge que supporte Digg, il est bon de connaître comment PHP gère tout ça.
