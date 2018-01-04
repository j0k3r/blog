---
layout: post
title: 'PHP - Tronquer un texte'
date: '2004-10-05 23:35:25'
author: j0k
tags: '[développement]'
excerpt: 'Ce script permet de tronquer un texte et de rajouter **"…"** à la fin. Très pratique pour les présentations dynamiques, il permet de limiter l''affichage d''un texte à un certain nombre de caractères.'
---

Ce script permet de tronquer un texte et de rajouter **"…"** à la fin. Très pratique pour les présentations dynamiques, il permet de limiter l'affichage d'un texte à un certain nombre de caractères.

 Pour changer le nombre de caractères maximum, il suffit de modifier la valeur de la variable **$max_caracteres**.

```php
$max_caracteres=50;
$texte="Ce texte doit être affiché mais il est trop long, donc il va falloir le tronquer.";
// Test si la longueur du texte dépasse la limite
if (strlen($texte)>$max_caracteres)
{
  // Séléction du maximum de caractères
  $texte = substr($texte, 0, $max_caracteres);
  // Récupération de la position du dernier espace (afin déviter de tronquer un mot)
  $position_espace = strrpos($texte, " ");
  $texte = substr($texte, 0, $position_espace);
  // Ajout des "…"
  $texte = $texte."…";
}
```
