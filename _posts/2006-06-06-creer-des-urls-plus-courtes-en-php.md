---
layout: post
title: 'Créer des URLs plus courtes en PHP'
date: '2006-06-06 01:19:08'
author: j0k
tags: '[]'
excerpt: "Le principe ici n'est pas de faire de l'url rewriting, même si on sait qu'il faut en faire pour plus de lisibilité pour les utilisateurs comme pour les moteurs de recherches. Mais je pense que ce tutoriel s'apparente plus pour une utilisation dans un back office.     \nSouvent on a besoin de passer plusieurs paramètres à une page      …"
---

Le principe ici n'est pas de faire de l'url rewriting, même si on sait qu'il faut en faire pour plus de lisibilité pour les utilisateurs comme pour les moteurs de recherches. Mais je pense que ce tutoriel s'apparente plus pour une utilisation dans un back office.
Souvent on a besoin de passer plusieurs paramètres à une page (page.php?id=1&amp;page=2&amp;foo=3) et bien cette petite fonction va vous permettre de faire une url comme ceci : page.php?1&amp;2&amp;3.    Derrière, plutôt que d'appeler sa variable `$_GET['...']`, on utilise la fonction en lui passant en paramètre la position dans l'url. Par exemple pour récupérer le 2, on utilise get_short_url('1') (0 étant le premier paramètre).

[Intéressant](http://www.quate.net/newsnet/read.php?id=42), à vous devoir si on avait vraiment l'utilité.
