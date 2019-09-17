---
redirect_from:
  - /article/faire-son-icone-web
layout: post
title: 'Faire son icone web'
date: '2004-02-13 23:58:21'
author: j0k
tags: webdesign
excerpt: "Vous le trouvez comment le joli \"E\" présent devant toutes les urls de votre brouteur internet préféré ?  \nPersonnellement je le trouve trop classique, on le voit partout."
---

## _1) Intro :_

Vous le trouvez comment le joli présent devant toutes les urls de votre brouteur internet préféré ? Personnellement je le trouve trop classique, on le voit partout. Il commence un peu à nous énerver !

 Alors pourquoi ne pas lui faire la peau et le remplacer par le votre, propre a votre site web ?

 Je trouve l'idée intéressante, c'est pour ça que je vous propose un article pour faire votre propre icône favoris (c'est son vrai nom).

##  _2) Le matos requit :_

 Pour faire ce petit icone, on va utiliser un logiciel fait pour ça : IconForge produit par Cursorarts (dispo [ici](http://favicon.com/index.jsp?id=Icon+Forge)) Plusieurs possibilité s'offre à nous grâce à ce log !
 On a le choix de faire notre icone en 1/2/4 images, vu que je n'ai pas trop compris à quoi servait le fait de le faire en 2/4 images, on va le faire en 1 image, c'est plus logique !

##  _3) On se jette à l'eau :_

 Une fois le log install, faites File > New > New 1 Image Favicon, une nouvelle fenêtre dans le genre de celle-ci devrai apparaitre dans IconForge. Double cliquez sur le petit carré gris. Une deuxième fenetre s'ouvre. C'est dans celle là que vous allez faire votre icone. L'apparence ne doit pas trop vous etre inconnu. On peut voir que cela ressemble comme deux goutes d'eau a l'interface d'un logiciel de dessin. :)

 Faites votre icone comme bon vous semble, vous avez un aperçu instantannée sur le coté gauche de la petite fenêtre, a peu près la taille réelle qu'il aura. Une fois votre chef d'oeuvre fini, cliquer sur, faites "ok" puis "yes". Voila votre icone est maintenant prêt a etre enregistré. Vous pouvez encore modifié votre icone grace a la fenetre qui est resté ouverte.

 Une fois fini, fermez cette petite fenetre : cliquez sur la croix puis sur "no". Maintenant faites "save", le gros icone de la barre des taches du haut, enregistrez votre icone sous le nom de _favicon.ico_.

##  _4) Finalisation et mise en page :_

 Dernière ligne droite !

 Votre icone est maintenant créé. Envoyez le sur votre ftp dans le répertoire racine. En théorie, grâce au nom que nous lui avons donné la relation votre site/votre icone se fait toute seule mais cependant on va quand même prendre la peine de "forcer" cet icone pour cette page.

 Pour cela, il vous suffit de mettre ce code source entre les balises <head> et </head> de votre page html :

```html
<link rel="shortcut icon" href="favicon.ico" />
```

 De cette façon, vous pouvez créer plusieur icone que vous attribuerez à différentes pages de votre site.

##  _5) Post-article :_

 Comme vous avez pu certainement le remarquer (si vous avez un peu trifouillé ce logiciel) on peut faire pas mal de chose avec. On peut aussi se créé un curseur. Cela fera sans doute l'objet d'un prochain article ;)

   © j0k
