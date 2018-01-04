---
layout: post
title: 'innerHTML sous Firefox grâce au DOM'
date: '2005-05-24 07:30:13'
author: j0k
tags: '[]'
excerpt: "innerHTML est une fonction JavaScript propriétaire à Internet Explorer qui vous permet de modifier le contenu de balise HTML.     \ninnerHTML est beaucoup utilisé ou du moins le fût énormément lors de l'époque *où il fallait être compatible IE ou mourir*. Très pratique cela permettait notamment de faire un chat sans rafraîchissement.  \n  \nMais le      …"
---

innerHTML est une fonction JavaScript propriétaire à Internet Explorer qui vous permet de modifier le contenu de balise HTML.

innerHTML est beaucoup utilisé ou du moins le fût énormément lors de l'époque *où il fallait être compatible IE ou mourir*. Très pratique cela permettait notamment de faire un chat sans rafraîchissement.

Mais le gros problème qui se pose avec les temps qui courent, c'est que IE n'est plus le navigateur que _tout le monde_ possède, du coup la fonction innerHTML ne fonctionne pas sous les autres navigateurs.   Elle ne fait pas partir des spécifications du DOM (le standard de manipulation des documents HTML, entre autres), qui dispose de méthodes adéquates mais pas forcément plus simple ...

Le JDN nous montre ces [méthodes](http://developpeur.journaldunet.com/tutoriel/dht/050524-javascript-innerhtml-equivalent-dom-getelementbyid-replacedata.shtml) pour "remplacer" l'innerHTML.
