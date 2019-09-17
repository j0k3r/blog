---
layout: post
title: 'Stocker vos sessions dans MySQL'
date: '2006-05-03 08:55:22'
author: j0k
tags: blabla
excerpt: "Comme le fait déjà beaucoup de script PHP, comme phpBB par exemple, vous pouvez stocker vos sessions dans une base de données, MySQL par exemple.     \nUne fonction PHP, session_set_save_handler(), permet de configurer les fonctions de stockage des sessions. En fonction de l'ordre des paramètres, PHP saura quelle fonction il doit utilise pour ouvrir une fonction,      …"
---

Comme le fait déjà beaucoup de script PHP, comme phpBB par exemple, vous pouvez stocker vos sessions dans une base de données, MySQL par exemple.
Une fonction PHP, session_set_save_handler(), permet de configurer les fonctions de stockage des sessions. En fonction de l'ordre des paramètres, PHP saura quelle fonction il doit utilise pour ouvrir une fonction, fermer une session, y enregistrer des données, etc ...   Stocker les sessions dans une base de données permet d'éviter de générer les fichiers sur votre serveur et pas mal d'autres choses.

C'est un article de [PHP Guru](http://shiflett.org/articles/guru-speak-jan2005) que Chris Shiflett mets en avant.
