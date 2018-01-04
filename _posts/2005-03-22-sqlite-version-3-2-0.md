---
layout: post
title: 'SQLite version 3.2.0'
date: '2005-03-22 06:39:37'
author: j0k
tags: '[]'
excerpt: 'Le staff de SQLite a l''air bien motivé en ce mois de mars, et nous propose une nouvelle version, la 3.2.0.   )   le gros changement de cette version est que l''[ALTER TABLE](http://www.sqlite.org/lang_altertable.html) est désormais supporté ! C''était un des plus gros "défaut" d''SQLite par rapport à MySQL, le fait que l''ALTER TABLE était assez compliqué à      ...'
---

Le staff de SQLite a l'air bien motivé en ce mois de mars, et nous propose une nouvelle version, la 3.2.0.      le gros changement de cette version est que l'[ALTER TABLE](http://www.sqlite.org/lang_altertable.html) est désormais supporté ! C'était un des plus gros "défaut" d'SQLite par rapport à MySQL, le fait que l'ALTER TABLE était assez compliqué à reproduire, ou à contourner puisqu'il n'était pas du tout supporté dans les anciennes versions. Il fallait passer par une table temporaire ... tout ça pour ajouter/modifier un champ d'une base existante.

Evidemment d'autres corrections sont à noter, comme celle qui concerné UPDATE et INSERT qui lors d'un plantage dans la requete (sur les grosses requetes), ben tout était perdu :)

Il est evidemment recommandé à tous les utilisateurs d'[upgrader](http://www.sqlite.org/download.html) leur version !
