---
layout: post
title: 'Émulé les liens de l''outils du W3C'
date: '2005-10-29 12:30:39'
author: j0k
tags: blabla
excerpt: "Vous ne le savez peut-être pas, mais le W3C propose un outil que l'on pourrai qualifier d'assez intéressant. Son but est simple, permettre à n'importe qui te tester n'importe quelle page avec n'importe quel outil de validation (html, css, lien ...) que propose le W3C.     \nCet [outils](http://www.w3.org/,tools) n'a pas de nom, mais est caractérisé par une      …"
---

Vous ne le savez peut-être pas, mais le W3C propose un outil que l'on pourrai qualifier d'assez intéressant. Son but est simple, permettre à n'importe qui te tester n'importe quelle page avec n'importe quel outil de validation (html, css, lien ...) que propose le W3C.
Cet [outils](http://www.w3.org/,tools) n'a pas de nom, mais est caractérisé par une virgule à la suite de l'url normale et du nom de l'outil que l'on veut utiliser. Par exemple pour valider une page on pourrai faire `www.j0k3r.net/,validate` et ceci lancerai le test de validation html pour la page `www.j0k3r.net`.

C'est en fait des simples ré-écriture d'urls qui renvoie sur les différents outils du W3C. Voici un [mini tutoriel](http://www.mnot.net/blog/2005/10/23/rewrite_tools) qui montre comme implémenter ces liens sur votre site. A vous d'en déterminer son utilité ou pas.
