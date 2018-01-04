---
layout: post
title: 'Les accélérateurs PHP à la loupe'
date: '2006-06-09 10:00:38'
author: j0k
tags: '[]'
excerpt: "Ipersec propose une étude sur les 3 accélérateurs PHP les plus populaires, à savoir : [eAccelerator](http://www.j0k3r.net/php-installer-eaccelerator-23.html), APC et Zend Platform.     \nLe processus de test est le suivant : Chargement du fichier PHP , parsage du code source et transformation en &quot;opcode&quot; (code qui peut être exécuté sur le serveur)      …"
---

Ipersec propose une étude sur les 3 accélérateurs PHP les plus populaires, à savoir : [eAccelerator](http://www.j0k3r.net/php-installer-eaccelerator-23.html), APC et Zend Platform.
Le processus de test est le suivant : Chargement du fichier PHP , parsage du code source et transformation en &quot;opcode&quot; (code qui peut être exécuté sur le serveur) et exécution de l' &quot;opcode&quot;.   Certains accélérateurs suppriment du code inutile (boucles vides, variables non-utilisées...), seul APC n'optimise pas le code. eAc et Zend Platform essayent au mieux d'optimiser le code.

_Première étape_ : Le support et la maintenance   Seul Zend Platform propose un &quot;vrai&quot; support et une &quot;vraie&quot; maintenance, étant donné que c'est un produit payant.   eAc et APC dispose eux aussi d'un support mais il se fait via la communauté de l'Open Source (ce n'est pas forcément moins bien hein !). A noter tout de même qu'eAc dispose d'une communauté d'utilisateurs plus grande que APC.

_Deuxième étape_ : Les performances   eAc et APC tirent leur épingle du jeux puisqu'après des tests, il apparait qu'ils aient des performances similiaires. eAc serait légère plus rapide sur certain point, mais c'est négligeable.   Bizarrement, Zend Platform n'a pas été testé ...

_Troisième étape_ : Mise à jour des caches   eAc est là plus performant qu'APC. Lorsque vous modifiez votre code lors d'un fort traffic, APC peut causer quelques problèmes.

Et pour finir, si vous avez de sous et que vous êtes désireux d'un support officiel, Zend Platform vous ravira. Sinon eAc est une très bonne alternative !

Voir l'[article complet](http://www.ipersec.com/index.php?q=en/bench_ea_vs_apc&amp;page=0%2C0) en anglais sur Ipersec.   Via [PHP Index](http://www.phpindex.com/index.php/2006/06/08/2170-test-daccelerateurs-php).
