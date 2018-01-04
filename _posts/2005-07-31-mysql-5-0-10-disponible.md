---
layout: post
title: 'MySQL 5.0.10 disponible'
date: '2005-07-31 03:32:08'
author: DanRaZor
tags: '[]'
excerpt: "MySQL 5.0.10 vient d'être publiée"
---

MySQL 5.0.10 vient d'être publiée. ( [Téléchargement](http://dev.mysql.com/downloads/mysql/5.0.html) )
Nouvelles fonctionnalités :
+ Amélioration de la sécurité : correction d'une vulnérabilité liée à zlib.
+ Amélioration de l'affichage des triggers
+ La base INFORMATION_SCHEMA inclut la table TRIGGERS.
+ Sur Windows, le chemin de rechercher inclut ..my.ini
+ Ajout de la fonction C Added mysql_get_character_set_info()
+ Il n'est plus nécessaire de verrouiller les tables pour les déclencheurs
+ MySQL Cluster: nouvelle option -p pour le client ndb_mgmd.
+ L'espace de nom des triggers a changé.

Lors de la migration de MySQL 5.0.9 en 5.0.10, il faut détruire tous les triggers, puis les recréer. Dans le cas contraire, DROP TRIGGER ne fonctionnera pas après la mise à jour.

**Source : [Nexen](http://www.nexen.net/news/gen.php/2004/03/06/4446,0,0,0,0.php)**
