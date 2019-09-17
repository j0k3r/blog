---
layout: post
title: 'JSLoader propose toutes les librairies JS à la demande'
date: '2007-10-23 10:13:17'
author: j0k
tags: javascript loader
excerpt: "Le concept est très simple proposé un seul fichier qui vous permet ensuite, via un simple appel à une fonction et quelques paramètres de charger la majeure partie des librairies JavaScript du moment !     \n[JSLoader](http://www.jsloader.com/) mets à notre disposition un fichier JavaScript à inclure sur vos pages. En faisant appel à la fonction      …"
---

Le concept est très simple proposé un seul fichier qui vous permet ensuite, via un simple appel à une fonction et quelques paramètres de charger la majeure partie des librairies JavaScript du moment !
[JSLoader](http://www.jsloader.com/) mets à notre disposition un fichier JavaScript à inclure sur vos pages. En faisant appel à la fonction *JSLoader.load* et en lui passant le nom de la librairie que vous souhaitez avec en prime le version que vous désirez !    [Par exemple](http://www.jsloader.com/twiki/bin/view/JSLoader) pour charger prototype.js en version 1.6.0-rc0 :

```js
JSLoader.load("ria", "prototype", "1.6.0-rc0");
```

Ceci inclura automatiquement la librairie à votre page.    Inconvénient ... cela nécessite d'inclure le fichier JavaScript de JSLoader qui est hébergé chez eux, donc externe à votre site ... ce qui peut poser certains problèmes.

Mais l'idée est bonne :-)
