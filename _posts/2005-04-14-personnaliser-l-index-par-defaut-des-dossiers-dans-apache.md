---
redirect_from:
  - /blog/personnaliser-l-index-par-defaut-des-dossiers-dans-apache
layout: post
title: 'Personnaliser l''index par défaut des dossiers dans Apache'
date: '2005-04-14 12:47:32'
author: j0k
tags: blabla
excerpt: "Vous connaissez certainement tous l'affichage d'un dossier qui ne contient pas d'index sous Apache, ce que l'on appelle l'autoindex. On a un joli listing de tout ce que contient le dossier avec la possibilité de modifier l'ordre de tel ou tel colonne.     \nEt bien je viens de trouver un      …"
---

Vous connaissez certainement tous l'affichage d'un dossier qui ne contient pas d'index sous Apache, ce que l'on appelle l'autoindex. On a un joli listing de tout ce que contient le dossier avec la possibilité de modifier l'ordre de tel ou tel colonne.
Et bien je viens de trouver un [article](http://www.estvideo.com/dew/index/2004/07/05/216-tuning-apache-les-doigts-dans-les-plumes) intéressant qui vous permet de modifier cet index "basique" et assez moche. Il vous permet ainsi de rajouter un joli header et un joli footer pour mettre un peu plus de gaieté dans ces index par défaut.

Cependant cela ne sera possible que si vous avez accès aux fichiers de configuration d'apache, notamment le httpd.conf.   Inutile de vous dire que vous n'arriverez jamais à ce résultat sur un site free, sauf si vous developpez une application qui liste les répertoires, mais là on quitte Apache :)
