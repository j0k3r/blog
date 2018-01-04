---
layout: post
title: 'Récupérer les erreurs de vos scripts AJAX/PHP'
date: '2006-01-02 03:39:35'
author: j0k
tags: '[]'
excerpt: "Vous n'avez peut-être pas encore testé AJAX, mais je peux vous dire que pour le débugage et les erreurs ce n'est pas facile du tout. Il faut mettre des alerts dans tous les sens dans votre code javascript pour essayer de débuguer et encore des fois ça ne marche pas.     \nVoici une [méthode](http://www.litfuel.net/plush/?postid=94) fort intéressante qui      …"
---

Vous n'avez peut-être pas encore testé AJAX, mais je peux vous dire que pour le débugage et les erreurs ce n'est pas facile du tout. Il faut mettre des alerts dans tous les sens dans votre code javascript pour essayer de débuguer et encore des fois ça ne marche pas.
Voici une [méthode](http://www.litfuel.net/plush/?postid=94) fort intéressante qui consiste à stocker les erreurs dans un fichier .txt pour pouvoir faire une sorte de suivit des erreurs. La fonction se base principalement sur l'évènement *window.onerror* qui est appelé lorsque d'une erreur javascript apparaît.

Le contenu des erreurs est largement paramétrables.   Une fonction à mettre de côté !
