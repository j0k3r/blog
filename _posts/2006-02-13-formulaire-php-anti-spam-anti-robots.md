---
layout: post
title: 'Formulaire PHP anti-spam, anti-robots'
date: '2006-02-13 12:49:35'
author: j0k
tags: '[]'
excerpt: 'Les temps sont durs et le spam est devenu la vraie chienlit du net. Nombreuses sont les personnes qui ont dernièrement souffert des attaquent sur leurs formulaires, via des robots sans vergogne, ppan.net a vite décidé de développer une protection. Ce n''est pas nouveau car en place sur de nombreux sites (notamment les inscriptions aux forums) mais c''est juste une façon de voir      ...'
---

Les temps sont durs et le spam est devenu la vraie chienlit du net. Nombreuses sont les personnes qui ont dernièrement souffert des attaquent sur leurs formulaires, via des robots sans vergogne, ppan.net a vite décidé de développer une protection. Ce n'est pas nouveau car en place sur de nombreux sites (notamment les inscriptions aux forums) mais c'est juste une façon de voir la chose...
Cela passe par une image qui est générée soit en fonction d'un dossier qui contient les images soit via la librairie GD (de façon à minimiser encore plus les risques). Son code est contenu dans une variable de session qui lors de la soumission est testé. Si le formulaire est soumis deux fois, le code n'est pas le même lors du deuxième envoie et donc une erreur sera affichée.

Un [p'tit code](http://ppan.net/webdev/formulaire-anti-spam.php) à avoir sous la main si vous décidez de mettre en place un formulaire.

Regarder aussi les autres rubriques du site, elles sont toutes aussi intéressantes !
