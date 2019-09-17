---
redirect_from:
  - /article/my-sql-selection-d-une-base
layout: post
title: 'MySQL - Sélection d''une base'
date: '2004-03-18 06:48:22'
author: j0k
tags: développement
excerpt: 'Voici la fonction en php qui permet de sélectionner une base'
---

Voici la fonction en php qui permet de sélectionner une base :

## **mysql_select_db**

```php
$db = mysql_select_db ( 'database' );
```

 - database : Nom de la base de donnée que l'on veut sélectionner.
 - $connect : Identifieur de connexion. Contient true si la connexion est réussie, sinon false.
