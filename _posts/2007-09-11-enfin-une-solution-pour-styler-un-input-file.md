---
layout: post
title: 'Enfin une solution pour styler un input file !'
date: '2007-09-11 10:24:00'
author: j0k
tags: css file input styling
excerpt: "Les input files sont vraiment une plaie pour les graphistes / intégrateurs parce que c'est une des seules parties d'un formulaire que l'on ne peut absolument pas rendre joli. Le bouton parcourir aura la tête que le navigateur lui donnera, ce qui est bien souvent frustrant.     \nDes approches ont été faite, notamment en plaçant carrément un layer par dessus      …"
---

Les input files sont vraiment une plaie pour les graphistes / intégrateurs parce que c'est une des seules parties d'un formulaire que l'on ne peut absolument pas rendre joli. Le bouton parcourir aura la tête que le navigateur lui donnera, ce qui est bien souvent frustrant.
Des approches ont été faite, notamment en plaçant carrément un layer par dessus l'input. Mais forcément cette astuce ne fonctionnait que pour IE, ce qui limite sa popularité.

Shaun Inman propose [une solution intéressante](http://www.shauninman.com/archive/2007/09/10/styling_file_inputs_with_css_and_the_dom). Il englobe son input avec un label et réduit l'opacité de l'input à zéro. Il place ensuite une image en fond du label et le résultat donne une image cliquable pour uploader un fichier.   La technique ne fonctionne pas sous Opéra, mais l'input file est affiché tel quel du coup, au final on ne trouble pas l'utilisateur.

Cependant le script n'est pas totalement "génial" à mon avis. Etant donné qu'une fois que l'on a choisit un fichier, rien ne nous indique que celui ci est présent. Il faudrai rajouter une action JavaScript qui changerai l'image de fond afin d'indiquer qu'un fichier a été sélectionné. Après si le déclenchement de l'upload se fait lors de la sélection du fichier, le problème ne se pose plus :-)
