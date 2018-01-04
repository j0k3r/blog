---
layout: post
title: 'Cinq fonctions JavaScripts très utiles'
date: '2006-05-21 10:38:34'
author: j0k
tags: '[]'
excerpt: "Le JDN présente cinq fonctions JavaScripts créées pour la plupart par des utilisateurs avancés de JavaScript.     \nLes fonctions à rajouter dans votre bibliothèque : getElementById() pour les anciens navigateurs, getElementsByClass(), getElementsByAttributes(), getElementsByAnything() et domEl().  \n  \ngetElementById() est la fonction clé à utiliser      …"
---

Le JDN présente cinq fonctions JavaScripts créées pour la plupart par des utilisateurs avancés de JavaScript.
Les fonctions à rajouter dans votre bibliothèque : getElementById() pour les anciens navigateurs, getElementsByClass(), getElementsByAttributes(), getElementsByAnything() et domEl().

getElementById() est la fonction clé à utiliser en AJAX, mais certain navigateur ne l'interprète pas encore. Du coup il faut faire quelques parades pour récupérer l'id d'une balise.

getElementsByClass() permet de récupérer toutes les balises selon une class définit. Ce qui est peu être beaucoup plus rapide, par exemple pour la validation d'un formulaire avec des éléments obligatoires ou non. Deux fonctions sont proposées, la première utilise les regex et la deuxième XPath.

getElementsByAttribute() est un complément aux fonctions déjà vu. Elle permet de récupérer des éléments via leur attribut.

$(), la célèbre fonction introduite par la librairie prototype.js qui facilite l'accès aux éléments par leur id en les appelant directement de cette façon : $('mon-id'). Elle permet aussi de récupérer un tableau d'id en les passants respectivement en paramètre.

Et pour finir, domEl() qui simplifie grandement la création de balise via DOM. Plutôt que de faire 5 lignes pour créer un élément, on en a fait plus que deux.

[5 fonctions](http://developpeur.journaldunet.com/tutoriel/dht/060512-5-javascripts-vraiment-utiles.shtml) à placer dans votre common.js :)
