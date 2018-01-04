---
layout: post
title: 'AJAX sans utiliser l''objet XmlHttpRequest'
date: '2005-11-21 05:07:49'
author: j0k
tags: '[]'
excerpt: 'Notre grand AJAX repose sur l''objet XmlHttpRequest. Selon l''auteur c''est là qu''est le problème d''AJAX. L''objet XmlHttpRequest est très bien implémenté sur les récents navigateurs comme Firefox par exemple. Cependant sur Internet Explorer, le support natif de cet objet est inexistant ! Mais Internet Explorer supporte cet objet via un ActiveX (*composants logiciels de      ...'
---

Notre grand AJAX repose sur l'objet XmlHttpRequest. Selon l'auteur c'est là qu'est le problème d'AJAX. L'objet XmlHttpRequest est très bien implémenté sur les récents navigateurs comme Firefox par exemple. Cependant sur Internet Explorer, le support natif de cet objet est inexistant ! Mais Internet Explorer supporte cet objet via un ActiveX (*composants logiciels de Microsoft*) qui affiche à l'utilisateur un joli message lui demandant d'autoriser le contenu de cette page à utiliser l'ActiveX. Pas très pratique.
Dans ce [tutoriel](http://www.phpit.net/article/ajax-php-without-xmlhttprequest/), l'auteur nous montre comment utiliser notre grand AJAX sans ce fameux objet XmlHttpRequest.   Cette méthode fonctionne bien mais possède tout de même des inconvénients. Il est impossible de récupérer des valeurs en POST, on ne peut pas modifier complètement le contenu d'une page et cela ne fonctionne pas sous Opera.

Bref à vous de peser le pour et le contre de cette méthode si vous voulez vous lancez dans l'utilisation d'AJAX. Personnellement, je ne céderai pas mon objet XmlHttpRequest contre cette méthode.
