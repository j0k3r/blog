---
layout: post
title: 'Chargement d''images au fil du scroll avec prototype.js'
date: '2007-09-12 09:42:39'
author: j0k
tags: prototype scroll
excerpt: "Une idée sympa : affiché un site en ne chargeant que les images que l'utilisateur voit. C'est à dire seulement celle que son navigateur affiche avant qu'il ne scrolle. On gagne ainsi en chargement de la page étant donné que toutes les images du \"bas\" du site ne sont pas chargés.     \nEn scrollant, on arrive sur de nouvelles images que le script charge      …"
---

Une idée sympa : affiché un site en ne chargeant que les images que l'utilisateur voit. C'est à dire seulement celle que son navigateur affiche avant qu'il ne scrolle. On gagne ainsi en chargement de la page étant donné que toutes les images du "bas" du site ne sont pas chargés.
En scrollant, on arrive sur de nouvelles images que le script charge au fur et à mesure que l'on scrolle. Bon, si vous scrollez tout en bas direct, il va mettre du temps à afficher la dernière image, étant donné qu'il les charge au fur et à mesure.   Ce [p'tit script](http://www.bram.us/projects/js_bramus/lazierload/) est fait avec prototype.js et peut s'avérer pratique si vous avez une page énorme avec beaucoup d'images à afficher.

La [démo](http://www.bram.us/demo/projects/lazierload/) sera certainement plus parlante :-)
