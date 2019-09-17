---
layout: post
title: 'PHP - Fonction substr'
date: '2004-10-05 23:12:20'
author: j0k
tags: développement
excerpt: 'La fonction **substr** permet d''extraire une portion de chaîne de caractères.'
---

## _1. Introduction_

La fonction **substr** permet d'extraire une portion de chaîne de caractères.

  Syntaxe : **chaîne substr(chaîne machaine, int position, int longueur)**

 1. machaine : chaîne à traiter
 2. position : position du caractère de
    départ ('0' étant la position du 1er
    caractère)
 3. longueur : longueur de la portion à
    extraire

La position peut être positive ou négative :

 - positive : position à partir du début de la chaîne
 - négative : position à partir de la fin de la chaîne

##  _2. Exemple_

```php
$machaine = "Lundi 1 Janvier 2001";
$nomdujour = substr($machaine,0,5);
$jour = substr($machaine,6,1);
$mois = substr($machaine,8,7);
$annee = substr($machaine,-4);
```
