---
redirect_from:
  - /blog/une-confirmation-de-suppression-en-ajax
layout: post
title: 'Une confirmation de suppression en AJAX'
date: '2006-03-26 11:45:04'
author: j0k
tags: blabla
excerpt: 'Maintenant avec AJAX, on ne passe plus par un banal lien de suppression du type *?action=del&amp;id=4* pour effacer un contenu mais directement par une joli p''tite image (en général rouge avec une croix à l''intérieur). On place un appel à une fonction JavaScript grâce à l''attribut *onclick* qui elle va envoyer une requête en AJAX pour supprimer l''élément.   C''est rapide      ...'
---

Maintenant avec AJAX, on ne passe plus par un banal lien de suppression du type *?action=del&amp;id=4* pour effacer un contenu mais directement par une joli p'tite image (en général rouge avec une croix à l'intérieur). On place un appel à une fonction JavaScript grâce à l'attribut *onclick* qui elle va envoyer une requête en AJAX pour supprimer l'élément.   C'est rapide et ça se fait très facilement.

Ce qu'il faut prévoir à chaque fois, c'est une confirmation de suppression, je vous rappelle que l'utilisateur est le premier &quot;buG&quot; d'une application, il faut donc (énormément) l'assister. Ainsi, on a recours à l'habituel fonction JavaScript : confirm() qui nous affiche une belle alerte avec un bouton OK et Annuler.

C'est pratique mais pas trop dans la &quot;vibe&quot; du web 2.0 :)   Une autre façon de faire et de passer par une étape de plus qui remplace cette image (ou ce bouton &quot;Supprimer&quot;) par un bouton qui affiche &quot;Êtes-vous sûr ?&quot;. Et lors du clic sur ce bouton, vous pouvez supprimer.

En y réfléchissant, on pourrait passer par une sorte de double clic pour pouvoir supprimer... bref je ne suis pas totalement convaincu de cette méthode. Mais vous pouvez toujours l'[essayer](http://www.d3eministry.net/wordpress/2006/03/23/147/).
