---
redirect_from:
  - /article/my-sql-interroger-une-base
layout: post
title: 'MySQL - Interroger une base'
date: '2004-03-18 13:44:02'
author: j0k
tags: développement
excerpt: 'Voici les fonctions en php qui permettent d''interroger une base MySQL'
---

Voici les fonctions en php qui permettent d'interroger une base MySQL :

## **$ligne = mysql_fetch_row($resultat)**

 Retourne un tableau énuméré nommé ici *$ligne*, indicé à partir de 0, dont les éléments contiennent les valeurs des champs de la ligne courante pointée par *$resultat*, ou bien FALSE s'il ne reste plus de ligne.

## **$ligne = mysql_fetch_array($resultat)**

 Version étendue de mysql_fetch_row(). C'est celle que j'utilise tout le temps. Ici *$ligne* désigne un tableau associatif dont les indices peuvent être remplacés par les noms des champs. Ainsi la valeur du champ nom du tableau *$ligne* s'obtient avec *$ligne*[*nom*].

## **$ligne = mysql_fetch_object($resultat)**

 On obtient un objet construit à partir d'une ligne du résultat, ou FALSE si on a atteint la fin de la table. Cet objet *$ligne* possède pour attributs tous les champs de la table, initialisés aux valeurs actuelles de cette ligne. Ainsi la valeur du champ nom de l'objet *$ligne *s'obtient avec la syntaxe *$ligne->nom*.
