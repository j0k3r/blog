---
layout: post
title: 'PHP Filters nettoie les entrées de l''internaute'
date: '2005-07-01 09:12:23'
author: j0k
tags: blabla
excerpt: "La sécurité joue beaucoup sur le traitement des données que rentre les internautes dans les formulaires en ligne. C'est pourquoi il est impératif que chaque entrée d'un formulaire soit obligatoirement vérifiée, validée, parfois même convertie pour s'assurer qu'elle ne mettra pas en péril le site.     \nS'assurer qu'un formulaire répond correctement à tous les      …"
---

La sécurité joue beaucoup sur le traitement des données que rentre les internautes dans les formulaires en ligne. C'est pourquoi il est impératif que chaque entrée d'un formulaire soit obligatoirement vérifiée, validée, parfois même convertie pour s'assurer qu'elle ne mettra pas en péril le site.
S'assurer qu'un formulaire répond correctement à tous les dangers en matière de sécurité, d'injection de script et de tentative de prise de contrôle relève parfois de la gageure paranoïaque. Et c'est de cette nécessaire paranoïa que le groupement OWASP (pour Open Web Application Security Project) propose en téléchargement la bibliothèque Open Source [PHP Filters](http://www.owasp.org/software/labs/phpfilters.html).

Parmi les diverses exemples que nous propose le [JDN](http://developpeur.journaldunet.com/tutoriel/php/050701-php-owasp-filters-nettoyer-chaines.shtml) pour cette bibliothèque, on notera :

* *sanitize_system_string($chaine)* : retire les caractères spéciaux
* *sanitize_html_string($chaine)* : remplace les caractères spéciaux par leur équivalent HTML
* *sanitize_int($entier)* : renvoi le premier entier trouvé
* *sanitize_float($nombre)* : renvoi le premier nombre à virgule trouvé
* *sanitize($entree, $drapeau)* : applique le nettoyage spécifié à l'aide des drapeaux suivants : PARANOID, SQL, SYSTEM, HTML, INT, FLOAT, LDAP ou UTF8
