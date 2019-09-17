---
layout: post
title: 'HTML - Anti-clic droit'
date: '2004-03-12 23:58:21'
author: j0k
tags: développement
excerpt: 'On a souvent envie de bloquer les gens, enfin ... de bloquer le clic droit de la souris de nos visteurs. Souvent parce qu''on se dit qu''il ne pourra pas récupérer telle ou telle image ou comme ça il ne pourra voir le source de ma page ... et plein de chose comme ça.'
---

On a souvent envie de bloquer les gens, enfin ... de bloquer le clic droit de la souris de nos visteurs. Souvent parce qu'on se dit qu'il ne pourra pas récupérer telle ou telle image ou comme ça il ne pourra voir le source de ma page ... et plein de chose comme ça.
Détrompez-vous, il y a toujours un moyen de voir et/ou de trouver l'info que l'on désire :p ... Mais la n'est pas le but de ce tuto.

  Le script est simple mais tout le monde ne le connais pas.
 Un paramètre de la balise **<body>** permet de récupérer l'action du clic droit sur une page. Il suffit, une fois l'action du clic droit intercepté, d'excécuter une fonction à la place de l'action du clic droit habituel.

## **Voila la méthode dites "explicative"**

Parce qu'on renseigne l'utilisateur en lui disant que le clic droit n'est pas autorisé. On le fait avec un **alert()** en javascript qui fait très bien l'affaire.

 Voici un exemple de page (toute simple) en html qui interdit le clic droit :

```html
<html>
<head>
<title>Anti-Clic droit "explicatif"<title>
<script type="text/javascript">
<!--
function anti_clic()
{
     alert('Désolé le clic droit est désactivé sur ce site...');
     return false;
}
//-->
</script>
</head>
<body onContextMenu="return anti_clic();">
</body>
</html>
```

Et son rendu : [Anti-Clic droit "explicatif"](http://www.j0k3r.net/exemples/html/5-anti-clic-droit-1.html)

## **Et voici la méthode dites "incognito"**

Elle consiste à ne rien faire quand la page reçoit un clic droit. Le visiteur fera un clic droit et absolument rien ne se passera. Il suffit tout simplement de passer en paramètre **return false** et hop le tour est joué :

```html
<html>
<head>
<title>Anti-Clic droit "incognito"<title>
</head>
<body onContextMenu="return false;">
</body>
</html>
```

 Et son rendu : [Anti-Clic droit "incognito"](http://www.j0k3r.net/exemples/html/5-anti-clic-droit-2.html)

  Voila vous pouvez désormais "bloquer" vos visiteurs. Cependant je vous donne quand même mon point de vue à ce sujet, je ne supporte pas les sites qui bloquent le clic droit ... sauf s'il comporte un menu ... comme sur l'ancienne version de mon site :D (pour les utilisateurs de IE).
