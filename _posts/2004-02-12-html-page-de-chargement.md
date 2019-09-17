---
layout: post
title: 'HTML - Page de chargement'
date: '2004-02-12 23:58:21'
author: j0k
tags: développement
excerpt: 'Pour faire une joli barre de chargement pendant que tout son site s''affiche, c''est très simple :).'
---

Pour faire une joli barre de chargement pendant que tout son site s'affiche, c'est très simple :).

Tout d'abord, je vous explique comment cela fonctionne :

 - Un bout de script affiche une barre dites de chargement avant tout affichage de votre site.
 - Le site s'affiche "derrière" la barre de chargement
 - La page est fini de charger et un "signal" est envoyé au script pour lui dire d'arrêter d'afficher la barre de chargement.

On appelle cela du DHTML. Le DHTML permet entre autres d'afficher des choses (tableau, images ...) par dessus du html.

 On a donc la première partie de ce script présent entre les balises <head> et </head> de votre page html (ou php ou autre ...) :

```html
<div id="waitDiv" style="position:absolute; left:300; top:300; visibility:hidden; text-align: center">
        <table cellpadding="6" cellspacing="0" border="1" bgcolor="#FFCD36" bordercolor="#000000">
                <tr>
                        <td align="center">
                                Loading...<br />
                                <img src="img/wait.gif" alt="Please Wait" />
                                <br />Please wait...
                        </td>
                <tr>
        </table>
</div>
```

  Biensur vous pouvez paramétrer tout cela :

 - Modifier la position de la barre de chargement en modifiant dans la balise DIV les paramètres suivant : *style="position:absolute; left:300; top:300"*

        _left_ : La distance a laquelle il va se trouver par rapport au bord gauche
        _top_ : La distance a laquelle il va se trouver par rapport au haut

 - Modifier la couleur de fond dans les paramètres du tableau : *bgcolor="#FFCD36" bordercolor="#000000"*

        _bgcolor_ : Couleur de fond
        _bordercolor_ : Couleur de la bordure

 - Modifier le texte du dessus : Loading... et le texte du dessous : Please wait...
 - Et enfin modifier la barre de chargement proprement dites : img/wait.gif

Ce petit script permet d'afficher la barre de chargement. Voyons maintenant ce qui permet de l'ouvrir au début du chargement et de le fermer a la fin. C'est maintenant qu'apparait le DHTML :

```js
<script type="text/javascript">
<!--
var DHTML = (document.getElementById || document.all || document.layers);
function ap_getObj(name)
{
        if (document.getElementById)
        {
                return document.getElementById(name).style;
        }
        else if (document.all)
        {
                return document.all[name].style;
        }
        else if (document.layers)
        {
                return document.layers[name];
        }
}

function ap_showWaitMessage(div, flag)
{
        if (!DHTML) return;
        var x = ap_getObj(div);
        x.visibility = (flag) ? 'visible':'hidden'
        if(! document.getElementById)
                if(document.layers)
                        x.left=280/2;
        return true;
}

ap_showWaitMessage('waitDiv', 1);
//-->
</script>
```

  Vous placez ce script juste après le précédent. Rien à modifier dans ce source, juste à remarquer que la variable waitDiv est mise a 1, vous vous imaginez bien qu'elle sera mise a O pour arrêter l'affichage.

  S'en est fini pour le début de l'affichage, placez ces deux bouts de scripts entre les balises <head> et </head> de toutes vos pages de façon à retrouver la barre de chargement sur toutes vos pages ;).

  Pour finir, voici le code à placer tout en bas de vos pages, juste avant la balise </body> :

```js
<script type="text/javascript">
<!--
ap_showWaitMessage('waitDiv', 0);
//-->
</script>
```

  Voila je vous ai tout dis ! :D

  Libre à vous de le customiser ou pas :p

 Si vous avez quelconque problème pour mettre ce script, le forum est a votre disposition.
