---
layout: post
title: 'PHP - Fonction mktime'
date: '2004-10-05 23:11:08'
author: j0k
tags: '[développement]'
excerpt: 'La fonction **mktime** retourne, pour une date donnée, un entier contenant le nombre de secondes écoulées depuis le **1 Janvier 1970** (époque UNIX).'
---

## _1. Introduction_

La fonction **mktime** retourne, pour une date donnée, un entier contenant le nombre de secondes écoulées depuis le **1 Janvier 1970** (époque UNIX).

Cette fonction est souvent utilisée avec d'autres fonctions acceptant en paramètre un timestamp (secondes écoulées depuis le 1 janvier 1970) comme la fonction **date** par exemple.

Syntaxe : **entier mktime(entier heure, entier minute, entier seconde, entier mois, entier jour, entier annee)**

Si aucun argument n'est renseigné, la fonction prend par défaut les valeurs de l'heure et de la date courante.

L'année peut être renseignée avec 2 ou 4 chiffres : 00-69 correspondant à 2000-2069 et 70-99 à 1970-1999 et n'est valide qu'entre 1902 et 2037.

La fonction corrige automatiquement les erreurs, c'est à dire que le 32/01/2001 sera interpreté comme le 01/02/2001.

##  _2. Exemple d'utilisation avec la fonction date_

```php
// Hier
$hier=date("d/m/Y",mktime(0,0,0,date("m"), date("d")-1,date("Y"));
// Demain
$demain=date("d/m/Y",mktime(0,0,0,date("m"),date("d")+1,date("Y"));
```
