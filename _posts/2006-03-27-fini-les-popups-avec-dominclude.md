---
layout: post
title: 'Fini les popups avec DOMinclude'
date: '2006-03-27 11:44:45'
author: j0k
tags: blabla
excerpt: 'Je ne vais pas vous parler du dernière anti-bloqueur-killer de popup qui se greffera à votre jolie IE. Mais plutôt d''une petite librairie en JavaScript qui va vous permettre de remplacer les (moches) popups que l''on peut (encore) faire pour diverses raisons.   J''ai été confronté dans un projet à passer par des popups (beaucoup trop de données à gérer pour faire      ...'
---

Je ne vais pas vous parler du dernière anti-bloqueur-killer de popup qui se greffera à votre jolie IE. Mais plutôt d'une petite librairie en JavaScript qui va vous permettre de remplacer les (moches) popups que l'on peut (encore) faire pour diverses raisons.   J'ai été confronté dans un projet à passer par des popups (beaucoup trop de données à gérer pour faire autrement) et j'avoue que si j'avais connu cette librairie avant, je l'aurai grandement utilisé !

Le script fonctionne sur le même principe que le [lightbox](http://www.j0k3r.net/news-afficher-vos-images-par-dessus-votre-site-986.html). Vous avez une URL qui pointe vers une page HTML ou une image, et via la class de la balise &lt;a&gt;, il détecte que c'est une popup (DOMpop) qu'il faut ouvrir et fait son travail ensuite. Ainsi si JavaScript n'est pas activé, la page ou l'image s'ouvrira correctement.

[DOMinclude](http://www.onlinetools.org/tools/dominclude/) est d'une réelle simplicité à mettre en place et sera, je le pense, un atout majeur dans vos prochaines applications !
