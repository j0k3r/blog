---
layout: post
title: 'FileZilla Server 0.9.6'
date: '2005-03-21 03:54:42'
author: j0k
tags: '[]'
excerpt: "Et hop une belle version \"releasé\" pour FileZilla Server, la [0.9.6](http://sourceforge.net/project/showfiles.php?group_id=21558&package_id=21737&release_id=314473).     \nCette version corrige deux problèmes qui pouvaient être utiliser comme deny de service contre FileZilla Server.   Le premier problème concerné les nom MS DOS réservés comme CON,      …"
---

Et hop une belle version "releasé" pour FileZilla Server, la [0.9.6](http://sourceforge.net/project/showfiles.php?group_id=21558&package_id=21737&release_id=314473).
Cette version corrige deux problèmes qui pouvaient être utiliser comme deny de service contre FileZilla Server.   Le premier problème concerné les nom MS DOS réservés comme CON, NUL, COM1, LPT1 et autres. Ainsi sous quelques versions de Windows, FileZilla Server pouvait planter si l'utilisateur publiait un accès à un dossier contenant un nom réservé. Le problème semble se produire seulement sur Windows 2000 ou plus vieux.     Le deuxième problème a été provoqué par une boucle infinie dans la logique de transfert. Il pouvait seulement se produire si une liste de dossier ou d'annuaire était téléchargée sous le MODE Z.

Tout ça est corrigé et la version est disponible depuis ce midi.
