---
layout: post
title: 'Optimiser globalement son site'
date: '2005-12-05 03:20:04'
author: j0k
tags: blabla
excerpt: "Je viens de tomber sur une page intéressante sur l'optimisation générale d'un site, au niveau du codage. Cela concerne principalement l'optimisation PHP, MySQL et HTML, tout ce qui constitue un site dans sa globalité.     \nEffectivement, il est souvent judicieux d'utiliser le cache des navigateurs, d'optimiser ses requêtes, fermer et ouvrir une connexion MySQL      …"
---

Je viens de tomber sur une page intéressante sur l'optimisation générale d'un site, au niveau du codage. Cela concerne principalement l'optimisation PHP, MySQL et HTML, tout ce qui constitue un site dans sa globalité.
Effectivement, il est souvent judicieux d'utiliser le cache des navigateurs, d'optimiser ses requêtes, fermer et ouvrir une connexion MySQL proprement, etc ...   Bref au total, c'est [10 explications](http://chevrel.org/fr/optimiser/phpmysql/) et de détails pour optimiser au mieux votre site.

Cependant quelques points sont à revoir, notamment le point n°4 qui concerne l'utilisation de mysql_fetch_array avec le paramètre MYSQL_ASSOC. Il est bien plus rapide d'utiliser directement la fonction mysql_fetch_assoc :)

Bonne lecture et mettez moi tout ça en application !
