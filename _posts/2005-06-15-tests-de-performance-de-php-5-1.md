---
redirect_from:
  - /blog/tests-de-performance-de-php-5-1
layout: post
title: 'Tests de performance de PHP 5.1'
date: '2005-06-15 09:47:40'
author: j0k
tags: blabla
excerpt: "Ces derniers jours, Sebastian Bergmann a fait des [tests](http://www.sebastian-bergmann.de/blog/archives/504-PHP-5.1-Performance.html) sur les trois modèles d'exécution (CALL, GOTO, SWITCH) qui ont normalement été optimisé dans la nouvelle machine virtuel que comporte PHP 5.1 par rapport à PHP 5.0 et PHP 4.3.11.     \nIl en ressort que le modèle d'exécution      …"
---

Ces derniers jours, Sebastian Bergmann a fait des [tests](http://www.sebastian-bergmann.de/blog/archives/504-PHP-5.1-Performance.html) sur les trois modèles d'exécution (CALL, GOTO, SWITCH) qui ont normalement été optimisé dans la nouvelle machine virtuel que comporte PHP 5.1 par rapport à PHP 5.0 et PHP 4.3.11.

Il en ressort que le modèle d'exécution GOTO dans PHP 5.1 offre quelques 400% de performance en plus par rapport à PHP 5.0 et PHP 4.3.11.   Comme quoi le travail d'optimisation a bien été effectué !
