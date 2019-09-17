---
layout: post
title: 'EasyPHP 3.0, quoi de neuf ?'
date: '2009-01-23 12:33:03'
author: j0k
tags: easyphp
excerpt: "J'ai [récemment appris](http://www.phpindex.com/index.php/2009/01/19/5216-easyphp-30-est-sorti) qu'EasyPHP 3.0 était sorti.     \nBelle surprise pour beaucoup de monde je pense ! Moi le premier ..   Je m'étais arrêté, certainement comme vous, à une version 2.0 qui n'en finissait pas de traîner en version bêta. Finalement, cette version tant attendu,      …"
---

J'ai [récemment appris](http://www.phpindex.com/index.php/2009/01/19/5216-easyphp-30-est-sorti) qu'EasyPHP 3.0 était sorti.
Belle surprise pour beaucoup de monde je pense ! Moi le premier ..   Je m'étais arrêté, certainement comme vous, à une version 2.0 qui n'en finissait pas de traîner en version bêta. Finalement, cette version tant attendu, puisqu'incluant PHP 5 pour la première fois dans l'histoire d'EasyPHP, n'a jamais vu le jour. Elle est restée 2 ans en bêta.   Une [bêta 2 très discrète](http://www.j0k3r.net/news-easyphp-2-0-beta-2-discrete-1946.html) avait pourtant vu le jour laissant espérer une version finale à la fin de l'année 2007, mais rien de tout ça.

EasyPHP est maintenant sorti depuis quelques jours en version 3.0 (d'un coup comme ça, sans prévenir). Elle inclut les dernières versions à ce jour de toutes les applications, c'est à dire :
 * Apache 2.2.11
 * PHP 5.2.8
 * MySQL 5.1.30

**Quoi de neuf alors ?**

Curieux de voir les changements de cette version *majeure*, je l'ai installé sur mon Windows Se7en (fraîchement installé lui aussi), voilà ce que ça donne :

 ![image](https://img209.imageshack.us/img209/8477/easyphp31fl7.png)

L'installation en elle même n'est pas longue, j'ai quand même regretté le manque de configuration demandé pendant l'installation : pas de configuration de PHP, pas de configuration d'Apache ou autre ..

Je ne crois pas que le menu contextuel est beaucoup changé.   On retrouve basiquement la gestion de la configuration de toutes les applications et l'accès aux fichiers logs.

 ![image](https://img238.imageshack.us/img238/5913/easyphp34gl6.png)

Le panel de monitorisation des serveurs n'a pas non plus changé.   Il se lance toujours depuis l'icône dans le systray. Dommage cependant de ne pas l'avoir complètement intégrer dans le menu contextuel, ça fait une fenêtre en plus, des clics en plus, etc ...

 ![image](https://img443.imageshack.us/img443/4039/easyphp35gw7.png)

Une fois que tout a correctement démarré, que tous les feux sont au vert, on peut aller voir ce qu'il se passe sur la home.   On remarque que le design a reçu un petit lifting (rien de bien méchant non plus) qui comme à l'accoutumé se retrouve aussi sur le [site officiel](http://www.easyphp.org).   Cette interface est disponible en plusieurs langues (il me semble que la version 2.0 avait lancé des appels à la communauté pour les traductions).

 ![image](https://img294.imageshack.us/img294/3448/easyphp32pr5.png)

Le listing des extensions chargés dans PHP est plaisant, on peut ainsi voir toutes les extensions mais aussi les fonctions activées (rien de spectaculaire non plus).

 [![image](https://img206.imageshack.us/img206/755/easyphp33lz1.th.png)](http://img206.imageshack.us/img206/755/easyphp33lz1.png)

Ce que j'ai bien aimé, c'est la configuration d'un nouvel alias par exemple.   Le remplissage du formulaire est bien clair, bien documenté et toutes les étapes sont rassemblés pour ne pas que l'on en oublie une. Contrairement à WampServer qui propose une interface en mode console, cette approche est plus conviviale !

 ![image](https://img339.imageshack.us/img339/6448/easyphp36uf6.png)

L'arborescence des fichiers n'a pas changé par rapport aux précédentes versions, tout est placé au même niveau.   Je pense qu'il sera aussi compliqué de jongler avec différentes versions de PHP, Apache, etc .. qu'avant.   Là aussi, dommage.

 ![image](https://img240.imageshack.us/img240/3794/easyphp310qv6.png)

**En résumé...**   Et bien j'ai envie de dire que cette version 3.0 est en fait la version 2.0 finale qui est attendu depuis maintenant bientôt 4ans ! Et puis ... c'est tout.

Elle n'est pas du tout innovante et rien n'a changé par rapport aux précédentes versions :
* il est toujours impossible de changer _facilement_ de version de PHP, Apache, MySQL, etc ..
* le menu contextuel est impossible à customiser
* le monitoring se fait dans une popup
* l'installation se fait toujours par défaut dans *Program Files\EasyPHP 3.0* beurk trop d'espaces !

L'aide comporte encore des liens vers des pages en *.php3* du site officiel, qui pour le coup n'existe plus, pas très pratique ...

J'ai quand même bien aimé :
* la petite documentation d'EasyPHP présente sur la home
* l'ajout d'un alias dans Apache
* et puis faut admettre que les traductions, c'est bien aussi!

Bref, j'étais content de voir un joli **3.0** estampillé cette nouvelle version, mais j'ai remarqué que c'était plus de la poudre aux yeux qu'autre chose, peut-être simplement pour rappeler aux utilisateurs qu'EasyPHP n'est pas mort... hmmm   Mais la *concurrence* est rude notamment face à un WampServer constamment mis à jour et qui facilite bien plus la vie des développeurs.

_Dommage ..._

Sur ce, je garde mon WampServer customisé ! Sans regret.
