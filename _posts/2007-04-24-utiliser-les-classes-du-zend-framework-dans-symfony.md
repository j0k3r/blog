---
layout: post
title: 'Utiliser les classes du Zend Framework dans Symfony'
date: '2007-04-24 10:35:04'
author: j0k
tags: symfony zend_framework
excerpt: "Le Zend Framework possède des classes excellentes et c'est certainement pour cela qu'un plugin Symfony a vu le jour, permettant d'ajouter facilement des classes ZF à Symfony.     \nLe plugin [sfZendPlugin](http://trac.symfony-project.com/trac/wiki/sfZendPlugin) s'installe très facilement (comme tout plugin Symfony !), il suffit ensuite d'indiquer à Symfony      …"
---

Le Zend Framework possède des classes excellentes et c'est certainement pour cela qu'un plugin Symfony a vu le jour, permettant d'ajouter facilement des classes ZF à Symfony.
Le plugin [sfZendPlugin](http://trac.symfony-project.com/trac/wiki/sfZendPlugin) s'installe très facilement (comme tout plugin Symfony !), il suffit ensuite d'indiquer à Symfony où se trouvent les classes du Zend Framework (via un fichier de config) pour qu'il les charge automatiquement.

Il est ainsi [facile d'intégrer](http://spindrop.us/2007/04/23/the-lucene-search-index-and-symfony/) (par exemple) le moteur de recherche textuel [Zend_Search_Lucene](http://framework.zend.com/manual/fr/zend.search.html) dans un projet Symfony.   On peut certainement faire de même avec pas mal d'autres classes du Zend Framework.
