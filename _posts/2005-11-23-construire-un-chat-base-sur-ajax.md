---
layout: post
title: 'Construire un chat basé sur AJAX'
date: '2005-11-23 12:51:13'
author: j0k
tags: ajax chat
excerpt: "AJAX permet de rafraîchir une seul partie d'une page ou toute la page entière. Voilà quelques choses de très intéressant pour réaliser un mini chat.     \nDepuis le début du mois, un article en trois parties est publié sur DevArticles qui permet de réaliser un [chat basé sur notre célèbre AJAX](http://tinyurl.com/cjq2a). Il permet de mettre en place un      …"
---

AJAX permet de rafraîchir une seul partie d'une page ou toute la page entière. Voilà quelques choses de très intéressant pour réaliser un mini chat.
Depuis le début du mois, un article en trois parties est publié sur DevArticles qui permet de réaliser un [chat basé sur notre célèbre AJAX](http://tinyurl.com/cjq2a). Il permet de mettre en place un chat très sympathique qui insère dans une base de donnée MySQL via des scripts PHP toutes les infos entrées par vos "chatteurs".

L'article est très bien rédigé, en anglais. De plus une archive avec le chat complet est disponible. Je l'ai testé et je vous averti que dans le fichier .sql qu'ils fournissent, il faut modifier tous les chiffres 256 en 255 (taille d'un varchar maximum). Par contre, hic je n'ai pas réussi à le faire fonctionner. Peut être un problème avec les dernières versions (MySQL 5/PHP 5 ... ?)
