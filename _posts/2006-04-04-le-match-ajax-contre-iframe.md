---
layout: post
title: 'Le match : AJAX contre iFrame'
date: '2006-04-04 04:22:35'
author: j0k
tags: blabla
excerpt: "C'est le sujet que traite Manuel Lemos de PHP Classes.     \nUne nouvelle version 2.0 Beta de PHPClasses est en cours de développement et vous pouvez déjà voir la [page de login](http://www.phpclasses.org/login.html/v/2) qui a déjà été faite. Manuel en a profité pour nous expliquer pourquoi il a opté pour les iFrames plutôt que d'utiliser l'objet      …"
---

C'est le sujet que traite Manuel Lemos de PHP Classes.
Une nouvelle version 2.0 Beta de PHPClasses est en cours de développement et vous pouvez déjà voir la [page de login](http://www.phpclasses.org/login.html/v/2) qui a déjà été faite. Manuel en a profité pour nous expliquer pourquoi il a opté pour les iFrames plutôt que d'utiliser l'objet XMLHttpRequest, en gros AJAX. Après quelques réflexions de sa part, il en a déduit qu'employer les iFrames et bien meilleur que d'utiliser l'objet XMLHttpRequest.

Il a trouvé 5 raisons :

* **La compatibilité des navigateurs**   L'iFrame est supportée par tous les navigateurs, y compris les plus vieux, contrairement à l'objet XMLHttpRequest.

* **Contraintes de sécurité des navigateurs**   Sous IE6, l'objet XMLHttpRequest requiert un composant ActiveX qui serait apparemment bloqué depuis la dernière mise à jour de Windows.

* **Code JavaScript simple**   L'objet XMLHttpRequest est supporté par quelques navigateurs mais n'est pas implémenter de la même manière tandis que l'iFrame est un tag HTML à part entière. Ainsi un code JavaScript tout simple fonctionnera sur tous les navigateurs.

* **Rapidité de réponse**   Des tests ont prouvés que l'objet XMLHttpRequest est très rapide sur des _petites_ requêtes mais que les iFrames sont très rapides sur les _grosses_ requêtes.

* **Upload de fichier**   Il est très simple de mettre en place un système d'upload de fichier qui enverra toutes les données à l'iFrame. Pour des raisons de sécurité, il n'est pas possible de récupérer les données d'un champ &quot;file&quot; via l'objet XMLHttpRequest.

Vous pouvez retrouver le contenu de son billet, sur son [blog](http://www.phpclasses.org/blog/post/51-PHPClasses-20-Beta-AJAX-XMLHttpRequest-x-IFrame.html).
