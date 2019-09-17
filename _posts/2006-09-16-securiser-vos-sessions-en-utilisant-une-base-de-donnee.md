---
layout: post
title: 'Sécuriser vos sessions en utilisant une base de donnée'
date: '2006-09-16 04:12:40'
author: j0k
tags: blabla
excerpt: "Le club Developpez.com publie un article sur la sécurité des sessions en les stockant dans une base de données.     \nLes sessions créées sur un site sont enregistrées dans un dossier sur le serveur nommé par défaut /tmp. Si par mégarde le serveur venait à être mal configuré, tout le monde hébergé sur ce serveur aurait accès à ce répertoire et donc aux      …"
---

Le club Developpez.com publie un article sur la sécurité des sessions en les stockant dans une base de données.
Les sessions créées sur un site sont enregistrées dans un dossier sur le serveur nommé par défaut `/tmp`. Si par mégarde le serveur venait à être mal configuré, tout le monde hébergé sur ce serveur aurait accès à ce répertoire et donc aux informations contenues dans les sessions.   Si vous utilisez une base de données pour les stocker, ce problème disparaît.

C'est le système que mette en place beaucoup de CMS ou de forum pour palier à d'éventuels problèmes cités ci-dessous.

Une [méthode sécurisée](http://a-pellegrini.developpez.com/tutoriels/php/session-db/), assez simple à mettre à place alors pourquoi ne pas en profiter ? :)
