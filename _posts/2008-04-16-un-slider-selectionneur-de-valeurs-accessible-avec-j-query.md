---
redirect_from:
  - /blog/un-slider-selectionneur-de-valeurs-accessible-avec-j-query
layout: post
title: 'Un slider (sélectionneur de valeurs) accessible avec jQuery'
date: '2008-04-16 07:19:55'
author: j0k
tags: jquery slider
excerpt: "Depuis le temps que je cherchais un slider digne de ce nom, en Javascript et qui me permettait de prendre une sélection de valeurs qui ne soit des dates !! Je l'ai enfin trouvé. Certes j'utilise prototype plutôt que jQuery, mais déjà el fait d'en avoir trouver un, ça me soulage.     \n )   \n  \nBon tout d'abord, un slider c'est quoi?  \n     …"
---

Depuis le temps que je cherchais un slider digne de ce nom, en Javascript et qui me permettait de prendre une sélection de valeurs qui ne soit des dates !! Je l'ai enfin trouvé. Certes j'utilise prototype plutôt que jQuery, mais déjà el fait d'en avoir trouver un, ça me soulage.
 ![image](https://kwout.com/cutout/n/w2/mv/7gy_bor_rou_f4f4f4.jpg)

Bon tout d'abord, un slider c'est quoi?   J'appellerai un slider, un sélectionneur de valeurs. Il permet en effet de sélectionner une fourchette de valeurs pour faire une sorte de filtre. Dans l'idée, ça serait de définir un prix minimum et un prix maximum. Le premier acteur français à l'avoir fait sur son site eCommerce, est [Darty](http://www.darty.com/nav/achat/telephonie/telephonie_mobile/telephone_portable/guide.html) (il me semble).

La plupart des scripts Javascript, disponible sur la toile, permettant de mettre en place des sliders, permettent bien souvent de sélectionner une période entre deux dates. Et il n'est généralement pas simple de transformer ce slider de date en slider de valeur numérique. Le slider, certainement le plus connu, est [le slider de YUI](http://developer.yahoo.com/yui/examples/slider/slider_dual_with_highlight.html). Très bien fait, mais utilisant YUI justement. Ce qui n'est pas très pratique quand on est partis sur un choix de librairie Javascript différent.

Filament Group propose un slider accessible qui offre la possibilité de sélectionner des dates mais aussi des valeurs quelconque ; cela peut très bien être :

* des chaines de caractères ("très lent", "lent", "rapide", "très rapide")
* des dates
* ou des chiffres !

L'idée est en fait de convertir une ou plusieurs listes déroulantes en un slider. Ainsi, si Javascript n'est pas activé et/ou que les CSS non plus, le slider affichera des listes déroulantes qui permettront facilement de sélectionner une valeur.   L'exemple le plus basique et très parlant présente une simple liste déroulante qui se transforme en slider. Il suffit d'aller [sur la page](http://www.filamentgroup.com/examples/slider/) et de désactiver les CSS.

Enfin, un [script de slider](http://www.filamentgroup.com/lab/developing_an_accessible_slider/) pratique qu'il serait intéressant de voir porter sur prototype. :-)
