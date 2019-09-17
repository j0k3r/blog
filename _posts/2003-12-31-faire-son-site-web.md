---
layout: post
title: 'Faire son site web'
date: '2003-12-31 02:21:21'
author: j0k
tags: développement
excerpt: 'On appelle généralement "web" le service internet permettant de naviguer à travers des pages web.'
---

## _1) Intro :_

On appelle généralement "web" le service internet permettant de naviguer à travers des pages web. Le protocole le plus utilisé pour ce type de communications est le protocole HTTP (HyperText Transfer Protocol), ce qui explique le fait que vous saisissiez des URL commençant par http://. Le protocole HTTP en est actuellement à sa version 1.1

 Vous pourrez aussi rencontrer le HTTPS (protocole HTTP sécurisé) utilisé dans le plus part des cas pour des sites de commerces électroniques car il s'agit d'un protocole sécurisé permettant de chiffrer les requêtes échangées entre le navigateur et le serveur.

 On peut aussi voir le protocole FTP (File Transfer Protocol) qui permet de transférer des fichiers sur un réseau fonctionnant sous TCP/IP.

##  _2) HTML :_

 Le standard désormais établi pour la diffusion de document sur le web est le langage HTML (HyperText Markup Language). Le langage HTML permet de définir la présentation du document ainsi que les liens hypertextes vers d'autres documents à l'aide de balises de formatage.

 Vous pouvez trouver de l'aide en html sur le site ([ici](http://www.j0k3r.net/html-index-0.html)). Le html en est à la version 4.0.

  Plusieurs languages seront utile pour faire votre site :

 - Le javascript, permettant d'effectuer des opérations sur le navigateur du client
 - Le DOM (Document Object Model) définissant une arborescence d'objets représentant la structure du document. Celà permet notamment de pouvoir manipuler l'ensemble des objets contenus dans le document.
 - Les feuilles de style (CSS - cascading StyleSheets). Les feuilles de style permettent de définir de façon annexe au document les styles de chaque balise

##  _3) Les pages dynamiques :_

 Les pages web statiques, c'est-à-dire un simple fichier texte contenant du code HTML, sont très pratiques pour créer un site contenant quelques dizaines de pages mais possèdent leur limites :

 - Une maintenance difficile dûe à l'obligation de modifier manuellement chacune des pages (notamment dans le cas ou toutes les pages possèdent un même menu)
 - L'impossibilité de renvoyer une page personnalisée selon le visiteur
 - L'impossibilité de créer une page dynamiquement selon les entrées d'une base de données...

C'est pourquoi il a été nécessaire de mettre au point une solution permettant de générer des pages web du côté du serveur. Ainsi de nombreuses solutions mettant en oeuvre un langage de script sur le serveur ont été mises au point :

 - La première, appelée CGI (Common Gateway Interface) consistait à interpréter des programmes (généralement écrits en perl ou en langage C), puis de leur faire renvoyer un contenu compatible avec le protocole HTTP
 - Le langage ASP (Active Server Pages) de Cro$$oft a permis de simplifier l'écriture de tels scripts en manipulant des objets en VBScript.
 - Le langage PHP (Hypertext preprocessor) emploie son propre langage (dérivé du C++ et de Perl) et permet de nombreuses fonctionnalités (équivalentes à celles de la technologie ASP). Vous pouvez trouver de l'aide en php sur le site.
 - Le langage JSP (Java Server Pages) est la plus récente parmi ces technologies. Elle permet d'utiliser toute la puissance de Java pour créer des pages web dynamiques.

   © j0k
