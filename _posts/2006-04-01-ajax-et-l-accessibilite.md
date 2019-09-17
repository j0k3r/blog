---
redirect_from:
  - /blog/ajax-et-l-accessibilite
layout: post
title: 'AJAX et l''accessibilité'
date: '2006-04-01 04:00:29'
author: j0k
tags: blabla
excerpt: "Avec l'engouement que suscite AJAX, il est peut être bon de faire un rappel sur l'effet que cela a sur l'accessibilité et expliquer comment ils peuvent tous les deux cohabiter. Il faut savoir que l'un n'exclue pas l'autre comme beaucoup le montre.     \nDans un premier temps, il faut éviter de combiner les événements dans les balises HTML. Par exemple en utilisant      …"
---

Avec l'engouement que suscite AJAX, il est peut être bon de faire un rappel sur l'effet que cela a sur l'accessibilité et expliquer comment ils peuvent tous les deux cohabiter. Il faut savoir que l'un n'exclue pas l'autre comme beaucoup le montre.
Dans un premier temps, il faut éviter de combiner les événements dans les balises HTML. Par exemple en utilisant les onclick et onblur, de même il faut éviter de faire les liens commençant par javascript:.

Les choses communes à faire est de stocker tout le JavaScript dans des fichiers externes, de plus cela à un grand avantage c'est que le JavaScript est directement mis dans le cache du navigateur. Il est évident qu'il faut aussi s'assurer que le site fonctionne correctement _sans_ JavaScript.

Une technique plus longue consiste à attribuer un ID à une balise et via les évènements de JavaScript, attribué une action à cette ID. Robert donne une [solution](http://www.robertnyman.com/2006/03/23/ajax-javascript-and-accessibility/) facilitant l'accessibilité.
