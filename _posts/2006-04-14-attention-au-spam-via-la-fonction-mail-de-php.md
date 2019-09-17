---
redirect_from:
  - /blog/attention-au-spam-via-la-fonction-mail-de-php
layout: post
title: 'Attention au spam via la fonction mail de PHP'
date: '2006-04-14 12:30:12'
author: j0k
tags: blabla
excerpt: "Les webmasters affichent souvent (et il y est même recommandé de le faire) une page qui permet de prendre contact avec eux. Souvent sous la forme d'un formulaire, cette page présente une faille potentielle que peut exploiter les spammeurs.     \nEn effet, en faisant appel à votre page, ils peuvent (selon le codage de celle ci) envoyer des mails tout en utilisant      …"
---

Les webmasters affichent souvent (et il y est même recommandé de le faire) une page qui permet de prendre contact avec eux. Souvent sous la forme d'un formulaire, cette page présente une faille potentielle que peut exploiter les spammeurs.
En effet, en faisant appel à votre page, ils peuvent (selon le codage de celle ci) envoyer des mails tout en utilisant votre script. C'est toujours le même problème : passage de variable en paramètre et hop le script est cracké.

Une [solution](http://www.phpbuilder.com/columns/ian_gilfillan20060412.php3) (ultra ?) simple est de vérifier les entrées une par une. Mais je sais très bien que vous le savez déjà :)

Cependant c'est toujours bon de le rappeler !
