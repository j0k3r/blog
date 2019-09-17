---
layout: post
title: 'Mettez des flux RSS partout'
date: '2006-09-01 00:00:00'
author: j0k
tags: "ch'tits trucs"
excerpt: 'Tous les sites internets ne possèdent pas (encore) de flux RSS. Voilà un outil qui vous permet de mettre du RSS vraiment partout !'
---

DanRaZor nous avait présenté [PonyFish](http://www.j0k3r.net/chtit-truc-du-fil-rss-la-ou-il-n-y-en-a-pas-...-39.html) dans le ch'tit truc du mois du mois de mai 2006. Il permettait de faire des flux RSS sur des sites qui n'en proposaient pas.    J'ai trouvé un outil encore plus performant que PonyFish : [Feed43](http://feed43.com) (lire feed for free). Je l'utilise régulièrement pour suivre certain site qui n'ont pas de flux RSS.

  Son principe est simple, il parse la page contenant les informations, on indique une sorte d'expressions régulières pour qu'il récupère certaines informations (lien, titre, date ...) et ensuite on ordonne le tout dans notre flux.

  La première prise en main n'est pas très simple, c'est pourquoi je vais vous montrer un exemple avec mon site.

 - Rendez vous sur la page pour [créer un flux](http://feed43.com/feed.html?action=new).
 - Saisissez l'url du site (j0k3r.net) et cliquez sur reload. Vous voyez la page d'accueil du site en html s'afficher.
 - Dans le champs Global Search Pattern, mettez le patern suivant : { % }
 - Et dans le champs juste en dessous mettez :

```html
<span class="date-news"></span>
<a href="{ % }" class="news">{ % }</a>
<span id="comment-{ * }" style="display:none" class="comment-home">({ * })</span>
```

Ce que je fais c'est que je reprends l'endroit (dans la page html) où mes news sont listées de façon à ce que le site puisse boucler dessus pour récupérer les infos.

 Le patern {*} utilisé permet d'indiquer qu'on ne récupère pas les informations.

 Cliquez ensuite sur extract.

 - Là vous voyez les différentes informations qu'il a pu trouver sur la page
 - On va maintenant aller dans RSS item properties, pour agencer les informations récupérer dans notre nouveau flux.
 - Mettez ceci :

```
Item Title Template : { %3 }
Item Link Template : { %2 }
Item Content Template : { %1 } - { %3 }
```

 - Cliquez ensuite sur preview (et vous obtiendrez quelques choses [dans ce genre](http://feed43.com/0880371125518706.xml))

  Et voilà vous venez de créer un flux rss :)
 Plus bas vous verrez Get your RSS feed, avec juste en dessous le lien du fichier xml. Quand vous avez un compte, vous pouvez modifier le nom du flux.

  Par curiosité, vous pouvez voir [les flux que j'ai déjà créé](http://feed43.com/users/j0k3r).

