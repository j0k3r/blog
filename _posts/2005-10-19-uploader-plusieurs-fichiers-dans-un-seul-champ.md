---
redirect_from:
  - /blog/uploader-plusieurs-fichiers-dans-un-seul-champ
layout: post
title: 'Uploader plusieurs fichiers dans un seul champ !'
date: '2005-10-19 04:04:24'
author: j0k
tags: blabla
excerpt: "Voilà quelques choses d'assez révolutionnaire !   Vous avez certainement déjà rencontré le problème lors de l'upload de plusieurs fichiers (galerie d'image, pièces jointes de mails, etc ...). La seule solution est de mettre plusieurs champs pour uploader plusieurs fichiers.  \n  \nUne solution en javascript existe et permet d'uploader plusieurs fichiers en      …"
---

Voilà quelques choses d'assez révolutionnaire !   Vous avez certainement déjà rencontré le problème lors de l'upload de plusieurs fichiers (galerie d'image, pièces jointes de mails, etc ...). La seule solution est de mettre plusieurs champs pour uploader plusieurs fichiers.

Une solution en javascript existe et permet d'uploader plusieurs fichiers en même temps. Le seul problème est que PHP limite l'envoie de fichier (en général bloqué à 2Mo). Ainsi le script se limite volontairement à 3 fichiers pour un champ d'upload.

Le résultat est au rendez vous. [A vous de juger](http://the-stickman.com/web-development/javascript/upload-multiple-files-with-a-single-file-element/).

Contrairement à ce que l'on pourrai penser, AJAX n'est pas derrière tout ça :)
