---
layout: post
title: 'PHP - Image aléatoire'
date: '2004-10-05 23:21:03'
author: j0k
tags: développement
excerpt: "Ce script permet d'afficher une image différente à chaque chargement d'une page web, l'image étant choisie au hasard.\nIci il y a quatre images de même taille."
---

## _1. Présentation_

Ce script permet d'afficher une image différente à chaque chargement d'une page web, l'image étant choisie au hasard. Ici il y a quatre images de même taille.

##  _2. Paramétrage_

 Définition du nombre d'images et de leurs noms. Le nombre des images est stocké dans la variable **$nbimages** et leurs noms dans le tableau **$nomimages**.

```php
$nbimages=4;

$nomimages[1]="image1.jpg";
$nomimages[2]="image2.jpg";
$nomimages[3]="image3.jpg";
$nomimages[4]="image4.jpg";
```

##  _3. Détermination aléatoire de l'image à afficher_

 Elle s'effectue à l'aide de la fonction **rand()** qui doit obligatoirement être initialisée avec la fonction **srand()** pour fonctionner. On stocke le résultat dans la variable **$affimage**.

```php
srand((double)microtime ()*1000000);

$affimage=rand(1,$nbimages);
```

##  _4. Affichage de l'image_

 C'est un affichage HTML normal en insérant juste du PHP pour le nom de l'image.

```php
echo '<img src="images/'.$nomimages[$affimage].'" alt="Image aléatoire">';
```
