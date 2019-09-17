---
layout: post
title: 'PHP - Installation de PHP sous Windows'
date: '2004-10-05 22:50:45'
author: j0k
tags: développement
excerpt: 'Avant toute chose, il existe plusieurs façon d''installer Apache, PHP et MySQL...'
---

## _1. Introduction_

Avant toute chose, il existe plusieurs façon d'installer Apache, PHP et MySQL :

 1. Manuellement : En installant un par
    un, PHP, Apache, et MySQL. Même si
    cette solution est plus compliquée,
    elle permet de comprendre le
    mécanisme des fichiers de
    configuration, du serveur Apache...
 2. Automatiquement : Avec un utilitaire
    de type EasyPHP, Wamp5 qui
    automatise pour vous toute la
    procédure d'installation. (C'est
    cette procédure qui sera choisie,
    car à la portée de tous, dans cet
    exemple ci-dessous).

##  _2. Easy PHP_

 Avant toute chose téléchargez [EasyPHP](http://www.easyphp.org/telechargements.php3) , cet utilitaire vous permettra d'installer en quelques secondes PHP, Apache, et MySQL.

##  _3. Installation avec Easy PHP_

 Note : Cette version installera par défaut :

 - Apache
 - MySQL
 - PHP (version 4)
 - phpMyAdmin
 - et supporte le WAP, les formats graphiques GIF, PNG, JPEG, le langageXML...

Après avoir lancé l'éxecutable, séléctionnez un répertoire (par défaut vous pouvez laisser C:\easyphp)

  Normalement après cette installation et après avoir **redémarré votre machine** vous devriez voir apparaître un petit icône (un "e" noir avec un petit carré rouge) dans la barre de tâche Windows. Le serveur Apache et MySQL (MySQL n'est pas obligatoire si vous ne vous servez pas de bases de données) ont été lancé au démarrage.

##  _4. Paramétrage du fichier httpd.conf_

 La dernière manipulation consiste à paramètrer le fichier **httpd.conf** situé dans le répertoire C:\easyphp\apache\conf\ pour spécifier où se trouve votre site en local.

  Ouvrez donc ce fichier avec un simple éditeur de texte (le bloc-notes par exemple) et modifier la ligne dans l'exemple ci-dessous , en indiquant le chemin de votre site en local (dans l'exemple ci-dessous le chemin est **c:\site\site1**)

  Enfin pour regarder si l'ensemble est opérationnel, ouvrez votre navigateur et tapez dans la barre d'adresse :
**http://localhost/**
