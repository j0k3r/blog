---
layout: post
title: 'PHP on the fly'
date: '2005-02-17 03:20:06'
author: j0k
tags: '[]'
excerpt: "Mais qu'est ce donc ?   On nommme *PHP on the fly* le trio PHP, JavaScript et XML qui permet de mettre à jour une page web, sans avoir à la recharger, ce qui permet de gagner en rapidité. Le navigateur et le serveur échangent des données, et le navigateur rafraichit la page via JavaScript, sans la recharger totalement.  \n  \nC'est assez impressionant, cela      …"
---

Mais qu'est ce donc ?   On nommme *PHP on the fly* le trio PHP, JavaScript et XML qui permet de mettre à jour une page web, sans avoir à la recharger, ce qui permet de gagner en rapidité. Le navigateur et le serveur échangent des données, et le navigateur rafraichit la page via JavaScript, sans la recharger totalement.

C'est assez impressionant, cela permet de faire des applications, comme Gmail, qui ne se rafraichissent que quelques fois et la navigation est très très fluide puisque tout est déjà "chez le client".

Cet [article](http://www.webpronews.com/webdevelopment/basicdevelopment/wpn-37-20041201PHPOnTheFly.html) montre deux exemples concrets de *PHP on the fly* : Un qui permet de mettre à jour une date sans recharger la page et un autre qui permet de faire un calcul et d'obtenir son résultat, toujours sans recharger la page.      Un autre [article](http://qwix.media-box.net/index.php/2005/01/21/45-XmlhttprequestEtPhp) montre comment récupérer des données GET et POST.

Mais il y a des désavantages à cette merveilleuse application.   Le simple fait de désactiver JavaScript dans son browser et tout ceci ne fonctionne plus. Ou encore si votre browser ne supporte pas l'objet XML HTTP Request.

C'est tout de même une technologie/application à suivre de prêt et à tester !   Merci null pour m'en avoir reparler :)
