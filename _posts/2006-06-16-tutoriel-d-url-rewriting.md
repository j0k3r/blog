---
redirect_from:
  - /blog/tutoriel-d-url-rewriting
layout: post
title: 'Tutoriel d''URL Rewriting'
date: '2006-06-16 11:12:04'
author: j0k
tags: blabla
excerpt: "Un nouveau tutoriel concernant l'URL Rewriting a été publié en mai dernier sur Developpez.com.     \nL'auteur nous indique les bienfaits de l'utilisation de l'URL Rewriting sur son site en prenant l'exemple d'un forum phpBB. Il utilise une méthode à laquelle je n'avais jamais pensé pour faire de la réécriture de liens : Il place tout le document dans le buffer de      …"
---

Un nouveau tutoriel concernant l'URL Rewriting a été publié en mai dernier sur Developpez.com.
L'auteur nous indique les bienfaits de l'utilisation de l'URL Rewriting sur son site en prenant l'exemple d'un forum phpBB. Il utilise une méthode à laquelle je n'avais jamais pensé pour faire de la réécriture de liens : Il place tout le document dans le buffer de sortie PHP pour ensuite parser tous les liens du document. Une solution qui permet ainsi d'activer ou non l'URL Rewriting très facilement.

Cependant, il faut anticiper tous les liens qui vont être affiché sinon vous vous retrouverez avec des liens non réécrits.   A la fin de son [article](http://g-rossolini.developpez.com/tutoriels/seo/url-rewriting/), Guillaume Rossolini nous offre même son script pour installer le rewrite sur phpBB.

Attention tout de même, j'ai conseillé le script à un ami qui avait ensuite des difficultés pour se déconnecter, pour accéder à la partie admin ... des corrections sont à faire dans le script dans tous les cas.   A noter que l'url de téléchargement du script n'est pas la bonne, il faut utiliser ce [lien](http://g-rossolini.developpez.com/tutoriels/seo/url-rewriting/fichiers/).
