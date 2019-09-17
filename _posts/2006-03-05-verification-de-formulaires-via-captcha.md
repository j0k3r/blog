---
redirect_from:
  - /blog/verification-de-formulaires-via-captcha
layout: post
title: 'Vérification de formulaires via CAPTCHA'
date: '2006-03-05 05:00:51'
author: DanRaZor
tags: blabla
excerpt: "Un [article de phpBuilder](http://www.phpbuilder.com/columns/patterson20060301.php3) ( en anglais ) nous explique comment réaliser un sytème de vérification de formulaires, ou comment éviter les bots/hacks de formulaires.     \nLe principe est de construire une image aléatoire, qui en fait représente une chaine alphanumérique d'authentification.   On      …"
---

Un [article de phpBuilder](http://www.phpbuilder.com/columns/patterson20060301.php3) ( en anglais ) nous explique comment réaliser un sytème de vérification de formulaires, ou comment éviter les bots/hacks de formulaires.
Le principe est de construire une image aléatoire, qui en fait représente une chaine alphanumérique d'authentification.   On obtient en fait une image et un code lié ( qui est en fait la chaîne initiale cryptée ).   On peut y découvrir comment choisir les couleurs, les polices ... un exemple de code pour obtenir une chaine aléatoire ... et l'utilisation de GD pour générer l'image finale.

On y trouve même un [exemple complet](http://phpbuilder.bpatterson.net/articles/examples/image_verification/index.php) et la [source associée](http://phpbuilder.bpatterson.net/articles/sources/image_verification/index.phps).   La méthode n'est pas 100 % fiable du fait que la clé est en clair dans le formulaire mais elle évitera une grosse majorité des validations de formulaires non désirées ( bots/hack ).
