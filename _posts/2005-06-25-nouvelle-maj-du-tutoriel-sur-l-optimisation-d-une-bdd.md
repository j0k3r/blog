---
redirect_from:
  - /blog/nouvelle-maj-du-tutoriel-sur-l-optimisation-d-une-bdd
layout: post
title: 'Nouvelle MAJ du tutoriel sur l''optimisation d''une BDD'
date: '2005-06-25 02:22:30'
author: j0k
tags: blabla
excerpt: 'Vous avez peut-être déjà lu mon tutoriel sur comment [optimiser une base de donnée](http://www.j0k3r.net/mysql-optimiser-une-base-de-donnee-15.html) qui consistait à récupérer toutes les tables et à les optimiser une par une.   J''ai fait ensuite une [amélioration](http://www.j0k3r.net/news-mise-a-jour-du-tutorial-sur-l-optimisation-d-une-bdd-207.html) qui      ...'
---

Vous avez peut-être déjà lu mon tutoriel sur comment [optimiser une base de donnée](http://www.j0k3r.net/mysql-optimiser-une-base-de-donnee-15.html) qui consistait à récupérer toutes les tables et à les optimiser une par une.   J'ai fait ensuite une [amélioration](http://www.j0k3r.net/news-mise-a-jour-du-tutorial-sur-l-optimisation-d-une-bdd-207.html) qui permettait de faire une seule requête pour optimiser toutes les tables (gain de performance et surtout une unique requête MySQL !).

Et bien ce coup ci, je l'améliore encore une fois (la dernière ?). Maintenant il optimise uniquement les tables qui ont des pertes. C'est à dire, uniquement les tables qui ont besoin d'être optimisées. Je ne pense pas qu'un gain de performance soit visible, si ce n'est qu'il optimise certainement moins de tables qu'avant et ainsi améliore la vitesse de quelques millisecondes... mais en tout cas, cela fait un travail plus propre et moins "bourrin" !
