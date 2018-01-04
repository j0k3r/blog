---
layout: post
title: 'La Géolocalisation en PHP'
date: '2006-09-22 08:31:47'
author: DanRaZor
tags: '[]'
excerpt: "Cet [article de nexen](http://www.nexen.net/actualites/tutorial/geolocalisation_en_php.php) nous renvoie vers un lien en Anglais qui décrit le principe de géolocalisation   c'est à dire la détermination de la localisation d'un utilisateur/client d'une page web.  \n  \nLe tout est en réalité basé sur la détermination de la zone de l'ip du client dans      …"
---

Cet [article de nexen](http://www.nexen.net/actualites/tutorial/geolocalisation_en_php.php) nous renvoie vers un lien en Anglais qui décrit le principe de géolocalisation   c'est à dire la détermination de la localisation d'un utilisateur/client d'une page web.

Le tout est en réalité basé sur la détermination de la zone de l'ip du client dans une base d'IPs.   Comme tout le monde le sait les IPs sont classées par zones et du coup on peut facilement reconnaître   la zone de l'ip juste en comparant les champs de l'ip ...

[Ce tutoriel](http://www.phpfive.net/php-based-geo-targeting-and-localization_article42.htm) montre comment l'utiliser concrètement. Cette base est en réalité un fichier : [GeoIP.dat](http://www.maxmind.com/download/geoip/database/GeoIP.dat.gz)   qui permet d'analyser une ip.
