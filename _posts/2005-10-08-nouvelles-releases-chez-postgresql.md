---
redirect_from:
  - /blog/nouvelles-releases-chez-postgresql
layout: post
title: 'Nouvelles releases chez PostgreSQL'
date: '2005-10-08 12:35:48'
author: j0k
tags: blabla
excerpt: "De nouvelles releases pour PostgreSQL ont été [publié](http://www.postgresql.org/download) cette semaine. Elles concernent les versions 7.3.11, 7.4.9 et 8.0.4."
---

De nouvelles releases pour PostgreSQL ont été [publié](http://www.postgresql.org/download) cette semaine. Elles concernent les versions 7.3.11, 7.4.9 et 8.0.4.
Voici une petite liste des principaux changements qui ont été opérés :

* Fix error that allowed "VACUUM" to remove ctid chains too soon
* Fix missing rows in queries like UPDATE a=... WHERE a... with GiST index on column a
* Improve checking for partially-written WAL pages
* Various memory leakage fixes

Pour une plus complete description, je vous invite à lire le fichier log joint dans les archives.
