---
redirect_from:
  - /blog/edition-inline-de-plusieurs-donnees-en-ajax
layout: post
title: 'Edition inline de plusieurs données en AJAX'
date: '2006-08-29 09:40:40'
author: j0k
tags: ajax edit_in_place
excerpt: "Comme présenté dans mon tutoriel sur l'[édition à la volée en AJAX](http://www.j0k3r.net/ajax-edition-a-la-volee-en-ajax-edit-in-place-5.html), le club Developpez.com propose un tutoriel dans le même genre.     \nIl propose de modifier à la volée tous les champs d'une base de données. Le principe est le même que celui présenté dans mon tutoriel. Les données      …"
---

Comme présenté dans mon tutoriel sur l'[édition à la volée en AJAX](http://www.j0k3r.net/article/ajax-edition-a-la-volee-en-ajax-edit-in-place), le club Developpez.com propose un tutoriel dans le même genre.
Il propose de modifier à la volée tous les champs d'une base de données. Le principe est le même que celui présenté dans mon tutoriel. Les données sont affichées et quand on (double) clique dessus, un champ texte ou un textarea apparaît et on peut modifier directement les données.   Par contre, il n'y a pas de bouton "modifier" ou "annuler" qui s'affiche, une pression de la touche "entrée" ou un clic ailleurs dans la page sauvegarde les données.

Cela va ravir Mathelec de voir que le script proposé n'utilise pas de librairie JavaScript mais directement l'objet XMLHTTPRequest à nue, je dirai.

Bonne [lecture](http://olance.developpez.com/articles/web/javascript/modification-inline/), vous pourrez trouver une démo [ici](http://olance.developpez.com/articles/web/javascript/modification-inline/exemple/).
