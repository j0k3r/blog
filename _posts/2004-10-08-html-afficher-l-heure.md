---
layout: post
title: 'HTML - Afficher l''heure'
date: '2004-10-08 18:30:36'
author: j0k
tags: '[développement]'
excerpt: "Comme tout autre petit \"truc\" ou \"gadget\" que l'on peut afficher sur son site, je vais vous expliquer comme publier l'heure sur votre site.  \nDeux méthodes sont possibles et elles n'utilisent pas le même langage, une utilise le javascript et l'autre le php :)"
---

Comme tout autre petit "truc" ou "gadget" que l'on peut afficher sur son site, je vais vous expliquer comme publier l'heure sur votre site.
Deux méthodes sont possibles et elles n'utilisent pas le même langage, une utilise le javascript et l'autre le php :)

## **L'heure grâce à javascript**

 Vous le savez certainement, javascript permet de faire pas mal de chose sur un site internet, mais seulement "côté client" (client side). Puisque il est exécuté sur votre browser (IE, Firefox ...). Il permet entre autre de rafraîchir une certaine zone d'une page web sans pour cela recharger toute la page.

 C'est (un peu) le cas de cette horloge qui se mets à jour toutes les secondes, sans rafraîchir la page.

  Elle se calque sur l'horloge de l'ordinateur du visiteur. Cela fonctionne très bien sous IE et Firefox le tout sous windows, je n'ai pas testé sous Linux mais je ne pense pas que cela pose de problème.

  Le code se divise en deux parties : les fonctions et l'affichage.

 Voila le code des fonctions, à placer entre les balises <head> </head> de votre page :

```html
<script type="text/javascript">
 function tS(){
     x=new Date();
     x.setTime(x.getTime());
     return x;
 }
 function lZ(x){
     return (x>9)?x:'0'+x;
 }
 function dT(){
     if(fr==0){
         fr=1;
         document.write(" " + '<span id="tP">'+eval(oT)+'</span>');
     }
     document.getElementById("tP").innerHTML =  eval(oT);
     setTimeout('dT()',1000);
 }
 var fr=0;
 oT="tS().getHours()+':'+lZ(tS().getMinutes())+':'+lZ(tS().getSeconds())";
 </script>
 ```

 Ensuite le code pour afficher l'heure est tout simple et il se plie aux balises html. C'est à dire qu'on peut le mettre en gras, en italique ou encore en souligné. Vous pouvez le placer où vous voulez sur votre page :

```html
<script>dT();</script>
```

## **L'heure grâce à PHP**

 Le principe est le même que le tutoriel "Afficher la date du jour". On utilise la même fonction (polyvalente) **date()**.

 En lui passant les bons paramètres, on peut afficher n'importe quel forme d'heure...

  Vous avez tout d'abord l'heure accessible grâce aux paramètres :

 - g : Heure, au format 12h, sans les zéros initiaux (1 à 12)
 - G : Heure, au format 24h, sans les zéros initiaux (0 à 23)
 - h : Heure, au format 12h, avec les zéros initiaux (01 à 12)
 - H : Heure, au format 24h, avec les zéros initiaux (00 à 23)

Puis les minutes :

 - i : Minutes avec les zéros initiaux (00 à 59)

Et pour finir les secondes :

 - s : Secondes, avec zéros initiaux (00 à 59)

Une dernière chose, si vous afficher l'heure au format 12h, je vous conseille de mettre aussi les paramètres qui permettent de savoir si on est le matin ou l'après-midi :

 - a : Ante meridiem et Post meridiem en minuscules (am ou pm)
 - A : Ante meridiem et Post meridiem en majuscules (AM ou PM)

Pour l'utiliser il suffit d'écrire la fonction en passant les paramètres voulus :

`date("H:i:s");`

 Affichera l'heure au format 24h avec les zéros initiaux puis les minutes et les secondes le tout séparé par des ":". Vous pouvez insérer n'importe quel caractère entre les différents paramètres pour séparer les heures, minutes et secondes.

 Voici quelques exemples qui vous montre comme cela fonctionne :

    date("H : i : s");
    13 : 20 : 53
    date("h / i / s");
    01 / 20 / 53
    date("g - i - s a");
    1 - 20 - 53 pm
    date("G | i | s A");
    13 | 20 | 53 PM
