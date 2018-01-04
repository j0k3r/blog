---
layout: post
title: 'Faire une backup de sa base MySQL'
date: '2005-03-05 01:22:37'
author: j0k
tags: '[]'
excerpt: 'JDN developpeurs viens de publier un [article](http://developpeur.journaldunet.com/tutoriel/php/050304-php-dump-mysql.shtml) sur comment sauvegarder une base de données MySQL depuis un serveur mutualisé, sans passer par phpMyAdmin.   Et oui sous phpMyAdmin (attention patch 3 sortie, mettez à jour ^^), on clique sur exporter, on fait sa séléction et hop on a un      ...'
---

JDN developpeurs viens de publier un [article](http://developpeur.journaldunet.com/tutoriel/php/050304-php-dump-mysql.shtml) sur comment sauvegarder une base de données MySQL depuis un serveur mutualisé, sans passer par phpMyAdmin.   Et oui sous phpMyAdmin (attention patch 3 sortie, mettez à jour ^^), on clique sur exporter, on fait sa séléction et hop on a un joli fichier qui contient toute notre base.      Et oui mais des fois il est préférable de ne pas passer par phpMyAdmin ... j'ai pas d'exemple sous la main là mais bon.   Du coup JDN developpeurs nous donne un p'tit script en **php5** pour exporter une base (et une seule) dans un fichier texte, qui sera nommé en fonction du nom de la base et de la date et heure du dump.

Comme ça une fois fini, vous pouvez télécharger ce fichier texte et le stocker bien comme il faut.   Un script pratique mais aussi interessant à comprendre.

Je rappelle qu'il ne fontionne que sous php5, il faudrai changer 2/3 fonctions pour le faire fonctionner sous php4.
