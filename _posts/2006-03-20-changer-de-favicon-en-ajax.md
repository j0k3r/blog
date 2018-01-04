---
layout: post
title: 'Changer de favicon en AJAX'
date: '2006-03-20 12:33:47'
author: j0k
tags: '[]'
excerpt: "Pour ceux qui ne le savent pas, une favicon est une icône pour enjoliver les sites web qui l'utilisent. Elle est généralement utilisée dans la barre d'adresse, les favoris, les onglets, ou autres raccourcis.     \nPour en revenir au rapport avec AJAX, vous utilisez peut-être [meebo](http://www.meebo.com/) ou encore Gmail qui ont déjà mis en place un système      …"
---

Pour ceux qui ne le savent pas, une favicon est une icône pour enjoliver les sites web qui l'utilisent. Elle est généralement utilisée dans la barre d'adresse, les favoris, les onglets, ou autres raccourcis.
Pour en revenir au rapport avec AJAX, vous utilisez peut-être [meebo](http://www.meebo.com/) ou encore Gmail qui ont déjà mis en place un système permettant de modifier la favicon. Pour meebo, il indique qu'une réponse vous est adressée et sur Gmail, que vous venez de recevoir un nouveau mail.

Et bien, c'est tout à fait faisable en AJAX. La favicon est renseigné par une balise link dans les entêtes des pages HTML et peut donc facilement être modifiable. Cependant tous les navigateurs ne gèrent pas le changement de favicon &quot;à la volée&quot;, sur la liste noire on retrouve IE et Safari.

Un [p'tit script](http://softwareas.com/index.php?name=dynamic-favicons) à tester et pourquoi pas à utiliser (toujours à bon escient évidemment).
