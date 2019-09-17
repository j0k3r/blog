---
redirect_from:
  - /blog/php-4-3-10-et-la-replication-en-mysql
layout: post
title: 'PHP 4.3.10 et la réplication en MySQL'
date: '2004-12-15 09:07:34'
author: j0k
tags: blabla
excerpt: 'Et voilà, [PHP 4.3.10](http://www.php.net/downloads.php) est sorti !   On retrouve une foule de [corrections de buGs (~30)](http://www.php.net/ChangeLog-4.php#4.3.10) par rapport à la précédente version mais aussi des améliorations sur les fonctions fprintf, foreach, addslashes et le couple serialize/unserialize.   Evidemment, tous les utilisateurs      ...'
---

Et voilà, [PHP 4.3.10](http://www.php.net/downloads.php) est sorti !   On retrouve une foule de [corrections de buGs (~30)](http://www.php.net/ChangeLog-4.php#4.3.10) par rapport à la précédente version mais aussi des améliorations sur les fonctions fprintf, foreach, addslashes et le couple serialize/unserialize.   Evidemment, tous les utilisateurs de PHP sont conviés à prendre cette version le plus tôt possible.

Je viens de trouver un [tutoriel de réplication sous MySQL](http://jgrondin.developpez.com/article/MySQL/Replication_MySQL/) très interessant !   La réplication en MySQL fonctionne un peu comme le RAID 1. Il y a un maitre et un esclave, on travaille sur le maitre. Le maitre génére des logs de tout ce qui se passe (modifications, effacements, etc.) et les esclaves vont lire les requêtes du maître dans ce fichier de log, pour pouvoir exécuter les mêmes requêtes sur leurs copies.

A noter que les supports de conférences du [forum PHP 2004](http://www.afup.org/forumphp2004/) (qui s'est déroulé à Paris) sont disponibles sur le site de l'[AFUP](http://www.afup.org/forumphp2004/conferences-php.php). A lire, on y découvre des choses intéressantes.
