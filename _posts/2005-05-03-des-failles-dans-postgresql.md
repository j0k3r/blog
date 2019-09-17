---
redirect_from:
  - /blog/des-failles-dans-postgresql
layout: post
title: 'Des failles dans PostgreSQL'
date: '2005-05-03 12:46:27'
author: j0k
tags: blabla
excerpt: 'Le staff PostgreSQL prépare de nouvelles versions pour corriger deux gros problèmes de sécurité.   )   Cependant ses nouvelles versions de corrigerons pas completement les failles puisqu''elles concernent aussi les entrées utilisateurs, il faut que les administrateurs fassent une petit manip'' de leur côté.   Il diffuse ce bulletin de renseignements pour      ...'
---

Le staff PostgreSQL prépare de nouvelles versions pour corriger deux gros problèmes de sécurité.      Cependant ses nouvelles versions de corrigerons pas completement les failles puisqu'elles concernent aussi les entrées utilisateurs, il faut que les administrateurs fassent une petit manip' de leur côté.   Il diffuse ce bulletin de renseignements pour encourager les administrateurs de PostgreSQL à exécuter ces opérations aussitôt que possible.

La première faille concerne la conversion de caractères et peut être corrigé via quelques requetes. La deuxième s'applique sur le module tsearch2 qui plante lors de retour vide.

Toutes ses explications sont décrites dans le [bulletin](http://www.postgresql.org/about/news.315) de PostgreSQL.
