---
layout: post
title: 'Ajax - Edition à la volée en AJAX (Edit in place)'
date: '2006-03-23 21:14:27'
author: j0k
tags: '[développement]'
excerpt: 'Cette édition à la volée en AJAX permet lors d''un simple clic sur un texte, de pouvoir le modifier. C''est le principe utilisé sur Flickr pour modifier directement la description d''une photo.'
---

Cette édition à la volée en AJAX permet lors d'un simple clic sur un texte, de pouvoir le modifier. C'est le principe utilisé sur Flickr pour modifier directement la description d'une photo.

## _**1.** C'est parti !_

 Dans un premier temps je vais tout de suite vous montrez le code HTML de la page qui inclut bien évidemment la librairie prototype.js ainsi que le fichier editinplace.js qui contient les directives pour dialoguer avec la librairie.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>Edit-in-Place with Ajax</title>
<link href="editinplace.css" rel="Stylesheet" type="text/css" />
<script src="prototype.js" type="text/javascript"></script>
<script src="editinplace.js" type="text/javascript"></script>
</head>
<body>
<h1>Edit-in-place</h1>
<p id="desc">Dashing through the snow on a one horse open sleigh.</p>
</body>
</html>
```

 Le fonctionnement est simple.
 Lorsque l'on passe par dessus la balise *p*, elle se met en surbrillance et le curseur change (pointer, curseur d'édition ...).

 Si l'on clique dessus, on enlève la balise *p* pour la remplacer par la balise *textarea* avec le contenu dedans. On affiche aussi deux boutons qui permettent soit d'annuler de modifier.

 En annulant, on revient tout simplement avec le *p* d'origine. Si on valide la modification, on envoie la requête via AJAX et le tout est modifié. On met ensuite à jour la balise *p* avec les nouvelles données.

##   _**2.** On met en place les évènements_

 La toute première étape consiste à mettre en place les différents évènements qui vont permettre de mettre en surlignage (par exemple).

  Voilà comment se présente le début du fichier editinplace.js.

```js
Event.observe(window, 'load', init, false);

function init()
{
        makeEditable('desc');
        makeEditable('pizza');
}

function makeEditable(id)
{
        Event.observe(id, 'click', function(){edit($(id))}, false);
        Event.observe(id, 'mouseover', function(){showAsEditable($(id))}, false);
        Event.observe(id, 'mouseout', function(){showAsEditable($(id), true)}, false);
}

function showAsEditable(obj, clear)
{
        if (!clear)
        {
                Element.addClassName(obj, 'editable');
        }
        else
        {
                Element.removeClassName(obj, 'editable');
        }
}
```

  La première ligne permet de dire à la page HTML d'initialiser la page avec la fonction *init*. Cela a le même effet que si on avait mis la fonction dans l'attribut onload de la balise body.
 Le fonction *makeEditable* associe les évènements click, mouseover et mouseout à une fonction de façon à les traiter plus facilement.

 Et la fonction *showAsEditable* permet de rendre éditable ou non le champ.
  On n'oublie pas le CSS pour le style :

```css
.editable, textarea
{
        color: #000;
        background-color: #ffffd3;
}
```

##   _**3.** Le switcher qui va nous permettre de mettre la zone éditable ou non_

 La fonction *edit* a été attribué à l'évènement click plus haut

```js
function edit(obj)
{
        Element.hide(obj);

        var textarea = '<div id="'+obj.id+'_editor"><textarea id="'+obj.id+'_edit" name="'+obj.id+'" rows="4" cols="60">'+obj.innerHTML+'</textarea>';
        var button = '<div><input id="'+obj.id+'_save" type="button" value="Modifier" /> - <input id="'+obj.id+'_cancel" type="button" value="Annuler" /></div></div>';

        new Insertion.After(obj, textarea+button);

        Event.observe(obj.id+'_save', 'click', function(){saveChanges(obj)}, false);
        Event.observe(obj.id+'_cancel', 'click', function(){cleanUp(obj)}, false);
}
```

 Dans un premier temps, on masque l'objet avec *Element.hide* puis on insère le *textarea* avec le contenu à l'intérieur. On attribut aussi deux évènements aux clicks sur les boutons qui ont été créé.

  La fonction *saveChanges *est détaillée juste après. Et la fonction *cleanUp *permet de revenir en arrière. C'est à dire d'effacer le *textarea* et de remettre le contenu de l'objet.

```js
function cleanUp(obj, keepEditable)
{
        Element.remove(obj.id+'_editor');
        Element.show(obj);
        if (!keepEditable) showAsEditable(obj, true);
}
```

##   _**4.** La sauvegarde des modifications_

 C'est ici que va vraiment entrer en jeu AJAX. On va envoyer une requête vers le fichier PHP via la fonction *Ajax.Request*. Celle ci va retourner des donneés qui seront soit positives (la modification a marché, on appelle *editComplete*) soit négatives (la modification a échoué, on appelle la fonction *editFailed*).

```js
function saveChanges(obj)
{
        var new_content =  escape($F(obj.id+'_edit'));

        obj.innerHTML   = "Enregistrement…";
        cleanUp(obj, true);

        var success     = function(t){editComplete(t, obj);}
        var failure     = function(t){editFailed(t, obj);}

        var url = 'edit.php';
        var pars = 'id='+obj.id+'&content='+new_content;
        var myAjax = new Ajax.Request(url, {method:'post', postBody:pars, onSuccess:success, onFailure:failure});
}

function editComplete(t, obj)
{
        obj.innerHTML   = t.responseText;
        showAsEditable(obj, true);
}

function editFailed(t, obj)
{
        obj.innerHTML   = "La modification n'a pas fonctionné.";
        cleanUp(obj);
}
```

  Comme vous pouvez le voir, on remplace le champ par le "Enregistrement…" pour bien indiquer que la modification a été lancée.

  Suis ensuite la préparation de la requête AJAX pour le fichier PHP avec les fonctions de retour (*success *et *failure*), puis le fichier PHP (_/!\_ Eventuellement à modifier) et pour finir les variables qu'il va recevoir.

##   _**5.** Le fichier PHP_

 Il est très basique, puisqu'il récupère uniquement les données envoyées pour les afficher ensuite.

 Ici le script appelé est edit.php

```php
$id = $_POST['id'];
$content = $_POST['content'];
echo stripslashes(utf8_encode($content));
```

 Cependant, il vous faudrait faire un script derrière qui écrit le tout dans une base de donnée mais qui vérifie aussi si la personne à le droit de modifier ce texte :)

  Ce fichier peut être le même que celui qui contient tout ce qu'on a cité plus haut, mais dans ce cas il faudrait revoir autrement le fichier PHP. Le plus simple pour le moment c'est de passer par un fichier externe. Nommé par exemple la page HTML en index.html et laissez la page edit.php tel quel.

##   _**6.** Exemple_

 Et pour vous montrez concrètement ce que cela fait, voici un [exemple](http://www.j0k3r.net/exemples/ajax/edit-in-place.html).

  Inspiré de [24ways](http://24ways.org/advent/edit-in-place-with-ajax).
