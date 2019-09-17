---
layout: post
title: 'Ajax - Lier deux champs en autocompletion'
date: '2007-05-09 20:22:13'
author: j0k
tags: développement
excerpt: "Mon précédent tutoriel sur l'[autocompletion avancée en AJAX](http://www.j0k3r.net/ajax-une-autocompletion-avancee-en-ajax-6.html) a plu à beaucoup de monde :) Cependant, certains [cherchaient](http://www.j0k3r.net/forum/autocompletion-2-champs-ou-plus-1768.htm) à faire une autocompletion en liant deux champs de façon à faire un peu comme deux listes déroulantes mais en utilisant une autocompletion en AJAX (plus fun hein ?).  \nC'est ce que je vais vous montrer maintenant…"
---

Mon précédent tutoriel sur l'[autocompletion avancée en AJAX](http://www.j0k3r.net/ajax-une-autocompletion-avancee-en-ajax-6.html) a plu à beaucoup de monde :)

Cependant, certains [cherchaient](http://www.j0k3r.net/forum/autocompletion-2-champs-ou-plus-1768.htm) à faire une autocompletion en liant deux champs de façon à faire un peu comme deux listes déroulantes mais en utilisant une autocompletion en AJAX (plus fun hein ?).
C'est ce que je vais vous montrer maintenant...

L'idée est venue en janvier dernier quand un ami, [AdysOne](http://le-journal.adysone.net),  m'a demandé comment il pouvait lier deux champs autocomplémentés ensemble. Après l'avoir courtement aidé, il a finalement trouvé la solution.

## _**1.** Préambubulle_

Il est évident qu'il est conseillé d'avoir déjà lu le premier tutoriel sur comment faire une [autocompletion avancée en AJAX](http://www.j0k3r.net/ajax-une-autocompletion-avancee-en-ajax-6.html) avant de vous attaquer à celui-ci.
Je ne parlerai volontairement pas de script.aculo.us et du fait qu'il faut introduire les librairies en début de page puisque je l'ai expliqué dans le précédent tutoriel.

## _**2.** Le principe et sa solution_

Il est simple : lier deux champs en autocompletion. Quand une nouvelle autocompletion est faite sur le premier, les éléments du deuxième champs dépendront de celui-ci.
La solution est de passer en paramètre au deuxième champ autocomplémenté la valeur (ou l'id) du premier champ.
Je reprends l'exemple de [fouilli](http://www.j0k3r.net/forum/voir-fouilli-599.htm), mis sur le forum :

> Imaginons un formulaire de recherche avec une liste de lieux  :
> Pays et Ville.
> Si je me met sur ville et que je commence à taper des lettres, pas de problème :
> je met "PA", ça me propose PARIS, PALERME ...
> Par contre,  si dans le pays je choisis ITALIE, et  bien je ne souhaite pas avoir PARIS  comme choix quand je vais commencer à  taper mon "PA" dans la ville.

La mise à jour des informations pour l'autocompletion du deuxième champ se fera lors de la perte du focus du premier.

## _**3.** La fonction de retour qu'on connait bien_

On reprends la fonction *ac_return* du précédent tutoriel pour récupérer l'id des autocompletions. On l'utilisera avec "l'option" *-idcache* puisqu'on n'utilisera pas d'image.

```js
function ac_return(field, item){
    // on met en place l'expression régulière
    var regex = new RegExp('[0123456789]*-idcache', 'i');
    // on l'applique au contenu
    var nomimage = regex.exec($(item).innerHTML);
    //on récupère l'id
    id = nomimage[0].replace('-idcache', '');
    // et on l'affecte au champ caché
    $(field.name+'_id').value = id;
}
```

## _**4.** Le formulaire_

Voici ensuite le formulaire qui comprends les deux champs qui seront autocomplémentés.

```html
<form action="?" method="post">
    <div>
        <label for="pays">Pays : </label>
        <!-- Le champ "pays" 1ère autocomplétion -->
        <input type="input" name="pays" id="pays" value="" />
        <div class="update" id="pays_update"></div>
    </div>
    <div>
        <label for="ville">Ville : </label>
        <!-- Le champ "ville" 2ème autocomplétion, liée à "pays" -->
        <input type="input" name="ville" id="ville" value="" />
        <div class="update" id="ville_update"></div>
    </div>
    <div>
        <!-- Le champ caché "pays_id" pour pays -->
        <input type="hidden" name="pays_id" id="pays_id" value="" />
        <!-- Le champ caché "ville_id" pour ville (si, si, sans déconner !) -->
        <input type="hidden" name="ville_id" id="ville_id" value="" />
    </div>
</form>
```

## _**5.** Les Autocompleter ainsi que la "liaison" des champs_

Le premier Autocompleter qui ne diffère pas du tout du précédent tutoriel et qui concerne les pays :

```js
new Ajax.Autocompleter (
    'pays',
    'pays_update',
    'ajax.autocompletion.php',
    {
        method: 'post',
        paramName: 'pays',
        afterUpdateElement: ac_return
    }
);
```

Le deuxième Autocompleter concerne le champ ville et est un peu plus poussé. On lui donne un nom de façon à pouvoir l'appeler ensuite pour mettre à jour l'id du pays.

```js
ville_completer = new Ajax.Autocompleter (
    'ville',
    'ville_update',
    'ajax.autocompletion.php',
    {
        method: 'post',
        paramName: 'ville',
        parameters: 'id_pays='+$F('pays_id'),
        afterUpdateElement: ac_return
    }
);
```

Noter le *parameters* qui permet de passer au script PHP l'id du pays précédemment sélectionné dans la première autocompletion.
On utilise ici une méthode native de prototype.js le $F() qui permet de récupérer la valeur d'un champ input.
Et pour finir avec le JavaScript, on va mettre en place le fait qu'en perdant le focus sur le champ *pays* on mets à jour l'id dans l'Autocompleter du champ ville.

```js
Event.observe(
    'pays',
    'blur',
    function(){
        ville_completer.options.defaultParams='id_pays='+$F('pays_id')
    }
);
```

## _**6.** Passons maintenant au PHP_

Le fichier PHP, *ajax.autocompletion.php* est divisé en deux parties, une pour chaque autocompletion.
La première partie concerne le champ pays. C'est presque le même code que dans le précédent tutoriel :

```php
if(isset($_POST['pays'])){
    header('Content-type: text/html; charset=iso-8859-1');
    // on fait la requête
    $sql = "SELECT `id_pays`, `nom_pays`
            FROM `pays`
            WHERE `nom_pays` LIKE '".$_POST['pays']."%'";
    $req = mysql_query($sql);

    $i = 0;
    echo '<ul class="payss">';
    // on boucle sur tous les éléments
    while($autoCompletion = mysql_fetch_assoc($req)){
        echo '<li class="pays"><span class="informal" style="display: none;">'.$autoCompletion['id_pays'].'-idcache</span><div class="nom">'.$autoCompletion['nom_pays'].'</div></li>';
        // on s'arrête s'il y en a trop
        if (++$i >= 10)
            die('<li>...</li></ul>');
    }
    echo '</ul>';
    die();
}
```

La suite concerne le champ ville. On remarquera ici qu'on va utiliser les premières lettres tapées pour trouver la ville et le champ passé en paramètre de l'Autocompleter.

```php
elseif(isset($_POST['id_pays'])){ // renvoyé par le deuxième Autocompleter
    header('Content-type: text/html; charset=iso-8859-1');
    // on fait la requête
    $sql = "SELECT `id_ville`, `nom_ville`
            FROM `villes`
            WHERE `nom_ville` LIKE '".$_POST['ville']."%'
            AND `id_pays`='".$_POST['id_pays']."'";
    $req = mysql_query($sql);

    $i = 0;
    echo '<ul class="villes">';
    // on boucle sur tous les éléments
    while($autoCompletion = mysql_fetch_assoc($req)){
        echo '<li class="ville"><span class="informal" style="display: none;">'.$autoCompletion['id_ville'].'-idcache</span><div class="nom">'.$autoCompletion['nom_ville'].'</div></li>';
        // on s'arrête s'il y en a trop
        if (++$i >= 10)
            die('<li>...</li></ul>');
    }
    echo '</ul>';
    die();
}
```

Le tour est joué :)

## _**7.** Et avec plusieurs champs ?_

Et bien le principe serait le même.
Maintenant qu'on sait le faire avec deux champs, on peut le faire avec plusieurs.
Si on prends l'exemple d'un département, il suffirai de rajouter dans le formulaire un champ caché nommé *id_dep*. Ensuite il faudrait créer un troisième Autocompleter que l'on nommerai *dep_completer* en mettant en paramètre, l'*id_pays* et l'*id_ville*.
Rajouter un observe pour prendre en compte la perte du focus sur le champ ville et ainsi mettre à jour l'Autocompleter du champ département.
Et pour finir, rajouter un *elseif* dans le script PHP.

## _**8.** Voyons tout ça_

Rien ne vaut une [p'tit démo](http://www.j0k3r.net/exemples/ajax/autocompletion2.php) pour comprendre le fonctionnement.
Vous pouvez aussi [récupérer les fichiers](http://www.j0k3r.net/dl/autocompletion2.rar) pour tester directement chez vous.
Et puis comme d'habitude, si vous avez des problèmes, abusez du forum ! ;)

Merci à [AdysOne](http://le-journal.adysone.net) pour l'idée et l'exemple de code ainsi qu'à [DanRaZoR](http://danrazor.net) pour sa relecture toujours aussi soignée !
