---
layout: post
title: 'MySQL supporte la fonction substr'
date: '2005-05-19 12:38:10'
author: j0k
tags: blabla
excerpt: "Voila une info tirée entièrement de nexen.   Il nous informe que la fonction [substr](http://www.j0k3r.net/php-fonction-substr-8.html) est complètement supportée par MySQL 4.1 qui permet d'extraire une partie d'une chaîne.  \n  \nCette fonction n'est pas documentée, et sert à la même chose que la fonction MID(). Notez aussi que SUBSTR() supporte les      …"
---

Voila une info tirée entièrement de nexen.   Il nous informe que la fonction [substr](http://www.j0k3r.net/php-fonction-substr-8.html) est complètement supportée par MySQL 4.1 qui permet d'extraire une partie d'une chaîne.

Cette fonction n'est pas documentée, et sert à la même chose que la fonction MID(). Notez aussi que SUBSTR() supporte les offsets négatifs, tout comme MID. Ce n'était pas le cas en 4.0. Par exemple :

select substr('12345',4,1); retourne 4   select substr('12345',-4,1); retourne 2   select substr('12345', 2,-1); retourne '' :   Et oui, cette fonction n'est pas un clone du substr() bien connue de PHP.

Plus d'information sur le site de [nexen](http://www.nexen.net/news/gen.php/2005/05/18/4219,0,0,0,0.php).
