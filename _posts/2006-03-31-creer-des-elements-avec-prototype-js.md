---
layout: post
title: 'Créer des éléments avec prototype.js'
date: '2006-03-31 07:11:12'
author: j0k
tags: '[]'
excerpt: "Pour faire office de validation automatique d'un formulaire, on utilise souvent la création à la volée d'élément pour y mettre l'erreur remonté.     \nC'est l'exemple concret du formulaire d'inscription du [Remember The Milk](http://www.rememberthemilk.com/signup/) ou encore de la page contact de la [ville de gap](http://www.ville-gap.info/fr/contact.html      …"
---

Pour faire office de validation automatique d'un formulaire, on utilise souvent la création à la volée d'élément pour y mettre l'erreur remonté.
C'est l'exemple concret du formulaire d'inscription du [Remember The Milk](http://www.rememberthemilk.com/signup/) ou encore de la page contact de la [ville de gap](http://www.ville-gap.info/fr/contact.html). Le principe est simple, au moment où le curseur sort du champ, on appelle une fonction JavaScript qui va vérifier la validité du champ. Si celui ci est valide, on ne fait rien mais dans le cas contraire, on crée un élément qui contiendra les erreurs.

Oui mais pourquoi ne pas utiliser tout simplement un champ caché ?   Parce que dans l'absolu, les champs cachés ce n'est pas spécialement bien. Là on passe directement par DOM pour créer des balises HTML et les remplir par la suite.

Tout ça pour en revenir à notre librairie prototype.js, un développeur a codé une fonction qui permet très simplement de créer un élément. Il faut dire que c'est assez long de créer un élément et de le placer. Cette fonction prend en paramètre un tableau qui décrit un peu la structure HTML que cela devra rendre, et cela vous le crée.

La [fonction](http://www.arantius.com/article/dollar-e) s'appelle $E(), pour rester dans la lignée des fonctions de prototype.js (*$()*, *$F()* ...) est vous pouvez la mettre sans soucis directement dans prototype.js.
