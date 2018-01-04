---
layout: post
title: 'Bien valider un formulaire avec AJAX'
date: '2005-06-17 10:50:32'
author: j0k
tags: '[ajax,form,validation]'
excerpt: "Décidemment AJAX par ci, AJAX par là ... en ce moment les tutoriels sur AJAX pleuvent !     \nCelui ci vous [guide](http://particletree.com/features/degradable-ajax-form-validation/) pour faire une validation des formulaires en utilisant AJAX.   Mais pourquoi encore un tutoriel sur les validations de formulaires ?  \n  \nIl y a      …"
---

Décidemment AJAX par ci, AJAX par là ... en ce moment les tutoriels sur AJAX pleuvent !
Celui ci vous [guide](http://particletree.com/features/degradable-ajax-form-validation/) pour faire une validation des formulaires en utilisant AJAX.   Mais pourquoi encore un tutoriel sur les validations de formulaires ?

Il y a différentes façons de valider un formulaire. La solution côté serveur, grâce à PHP ou ASP, permet une vérification sure des résultats. Et la solution côté client, avec JavaScript, assure la rapidité de la validité mais qui n'est pas forcément sure. Grâce à AJAX, on peut faire une validation en JavaScript et PHP le tout à la vitesse du JavaScript. Et si à tout hasard, il y a des problèmes au niveau du navigateur, il y a toujours la solution dites de "sécurité" qui re-vérifie le formulaire côté serveur.
