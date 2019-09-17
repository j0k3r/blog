---
layout: post
title: 'PHP 5.1.3, version finale'
date: '2006-05-02 08:06:05'
author: j0k
tags: blabla
excerpt: "Après avoir publié la dernière release candidate la [semaine dernière](http://www.j0k3r.net/news-php-5.1.3-rc3-publie-officiellement-1238.html), si aucun buG critique n'était remonté avec cette RC, la version officielle serait publié cette semaine. Et c'est le cas.     \nPHP 5.1.3 est sortie officiellement le jour ou personne ne travaille (normalement), le      …"
---

Après avoir publié la dernière release candidate la [semaine dernière](http://www.j0k3r.net/news-php-5.1.3-rc3-publie-officiellement-1238.html), si aucun buG critique n'était remonté avec cette RC, la version officielle serait publié cette semaine. Et c'est le cas.
PHP 5.1.3 est sortie officiellement le jour ou personne ne travaille (normalement), le 1er mai. Au chapitre des bugs directement impactés par cette nouvelle version – pas moins de 120 – on notera de nombreuses corrections sur les extensions DOM, SOAP et PDO. A noter aussi que memory_limit fonctionne désormais également sous Win32.

Concernant les problèmes de sécurité, on trouve entre autre, la suppression d’un buffer overflow au niveau de la fonction wordwrap(), la suppression d’une faille XSS au niveau de la fonction phpinfo() ainsi qu’une correction visant à interdire certains caractères dans le nom des sessions.

Enfin, concernant les évolutions, on retiendra le passage en version 6.6 de la librairie PCRE (désormais embarquée dans PHP), une refonte complète de l’interface FastCGI ainsi qu’une amélioration des performances du moteur (Zend Engine) et des principales extensions.

Vous pouvez [télécharger](http://www.php.net/downloads.php#v5) directement cette version ou voir les différents [changements](http://www.php.net/release_5_1_3.php) en détails.   La news provient de [phpIndex](http://www.phpindex.com/index.php/2006/05/02/2108-php-513).
