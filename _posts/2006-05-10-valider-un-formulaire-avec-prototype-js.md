---
redirect_from:
  - /blog/valider-un-formulaire-avec-prototype-js
layout: post
title: 'Valider un formulaire avec prototype.js'
date: '2006-05-10 12:05:08'
author: j0k
tags: prototype validation
excerpt: "La validation d'un formulaire est souvent une tache assez longue à faire. Ce qui est tout à fait normal car il faut souvent tester tous les champs (rappelez vous l'utilisateur est le premier buG de votre application).     \nPrototype.js (via script.aculo.us) propose une classe de validation de formulaire. On spécifie le type de champs que doit valider la classe et      …"
---

La validation d'un formulaire est souvent une tache assez longue à faire. Ce qui est tout à fait normal car il faut souvent tester tous les champs (rappelez vous l'utilisateur est le premier buG de votre application).
Prototype.js (via script.aculo.us) propose une classe de validation de formulaire. On spécifie le type de champs que doit valider la classe et elle s'occupe du reste. Si le champ n'est pas correctement renseigné, elle le mettra en surlignage rouge en indiquant le type de champs qu'elle attend.   Si le champ est bon, elle l'encadrera en vert.

Voilà [quelques choses](http://tetlaw.id.au/view/blog/really-easy-field-validation-with-prototype/) de bien pratique. Evidemment, il vous faudra derrière tester les champs en PHP, mais déjà c'est une bonne chose :)   Décidément, on en découvre tous les jours dans cette librairie !
