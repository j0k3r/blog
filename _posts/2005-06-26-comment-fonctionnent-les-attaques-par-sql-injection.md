---
layout: post
title: 'Comment fonctionnent les attaques par SQL Injection ?'
date: '2005-06-26 10:58:02'
author: j0k
tags: '[]'
excerpt: "Une injection SQL est une vulnérabilité de sécurité qui se produit dans la base de donnée de l'application. Cela vient d'un mauvais échappement des variables incluses dans les requêtes SQL. C'est en fait un exemple de vulnérabilité due au fait qu'un langage est inclut dans un autre langage.     \nC'est assez difficile à mettre en place. Souvent les hébergeurs      …"
---

Une injection SQL est une vulnérabilité de sécurité qui se produit dans la base de donnée de l'application. Cela vient d'un mauvais échappement des variables incluses dans les requêtes SQL. C'est en fait un exemple de vulnérabilité due au fait qu'un langage est inclut dans un autre langage.

C'est assez difficile à mettre en place. Souvent les hébergeurs échappent automatiquement les caractères des variables (via les magic_quotes en général).

Unixwiz.net fait un [article](http://www.unixwiz.net/techtips/sql-injection.html) sur des exemples d'SQL Injection. Il montre comment faire, ce que cela vous renvoie. Différents exemples qui sont principalement basé sur la récupération de données de membres (envoie de nouveau mot de passe, connexion directe ...). Mais cet article ne se limite pas non plus à faire de vous un expert en SQL Injection, il montre aussi comment se protéger de ce genre de vulnérabilité.

Un article intéressant à lire, certes en anglais, mais cela montre bien le fonctionnement d'attaque par injection SQL.
