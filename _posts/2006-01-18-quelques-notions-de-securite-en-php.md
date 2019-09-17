---
redirect_from:
  - /blog/quelques-notions-de-securite-en-php
layout: post
title: 'Quelques notions de sécurité en PHP'
date: '2006-01-18 08:30:56'
author: j0k
tags: blabla
excerpt: 'La sécurité en PHP est devenu le sujet le plus sensible de toutes les communautés. Ce n''est généralement pas du côté de PHP lui même que les failles arrivent, mais très souvent du côté du codage qu''en fait l''utilisateur.   Il faut systématiquement vérifier toutes les données que l''internaute (visiteur) peut renseigner dans l''application. C''est une des phrases que l''on      ...'
---

La sécurité en PHP est devenu le sujet le plus sensible de toutes les communautés. Ce n'est généralement pas du côté de PHP lui même que les failles arrivent, mais très souvent du côté du codage qu'en fait l'utilisateur.   Il faut systématiquement vérifier toutes les données que l'internaute (visiteur) peut renseigner dans l'application. C'est une des phrases que l'on répète le plus souvent !

Dans ce [tutoriel](http://www.phpit.net/article/php-security-basic/) de PHPit, on découvre comment (globalement) protégé et vérifié les entrées des visiteurs avant une insertion dans une base de donnée par exemple. Notamment on trouve la fonction PHP *mysql_real_escape_string* qui protège les caractères spéciaux d'une requête SQL.

Un autre article à lire sur la sécurité en PHP !
