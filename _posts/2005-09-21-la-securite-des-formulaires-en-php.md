---
layout: post
title: 'La sécurité des formulaires en PHP'
date: '2005-09-21 09:14:10'
author: j0k
tags: blabla
excerpt: "Le HUB publie un [article](http://www.webmaster-hub.com/publication/article145.html) sur la sécurité des formulaires. On pourrai dire que c'est une \"suite\" de l'article de null sur [les formulaires](http://www.j0k3r.net/php-formulaires-methode-post-ou-get-22.html).     \nIl traite en fait la réception de données (et un peu les méthodes GET et POST)      …"
---

Le HUB publie un [article](http://www.webmaster-hub.com/publication/article145.html) sur la sécurité des formulaires. On pourrai dire que c'est une "suite" de l'article de null sur [les formulaires](http://www.j0k3r.net/php-formulaires-methode-post-ou-get-22.html).

Il traite en fait la réception de données (et un peu les méthodes GET et POST) au niveau de la sécurité de l'application. Par exemple quand on reçoit les données d'une zone texte, il faut toujours traiter les caractères grâce à une fonction PHP ainsi on évite toutes injections de codes HTML dans cette zone de texte. Il évoque les risques mais ne montre pas comment s'en protéger, à vous de mettre en place le système de protection !
