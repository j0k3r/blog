---
layout: post
title: 'Si vous lisez ce message, tout c''est bien passé !'
date: '2007-08-19 11:05:23'
author: j0k
tags: apache j0k3r_net lighttpd
excerpt: 'Le transfert sur le nouveau serveur semble s''être passé sans réel soucis.   Au final, l''url rewriting sous Lighttpd est quasiment la même chose que pour Apache, mise à part le fait qu''il faille le faire directement dans le fichier de configuration du "vhost" (pas de htaccess sous Lighttpd) et du coup, redémarrer le serveur à chaque changement, un peu embêtant.      ...'
---

Le transfert sur le nouveau serveur semble s'être passé sans réel soucis.   Au final, l'url rewriting sous Lighttpd est quasiment la même chose que pour Apache, mise à part le fait qu'il faille le faire directement dans le fichier de configuration du "vhost" (pas de htaccess sous Lighttpd) et du coup, redémarrer le serveur à chaque changement, un peu embêtant.

C'est la seule contrainte que j'ai eu.   Et j'ai l'impression que l'affichage est plus rapide, en tout cas le forum s'affiche plus rapidement qu'avant c'est sûr.

J'ai fait quelques changements pendant cette migration.   Des corrections au niveau de l'encodage du mini chat (et oui le site n'est pas en UTF8, dans une prochaine version peut-être..).   _J'ai aussi supprimé l'annuaire_ dont je ne voyais plus le réel intérêt et dont beaucoup s'en servent allègrement pour spammer, désolé pour ceux qui avaient inscrit leur site. Rassurez vous cependant, les données sont conservés.   En plus le script commençait à bien dater et des améliorations devait être faite. Je le remettrais peut-être en route dans la prochaine version. Faut que j'y réfléchisse encore.

Pour finir, si vous voyez des 404/403 ou d'autres problèmes par ci par là, n'hésitez pas à me le dire sur [le forum](http://www.j0k3r.net/forum/index.php) :-)
