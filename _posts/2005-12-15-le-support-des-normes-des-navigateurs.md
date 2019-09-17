---
redirect_from:
  - /blog/le-support-des-normes-des-navigateurs
layout: post
title: 'Le support des normes des navigateurs'
date: '2005-12-15 09:16:31'
author: j0k
tags: blabla
excerpt: "Tous les navigateurs n'affichent pas les même rendu sur certain site, notamment lors de l'utilisation massive des CSS. Si vous faites un site un tableau (pas du tout recommandé) il y a de grandes chances que celui ci soit compatible avec la plupart des navigateurs. Cependant il est grandement recommandé de ne pas utiliser les tableaux !     \nRevenons à nos      …"
---

Tous les navigateurs n'affichent pas les même rendu sur certain site, notamment lors de l'utilisation massive des CSS. Si vous faites un site un tableau (pas du tout recommandé) il y a de grandes chances que celui ci soit compatible avec la plupart des navigateurs. Cependant il est grandement recommandé de ne pas utiliser les tableaux !
Revenons à nos navigateurs. Ce [document](http://nanobox.chipx86.com/browser_support.php) compare quatre navigateurs : Internet Explorer 6, Firefox 1.0, Firefox 1.5 et Opera 8.5. La comparaison va se faire au niveau du rendu HTML, CSS, DOM et ECMAScript. Le principe est simple, chaque balise est testé sur chaque navigateur avec (lorsque l'on clique sur une balise) le détails de tous les paramètres et leur support.

C'est assez amusant de voir que plus l'on avance dans les versions CSS (2.1 puis 3) le support affiche de plus en plus de rouge. C'est à dire que les navigateurs ne les supportent pas encore. Par exemples, les Pseudo-elements ou les Print properties en CSS 3 ne sont supportés par aucun des navigateurs.

Ce qui est intéressant c'est que l'on peut vraiment voir en détails (tous les paramètres d'une balise !!) ce qui est supporté ou non par les navigateurs actuels. Pour finir, un tableau résume la situation et l'on voit par exemple que l'HTML 4.01 n'est pas supporté totalement par les navigateurs (à ma grande surprise !).
