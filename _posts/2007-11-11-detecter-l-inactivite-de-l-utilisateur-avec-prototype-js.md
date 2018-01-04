---
layout: post
title: 'Détecter l''inactivité de l''utilisateur avec prototype.js'
date: '2007-11-11 01:44:18'
author: j0k
tags: '[gmail,inactivité,prototype]'
excerpt: "Un peu à la manière d'msn, via JavaScript et prototype, vous pouvez [détecter l'inactivité de l'utilisateur](http://thinkweb2.com/projects/prototype/2007/10/17/detect-idle-state-with-custom-events/). Je pense que Gmail utilise la même méthode pour détecter qu'un utilisateur n'est plus actif sur le chat de Gmail (via Gmail, et non via Gtalk).     \nCette      …"
---

Un peu à la manière d'msn, via JavaScript et prototype, vous pouvez [détecter l'inactivité de l'utilisateur](http://thinkweb2.com/projects/prototype/2007/10/17/detect-idle-state-with-custom-events/). Je pense que Gmail utilise la même méthode pour détecter qu'un utilisateur n'est plus actif sur le chat de Gmail (via Gmail, et non via Gtalk).
Cette méthode est très intéressant pour un chat en ligne ou éventuellement lancer une animation sur le site pour rendre à nouveau l'utilisateur actif... bref les idées ne manqueront pas je pense.   Le principe est d'utiliser des évènements personnalisés via la dernière version de prototype, à savoir la version 1.6 (toute fraiche).

La page de [démo](http://yura.thinkweb2.com/playground/state-notifier/) est parlante, même si je pense que tout le monde voit de quoi je parle ;-)
