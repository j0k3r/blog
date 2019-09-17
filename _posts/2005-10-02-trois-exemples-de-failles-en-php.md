---
layout: post
title: 'Trois exemples de failles en PHP'
date: '2005-10-02 05:07:00'
author: j0k
tags: blabla
excerpt: "PHPit expose 3 types de vulnérabilité dont peu être victime un site en PHP.     \nLa première vulnérabilité est tout simple l'injection mail. Le côte rassurant c'est que pour exploiter une faille dans ce genre, il faut vraiment savoir comment fonctionne et surtout comment est géré les mails en PHP.   La deuxième concerne l'affichage de la source de la page.      …"
---

PHPit expose 3 types de vulnérabilité dont peu être victime un site en PHP.

La première vulnérabilité est tout simple l'injection mail. Le côte rassurant c'est que pour exploiter une faille dans ce genre, il faut vraiment savoir comment fonctionne et surtout comment est géré les mails en PHP.   La deuxième concerne l'affichage de la source de la page. Le problème vient souvent du fait qu'on utilise une page pour afficher le source d'un de nos exemples. C'est à dire *voir_source.php?url=monsource.php*, ainsi il suffit de passer un peu ce que l'on veut à cette page pour afficher n'importe quelle source :)   Et la dernière concerne est beaucoup plus difficile que les autres à mettre en place puisque son but et de faire une requête vers un autre serveur pour tromper le visiteur, ce que l'on appelle les attaques CSRF.

Le contenu de l'article est à lire chez [PHPit](http://www.phpit.net/article/php-security-3-example-exploits/).
