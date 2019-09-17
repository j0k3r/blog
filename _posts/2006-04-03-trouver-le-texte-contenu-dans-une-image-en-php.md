---
layout: post
title: 'Trouver le texte contenu dans une image en PHP'
date: '2006-04-03 07:29:41'
author: j0k
tags: blabla
excerpt: "L'OCR est une technique permettant de convertir les caractères d'une image en caractère ASCII et ainsi découvrir le texte contenu dans l'image. C'est une reconnaissance optique de caractères.     \nDivers programmes étaient déjà disponible dans le commerce pour par exemple transformer un document papier en document texte numérique et donc éditable.  \n  \n  …"
---

L'OCR est une technique permettant de convertir les caractères d'une image en caractère ASCII et ainsi découvrir le texte contenu dans l'image. C'est une reconnaissance optique de caractères.
Divers programmes étaient déjà disponible dans le commerce pour par exemple transformer un document papier en document texte numérique et donc éditable.

Tout cela pour en venir au fait qu'une classe PHP développé par un ukrainien fait le même travail !! Ca peut paraître fou, mais [phpOCR](http://www.phpclasses.org/browse/package/2874.html) peut identifier le texte dans des images monochromes (pour le moment) après une phase de &quot;lecture approfondi&quot; de l'image. Cette phase analyse l'image pour en sortir des structures de données d'identification des images dont les caractères sont connus. Il utilise ensuite un algorithme pour reconnaitre chaque caractère.

phpOCR est une bien belle classe qui a reçu le prix de l'innovation en février 2006 par PHPClasses.

On pourrait dire que c'est la fin des [vérification de formulaires via CAPTCHA](http://www.j0k3r.net/news-verification-de-formulaires-via-captcha-1127.html) sur internet ... Vous savez toutes ces images avec des lettres à l'intérieur pour différencier un robot d'un humain. Si cette classe prend de l'ampleur et permet de bien trouver ces caractères il faudra être encore plus rude pour déterminer si c'est une machine ou humain qui rempli le formulaire ... :(

Via [Enterprise PHP](http://enterprise.phpmagazine.net/2006/04/recognize_text_objects_in_grap.html)
