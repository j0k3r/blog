---
layout: post
title: 'Aïe .. Headers already sent'
date: '2005-04-04 12:48:55'
author: j0k
tags: '[]'
excerpt: "Encore un mise au point de fred, cette fois ci elle concerne l'erreur que beaucoup ont par rapport au headers already sent : *Cannot modify header information * headers already sent by ...*.     \nCette mise au point rappelle ce que sont les entêtes d'une page html, ce qu'elles contiennent et bien sur d'où provient l'erreur *headers already sent*.  \n  \n   …"
---

Encore un mise au point de fred, cette fois ci elle concerne l'erreur que beaucoup ont par rapport au headers already sent : *Cannot modify header information * headers already sent by ...*.

Cette mise au point rappelle ce que sont les entêtes d'une page html, ce qu'elles contiennent et bien sur d'où provient l'erreur *headers already sent*.

Un article intéressant surtout que beaucoup de monde ce demande pourquoi ils ont une telle erreur. Pour rappel, une erreur comme celle là apparaît lorsqu'on a déjà afficher du code html et que l'on veut mettre un cookie par la suite (par exemple). Il propose aussi une solution pour afficher quelques choses avant d'envoyer les headers (pour les plus acharnés).

[A lire](http://frederic.bouchery.free.fr/?2005/04/04/43-headers-already-sent-jai-perdu-la-tete) ;)
