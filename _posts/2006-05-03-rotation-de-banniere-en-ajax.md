---
redirect_from:
  - /blog/rotation-de-banniere-en-ajax
layout: post
title: 'Rotation de bannière en AJAX'
date: '2006-05-03 08:15:04'
author: j0k
tags: blabla
excerpt: "La plupart du temps, les bannières publicitaires sont affichées statiquement. Pour palier à ça, en général on trouve des belles bannières animés via du GIF, ce qui n'est pas très beau, je vous l'accorde.   Une autre solution consiste à le faire en Flash en chargeant les images dynamiquement.  \n  \nUn tout autre alternative peut être utilisé en AJAX. Un      …"
---

La plupart du temps, les bannières publicitaires sont affichées statiquement. Pour palier à ça, en général on trouve des belles bannières animés via du GIF, ce qui n'est pas très beau, je vous l'accorde.   Une autre solution consiste à le faire en Flash en chargeant les images dynamiquement.

Un tout autre alternative peut être utilisé en AJAX. Un simple Timeout en JavaScript pour gérer le changement d'image et ensuite le &quot;remplissage&quot; du conteneur div ce fait en AJAX. Dans cet exemple, les images sont prédéfinies dans un tableau PHP mais on pourrait aussi aller lire un dossier qui contient tout un tas d'image et ensuite les afficher.

Ce [script](http://www.phpied.com/ajax-banner-rotation/) n'a pas pour vocation de prôner les publicités, vous pouvez très bien l'utiliser pour faire défiler vos photos flickr par exemple. En reprenant l'API de flickr, vous récupérez vos images et vous les faites défiler.   Bref, tout un tas d'utilisation peut être possible. Et il me semble que si on l'utilise pour de la publicité, étant donné que les images sont chargées dynamiquement, cela passe à travers Adblock (suffit de ne pas nommer son fichier js banner.js :)).
