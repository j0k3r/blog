---
layout: post
title: 'Ca spoofe dans les navigateurs !'
date: '2005-02-08 07:56:49'
author: j0k
tags: '[]'
excerpt: "Une petite faille liée à l'IDN (International Domain Name) vient d'être reportée. Elle concerne un bon nombre de navigateur, donc notre cher FireFox et son grand frère Mozilla"
---

Une petite faille liée à l'IDN (International Domain Name) vient d'être reportée. Elle concerne un bon nombre de navigateur, donc notre cher FireFox et son grand frère Mozilla :
* Mozilla 1.7.5 et inférieures
* Firefox 1.0 et inférieures
* Safari version 1.2.4 (v125.1) et inférieures
* Opera version 7.54u2 et inférieures
* OmniWeb version 5.1 et inférieures
* Konqueror version 3.2.2 et inférieures

Cette faille permet via un lien totalement normal de faire afficher un tout autre site qui n'a pas forcément un rapport avec le site du lien sur lequel vous avez cliqué. Un exemple facile à comprendre est disponible chez [Secunia](http://secunia.com/multiple_browsers_idn_spoofing_test/).

Je vous laisse imaginer l'ampleur des dégats si une personne mal intentionnée exploite pleinement cette faille. Elle pourrai ce faire passer pour n'importe quel site et ainsi récupérer des infos sensibles des internautes, comme le code d'une carte bancaire par exemple.

Pour s'en protéger sous FireFox/Mozilla, taper tout simplement *about:config* dans votre barre d'adresses, rechercher le terme *network.enableIDN* et double cliquez dessus (pour passer la valeur à false).   En attendant un patch pour tous les navigateurs cités ci-dessus, mieux vaut éviter les liens douteux ... mais bon vous le savez déjà ça ;)
