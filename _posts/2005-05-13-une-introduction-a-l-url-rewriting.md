---
redirect_from:
  - /blog/une-introduction-a-l-url-rewriting
layout: post
title: 'Une introduction à l''url rewriting'
date: '2005-05-13 02:09:10'
author: j0k
tags: blabla
excerpt: "L'url rewriting permet de ré-écrire les urls sur un site internet.   Le module mod_rewrite est une des fonctionnalités les plus utiles du serveur Apache, mais aussi des plus ardues à mettre en oeuvre.  \n  \nAinsi on peut très bien avoir une page appelée *news-la-ou-tu-veux-5.dtc* qui pointera sur la page *news.php?id=5* avec un simple directive dans le un      …"
---

L'url rewriting permet de ré-écrire les urls sur un site internet.   Le module mod_rewrite est une des fonctionnalités les plus utiles du serveur Apache, mais aussi des plus ardues à mettre en oeuvre.

Ainsi on peut très bien avoir une page appelée *news-la-ou-tu-veux-5.dtc* qui pointera sur la page *news.php?id=5* avec un simple directive dans le un fichier *.htaccess*.

Le [JDN](http://developpeur.journaldunet.com/tutoriel/out/050512-apache-mod-rewirte-reecriture-url.shtml) réponds à la question : "*Comment puis-je modifier mon URL pour qu'une requête de type /pages/nom-de-la-page/ soit interprétée par le serveur comme /page.php?page=nom-de-la-page ?*".

Voila une petite introduction pour ceux qui ne connaissait l'url rewriting ;)
