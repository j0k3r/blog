---
layout: post
title: 'Migrer de MySQL à PostgreSQL en 60 secondes !'
date: '2005-10-30 10:12:06'
author: j0k
tags: '[]'
excerpt: "Migrer d'une base de donnée à une autre c'est jamais facile. Même si le principe de stockage et pas mal de chose sont à peu près équivalent, le copier/coller de base de donnée ne fonctionne pas.     \nLe plus simple en général est d'extraire complètement les tables d'une base de donnée pour l'insérer ensuite dans la nouvelle base.   Mais voilà, après avoir      …"
---

Migrer d'une base de donnée à une autre c'est jamais facile. Même si le principe de stockage et pas mal de chose sont à peu près équivalent, le copier/coller de base de donnée ne fonctionne pas.

Le plus simple en général est d'extraire complètement les tables d'une base de donnée pour l'insérer ensuite dans la nouvelle base.   Mais voilà, après avoir travaillé pas mal de fois sur le transfert de MySQL à PostgreSQL, Robby Russell a élaboré un [script](http://www.robbyonrails.com:8680/articles/2005/10/29/migrating-from-mysql-to-postgresql-in-60-seconds-with-rails) très très simple. Il suffit apparemment de créer une base PostgreSQL, de la mettre en mode migration et de lancer son script et paf tout ce fait en 60 secondes chrono. C'est pas beau :)
