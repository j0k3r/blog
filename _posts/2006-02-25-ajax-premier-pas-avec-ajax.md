---
redirect_from:
  - /article/ajax-premier-pas-avec-ajax
layout: post
title: 'Ajax - Premier pas avec AJAX'
date: '2006-02-25 12:33:31'
author: j0k
tags: développement
excerpt: 'Dans ce billet nous allons vous montrer rapidement des exemples simples en AJAX de façon à ce que vous comprenniez un peu comment cela fonctionne.  Nous allons utiliser pour cela le framework [XHRConnection](http://xhrconnection.sutekidane.net/ "Lien") qui, comme je vous l''ai dit dans le précédent billet, est très facile d''utilisation.'
---

Dans ce billet nous allons vous montrer rapidement des exemples simples en AJAX de façon à ce que vous comprenniez un peu comment cela fonctionne.  Nous allons utiliser pour cela le framework [XHRConnection](http://xhrconnection.sutekidane.net/) qui, comme je vous l'ai dit dans le précédent billet, est très facile d'utilisation.

**Récupérer des GET et POST**

 On dispose d'un formulaire avec un champ texte. En cliquant sur 'OK', on envoie les données de ce champ texte via l'objet XmlHttpRequest vers une page HTML, qui va nous retourner diverses informations.

  Dans un premier temps, on pense à appeler XHRConnection

```html
<script type="text/javascript" src="XHRConnection.js"></script>
```

  On définit la fonction JavaScript qui va implémenter la classe XHRConnection, pour ensuite lui envoyer les données

```js
var remplirChamp = function (obj)
{
        document.getElementById('contenu').innerHTML = obj.responseText;
}

function sendData(data, value, page, method)
{
        var XHR = new XHRConnection();
        XHR.appendData(data, value);
        XHR.sendAndLoad(page, method, remplirChamp);
}
```

 La fonction *remplirChamp* est une fonction de callback, c'est à dire qu'elle sera appeler une fois la requête envoyée au fichier PHP. Elle a pour but d'afficher les infos retournées.

 La fonction *sendData* envoie les données. Elle utilise la méthode *appendData* pour empiler des données et la méthode *sendAndLoad* pour les envoyer au fichier PHP.

  On mets en place le formulaire avec la fonction JavaScript qui va envoyer les données à une autre fonction JavaScript

```html
<form name="formGet" method="get">
        Nom: <input type="text" name="nom" />
        <a href="javascript:sendData('nom', document.formGet.nom.value, 'get.php', 'GET')">GO</a>
</form>
```

  On n'oublie pas de mettre le "div" pour afficher le message de retour

```html
<div id="contenu"><!-- c'est ici que les données récupérées vont apparaître --></div>
```

  Concernant le fichier PHP qui va traiter les données, il est tout simple. Il récupère les données en GET et affiche simplement si il y en a ou pas

```php
header('Content-type: text/html') ;

if(isset($_GET['nom']) && !empty($_GET['nom']))
{
    echo 'Bravo <em>'.$_GET['nom'].'</em> vous avez réussi en <strong>GET</strong>' ;
}
else
{
    echo 'Erreur le champ est vide en <strong>GET</strong>' ;
}
```

  Regarder ce que cela [donne](http://www.j0k3r.net/exemples/ajax/recuperer-post-et-get.html).


**Finalement**

 Vous ne serez pas forcément convaincu par cette première démonstration d'AJAX. Vous allez me dire, oui moi je fais la même chose sans AJAX en utilisant directement JavaScript. Et je vous dirai : oui c'est tout à fait faisable !

 Mais si je vous montrais un exemple où l'on verrai bien AJAX en action (*avec tout son système asynchrone et le rafraichissement de la page sans la recharger*) ce serait trop compliqué pour que vous y compreniez quelques choses.

  C'est pour ça que dans le reste de cette partie consacré à AJAX, je vous présente des scripts beaucoup plus orienté AJAX.  Et là vous pourrez voir toute sa puissance :)
