---
layout: post
title: 'Le problème de l''autocompletion en AJAX'
date: '2006-06-25 10:36:07'
author: j0k
tags: '[]'
excerpt: "L'autocompletion en AJAX permet de suggérer des mots lors de la saisit de quelques lettres. Google Suggest a été le premier à lancer ça.      \nC'est très pratique et cela a un certain succès. Le problème c'est qu'en général dès que l'on commence à taper des lettres, une première requête est envoyée au serveur avec ces quelques lettres. Mais si on continue à taper      …"
---

L'autocompletion en AJAX permet de suggérer des mots lors de la saisit de quelques lettres. Google Suggest a été le premier à lancer ça.
C'est très pratique et cela a un certain succès. Le problème c'est qu'en général dès que l'on commence à taper des lettres, une première requête est envoyée au serveur avec ces quelques lettres. Mais si on continue à taper d'autres lettres, elles sont envoyées via une deuxième requête avec les lettres déjà tapées. Quand on arrêtes de taper, la première suggestion qui revient est celle des quelques premières lettres tapées, pas des dernières.

Comme l'explique Cheng Guangnan sur [son blog](http://capxous.com/documentation/major-defeat-found-in-yahoo-ui-and-scriptaculous/), le problème est présent autant sur la librairie script.aculo.us que sur celle de Yahoo!.   La solution serai de [tracker](http://ajaxpatterns.org/Call_Tracking) les requêtes et de bloquer la première si la deuxième est lancée
