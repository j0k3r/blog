---
layout: post
title: 'LE moteur de recherche d''image en AJAX !'
date: '2006-09-20 03:30:35'
author: j0k
tags: image msn search
excerpt: "Microsoft migre peu à peu toutes ces applications sous son enseigne Live.com.     \nC'est autour de son moteur de recherche d'image de passer dans la moulinette 2.0 de Microsoft. Il faut dire que Microsoft ne s'était pas vraiment fait remarquer dans le monde du web2.0, même si son webmail live.com est bien fait, il n'a réellement rien révolutionné.   )  \n …"
---

Microsoft migre peu à peu toutes ces applications sous son enseigne Live.com.
C'est autour de son moteur de recherche d'image de passer dans la moulinette 2.0 de Microsoft. Il faut dire que Microsoft ne s'était pas vraiment fait remarquer dans le monde du web2.0, même si son webmail live.com est bien fait, il n'a réellement rien révolutionné.   ![image]({http://www.j0k3r.net/img/news/live_search.gif})   Avec [Live Search Images](http://search.msn.com/images/results.aspx?q=&FORM=BIIR), la firme de Redmond vient de passer devant tous les moteurs de recherche d'images du web actuel. Son moteur de recherche possède une réelle interaction avec l'utilisateur, tout ça, bien évidemment grâce à JavaScript mais aussi à AJAX.

Première chose que l'on remarque quand on effectue une recherche, c'est que la pagination est inexistante. Et pour cause, Microsoft a implémenté ce que l'on appelle [Virtual Workspace](http://ajaxpatterns.org/Virtual_Workspace) ou que certain appelle [Death to Paging](http://looksgoodworkswell.blogspot.com/2005/06/death-to-paging-rico-livegrid-released.html). Cela consiste à afficher une "sorte" d'iframe avec une barre de scroll sur le côté, et au fur et à mesure que l'on descend la barre de scroll, les nouvelles images se chargent en même temps. Le nombre de résultats affichés changent lui aussi au fur et à mesure que vous scrollez les résultats.

Live Search Images utilise aussi une sorte de bookmark des images qui vous intéresse. Sur le côté droit du site, vous avez un lien "Scratchpad" qui vous affiche une sorte de sidebar sur le côté droit dans laquelle vous pouvez drag & droper les images qui vous intéressent.   Vous pouvez même créer plusieurs collections d'images et les appeler comme bon vous semble. (Apparemment le Scratchpad n'est pas disponible lorsque l'on passe le moteur en français ...)

 ![image](http://www.j0k3r.net/img/news/live_scratchpad.gif)

Une chose qui est aussi très pratique, si vous restez quelques secondes sur une image, celle ci va s'agrandir légèrement et vous verrez afficher diverses informations sur cette image comme ses dimensions, son poids, son url, etc ..   En cliquant dessus, vous arriverez sur une page avec l'image sur la droite, et la page contenant l'image qui s'affichera dans le centre. De ce côté là, rien de bien nouveau.

 ![image](http://www.j0k3r.net/img/news/live_zoom.gif)

Et ce n'est pas fini, une règle graduée se trouve sur le haut du moteur de recherche. Elle vous permet de diminuer la taille des images affichées pour en afficher beaucoup plus dans la page. Le redimensionnement est géré instantanément, pas de rechargement de la page : on aime !

 ![image](http://www.j0k3r.net/img/news/live_gradation.gif)

Et pour finir (je pense qu'on pourrait encore trouver des p'tites fonctionnalités par si par-là), vous pouvez choisir la taille des images que vous recherchez. Le choix est plus important que sur les autres moteurs de recherches. Et le paramètre "la taille de mon écran" fait sourire :)

 ![image](http://www.j0k3r.net/img/news/live_imagesize.gif)

Je pense avoir fait le tour de ce nouveau moteur de recherche. Une chose est maintenant sûre, la réponse de Google sera intéressante à surveiller, parce qu'il faut dire, qu'avec Live Search Images, Google Images fait vraiment web1.0 / has been !!
