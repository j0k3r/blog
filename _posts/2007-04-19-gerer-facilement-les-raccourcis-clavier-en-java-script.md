---
layout: post
title: 'Gérer facilement les raccourcis clavier en JavaScript'
date: '2007-04-19 02:11:06'
author: j0k
tags: '[javascript]'
excerpt: "Il est difficile de trouver des librairies JavaScript qui facilite l'utilisation des raccourcis clavier.      \nOn peut très bien faire soit même un p'tit bout de code en JavaScript pour faire une raccourci clavier (comme sur le site avec le chat et la touche \"entrée\"). Mais si on souhaite mettre en place une réelle navigation au sein de son site, basée      …"
---

Il est difficile de trouver des librairies JavaScript qui facilite l'utilisation des raccourcis clavier.
On peut très bien faire soit même un p'tit bout de code en JavaScript pour faire une raccourci clavier (comme sur le site avec le chat et la touche "entrée"). Mais si on souhaite mettre en place une réelle navigation au sein de son site, basée sur des raccourcis clavier, un peu comme Google Reader, Gmail ou encore Netvibes, ça devient lourd à mettre en place.

OpenJS nous propose [un script](http://www.openjs.com/scripts/events/keyboard_shortcuts/) qui permet de créer facilement des raccourcis clavier. Son utilisation est très très simple. Il suffit de faire un appel à la fonction *shortcut* en passant le raccourci clavier souhaité en paramètre et le tour est joué. Simple non ? :)
