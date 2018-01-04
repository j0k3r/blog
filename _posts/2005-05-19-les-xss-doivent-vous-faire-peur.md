---
layout: post
title: 'Les XSS doivent vous faire peur !'
date: '2005-05-19 12:34:19'
author: j0k
tags: '[]'
excerpt: "Comme le dit [nexen](http://www.nexen.net/news/gen.php/2005/05/18/4218,0,0,0,0.php) il faut craindre les XSS.     \nOuais c'est bien ... mais c'est quoi ?   Les XSS consistent à injecter du code JavaScript dans une page, en faisant placer des données dans le code HTML par le script PHP. Le grand classique est *echo $_GET[\"x\"];* qui injecte toute la      …"
---

Comme le dit [nexen](http://www.nexen.net/news/gen.php/2005/05/18/4218,0,0,0,0.php) il faut craindre les XSS.
Ouais c'est bien ... mais c'est quoi ?   Les XSS consistent à injecter du code JavaScript dans une page, en faisant placer des données dans le code HTML par le script PHP. Le grand classique est *echo $_GET["x"];* qui injecte toute la variable *x* passée en méthode GET dans le code HTML. Il ne reste plus qu'à donner à *x* un peu de code Javascript, et le tour est joué.

Il fallait craindre les variables _GET, _POST et _COOKIE de part leur ajout facile de code, mais maintenant il faut aussi craindre la superglobale _SERVER.

Sean Coates [nous explique pourquoi](http://blog.phpdoc.info/archives/13-guid.html#extended) dans son article en anglais.
