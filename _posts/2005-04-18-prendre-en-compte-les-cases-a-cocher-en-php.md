---
layout: post
title: 'Prendre en compte les cases à cocher en PHP'
date: '2005-04-18 07:57:46'
author: j0k
tags: blabla
excerpt: "Que ce cache donc derrière ce titre non significatif ?   Tout simplement une petite astuce php/html qui permet de récupérer facilement les différentes cases cochées par l'utilisateur (checkbox).  \n  \nIl est souvent astucieux de laisser le choix à l'utilisateur lors d'un remplissage d'un formulaire de valider plusieurs entrées. Prenons l'exemple d'une      …"
---

Que ce cache donc derrière ce titre non significatif ?   Tout simplement une petite astuce php/html qui permet de récupérer facilement les différentes cases cochées par l'utilisateur (checkbox).

Il est souvent astucieux de laisser le choix à l'utilisateur lors d'un remplissage d'un formulaire de valider plusieurs entrées. Prenons l'exemple d'une newsletter où un visiteur peut s'abonner. Cette newsletter possède plusieurs catégories : php, mysql et html. Il suffit de mettre des checkbox pour chaque catégorie et ainsi le visiteur peut sélectionner plusieurs newsletters.

Pour récupérer le tout on utilise un tableau, qui est spécifié dans le code html et à la réception du formulaire, php fait tout le travail pour décortiquer ce tableau.

Le tout est beaucoup plus détaillé sur [l'article du JDN](http://developpeur.journaldunet.com/tutoriel/php/050418-php-formulaire-checkbox-tableau-sql.shtml).
