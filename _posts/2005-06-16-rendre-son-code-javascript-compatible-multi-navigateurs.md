---
redirect_from:
  - /blog/rendre-son-code-javascript-compatible-multi-navigateurs
layout: post
title: 'Rendre son code JavaScript compatible multi-navigateurs'
date: '2005-06-16 08:07:31'
author: j0k
tags: blabla
excerpt: 'Ce n''est pas nouveau JavaScript ayant été créé par Netscape, il est bien évident que Microsoft n''allait pas utilisé le même langage. Ils ont donc créé le JScript qui possède de grande ressemblance avec JavaScript.   Cependant un standard a ensuite été adopté, mais encore certains navigateurs utilisent leur propre fonction JavaScript qui ne sont pas les mêmes que sur les      ...'
---

Ce n'est pas nouveau JavaScript ayant été créé par Netscape, il est bien évident que Microsoft n'allait pas utilisé le même langage. Ils ont donc créé le JScript qui possède de grande ressemblance avec JavaScript.   Cependant un standard a ensuite été adopté, mais encore certains navigateurs utilisent leur propre fonction JavaScript qui ne sont pas les mêmes que sur les autres navigateurs mais font parfois la même chose qu'une autre fonction, mais appelé différemment.

Ainsi quand on code un script en JavaScript il faut tenir compte de tout cela pour rendre son code valide et compatible avec tous les navigateurs. Developpez.com nous propose un [code](http://ditch.developpez.com/javascript/compatibilite/) qui permet de trouver la version du navigateur et ensuite d'en convertir les principales fonctions pour être sur que son code sera bien exécuté.   La détection de la version est néanmoins basé sur le User Agent du navigateur qui peut-être facilement modifiable (j'ai personnellement rencontré des problèmes avec cela). Mais l'on ne peut pas ce fier à autre chose qu'au User Agent, et puis très peu de gens le modifie. ;)
