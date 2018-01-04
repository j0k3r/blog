---
layout: post
title: 'Afficher un aperçu avant l''impression'
date: '2006-10-24 02:29:44'
author: j0k
tags: '[]'
excerpt: "Quand on développe un site internet, on oublie bien (trop) souvent le fait que certains utilisateurs souhaitent imprimer des pages de votre site internet pour les lire plus tard, dans le métro, bref pas tout de suite en tout cas.     \nUne alternative très simple consiste à mettre en place une feuille de style CSS qui spécifie la disposition de vos blocs pour      …"
---

Quand on développe un site internet, on oublie bien (trop) souvent le fait que certains utilisateurs souhaitent imprimer des pages de votre site internet pour les lire plus tard, dans le métro, bref pas tout de suite en tout cas.
Une alternative très simple consiste à mettre en place une feuille de style CSS qui spécifie la disposition de vos blocs pour l'impression, et uniquement pour. Cependant quand un utilisateur imprime un site, il utilise que très rarement la fonction &quot;imprimer&quot; du navigateur et passe bien souvent par un bouton, mis en place par le webmaster sur le site, &quot;imprimer cette page&quot;.   Gros inconvénient, aucun aperçu n'est généré en passant par cette méthode. C'est à dire qu'en cliquant sur &quot;imprimer cette page&quot;, une sorte de popup va s'ouvrir invitant l'utilisateur à sélectionner une imprimante pour imprimer et c'est tout

Il existe aussi une fonction &quot;aperçu&quot; dans le navigateur, mais pareil, très peu de gens l'utilisent.

La [solution](http://www.alistapart.com/articles/printtopreview) la plus simple est de proposer un lien &quot;imprimer cette page&quot; qui changera de feuille de style (il mettra en place la feuille pour l'impression) et invitera ensuite l'utilisateur à choisir son imprimante pour l'imprimer.   Ainsi l'utilisateur a un aperçu de la page avant son impression. Astucieux :)
