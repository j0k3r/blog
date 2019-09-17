---
layout: post
title: 'Un futur attribut ping pour la balise a ?'
date: '2006-01-27 03:17:25'
author: j0k
tags: blabla
excerpt: "Souvent pour comptabiliser les clics sortant, certains webmasters font directement appel à un fichier interne qui comptabilise le clic et ensuite redirige le visiteur vers le site qu'il veut visiter. Cette méthode est souvent mise en place dans les annuaires de liens, ce qui permet ensuite d'afficher des statistiques de visites par sites ou globales.     \n     …"
---

Souvent pour comptabiliser les clics sortant, certains webmasters font directement appel à un fichier interne qui comptabilise le clic et ensuite redirige le visiteur vers le site qu'il veut visiter. Cette méthode est souvent mise en place dans les annuaires de liens, ce qui permet ensuite d'afficher des statistiques de visites par sites ou globales.
Cependant les webmasters qui s'inscrivent sur les annuaires n'apprécient plus vraiment ce genre de méthode étant donné que cela n'a pas l'effet d'un lien &quot;en dur&quot; puisqu'il y a une redirection d'effectuer entre temps.

Un nouvel attribut de la balise HTML *a* (cependant non officiel) permet d'identifier une ou plusieurs URLs à pinger lors du clic sur le lien. Ainsi, il suffit simplement de mettre dans cette balise une page qui comptabilise le clic et hop le tour est joué. La redirection n'existe plus et pourtant le clic est bien comptabiliser. Cependant rares sont les navigateurs qui supportent cet attribut, ni Firefox, ni IE pour le moment. C'est pourtant un peu sur le plateau chez [Mozilla](http://weblogs.mozillazine.org/darin/archives/009594.html). Mais si cela devient seulement compatible Firefox, ça va encore faire des points négatifs pour IE :D   Une méthode en PHP/MySQL a dors et déjà été [mise en place](http://www.cadenhead.org/workbench/poplink/).

Il est tout à fait possible de faire le même système en AJAX en utilisant l'attribut onclick qui appellerait une page pour comptabiliser les clics.
