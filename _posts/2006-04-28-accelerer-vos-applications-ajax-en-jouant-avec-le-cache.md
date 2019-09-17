---
layout: post
title: 'Accélérer vos applications AJAX en jouant avec le cache'
date: '2006-04-28 04:41:22'
author: j0k
tags: blabla
excerpt: 'En développant en AJAX, vous utilisez certainement une libraire adéquate (comme prototype.js par exemple) et vous vous êtes certainement rendu compte qu''en général leur taille était assez importante. Ce qui engendre en général un téléchargement de la page plus long.   Par exemple, digg charge une quantité assez affolante de fichiers JavaScript et ça se sent lors de la      ...'
---

En développant en AJAX, vous utilisez certainement une libraire adéquate (comme prototype.js par exemple) et vous vous êtes certainement rendu compte qu'en général leur taille était assez importante. Ce qui engendre en général un téléchargement de la page plus long.   Par exemple, digg charge une quantité assez affolante de fichiers JavaScript et ça se sent lors de la première visite sur le site.

Une solution consiste à mettre dans le cache du navigateur les fichiers JavaScripts. Une fois dans le cache, le fichier n'est plus téléchargé, puisqu'il est déjà existant pour le navigateur, du coup le chargement est beaucoup plus rapide !    Le seul problème c'est que si vous faites des changements dans vos fichiers, ils ne sont pas répercutés dans le cache du navigateur. La solution, c'est de renommer le fichier JavaScript, par exemple en changeant de dossier (le dossier comportant le numéro de la version de vos fichiers) : */javascript/0.1/test.js*, */javascript/0.2/test.js* ...   Les fichiers se trouvant dans le cache du navigateur seront supprimés automatiquement, puisque plus utilisé. Et les anciens prendront leur place.

Une [belle astuce](http://vivekjishtu.blogspot.com/2006/04/speed-up-your-ajax-based-webapps.html) :)
