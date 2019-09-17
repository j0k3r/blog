---
redirect_from:
  - /blog/optimiser-vos-fichiers-ajax-et-css
layout: post
title: 'Optimiser vos fichiers AJAX et CSS'
date: '2006-01-29 07:07:06'
author: j0k
tags: blabla
excerpt: "Kevin, de chez Zimbra, vient de faire un test intéressant. Il a constaté que la page d'accueil de [digg.com](http://digg.com/) était relativement longue à charger et que surtout elle chargeait beaucoup de fichiers (principalement des fichiers JavaScripts et CSS).     \nEn comparant au travail développer au sein de Zimbra, il applique ses connaissances sur      …"
---

Kevin, de chez Zimbra, vient de faire un test intéressant. Il a constaté que la page d'accueil de [digg.com](http://digg.com/) était relativement longue à charger et que surtout elle chargeait beaucoup de fichiers (principalement des fichiers JavaScripts et CSS).
En comparant au travail développer au sein de Zimbra, il applique ses connaissances sur l'optimisation de digg.com.   Son principe est simple, il mets tous les fichiers JavaScripts et CSS dans un fichier (`_all.js` et `_all.css`), puis il les compresse avec gzip. On arrive à atteindre des taux assez conséquents !

Le [résultat](http://www.zimbra.com/blog/archives/2006/01/zimbra_ajax_css_digg.html) est au rendez vous puisqu'on remarque une réduction de 50% dans le nombre de requête HTTP et (surtout) une réduction de 65% dans le poids des fichiers à télécharger !

Une démarche très intéressante !!
