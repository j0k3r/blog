---
layout: post
title: 'Les sessions PHP et Google'
date: '2006-01-14 11:00:40'
author: j0k
tags: blabla
excerpt: "Quand on parle de référencement d'un site ou d'un forum, la première chose à faire est en général d'éviter d'afficher l'identifiant de session de l'utilisateur.     \nPourquoi ?   Tout simplement parce cet identifiant de session est en général unique, et qu'il est renouvelé à chaque nouvelle visite. Ainsi notre cher GoogleBot verra à chaque fois des pages      …"
---

Quand on parle de référencement d'un site ou d'un forum, la première chose à faire est en général d'éviter d'afficher l'identifiant de session de l'utilisateur.
Pourquoi ?   Tout simplement parce cet identifiant de session est en général unique, et qu'il est renouvelé à chaque nouvelle visite. Ainsi notre cher GoogleBot verra à chaque fois des pages différentes (puisque suivit de l'identifiant de session).

Voici un [solution](http://www.vouchertrader.co.uk/blog/2006/01/11/a-further-problem-with-php-session-ids-and-google/) simple pour ceux qui utilisent les sessions en PHP (cela ne concerne nullement les forums qui en général utilisent un système plus compliqué de sessions) afin d'éviter qu'un session soit créer si le user agent (le navigateur du client) est GoogleBot. Evidemment l'idéal serai de généraliser cette solution à tous les moteurs de recherches. Google n'est pas le seul à ne pas aimer les identifiants de sessions.
