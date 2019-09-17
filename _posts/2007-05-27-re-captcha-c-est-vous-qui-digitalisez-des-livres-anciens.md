---
layout: post
title: 'reCAPTCHA, c''est vous qui digitalisez des livres anciens'
date: '2007-05-27 10:51:24'
author: j0k
tags: antispam captcha
excerpt: "L'idée est très ingénieuse et mérite d'être connu de tous !     \nSur une grande majorité des sites internets actuels, on retrouve des captchas qui permettent d'identifier un véritable internaute d'un ordinateur. Ils sont placés à la fin de formulaires d'inscription et présentent des lettres et/ou des chiffres que vous devez reconnaitre. C'est l'Université      …"
---

L'idée est très ingénieuse et mérite d'être connu de tous !
Sur une grande majorité des sites internets actuels, on retrouve des captchas qui permettent d'identifier un véritable internaute d'un ordinateur. Ils sont placés à la fin de formulaires d'inscription et présentent des lettres et/ou des chiffres que vous devez reconnaitre. C'est l'Université Carnegie Mellon, aux USA, qui est à l'origine de cette initiative.

Une jeune équipe de cette même université a eu la bonne idée d'utiliser les captchas pour digitaliser les livres anciens ! Ces livres anciens sont généralement mis sous format électronique grâce à des logiciels OCR qui permettent de reconnaitre des mots via une image. Mais ces logiciels s'avèrent de temps en temps défaillant sur certains mots.

 ![image](https://img521.imageshack.us/img521/2098/captchahomepageiy0.gif)

Le principe de [reCAPTCHA](http://recaptcha.net/) est d'afficher deux mots à reconnaitre. Le premier étant un mot déjà connu par les logiciels OCR et le deuxième leur est inconnu. Ainsi, en répondant correctement vous informer l'ordinateur de la véritable orthographe du deuxième mot. Il suffit que 3 personnes valident ce même mot pour que l'ordinateur soit sûr de son orthographe.

Cette idée permet ainsi d'utiliser le temps que tous les internautes passent à remplir un captcha pour digitaliser d'anciens ouvrages.   Vous trouverez [plein de ressources](http://recaptcha.net/resources.html) sur le site de reCAPTCHA pour mettre en oeuvre ce captcha dans vos applications.   A noter qu'il existe aussi un [plugin Symfony](http://trac.symfony-project.com/trac/wiki/sfReCaptchaPlugin) pour intégrer reCAPTCHA :)
