---
layout: post
title: 'Le schéma d''une base de Tag Cloud'
date: '2006-03-23 01:47:01'
author: j0k
tags: blabla
excerpt: "Les [Tag Clouds](http://www.j0k3r.net/news-faire-votre-propre-systeme-de-tags-en-php-1036.html), dont je vous avais déjà parlé, sont ce que l'on appelle littéralement un nuage de mot clés. Cela permet de voir apparaître les mots les plus utilisés dans les news sur un site, par exemple.     \nPhilipp Keller, après avoir rapidement discuté sur la structure du      …"
---

Les [Tag Clouds](http://www.j0k3r.net/news-faire-votre-propre-systeme-de-tags-en-php-1036.html), dont je vous avais déjà parlé, sont ce que l'on appelle littéralement un nuage de mot clés. Cela permet de voir apparaître les mots les plus utilisés dans les news sur un site, par exemple.
Philipp Keller, après avoir rapidement discuté sur la structure du schéma SQL de la base de del.icio.us, a obtenu une base de donnée [significative](http://www.pui.ch/phred/archives/2005/04/tags-database-schemas.html). Ainsi plutôt que d'assigner une table &quot;tag&quot; à une table &quot;news&quot;, il gère directement les tags dans la base séparé par un espace. Ainsi pour les recherches, il suffit de faire un banal LIKE '%tag%'.

Il explique aussi une solution Toxi et Scuttle.   Intéressant si vous souhaitez mettre en place un tel système sur votre site.
