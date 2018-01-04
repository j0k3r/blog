---
layout: post
title: 'PHP - Résolution d''écran'
date: '2004-10-05 23:33:36'
author: j0k
tags: '[développement]'
excerpt: "Ce script permet de connaître la résolution d'écran d'un visiteur.  \nIl n'existe pas de fonctions en PHP permettant de connaître la résolution d'écran d'un visiteur, l'astuce consiste donc à passer par l'intermédiaire d'un script javascript qui recharge la page en passant en paramètres la largeur et la hauteur de l'écran."
---

Ce script permet de connaître la résolution d'écran d'un visiteur.

 Il n'existe pas de fonctions en PHP permettant de connaître la résolution d'écran d'un visiteur, l'astuce consiste donc à passer par l'intermédiaire d'un script javascript qui recharge la page en passant en paramètres la largeur et la hauteur de l'écran.

Le script à placer en haut de la page

```php
if(empty($res))
{
  echo '<script type="text/javascript">
  <!-- debut
  document.location="page.php3?res=1&w="+screen.width+"&h="+screen.height;
  // fin -->
  </script>';
}
else
{
  echo "Résolution d'écran : ".$w."*".$h;
}
```
