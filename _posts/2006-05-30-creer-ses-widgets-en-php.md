---
layout: post
title: 'Créer ses Widgets en PHP'
date: '2006-05-30 11:08:29'
author: DanRaZor
tags: '[]'
excerpt: "Avec ce [tutorial phpIt](http://www.phpit.net/article/create-html-widgets-php/) vous allez apprendre à créer vos propres tags HTML   et les remplacer par du contenu dynamique, et tout ça en PHP.  \n  \nCe tutorial montre donc comment créer ses propres      …"
---

Avec ce [tutorial phpIt](http://www.phpit.net/article/create-html-widgets-php/) vous allez apprendre à créer vos propres tags HTML   et les remplacer par du contenu dynamique, et tout ça en PHP.

Ce tutorial montre donc comment créer ses propres [widgets](http://www.google.fr/search?q=define%3Awidget+&amp;start=0&amp;ie=utf-8&amp;oe=utf-8&amp;client=firefox-a&amp;rls=org.mozilla:fr:official).

Ces widgets permettent de coder plus simplement, elles ne sont pas visualisées   par le Browser mais vu par le compilateur PHP qui les interprète.

Le code : **Here is my widget: &lt;mytag&gt;Hello World&lt;/mytag&gt;**

deviendra dans le browser final : **Here is my widget: &lt;span style=&quot;font-weight:bold;font-style:italic;font-size:120%&quot;&gt;Hello World&lt;/span&gt;**

On voit bien que le source PHP est plus lisible et ressemble à du HTML pur.

Une fois ces tags crées on peut les enrichir d'attributs pour leur donner    des fonctions un peu plus souples et dynamique, et tout ça en rendant le source PHP extrêmement lisible tout comme du HTML simple.
