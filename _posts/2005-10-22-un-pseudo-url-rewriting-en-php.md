---
layout: post
title: 'Un pseudo URL Rewriting en PHP'
date: '2005-10-22 12:31:43'
author: j0k
tags: '[]'
excerpt: "Il n'est pas donné à tout le monde de savoir mettre en place l'url rewriting. De plus, ce module d'Apache n'est pas forcément installé sur tous les serveurs des hébergeurs ... même si la plupart des mutualités l'ont, ce qui n'est pas le cas des hébergeurs gratuits.     \nAinsi un \"like url rewriting\" est apparue, notamment dans dotclear, qui permet de faire du      …"
---

Il n'est pas donné à tout le monde de savoir mettre en place l'url rewriting. De plus, ce module d'Apache n'est pas forcément installé sur tous les serveurs des hébergeurs ... même si la plupart des mutualités l'ont, ce qui n'est pas le cas des hébergeurs gratuits.

Ainsi un "like url rewriting" est apparue, notamment dans dotclear, qui permet de faire du pseudo url rewriting.   Par exemple, en url rewriting pour une url du type *index.php?page=articles* on aurait *articles.html*. Tandis que pour le pseudo url rewriting cela donnerai *index.php?/articles*.   Le résultat est quasiment identique, même si l'affichage est plus joli avec le véritable url rewriting.

Voici une [petite classe](http://satz.free.fr/releases/routes_current.tar.gz) en PHP qui vous permet de mettre en place ce pseudo url rewriting. Pour plus de détails sur l'utilisation de cette classe, je vous invite à lire ce [billet](http://satz.free.fr/blog/index.php?2005/07/09/89-pseudo-url-rewriting-en-php) et [celui ci](http://satz.free.fr/blog/index.php?2005/08/05/90-pseudo-url-rewriting-en-php-suite). Le deuxième étant la suite du premier.

En parlant d'url rewriting, je devrai faire prochainement un article dessus, un peu du genre, *l'url rewriting pour les nuls*.   A suivre :)
