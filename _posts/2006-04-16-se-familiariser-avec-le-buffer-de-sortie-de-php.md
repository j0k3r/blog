---
redirect_from:
  - /blog/se-familiariser-avec-le-buffer-de-sortie-de-php
layout: post
title: 'Se familiariser avec le buffer de sortie de PHP'
date: '2006-04-16 09:24:35'
author: j0k
tags: blabla
excerpt: "Pas assez utiliser par les webmasters, le buffer de sortie de PHP (PHP's output buffer) alors que cela apporte beaucoup d'avantage.     \nPar exemple, les erreurs du type &quot;Cannot modify header information * headers already sent&quot; arrive fréquemment. Tandis qu'il suffit juste d'éviter de modifier les en-têtes une fois qu'elles sont envoyées. Facile à dire,      …"
---

Pas assez utiliser par les webmasters, le buffer de sortie de PHP (PHP's output buffer) alors que cela apporte beaucoup d'avantage.
Par exemple, les erreurs du type &quot;Cannot modify header information * headers already sent&quot; arrive fréquemment. Tandis qu'il suffit juste d'éviter de modifier les en-têtes une fois qu'elles sont envoyées. Facile à dire, mais des fois on n'a pas vraiment le choix. En utilisant le buffer de sortie, on stocke tout ce qui va être affiché avant la fin du script. Cela signifie que vous pouvez faire des setcookie et des header sans vous souciez de ce qu'il s'est passé. Et ceci n'est qu'une partie des possibilités du buffer de sortie.

Dans cet article de [PHPit](http://www.phpit.net/article/output-buffer-fun-php/), on vous apprend pas à pas à vous servir du buffer de sortie, avec des petits exemples à chaque fois. Bien pratique !

Cet article ne vous présente pas toutes les possibilités du buffer de sortie mais en cherchant vous trouverez les autres ;)
