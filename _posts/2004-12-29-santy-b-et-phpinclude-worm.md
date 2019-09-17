---
layout: post
title: 'Santy.B et PhpInclude.Worm'
date: '2004-12-29 08:45:32'
author: j0k
tags: blabla
excerpt: 'Et bien en cette fin d''année, PHP n''est pas aimé des programmeurs de virus.   La semaine dernière, [Santy.A](http://www.j0k3r.net/news-le-virus-santy.a-le-virus-de-phpbb-97.html) commencait les ravages sur les forums phpBB en utilisant le moteur de recherche Google pour trouver ces vitimes. Google a vite bloqué [les requetes du      ...'
---

Et bien en cette fin d'année, PHP n'est pas aimé des programmeurs de virus.   La semaine dernière, [Santy.A](http://www.j0k3r.net/news-le-virus-santy.a-le-virus-de-phpbb-97.html) commencait les ravages sur les forums phpBB en utilisant le moteur de recherche Google pour trouver ces vitimes. Google a vite bloqué [les requetes du virus](http://www.j0k3r.net/forum/mysql-4.0.23-et-des-nouvelles-de-santy.a-98.htm#785).      Et voici qu'une deuxième version de Santy, Santy.B viens de voir le jour utilisant les moteurs de recherche d'AOL et de Yahoo.   Evidemment il est toujours recommandé de passer à la version [2.0.11](http://www.phpbb.com/downloads.php) de phpBB pour éviter tout problème.

Passons maintenant au tout nouveau PhpInclude.Worm* qui recherche (via Google/Yahoo/AOL) des serveurs web dont les pages PHP utilisent les fonctions "include()" et "require()" de façon non-sécurisée.   Une fois les sites trouvés, il teste différentes possiblités pour exploiter cette faille (qui n'est pas une faille de PHP lui même mais plutôt une faille du programmeur) puis tente d'y injecter différentes commandes permettant l'installation de robots IRC et la constitution d'une armée de machines zombies contrôlées par un groupe de pirates brésiliens.

Pour ce protéger, il faut "[filtrer](http://www.devshed.com/c/a/PHP/PHP-Security-Mistakes/)" les paramètres que l'on envoie à ces fontions (si ils sont dynamiques) sinon il faut passer des paramètres directement en dur.

**Ce ver est détecté par certains antivirus comme étant la variante C ou E de Santy. Ce ver étant totalement différent de la famille Santy (la seule similitude réside dans l'utilisation des moteurs de recherche), l'alias générique "PhpInclude.Worm" lui a été attribué (De nouveaux alias ont déjà vu le jour : Perl.PhpInlude.Worm, Perl.Spyki, Perl.Lexac).**
