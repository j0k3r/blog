---
layout: post
title: 'Et ainsi suit PHP 4.4.2'
date: '2006-01-13 10:58:25'
author: j0k
tags: blabla
excerpt: "Hier sortait la version 5.1.2 de PHP, il était prévisible que la branche 4.4.x allait elle aussi être mise à jour. PHP 4.4.2 est donc la version dites la plus stable en ce qui concerne la branche PHP 4.x, tous les utilisateurs sont invités à mettre à jour leur version de PHP.     \nCette version est une version qui corrige principalement des buGs et quelques      …"
---

Hier sortait la version 5.1.2 de PHP, il était prévisible que la branche 4.4.x allait elle aussi être mise à jour. PHP 4.4.2 est donc la version dites la plus stable en ce qui concerne la branche PHP 4.x, tous les utilisateurs sont invités à mettre à jour leur version de PHP.
Cette version est une version qui corrige principalement des buGs et quelques corrections de sécurité, un peu dans la même lignée que PHP 5.1.2.

* L'injection de réponse HTTP a été bloqué dans l'extension de session, et avec la fonction header(). Header() ne peut plus être utilisé pour envoyer plusieurs entêtes de réponses en un seul appel.
* Une erreur d'XSS dans le rapport d'erreur à été corrigée
* Des corrections concernant Apache 2 sur un serveur autre que linux ont été apportées
* Une régression avec les fonctions key() et current() a aussi été corrigée
* Des vérifications au niveau de l'extension cURL ont été ajoutés

On peut ajouter à cela la correction d'une trentaine de buGs.   Vous pouvez télécharger cette nouvelle version sur [php.net](http://www.php.net/downloads.php#v4), cependant les versions pour windows ne sont pas encore disponible ... mais cela ne devrait pas tarder.
