---
layout: post
title: 'Soulager son serveur avec PHP'
date: '2006-01-07 11:24:34'
author: j0k
tags: '[]'
excerpt: "Certains scripts PHP sont très gourmand en matière de RAM (mémoire) comme phpBB par exemple. Et d'autres le sont beaucoup moins.     \nLe problème des gros scripts qui ne sont pas optimisé pour utiliser le moins de mémoire possible vous sature celle de votre serveur et ainsi il rend de plus en plus lent. Il existe quelques astuces en PHP pour qu'il puisse soulager      …"
---

Certains scripts PHP sont très gourmand en matière de RAM (mémoire) comme phpBB par exemple. Et d'autres le sont beaucoup moins.
Le problème des gros scripts qui ne sont pas optimisé pour utiliser le moins de mémoire possible vous sature celle de votre serveur et ainsi il rend de plus en plus lent. Il existe quelques astuces en PHP pour qu'il puisse soulager votre serveur.

Par exemple, il faut libéré de la mémoire en supprimant les variables dont vous ne vous servez plus grâce à la fonction unset(), voir même libéré la mémoire alloué avec mysql_free_result(). D'autres petites astuces existent, comme placer le cas le plus probable en premier lors de l'utilisation d'un switch même si c'est defaut. L'inclusion des fichiers jouent beaucoup aussi.

Le JDN réponds à la [question](http://developpeur.journaldunet.com/tutoriel/php/060106-php-conseils-optimisation-memoire.shtml) &quot;*Mon serveur atteint assez rapidement ses limites en matière de RAM, existe-t-il des tactiques pour en utiliser le moins possible ?*&quot;
