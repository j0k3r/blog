---
redirect_from:
  - /blog/personnaliser-l-affichage-des-dossiers-sous-apache
layout: post
title: 'Personnaliser l''affichage des dossiers sous Apache'
date: '2006-01-20 05:24:27'
author: j0k
tags: blabla
excerpt: "On peut facilement personnaliser l'affichage des dossiers (ne contenant pas d'index) pour ainsi palier au banal (et moche) affichage par défaut d'Apache.     \nOn peut spécifier tout un tas de directive mais je pense que la plus importante reste quand même le fait de pouvoir ajouter un fichier d'en-tête (header) et un fichier de bas de page (footer). Ainsi on      …"
---

On peut facilement personnaliser l'affichage des dossiers (ne contenant pas d'index) pour ainsi palier au banal (et moche) affichage par défaut d'Apache.
On peut spécifier tout un tas de directive mais je pense que la plus importante reste quand même le fait de pouvoir ajouter un fichier d'en-tête (header) et un fichier de bas de page (footer). Ainsi on obtient une personnalisation assez avancée de nos dossiers.

Il est tout a fait possible de spécifier par exemple que les fichiers zip seront indiqué comme des &quot;Fichiers compressés&quot; ou encore que le document &quot;cv-pro.pdf&quot; aura comme description &quot;Mon CV en français&quot;.

Bref il existe tout un tas de directives que [liste](http://developpeur.journaldunet.com/tutoriel/out/060113-apache-htaccess-index-options.shtml) exhaustivement le JDN.
