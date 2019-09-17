---
layout: post
title: 'En vrac, après le black out...'
date: '2008-02-10 04:30:13'
author: j0k
tags: antispam cdn symfony vrac
excerpt: 'C''est pas dans mon habitude de faire des news de liens dit "en vrac", mais là ça fait tellement longtemps que j''avais pas retrouvé réellement internet chez moi (toujours pas le cas, mais free ne devrait plus trop tardé !) qu''il y a plein de trucs intéressants qui sont passés !'
---

C'est pas dans mon habitude de faire des news de liens dit "en vrac", mais là ça fait tellement longtemps que j'avais pas retrouvé réellement internet chez moi (toujours pas le cas, mais free ne devrait plus trop tardé !) qu'il y a plein de trucs intéressants qui sont passés !

* Une [réflexion intéressante](http://snook.ca/archives/other/effective_blog_comment_spam_blocker/) sur la mise en place d'un antispam efficace. Il consiste à donner un certain nombre de points à chaque commentaire. En fonction du résultat obtenu, le commentaire est considéré comme spam ou pas.

* Vous avez peut-être entendu parler du CDN (Content Delivery Network * Réseau de diffusion de contenu). Cela permet de relayer le site sur d'autres serveurs pour éviter le blackout complet suite à un digg-effect notamment. Mais c'est pas simple d'en posséder un, [CoralCDN](http://www.coralcdn.org/) est là pour ça. Le principe est d’ajouter ceci **.nyud.net** à la fin de votre url. (via [2803](http://www.2803.com/technologie/utiliser-un-cdn-pour-eviter-le-digg-effect/))

* En pleine conception d'un site eCommerce (avec Symfony), j'ai trouvé un [webservice](http://www.webservicex.net/CurrencyConvertor.asmx?op=ConversionRate) qui permet de synchroniser les devises en "temps réel". Il suffit d'envoyer les deux devises pour récupérer le taux de change.

* A la recherche d'une gestion originale d'un select multiple, je suis tombé sur [Control Suite](http://livepipe.net/projects/control_suite/) pour prototype. C'est une composition de plusieurs librairies (indépendantes) qui permettent de faire :
   * Des onglets en JavaScript
   * Des lightbox (oui encore ...)
   * Un select multiple orignal !
   * Un système de notation
   * Et une barre de progression customizable

* Une nouvelle version de prototype (1.6.0.2) est sortie fin janvier. S'en est suivis une [cheat sheet](http://thinkweb2.com/projects/prototype/prototype-1602-cheat-sheet/) sur cette nouvelle version à jour. Cool !

* Concernant Symfony, le plugin sfZendPlugin permettait d'inclure les classes du Zend Framework sans soucis. Le plugin a été supprimé parce qu'il n'apportait rien de plus que [cette explication](http://mirthlab.com/2008/01/29/sfzendplugin-alternative-to-installing-the-zend-framework/) pour intégrer simplement les classes du Zend Framework via l'autoloading de Symfony.

* Et pour finir, pour ceux qui voudrait monter un site pour gérer votre agence immobilière, [Apimo](http://code.google.com/p/apimo/) (développé avec Symfony) vous aidera certainement beaucoup ;-)
