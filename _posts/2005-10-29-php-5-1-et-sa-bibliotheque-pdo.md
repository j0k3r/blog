---
layout: post
title: 'PHP 5.1 et sa bibliothèque PDO'
date: '2005-10-29 12:52:45'
author: j0k
tags: blabla
excerpt: "PHP 5.1 va inclure en standard une nouvelle couche d'abstraction pour l'accès aux bases de données : la bibliothèque PDO (PHP Data Objects).     \nEn gros ce que cela va apporter, c'est que l'on aura un seul jeu de fonctions pour accéder à n'importe quelle base de donnée. Ainsi lors d'une connexion basique à MySQL, celle ci pourra aussi fonctionner sans rien      …"
---

PHP 5.1 va inclure en standard une nouvelle couche d'abstraction pour l'accès aux bases de données : la bibliothèque PDO (PHP Data Objects).

En gros ce que cela va apporter, c'est que l'on aura un seul jeu de fonctions pour accéder à n'importe quelle base de donnée. Ainsi lors d'une connexion basique à MySQL, celle ci pourra aussi fonctionner sans rien changer pour une base de donnée SQLite, PostgreSQL, etc ...   Le grand avantage de PDO est qu'il est compilé en tant que module PHP et ainsi ça rapidité est exemplaire.

Voici un [petit tour d'horizon](http://www.ibilab.net/webdev/articles/PHP/bibliotheque-12.htm) de la bête.
