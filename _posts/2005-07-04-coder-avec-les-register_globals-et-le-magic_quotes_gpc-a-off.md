---
redirect_from:
  - /blog/coder-avec-les-register_globals-et-le-magic_quotes_gpc-a-off
layout: post
title: 'Coder avec les register_globals et le magic_quotes_gpc à OFF'
date: '2005-07-04 10:23:57'
author: j0k
tags: blabla
excerpt: "Quand vous codez avec les register_globals et le magic_quotes_gpc à OFF, il est facile d'oublier que certains les emploient à ON.     \nCependant il est tout à fait facile d'introduire des vulnérabilités dans votre code quand il est employé sur une telle ou telle plateforme. Le code présenté sur [phpguru](http://www.phpguru.org/#58) peut être placé sur      …"
---

Quand vous codez avec les register_globals et le magic_quotes_gpc à OFF, il est facile d'oublier que certains les emploient à ON.
Cependant il est tout à fait facile d'introduire des vulnérabilités dans votre code quand il est employé sur une telle ou telle plateforme. Le code présenté sur [phpguru](http://www.phpguru.org/#58) peut être placé sur votre site, dans un fichier inclut dans toutes les pages par exemple, pour fixer ceci. Appelez simplement dispelGlobals() et dispelMagicQuotes() et vous n'aurez plus besoin de vous inquiéter.
