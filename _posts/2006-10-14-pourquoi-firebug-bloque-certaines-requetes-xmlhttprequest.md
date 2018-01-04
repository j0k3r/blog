---
layout: post
title: 'Pourquoi Firebug bloque certaines requêtes XMLHttpRequest ?'
date: '2006-10-14 12:31:22'
author: j0k
tags: '[]'
excerpt: "Vous l'avez peut-être déjà remarqué, mais selon l'utilisation que vous faites de l'objet XMLHttpRequest (en utilisant une librairie ou en le faisant à la main), Firebug bloque souvent les requêtes, comme si il capturait la requête et la garder pour lui !     \nFirebug permet de voir, entre autres, les requêtes XMLHttpRequest qui sont effectué par un site web.      …"
---

Vous l'avez peut-être déjà remarqué, mais selon l'utilisation que vous faites de l'objet XMLHttpRequest (en utilisant une librairie ou en le faisant à la main), Firebug bloque souvent les requêtes, comme si il capturait la requête et la garder pour lui !
Firebug permet de voir, entre autres, les requêtes XMLHttpRequest qui sont effectué par un site web. C'est en fait une sorte d'espion qui regarde les requêtes effectuées. Il vous renseigne sur l'url utilisait et sur les données envoyées mais aussi sur le retour que fait le script.

J'avais déjà remarqué, quand j'utilisais la class de sutekidane ([XHRConnection](http://xhrconnection.sutekidane.net/)) que Firebug empêché mes requêtes d'aboutir.   Country s'est penché sur le problème et a trouvé [une solution](http://www.k1der.net/blog/country/post/2006/09/24/XMLHttpRequest-et-FireBug) !!

&quot;*Le bug se situait au niveau de l'initialisation de l'objet, si le paramètre async n'est pas fixé à true (requête Asynchrone) alors la requête sera bloquée par FireBug.*&quot;

Reste à inviter tous ceux qui utilisent l'objet XMLHttpRequest à forcer le passage de async à true !
