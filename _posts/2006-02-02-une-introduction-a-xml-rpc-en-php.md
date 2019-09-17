---
layout: post
title: 'Une introduction à XML-RPC en PHP'
date: '2006-02-02 11:47:29'
author: j0k
tags: blabla
excerpt: "Avant de me lancer dans la description de l'article en lui même, je vais commencer par vous expliquer ce qu'est l'XML-RPC en PHP. XML-RPC permet à une application d'appeler une fonction applicative distante, la requête étant transportée sur HTTP et son corps décrit en XML. ([Wikipedia](http://fr.wikipedia.org/wiki/XML-RPC))     \nCa ne vous parle pas trop      …"
---

Avant de me lancer dans la description de l'article en lui même, je vais commencer par vous expliquer ce qu'est l'XML-RPC en PHP. XML-RPC permet à une application d'appeler une fonction applicative distante, la requête étant transportée sur HTTP et son corps décrit en XML. ([Wikipedia](http://fr.wikipedia.org/wiki/XML-RPC))
Ca ne vous parle pas trop je pense. En fait le but de cet article est de vous montrer en quoi l'XML-RPC est utile. Il permet de créer un webservice de façon à partager nos codes sources avec le reste du monde. Un webservice permet d'échanger des données dans un format standardisé (en XML) entre un client et un serveur, XML-RPC par exemple.

Cet article vous montre comment créer le serveur dans un premier temps, puis le client.   Je vous dit tout de suite, novice passer votre chemin, curieux ... rien ne vaut un [p'tit coup d'oeil](http://www.phpit.net/article/introduction-xml-rpc-php/1/) :)
