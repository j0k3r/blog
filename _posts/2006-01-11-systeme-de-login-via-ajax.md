---
redirect_from:
  - /blog/systeme-de-login-via-ajax
layout: post
title: 'Système de login via AJAX'
date: '2006-01-11 08:42:30'
author: j0k
tags: blabla
excerpt: 'Ca ne devait pas tarder à arriver, mais il semble en avoir déjà vu un quelque part. Voici un système de login qui utilise AJAX pour transférer les données.   Il se dit être sécurisé même s''il ne passe pas par une rafraîchissement de page. Etant donné qu''il doit certainement faire appel au même fichier PHP pour tester les identifiants de connexion, il n''y a pas de      ...'
---

Ca ne devait pas tarder à arriver, mais il semble en avoir déjà vu un quelque part. Voici un système de login qui utilise AJAX pour transférer les données.   Il se dit être sécurisé même s'il ne passe pas par une rafraîchissement de page. Etant donné qu'il doit certainement faire appel au même fichier PHP pour tester les identifiants de connexion, il n'y a pas de raison qu'il soit moins sécurisé que s'il n'utilisait pas AJAX, mais bon bref ...

Il permet de connecter des membres sans qu'ils aient besoin de valider le formulaire, le test des identifiants se faisant quasiment lors de la fin de la frappe du mot de passe.

A vous [de tester](http://www.jamesdam.com/ajax_login/login.html) et à vous de l'implémenter, bah oui pourquoi pas :)
