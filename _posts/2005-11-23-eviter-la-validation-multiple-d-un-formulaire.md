---
layout: post
title: 'Eviter la validation multiple d''un formulaire'
date: '2005-11-23 12:10:05'
author: j0k
tags: blabla
excerpt: "L'inconvénient d'un formulaire est qu'il peut très souvent être validé deux fois de suite. Ainsi les données sont transmises deux fois en un temps très court. Plusieurs solutions existent utilisant le PHP ou le JavaScript.     \nLa première en JavaScript permet de désactiver le bouton *submit* une fois que l'on a cliqué dessus. Ainsi on ne peut pas cliquer une      …"
---

L'inconvénient d'un formulaire est qu'il peut très souvent être validé deux fois de suite. Ainsi les données sont transmises deux fois en un temps très court. Plusieurs solutions existent utilisant le PHP ou le JavaScript.
La première en JavaScript permet de désactiver le bouton *submit* une fois que l'on a cliqué dessus. Ainsi on ne peut pas cliquer une deuxième fois. Cependant cela fonctionne en JavaScript ce qui sous entend les éventuels problèmes si celui ci est désactivé. Vous pouvez donc passer par une solution côté serveur en utilisant par exemple les sessions ou encore les cookies.

Le JDN propose une autre [solution](http://developpeur.journaldunet.com/tutoriel/php/051121-eviter-soumission-multiple-formulaire.shtml) qui consiste à identifier l'envoie d'un formulaire avec un identifiant unique à chaque fois. Lors de la soumission on va chercher dans la base si l'identifiant existe et on effectue ensuite le test.

A vous de choisir le solution adéquate à votre site.
