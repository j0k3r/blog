---
layout: post
title: 'PHPBench.com, c''est qui le plus rapide ?'
date: '2008-06-03 10:49:23'
author: j0k
tags: '[bench,php]'
excerpt: "On se pose tous la question à un moment donné : dois-je plutôt faire un for, un while ou un foreach pour être le plus efficace et le plus rapide ?   \nEt ce ne sont pas les benchmarks sur PHP [qui](http://www.j0k3r.net/news-un-peu-d-optimisation-php-ne-fait-pas-de-mal-1124.html) [manque](http://www.j0k3r.net/news-php-et-optimisation-226.html) pour nous      …"
---

On se pose tous la question à un moment donné : dois-je plutôt faire un for, un while ou un foreach pour être le plus efficace et le plus rapide ?   Et ce ne sont pas les benchmarks sur PHP [qui](http://www.j0k3r.net/news-un-peu-d-optimisation-php-ne-fait-pas-de-mal-1124.html) [manque](http://www.j0k3r.net/news-php-et-optimisation-226.html) pour nous prouver les bonnes méthodes à utiliser, du moins, la méthode qui sera la plus rapide !

Le site [PHPBench.com](http://www.phpbench.com/) essaie justement de centraliser ces informations. Les informations utilisaient sont plutôt basiques, généralement du traitement de gros tableaux, de grosses chaines, etc .. et tous les scripts utilisaient pour les tests sont disponibles directement.

L'éternelle bataille du echo et du print reviens forcément sur le plateau tout comme les doubles quotes contre les simples quotes. Mais c'est quand même les boucles (for, while et foreach) qui représentent le plus de tests. Et c'est des fois rigolo de voir qu'un `foreach($aHash as $val)` et quand même **6 fois plus lent** qu'un `while(list(,$val) = each($aHash))` et plus le traitement est complexe dans le foreach, plus il prend de temps ! Alors que le trio while/list/each reste toujours aussi rapide ...

Ceci dit, je trouve quand même plus "propre" et compréhensible de passer par un foreach plutôt qu'un while/list/each. Avis perso vous me direz mais bon ..
