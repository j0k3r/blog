---
redirect_from:
  - /blog/classe-php-de-gestion-de-fichiers-de-configuration
layout: post
title: 'Classe Php de gestion de fichiers de configuration'
date: '2006-06-26 09:12:41'
author: DanRaZor
tags: blabla
excerpt: "Ce [tutoriel de phpIt](http://www.phpit.net/article/create-settings-class-php/) nous dévoile comment créer une classe de gestion de fichier de configuration en Php.     \nPlusieurs formats de fichiers ( PHP, INI, XML and YAML ) sont traités par une interface Php unique avec un load(...) et un get(...) à l'aide du polymorphisme.  \n  \nAussi avec      …"
---

Ce [tutoriel de phpIt](http://www.phpit.net/article/create-settings-class-php/) nous dévoile comment créer une classe de gestion de fichier de configuration en Php.
Plusieurs formats de fichiers ( PHP, INI, XML and YAML ) sont traités par une interface Php unique avec un load(...) et un get(...) à l'aide du polymorphisme.

Aussi avec cette méthode il est extrêment facile de passer d'un format à l'autre ou d'en utiliser plusieurs.   On crée un pointeur de type Settings qui peut pointer vers n'importe lequel des formats concrets ...

Encore un exemple simple et pratique de codage objet et d'utilisation du polymorphisme.
