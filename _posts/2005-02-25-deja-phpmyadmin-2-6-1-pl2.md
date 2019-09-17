---
layout: post
title: 'Déjà phpMyAdmin 2.6.1-pl2 !'
date: '2005-02-25 09:55:48'
author: j0k
tags: blabla
excerpt: "Et oui le premier patch de la version 2.6.1 de phpMyAdmin est sorti seulement depuis hier mais ce nouveau patch instauré un probleme de stabilité qui pouvait poser divers problèmes.   )   Le tout est fixé dans un nouveau patch, le deuxième.   Apparemment cela provenait d'un problème dans le fichier *grab_globals.lib.php*.  \n  \nIl est donc      …"
---

Et oui le premier patch de la version 2.6.1 de phpMyAdmin est sorti seulement depuis hier mais ce nouveau patch instauré un probleme de stabilité qui pouvait poser divers problèmes.      Le tout est fixé dans un nouveau patch, le deuxième.   Apparemment cela provenait d'un problème dans le fichier *grab_globals.lib.php*.

Il est donc conseillé de "patcher" sa nouvelle version de phpMyAdmin, et de passer à la [phpMyAdmin 2.6.1-pl2](http://www.phpmyadmin.net/home_page/downloads.php).

Cette version apporte de nouvelles fonctionnalités majeures dont un onglet état des serveurs permettant de controler :   -les statistiques sur le trafic   -les statistiques sur les requêtes   -les variables d'environnement   -les moteurs installés (innodb...)

Il est désormais possible de déplacer une table sur une autre base, ou de la copier directement, sans avoir à passer par un export sql comme c'etait le cas auparavant.

De plus on peut accéder dans chaque table à une partie "Maintenance de la table" qui permet simplement de :
* Vérifier la table
* Analyser la table
* Réparer la table
* Optimiser la table
* Recharger la table ("FLUSH")

A noter que cette version gère désormais le mot clé VIEW

En résumé, PhpMyadmin s'est doté d'une version qui facilite désormais grandement les opérations d'administration, de migration et lui permet d'aquerir une plus grande robustesse.

*Infos provenant de [PHPindex](http://www.phpindex.com/news/news_lire.php3?element=2768)*
