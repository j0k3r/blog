---
redirect_from:
  - /article/ajax-une-autocompletion-avancee-en-ajax
layout: post
title: 'Ajax - Une autocompletion avancée en AJAX'
date: '2006-08-07 09:16:38'
author: j0k
tags: développement
excerpt: "Vous avez certainement déjà mis en place une autocompletion en AJAX via la librairie script.aculo.us. Ce n'est globalement pas très compliqué même si l'exemple présent sur la [page de démo](http://demo.script.aculo.us/ajax/autocompleter) de leur site ne vous permet pas de le faire directement ... bien dommage d'ailleurs."
---

Vous avez certainement déjà mis en place une autocompletion en AJAX via la librairie script.aculo.us.

Ce n'est globalement pas très compliqué même si l'exemple présent sur la [page de démo](http://demo.script.aculo.us/ajax/autocompleter) de leur site ne vous permet pas de le faire directement ... bien dommage d'ailleurs.
Certes NiKo a publié sur son blog [un billet](http://www.prendreuncafe.com/blog/2006/03/19/410-effets-javascript-avec-prototype-et-scriptaculous) intéressant qui permet de le mettre en place mais cet exemple vous permettra d'installer une autocompletion "basique" pour un moteur de recherche par exemple. Cependant il est souvent intéressant de mettre de l'autocompletion ailleurs que sur un moteur de recherche !

##   _**1.** La demande (*Où est-ce que j'en ai besoin ?*)_

 Par exemple, prenons la gestion d'un bureau dans une entreprise. Le bureau est constitué d'un chef et de deux secrétaires. La table contenant le personnel de l'entreprise possède quelques 1000 entrées. Impossible donc de faire une liste déroulante pour sélectionner une personne lors de l'ajout d'un bureau, ça serai un peu lourd.

  En mettant en place une autocompletion, il suffit juste que la personne qui crée le bureau tape les premières lettres du nom de la personne pour en trouver quelques-uns (il est logique que la personne qui crée le bureau connaisse le nom des personnes qui seront dedans !).

  Une fois la personne trouvée, on a juste son nom pour l'instant. On est bien d'accord que cela ne suffit pas et qu'il faut aussi l'id de cette personne pour la liaison avec la table du personnel. Et c'est là qu'entre en jeux l'_autocompletion avancée_. Le but est de récupérer l'id de la personne en même temps que son nom.

##   _**2.** L'astuce_

 L'autocompletion affiche une liste d'éléments répondant aux quelques lettres tapées par la personne. Il est possible de personnaliser cette liste. L'astuce consiste à mettre dans cette liste assez d'infos pour trouver une personne et d'y glisser l'id de la personne.

 Une fois la personne sélectionnée, son nom est mis dans le champ texte et l'id est placé dans un champ caché du formulaire.
  Ainsi on a récupéré les informations que l'on voulait : le nom de la personne, mais surtout son identifiant !

##   _**3.** Fini le blabla, on code !_

 On aura deux fichiers :

 - autocompletion.php qui traitera les infos et affichera le formulaire
 - autocompletion.js pour les fonctions JS


Je ne tiens pas compte des fichiers nécessaires au bon fonctionnement de script.aculo.us.
Ce qui nous donnerait (dans les balises head) :

 /!\ Pensez à mettre tous les autres fichiers JS de script.aculo.us dans le même dossier que scriptaculous.js.

```html
<script type="text/javascript" src="js/prototype.js"></script>
<script type="text/javascript" src="js/scriptaculous.js"></script>
<script type="text/javascript" src="js/autocompletion.js"></script>
```

##   _**4.** Le formulaire_

```html
<form action="?" method="post">
    <label for="chef">Chef : </label>
    <input type="input" name="chef" id="chef" value="" />
    <div class="update" id="chef_update"></div>
    <input type="hidden" name="chef_id" id="chef_id" value="" /><br/>
    <input type="submit" name="action" value="Ajouter" />
</form>
```

 Le premier *input* contiendra le nom de la personne. Le *div*, juste en dessous, recevra la liste des éléments de l'autocompletion. Et le champ *hidden* contiendra l'id de la personne.

 Attention au nommage des champs de votre formulaire. Le champ "mère" est, ici, le champ *chef*. Du coup le champ qui se mets à jour avec la liste des éléments s'appelle *chef_update* et pareil pour celui qui va récupérer l'id : *chef_id*.

  Juste après ce formulaire, on place l'appel à la fonction JavaScript pour l'autocompletion (à placer entre des balises *script*) :

```js
new Ajax.Autocompleter ('chef',
                        'chef_update',
                        'autocompletion.php',
                        {
                                method: 'post',
                                paramName: 'chef',
                                afterUpdateElement: ac_return
                        });
```

 Le premier paramètre *chef* concerne l'id du champ du formulaire qui reçoit l'autocompletion. Le deuxième *chef_update* est l'id de l'élément qui recevra la liste de personnes. Le troisième *autocompletion.php* est la page PHP qui traitera les infos.

  Ensuite nous avons d'autres paramètres "divers":

 - *method*: spécifie le type d'envoie des données POST / GET
 - *paraName*: nom de la variable envoyée au fichier PHP
 - *afterUpdateElement*: la fonction JavaScript qui est appelé à la fin du processus d'autocompletion (j'en parlerai plus tard).

## _**5.** Le traitement PHP_

 La variable (spécifiée par *paraName*) contenant les quelques lettres tapées dans le champ du formulaire est envoyé au fichier PHP.

  Le but du fichier PHP est d'aller chercher dans la base tous les noms des personnes qui commencent par ces lettres (ou qui contiennent ces lettres, le choix est libre).

 Une simple requête SQL suffit (en admettant que les premières lettres soit *du*) :

```sql
SELECT `nom`, `prenom`, `id` FROM `personne` WHERE `nom` LIKE 'du%'
```

  Ensuite on boucle sur tous les éléments que cette requête nous retourne pour générer une liste.

```php
if(isset($_POST['chef'])){
        header('Content-type: text/html; charset=iso-8859-1');
        // on inclut la connexion
        require_once('connexion.php');

        // on fait la requête
        $sql = "SELECT `nom`, `prenom`, `id`
                FROM `personne`
                WHERE `nom` LIKE '".$_POST['chef']."%'";
        $req = mysql_query($sql);

        $i = 0;
        echo '<ul class="contacts">';
        // on boucle sur tous les éléments
        while($autoCompletion = mysql_fetch_assoc($req)){
                echo '
<li class="contact"><div class="image"><img src="images/'.$autoCompletion['id'].'-mini.jpg"/></div><div class="nom">'.$autoCompletion['nom'].'</div>
        <div class="prenom">
                <span class="informal">'.$autoCompletion['prenom'].'</span>
        </div>
</li>';
                // on s'arrête s’il y en a trop
                if (++$i >= 10)
                        die('<li>...</li></ul>');
        }
        echo '</ul>';
        die();
}
```

 _/?\ A noter_ qu'il faut absolument que sur la première ligne de la balise *li* le nom de la personne soit afficher. Pour le reste on peut le faire avec l'indentation. Si on met le champ avec un saut de ligne, on se retrouvera avec un saut de ligne dans le champ du formulaire et donc on n'aura pas le nom de la personne.

  On a généré la liste d'éléments "personnalisée" (elle n'affiche pas que le nom de la personne). On affiche aussi son nom, son prénom et une image (de taille maxi 31x31).

 Et c'est cette image qui contient l'id de la personne :)

  On pourrait aussi passer par une autre méthode (si vous ne disposez pas d'image pour y glisser l'id) en plaçant un bloc span caché (en display none) comme ceci :

```php
echo '<span class="informal" style="display:none">'.$autoCompletion['id'].'-idcache</span>';
```

  Le *-idcache* est _obligatoire_ pour récupérer plus facilement l'id de la personne.

  _/?\ A noter_ que l'autocompleter prends les seuls éléments contenu dans des balises qui n'ont pas la class *informal*. Ici on veut donc qu'il mette juste le nom de la personne, rien d'autres.

##   _**6.** Un peu de CSS_

 Pour que la liste déroulante soit un minimum lisible !

```css
/* Autocompletion */
.update{
        position:absolute;
        width:250px;
        background-color:white;
        border:1px solid #888;
        margin:0px;
        padding:0px;
}

ul.contacts {
        list-style-type: none;
        margin:0px;
        padding:0px;
        text-align: left;
}
ul.contacts li.selected { background-color: #ffb; cursor: pointer; }
li.contact {
        list-style-type: none;
        display:block;
        margin:0;
        padding:2px;
        height:32px;
}
li.contact div.image {
        float:left;
        width:32px;
        height:32px;
        margin-right:8px;
}
li.contact div.nom {
        font-weight:bold;
        font-size:12px;
        line-height:1.2em;
}
```

##   _**7.** La fonction JS ac_return_

 Cette fonction, dont je vous parlais dans le **4**, est appelée une fois que le champ a été rempli avec le nom de la personne. Cette fonction reçoit en paramètre *field* qui est l'objet HTML de l'autocompletion (la même chose que retournerai *$('chef')*) et *item* qui est l'objet HTML de la réponse (tout ce qui est contenu dans la balise *li* en fait).

  Ce que l'on va faire, c'est créé une expression régulière en JavaScript pour récupérer l'id de la personne.

 Et une fois récupéré, on le placera dans le champ caché.

```js
function ac_return(field, item){
        // on met en place l'expression régulière
        var regex = new RegExp('[0123456789]*-mini', 'i');
        // on l'applique au contenu
        var nomimage = regex.exec($(item).innerHTML);
        //on récupère l'id
        id = nomimage[0].replace('-mini', '');
        // et on l'affecte au champ caché
        $(field.name+'_id').value = id;
}
```

 _/?\ A noter_ que je prends ici le fait que l'id est dans l'image. Si vous utilisiez un champ caché, il vous faudrait remplacer les *-mini* par *-idcache*.

##   _**8.** On a l'id !_

 Et voilà on a maintenant l'id de la personne dans un champ caché qui sera récupérable une fois le formulaire soumis.

  Je vous l'avoue, c'est une belle astuce mais qui rends beaucoup de service.
 Vous pouvez tester l'exemple que j'ai [mis en ligne](http://www.j0k3r.net/exemples/ajax/autocompletion.php) si vous n'avez pas tout compris à l'histoire !

 Ou mieux, tester directement l'application chez vous : [autocompletion.rar](http://www.j0k3r.net/dl/autocompletion.rar).

  Si vous avez des problèmes, abusez du forum ! ;)
