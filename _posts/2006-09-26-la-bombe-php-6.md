---
layout: post
title: 'La bombe PHP 6'
date: '2006-09-26 09:19:03'
author: j0k
tags: '[]'
excerpt: "PHP 6 apportera l'Unicode, que tous les développeurs attendent depuis un moment. Il apportera aussi quelques autres nouveautés, mais elle va chambouler certaines normes de sécurité déjà mise en place depuis PHP 4.     \nL'exemple le plus flagrant est la suppression des magic_quotes, qui sont déjà désactivés par défaut dans PHP 5. Tout le monde réactive les      …"
---

PHP 6 apportera l'Unicode, que tous les développeurs attendent depuis un moment. Il apportera aussi quelques autres nouveautés, mais elle va chambouler certaines normes de sécurité déjà mise en place depuis PHP 4.
L'exemple le plus flagrant est la suppression des magic_quotes, qui sont déjà désactivés par défaut dans PHP 5. Tout le monde réactive les magic_quotes pour des raisons simples de sécurité et de compatibilité.   Il faut savoir que grâce au magic_quotes, on réduit (entre autre) énormément les problèmes des injections SQL.

PHP France publie [une news](http://www.phpfrance.com/tutoriaux/index.php/2006/09/25/44-php6-le-fin-du-monde-approche) pour alerter de ces changements pas si bénéfique que ça, dans cette future version de PHP.
