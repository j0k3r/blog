---
layout: post
title: 'Intercepter les timeouts en AJAX'
date: '2006-03-26 11:32:43'
author: j0k
tags: blabla
excerpt: "Le problème d'une application en AJAX est que si la connexion internet ne fonctionne plus (par exemple), votre application plante littéralement. C'est le cas aussi avec un script PHP classique.     \nL'avantage avec AJAX c'est qu'il utilise JavaScript, qui est du côté du client. Ainsi il est plus facile de détecter une coupure de connexion en JavaScript qu'avec      …"
---

Le problème d'une application en AJAX est que si la connexion internet ne fonctionne plus (par exemple), votre application plante littéralement. C'est le cas aussi avec un script PHP classique.
L'avantage avec AJAX c'est qu'il utilise JavaScript, qui est du côté du client. Ainsi il est plus facile de détecter une coupure de connexion en JavaScript qu'avec PHP qui se trouve lui côté serveur. On est d'accord si la connexion est coupée il est impossible de contacter le serveur, il faut donc la détecter côté client.

Le but est de dire à l'internaute qu'il y a un problème de connexion. Pour cela, on utilise la librairie prototype.js. Grâce à *Ajax.Responders.register*, qui permet d'appliquer une sorte de répondeur à toutes les requêtes AJAX qui seront faites, il est tout de suite plus simple d'interpeler une perte de connexion.

Un [script](http://codejanitor.com/wp/ajax-timeouts-with-prototype/) très intéressant à coupler avec votre librairie prototype.js pour plus de performance et d'interactivité.
