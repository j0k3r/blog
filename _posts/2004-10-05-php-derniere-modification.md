---
layout: post
title: 'PHP - Dernière modification'
date: '2004-10-05 23:17:45'
author: j0k
tags: développement
excerpt: 'Ce script permet d''afficher la date de la dernière modification d''une page. Cela permet au webmaster de ne pas se soucier du moment où il met son site à jour, les visiteurs en seront toujours informés par cet affichage.'
---

## _1. Présentation_

Ce script permet d'afficher la date de la dernière modification d'une page. Cela permet au webmaster de ne pas se soucier du moment où il met son site à jour, les visiteurs en seront toujours informés par cet affichage.

##  _2. Script_

```php
print("Dernière modification le ");
print(date("d/m/Y à H:i", filemtime($SCRIPT_FILENAME)));
```
