---
redirect_from:
  - /article/html-mettre-en-favoris
layout: post
title: 'HTML - Mettre en favoris'
date: '2004-12-06 11:03:22'
author: j0k
tags: développement
excerpt: 'Beaucoup de monde recherche ce genre de script assez pratique pour mettre un site en favoris.  Je vais vous présenter en détail ce script qui n''est pas si compliqué que ça.'
---

Beaucoup de monde recherche ce genre de script assez pratique pour mettre un site en favoris.  Je vais vous présenter en détail ce script qui n'est pas si compliqué que ça.

## **La fonction en elle-même**

 C'est une fonction javascript qui permet d'ajouter un favoris tout simplement.
 Malheureusement cette fonction est propre à Internet Explorer et elle permet de manipuler le navigateur.

 Il faut utiliser l'objet *window.external* et la méthode *AddFavorite()*.

  Ça syntaxe ce définit comme ceci :
*window.external.AddFavorite(String url, String titre);*
 > String url : Représente l'url de votre site
 > String titre : Correspond au titre qu'aura le favoris (en général le titre du site)

## **L'utilisation**

 Très simple aussi, il suffit de l'inclure dans un lien html :

```html
<a href="javascript:window.external.addfavorite('http://www.j0k3r.net','Site perso de j0k3r_n0ir')">Ajoutez-moi au favoris</a>
```

Plusieurs possibilité s'offre à vous :

 - Mettre une image à la place du texte.
 - Personnalisé le lien ...

## **L'alternative (pour les non IE)**

 Et oui heureusement il existe une alternative à ce code. Le simple raccourci *Ctrl+D* permet d'ouvrir une boite de dialogue qui permet ensuite d'ajouter le site, sur lequel vous surfez, dans les favoris.
