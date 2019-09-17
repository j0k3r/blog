---
layout: post
title: 'Faciliter la saisie grace au cookie'
date: '2005-04-18 08:06:08'
author: j0k
tags: blabla
excerpt: "Il vous est certainement déjà arriver de taper un long texte pour un mail, une news ou autre et de faire une fausse manipulation (plantage du navigateur, bouton actualiser ...) et de perdre tout ce que vous aviez écrit ...     \nChose qui vous mets en rage (moi le premier) du coup, vous ne retapez pas tout votre texte. Mais il existe une astuce très pratique pour      …"
---

Il vous est certainement déjà arriver de taper un long texte pour un mail, une news ou autre et de faire une fausse manipulation (plantage du navigateur, bouton actualiser ...) et de perdre tout ce que vous aviez écrit ...

Chose qui vous mets en rage (moi le premier) du coup, vous ne retapez pas tout votre texte. Mais il existe une astuce très pratique pour éviter ce genre de problème.

Il suffit d'utiliser un cookie et de sauver le contenu de la zone de texte, au fur et à mesure de l'écriture. Le tout est gérer en javascript.   Comme ça si l'utilisateur fait une fausse manipulation, il suffit qu'il revienne sur la page et le texte qu'il avait déjà tapé est toujours là, puisqu'il est présent dans le cookie.

Un [article du JDN](http://developpeur.journaldunet.com/tutoriel/dht/050419-javascript-sauver-contenu-formulaire-cookie.shtml) détaille tout cela.

Il faudrait ensuite mettre une validité pour ce cookie pour éviter de ré-afficher toujours ce qu'a tapé le visiteur dans la zone de texte.
