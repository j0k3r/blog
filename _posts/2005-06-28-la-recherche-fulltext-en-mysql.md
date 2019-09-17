---
layout: post
title: 'La recherche FULLTEXT en MySQL'
date: '2005-06-28 09:40:30'
author: j0k
tags: blabla
excerpt: "MySQL permet de fixer des clés en FULLTEXT lors de la création d'une base de donnée. Cela permet ensuite à MySQL, lors de recherche avec des commandes spécifiques, de trouver plus rapidement les résultats mais aussi de pouvoir faire une gestion de la pertinence. Ainsi on peut afficher le résultat le plus \"probable\" en premier, un peu comme dans Google.     \nLe      …"
---

MySQL permet de fixer des clés en FULLTEXT lors de la création d'une base de donnée. Cela permet ensuite à MySQL, lors de recherche avec des commandes spécifiques, de trouver plus rapidement les résultats mais aussi de pouvoir faire une gestion de la pertinence. Ainsi on peut afficher le résultat le plus "probable" en premier, un peu comme dans Google.

Le seul problème, pour l'avoir mis en place et tester à plusieurs reprises, c'est que si la pertinence d'un résultat dépasse les 50%, il est ignoré et n'apparaît pas dans les résultats ... C'est certainement une option à cocher quelque part ou autre mais je en l'ai pas trouvé.

En tout cas voici un [article](http://www.databasejournal.com/features/mysql/article.php/3512461) qui explique un peu comment fonctionne la recherche en FULLTEXT mais aussi comment le mettre en place.
