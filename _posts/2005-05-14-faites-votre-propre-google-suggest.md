---
redirect_from:
  - /blog/faites-votre-propre-google-suggest
layout: post
title: 'Faites votre propre Google Suggest'
date: '2005-05-14 01:25:44'
author: j0k
tags: blabla
excerpt: "Dan nous en [avait parlé](http://www.j0k3r.net/forum/grand-moment-sur-j0k3r-n3t-107.htm) lors de son lancement. Google Suggest permet d'anticiper les mots que tape l'internaute lors d'une recherche.     \nC'est à dire qu'il commence à taper une lettre ou deux, et une liste de mots apparaît avec le nombre de résultat. Cela peut grandement facilité la      …"
---

Dan nous en [avait parlé](http://www.j0k3r.net/forum/grand-moment-sur-j0k3r-n3t-107.htm) lors de son lancement. Google Suggest permet d'anticiper les mots que tape l'internaute lors d'une recherche.
C'est à dire qu'il commence à taper une lettre ou deux, et une liste de mots apparaît avec le nombre de résultat. Cela peut grandement facilité la recherche.

[JDN](http://developpeur.journaldunet.com/tutoriel/dht/050513-javascript-ajax-xmlhttprequest-recherche1.shtml) nous explique comment faire le sien facilement à l'aide du fichier livesearch déjà fait pour cela !

Je l'ai testé et cela fonctionne parfaitement attention tout de même dans le livesearch.js, ligne 134 il faut mettre ceci si le fichier livesearch.php et dans le même dossier que le js et le html : *liveSearchReq.open("GET", "livesearch.php?q=" + document.forms.searchform.q.value + liveSearchParams);*

Aller ... c'bien pratique, testez le ;)
