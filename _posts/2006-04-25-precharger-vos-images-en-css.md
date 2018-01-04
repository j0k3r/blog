---
layout: post
title: 'Précharger vos images en CSS'
date: '2006-04-25 01:48:41'
author: j0k
tags: '[]'
excerpt: "Quand on utilise des rollovers qui ne sont pas en une seule image, par exemple, on remarque toujours un temps (même s'il est très court) entre le moment où l'on passe la souris sur le lien et le moment où l'image qui indique qu'on est sur le lien s'affiche. C'est tout normal, c'est le temps de charger l'image.     \nUne astuce, que tout le monde connait, consiste      …"
---

Quand on utilise des rollovers qui ne sont pas en une seule image, par exemple, on remarque toujours un temps (même s'il est très court) entre le moment où l'on passe la souris sur le lien et le moment où l'image qui indique qu'on est sur le lien s'affiche. C'est tout normal, c'est le temps de charger l'image.
Une astuce, que tout le monde connait, consiste à précharger l'image de façon à ce que quand la souris passera sur le lien, elle s'affiche tout de suite.    Diverses techniques de préchargement d'images existent, mais c'est vrai que la plus simple reste quand même la méthode en CSS.

&quot;C'est tout con, mais fallait y penser !&quot;. Le principe est ultra simple, on crée un élément qui préchargement les images et on défini un à un les backgrounds en renseignant les images. Ainsi elles seront chargées en arrière plan. Super !

Un [tips à connaître](http://specere.net/?webtips) !
