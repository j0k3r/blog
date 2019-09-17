---
layout: post
title: 'Amélioration FireFox'
date: '2005-05-02 08:33:05'
author: DanRaZor
tags: blabla
excerpt: "Voici la traduction d’une petite astuce pour augmenter la rapidité d’affichage des pages Web sous Firefox (source : [Forevergeek](http://forevergeek.com/)) :     \n_1._ Dans la barre d’adresse de Firefox tapez : **about:config**. Recherchez les paramètres suivants :  \n  \n**network.http.pipelining**   **network.http.proxy.pipelining**       …"
---

Voici la traduction d’une petite astuce pour augmenter la rapidité d’affichage des pages Web sous Firefox (source : [Forevergeek](http://forevergeek.com/)) :

1. Dans la barre d’adresse de Firefox tapez : **about:config**. Recherchez les paramètres suivants :

   * network.http.pipelining
   * network.http.proxy.pipelining
   * network.http.pipelining.maxrequests

   En temps normal, le navigateur fait une requête à la fois. Quand on active l’option pipelining, celui-ci va en exécuter plusieurs à la fois, ce qui augmente de façon significative l’affichage.

2. Modifiez les entrées comme suit :

   Mettre **network.http.pipelining** à **true**   Mettre **network.http.proxy.pipelining** à **true**   Mettre **network.http.pipelining.maxrequests** à **30**. Firefox fera alors 30 requêtes à la fois, au lieu d’une seule.

3. Enfin, créez une nouvelle chaîne de caractères, via un clique-droit ... Nouvelle -&gt; Valeur numérique ...   Nommez-la **nglayout.initialpaint.delay**, et donnez-lui pour valeur **0**. Il s’agit de l’intervalle entre lequel Firefox reçoit un élément et celui où il fait une nouvelle requête.

   Cette astuce n’est avantageuse que si vous disposez d’une connexion haut débit, type ADSL. Les internautes qui surfent avec un modem téléphonique standard, ne verront malheureusement pas la différence.


J'ai personnellement testé et noté un gain assez marqué.
