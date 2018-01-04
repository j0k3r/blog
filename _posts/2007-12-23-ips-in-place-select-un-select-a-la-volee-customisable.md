---
layout: post
title: 'IPS (In Place Select), un select à la volée customisable'
date: '2007-12-23 03:08:02'
author: j0k
tags: '[in-place,scriptaculous,select]'
excerpt: "Il existe déjà l'édition à la volée qui est grandement utilisée pour améliorer l'interactivité avec l'utilisateur, on l'appelle l'[edit in place](http://www.j0k3r.net/ajax-edition-a-la-volee-en-ajax-edit-in-place-5.html). Elle permet, en cliquant sur du texte, de pouvoir le modifier à la volée.     \nSelon les besoins du projet, il est souvent utile d'avoir      …"
---

Il existe déjà l'édition à la volée qui est grandement utilisée pour améliorer l'interactivité avec l'utilisateur, on l'appelle l'[edit in place](http://www.j0k3r.net/ajax-edition-a-la-volee-en-ajax-edit-in-place-5.html). Elle permet, en cliquant sur du texte, de pouvoir le modifier à la volée.
Selon les besoins du projet, il est souvent utile d'avoir le même comportement mais [avec une liste déroulante](http://wiki.script.aculo.us/scriptaculous/show/InPlaceSelect), de façon à éviter les fantaisies entrées par l'utilisateur. Cependant, il peut être intéressant de pouvoir alimenter celle liste déroulante à la volée aussi.   Ce système est notamment utilisé par Google dans Gmail, pour spécifier un statut personnalisé. Il est aussi utilisé par Facebook, dans la même idée.

Une [premiere version basée sur prototype.js](http://yura.thinkweb2.com/playground/in-place-select/) est disponible. Pour le moment cette version est vraiment expérimentale, mais elle est déjà bien fonctionnelle (bien que des bugs existent).   Sur la démo, vous pouvez sélectionner un statut existant mais aussi en mettre un personnalisé.   Il faudrait ensuite enregistrer le statut via une requête AJAX pour le conserver ou alors le placer dans un cookie.
