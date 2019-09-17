---
layout: post
title: 'PHP 4 et PHP 5 sur une seule installation d''Apache 2'
date: '2006-07-26 08:08:36'
author: j0k
tags: blabla
excerpt: "Enfin un tutorial que j'attendais depuis longtemps !     \nJ'en avais trouvé quelques uns mais aucun ne fait ce que je voulais. Soit il fallait changer de de fichier conf (à la manière de Wamp) soit il fallait faire tourner deux versions d'apache sur un port différent.  \n  \nLà, le serveur tourne sur notre bon vieux port 80 et la différenciation se      …"
---

Enfin un tutorial que j'attendais depuis longtemps !
J'en avais trouvé quelques uns mais aucun ne fait ce que je voulais. Soit il fallait changer de de fichier conf (à la manière de Wamp) soit il fallait faire tourner deux versions d'apache sur un port différent.

Là, le serveur tourne sur notre bon vieux port 80 et la différenciation se fait sur le nom du sous-domaine :
* localhost appelle PHP 4
* php5.localhost appelle PHP 5

L'[installation](http://devzone.zend.com/node/view/id/633) a été testé sur Windows XP et 2k sous Apache 2.2, PHP 4.4.3RC3-dev et PHP 5.1.4. Il n'y a pas de raison que cela ne fonctionne pas avec d'autre version de PHP.

A tester !
