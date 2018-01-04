---
layout: post
title: 'Migrer une base de donnée MySQL en préservant les accents'
date: '2007-05-07 10:31:45'
author: j0k
tags: '[migration,mysql]'
excerpt: "On est tous tombé sur une migration de MySQL foireuse où tous les accents de la base d'origine sont subitement transformer en truc bizarre du genre â€™ ... Ã§ .. Ã¢ dans la base finale.     \nLe problème apparait la plupart du temps quand on fait une migration de MySQL 4.0 vers une version 4.1 ou supérieure mais bizarrement, il apparaitrait aussi quand on migre      …"
---

On est tous tombé sur une migration de MySQL foireuse où tous les accents de la base d'origine sont subitement transformer en truc bizarre du genre â€™ ... Ã§ .. Ã¢ dans la base finale.
Le problème apparait la plupart du temps quand on fait une migration de MySQL 4.0 vers une version 4.1 ou supérieure mais bizarrement, il apparaitrait aussi quand on migre une base de 4.1 vers 4.1 ...

Orthogonal Thought [éclaire ce problème](http://www.orthogonalthought.com/blog/index.php/2007/05/mysql-database-migration-and-special-characters/) récurrent en remarquant par exemple, que mysqldump utilise utf8 comme charset par défaut. Et rares sont les tables en MySQL 4.0 à être en utf8. Du coup, tous les accents partent en sucette lors de l'export.   C'est une solution qui marche pour lui, je pense qu'elle fonctionnera pour tout le monde !
