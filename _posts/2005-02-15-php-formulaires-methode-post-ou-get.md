---
layout: post
title: 'PHP - Formulaires : Méthode post ou get ?'
date: '2005-02-15 22:44:09'
author: Serius
tags: développement
excerpt: 'Vous avez sûrement déjà vu des sites parler de méthode POST ou GET mais vous n''avez aucune idée de ce que c''est ?  Ça tombe bien, je vais vous expliquer !'
---

Vous avez sûrement déjà vu des sites parler de méthode POST ou GET mais vous n'avez aucune idée de ce que c'est ?  Ça tombe bien, je vais vous expliquer !

## **La différence**

La méthode POST est utilisée pour transmettre des données via un formulaire et passer en "caché" (via une deuxième requête HTTP, après la première qui demande la page html/php), on ne voit pas les données des variables explicitement.  Contrairement à POST, la méthode GET passe les variables via l'url (en une seule requête HTTP), les données sont donc "visible" dans l'adresse de la page.

Pour utiliser les variables données par ces deux méthodes, PHP créé deux tableaux nominatif `$_POST` et `$_GET`.

## **Une illustration s'il vous plaît**

### POST :

Imaginez que vous ayez une page avec un formulaire pour que vos visiteurs puissent saisir un chiffre, voici le formulaire:

```html
<form method="POST" action="page_de_traitement.php">
Un chiffre : <input type="text" name="ma_variable">
</form>
```

Vous aurez remarqué que l'on dit au formulaire la méthode qu'il doit utiliser (**method="POST"**) et on dit à quelle page il doit envoyer les informations (**action="page_de_traitement.php"**).

Nous avons aussi intégré un champ pour que l'utilisateur puisse entrer le chiffre (logique, il aurait eu du mal sinon :p) et nous lui avons donné le nom "**ma_variable**".  La page de traitement va afficher simplement le chiffre :

```php
$ma_variable = $_POST['ma_variable'] ;
echo $ma_variable ;
```

On utilise le tableau `$_POST` en utilisant comme clé le nom de la variable à avoir.   Si vous avez plusieurs champs nommés : prénom, nom, age, il vous suffit de faire :
`$_POST['prenom']`, `$_POST['nom']`, `$_POST['age']`.

###   GET :

La méthode GET utilise l'url, donc si jamais vous avez des données à passer par l'url pour ne pas faire un formulaire sur chaque lien, vous aller pouvoir utiliser GET.  Prenons un exemple où je passe un '**id**' via l'url pour savoir quelle image affichée.

Une url avec des variables dedans se présente toujours de cette façon : /mon_script.php
**?**nomVariable1**=**valeurVariable1**&**nomVariable2**=**valeurVariable2**&**nomVariable3**=**valeurVariable3**&**?

/!\ Une url est limitée à 255 caractères !
Notre url a nous est beaucoup plus simple : /mon_script.php ?id= un chiffre.
Le script "mon_script.php" va traiter cette variable transmise en GET en utilisant le tableau `$_GET` :

```php
$id_image = $_GET['id'] ;
// le script pour prendre et afficher une image
```

C'est le même principe que pour la méthode POST sauf que le nom du tableau change.

## **Des conseils ?**

Il faut faire attention à la longueur de l'url car une url est limitée à 255 caractères (et on y est vite :o))
Vous pouvez utiliser POST et GET pour le même script.  Un peu compliqué à comprendre directement, imaginer le même formulaire pour envoyer le chiffre, vous pouvez mettre le script de traitement et le formulaire sur la même page :

```php
if($_GET['est_envoye'])
{
     $ma_variable = $_POST['ma_variable'] ;
     echo $ma_variable ;
}
else
{
     echo '<form method="POST" action="?est_envoye=1">';
     echo 'Un chiffre : <input type="text" name="ma_variable">';
     echo '</form>';
}
```

On envoi le formulaire vers la même page mais avec la variable "**est_envoye**" à 1 dans l'url.  A l'appel de la page, le script PHP vérifie s'il y a la variable "**est_envoye**" dans l'url et fait le traitement, sinon il affiche le formulaire.

Vous pouvez utiliser les champs "**hidden**" dans un formulaire : `<input type="hidden" name="ma_variable" value="cool">`, le champ de s'affiche pas sur le page mais la variable est traité par POST comme n'importe quel autre champ.
