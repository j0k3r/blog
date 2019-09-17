---
layout: post
title: 'Comment fonctionne notre cher interpréteur PHP ?'
date: '2006-03-12 01:35:17'
author: j0k
tags: blabla
excerpt: "L'interpréteur PHP est la clé, si je puis dire, du rendu de votre code PHP. C'est lui qui génère le code HTML que votre script PHP va produire.     \nLe fonctionne général est simple. Vous demandez une page internet à votre navigateur. Ce dernier envoie la requête sur un serveur web. Ce serveur repère que c'est une page PHP qui est demandé et l'envoie donc à      …"
---

L'interpréteur PHP est la clé, si je puis dire, du rendu de votre code PHP. C'est lui qui génère le code HTML que votre script PHP va produire.
Le fonctionne général est simple. Vous demandez une page internet à votre navigateur. Ce dernier envoie la requête sur un serveur web. Ce serveur repère que c'est une page PHP qui est demandé et l'envoie donc à l'interpréteur PHP. L'interpréteur retourne la page en HTML, une fois le script exécuté, au serveur qui le renvoie ensuite au navigateur pour que vous puissiez le voir. La boucle est bouclée !

Le JDN publie un [article](http://developpeur.journaldunet.com/tutoriel/php/060309-php-fonctionnement-interpreteur-php.shtml) qui résume un peu tout ceci et qui se focalise un peu plus sur comment opère l'interpréteur PHP.
