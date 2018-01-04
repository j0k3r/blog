---
layout: post
title: 'Stocker des images dans MySQL'
date: '2005-06-05 05:47:14'
author: j0k
tags: '[]'
excerpt: "Cela peut paraître impossible pour ceux qui ne connaissent pas tous les formats de MySQL (varchar, int, text ...) mais pour les autres qui savent ce qu'est le format BLOB cela parait logique.     \nLe format BLOB permet de stocker des données binaires, des 0 et des 1 en gros. Ce qui permet de stocker tout et n'importe quoi comme fichier informatique, notamment les      …"
---

Cela peut paraître impossible pour ceux qui ne connaissent pas tous les formats de MySQL (varchar, int, text ...) mais pour les autres qui savent ce qu'est le format BLOB cela parait logique.

Le format BLOB permet de stocker des données binaires, des 0 et des 1 en gros. Ce qui permet de stocker tout et n'importe quoi comme fichier informatique, notamment les images.

C'est cependant un sujet très débattu entre ceux qui disent que cela ne sert à rien de stocker les images en binaires alors que l'on peut la stocker directement dans un dossier, d'autres disent que cela ferai trop d'accès sur la base ... évidemment si l'on fait des *SELECT * FROM table*, ça use un peu plus MySQL tout ça !! Bref le débat est mouvementé !

Ceci dit vous pouvez toujours vous faire votre propre opinion sur le sujet, grâce à un [tutoriel simple](http://phpro.org/tutorials/mysql-image.php) pour stocker vos images dans MySQL.   Il y a même un p'tit bench d'accès à une image selon différentes méthodes bien sympathique.
