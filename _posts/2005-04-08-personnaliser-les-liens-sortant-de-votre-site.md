---
layout: post
title: 'Personnaliser les liens sortant de votre site'
date: '2005-04-08 06:40:23'
author: j0k
tags: blabla
excerpt: "Vous avez peut-être déjà aperçu des petits icônes ()), sur les wikis notamment, qui indique que le lien sur lequel vous allez cliquer vous envoie sur une page extérieure au site.     \nC'est géré en CSS je ne vous apprends rien de nouveau. Mais le *_blank* de la balise target n'est pas apprécié des validateurs de code (fin la balise target, mais cela dépend du      …"
---

Vous avez peut-être déjà aperçu des petits icônes, sur les wikis notamment, qui indique que le lien sur lequel vous allez cliquer vous envoie sur une page extérieure au site.

C'est géré en CSS je ne vous apprends rien de nouveau. Mais le *_blank* de la balise target n'est pas apprécié des validateurs de code (fin la balise target, mais cela dépend du niveau de validité).

Alors [Alsacréations](http://css.alsacreations.com/Tutoriels-et-articles-divers/liens-externes-nouvelle-fenetre) vous propose un petit script en javascript qui repère vos liens dont la class indique que c'est un lien externe et lors du clic sur ce lien, vous l'ouvre dans une nouvelle page. Ainsi la séparation contenu/script vous permet d'alléger votre code sans pour cela le rendre moins opérant.

Et les visiteurs peuvent maintenant distinguer les liens externes des liens internes.   Hop dans les marque-pages toi aussi :)
