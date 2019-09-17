---
layout: post
title: 'Où en est php ?'
date: '2005-03-08 02:23:35'
author: j0k
tags: blabla
excerpt: "Et bien dans le dernier [billet](http://www.phpmag.net/itr/kolumnen/psecom,id,36,nodeid,207.html) d'Aaron Wormus, quelques infos sur php nous sont données.     \nAinsi la sortie de php 5.0.4 RC est retardée due à des petits problèmes toujours en cours de discussion. De même pour la première bêta de php 5.1 qui devait sortir le premier de ce mois, elle est      …"
---

Et bien dans le dernier [billet](http://www.phpmag.net/itr/kolumnen/psecom,id,36,nodeid,207.html) d'Aaron Wormus, quelques infos sur php nous sont données.
Ainsi la sortie de php 5.0.4 RC est retardée due à des petits problèmes toujours en cours de discussion. De même pour la première bêta de php 5.1 qui devait sortir le premier de ce mois, elle est retardée pour les même causes.      Une nouvelle fonction a été proposé : *php_check_syntax_string*. Elle ferai le même travail que la fonction *php_check_syntax* mais au lieu de vérifier tous un fichier, elle traiterai la chaine de caractères qu'on lui passerai en argument (Cette fonction vérifie la synthaxe PHP). Le débat est lancée mais rien n'a été codé.

Des problèmes ont été remontés comme quoi dans les versions de php 4.3.6 à 4.3.10, il y aurait des problèmes (sur les gros scripts) lors du passage d'argument par référence. Le script planté tout simplement. La communauté est en train d'en discuter. La meilleure solution est pour l'instant de revenir à php 4.3.5.
