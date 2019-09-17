---
redirect_from:
  - /blog/supprimer-la-bordure-en-pointille-autour-des-liens-en-css
layout: post
title: 'Supprimer la bordure en pointillé autour des liens en CSS'
date: '2008-03-13 08:47:07'
author: j0k
tags: border css
excerpt: "Des tricks, encore des tricks, toujours des tricks !!   Le net regorge de tricks CSS (sorte d'astuces) pour parer à un peu tous les problèmes que l'on peut rencontrer quand on fait de l'intégration. D'ailleurs, une personne qui fait de l'intégration HTML, ne s'appelle pas un *intégrateur* mais un _développeur front office_. Forcément, c'est plus class ;-)  \n  \n …"
---

Des tricks, encore des tricks, toujours des tricks !!   Le net regorge de tricks CSS (sorte d'astuces) pour parer à un peu tous les problèmes que l'on peut rencontrer quand on fait de l'intégration. D'ailleurs, une personne qui fait de l'intégration HTML, ne s'appelle pas un *intégrateur* mais un **développeur front office**. Forcément, c'est plus class ;-)

Quand vous cliquez sur un lien, que ça sous IE ou sous Firefox, il reste toujours une bordure en pointillé qui se mets autour pour indiquer que le lien est actif. Cela sous-entends que c'est le dernier sur lequel vous avez cliqué. Ces pointillés apparaissent aussi quand le lien est mis en valeur, on parle de "focus" dans ce cas.   Et bien, une astuce CSS permet de supprimer cette bordure en pointillé :

```css
a:active, a:focus{
    outline:none;
}
```

Tout simplement !   Par contre, je ne pense pas que cela soit une bonne idée de supprimer les pointillés pour le focus aussi. Cela perd l'utilisateur s'il veut aller de lien en lien avec la touche tabulation. Par contre, si vous gérez vous même le focus des liens, c'est une autre histoire !

Vous trouvez quelques tricks les plus utilisés [ici](http://cssglobe.com/post/1392/8-premium-one-line-css-tips) et [là](http://stylizedweb.com/2008/03/12/most-used-css-tricks/). Ça peut être utile ;-)
