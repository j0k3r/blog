---
layout: post
title: 'CSSTidy pour nettoyer vos feuilles de styles'
date: '2005-11-01 00:00:00'
author: j0k
tags: développement
excerpt: 'HTML Tidy nettoie votre code HTML. Voici CSSTidy qui nettoie et optimise vos feuilles de styles pour les rendre plus rapide et plus efficace.'
---

Dans un précédent ch'tit truc, je vous avais parlé de HTML Tidy qui [nettoyer votre code HTML](http://www.j0k3r.net/chtit-truc-tidy-nettoie-votre-code-html-24.html). Voici maintenant son petit frère qui s'occupe de vos feuilles de styles.

Depuis le 29 octobre dernier, [CSSTidy](http://csstidy.sourceforge.net/) est en version 1.0 stable. Ce petit outils optimise vos feuilles de styles et peut réduire leurs tailles de plus de 45%. Personnellement je l'ai testé sur la feuille de style du site et j'atteins quand même les 27.2%. Certes elle n'est pas bien écrite. J'ai ensuite testé avec une feuille de style un peu plus propre et je suis tout de même arrivé 13.7%.

  En plus de réduire la taille de vos feuilles de styles, il optimise aussi le code à l'intérieur, regroupe ce qui peut être regroupé, converti les couleurs du type "black" ou rgb(0,0,0) en #000000 ou mieux en #000, modifier les marges en les factorisant ...

  Bref il est vraiment très puissant.
 Ce petit outils est disponible en C++ et en PHP (PHP 4.3.x et PHP 5.0.x).

 Vous pouvez aussi le tester directement en [ligne](http://cdburnerxp.se/cssparse/css_optimiser.php?lang=fr) histoire de voir la puissance du bazar. Il est disponible en français, anglais et allemand.
