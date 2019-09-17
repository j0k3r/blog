---
layout: post
title: 'HTML - Formulaires'
date: '2003-03-16 04:04:21'
author: j0k
tags: développement
excerpt: 'Les formulaires permettent avant tout de faire réagir votre visiteur, de l''inviter à laisser ses impressions, ses commentaires. Vous pouvez même gérer votre propre livre d''or. Alors jouez l''interactivité !!.'
---

## **Pourquoi un formulaire ?**

Les formulaires permettent avant tout de faire réagir votre visiteur, de l'inviter à laisser ses impressions, ses commentaires. Vous pouvez même gérer votre propre livre d'or. Alors jouez l'interactivité !!.

  La création des formulaires se réalise grâce à plusieurs champs, dans lesquels le visiteur entre une information ou opte pour un choix. L'information est ensuite envoyée, à l'aide de scripts, sur le serveur qui vous héberge puis renvoyée, dans la plupart des cas, sur l'adresse électronique de votre choix.

## **La balise `<form>`**

 La balise `<form>` vient en début de votre formulaire (elle ferme votre formulaire) et possède 3 attributs :

1. **action** : Adresse le formulaire vers l'URL (relative) du script CGI (fourni par le serveur qui héberge vos pages), qui accepte l'information et vous le retourne suivant les paramètres définis. Les valeurs les plus souvent couramment utilisées sont :
    - **"mailto:webmaster@j0k3r.net"** : Pour l'envoi du formulaire par le logiciel de messagerie de votre visiteur. Attention : cette valeur peut poser problème avec certains navigateurs, notamment I.Explorer 3.0
    - **"/cgi-bin/mailer"** : Pour l'envoi du formulaire par le script CGI de votre hébergeur

2. **method** : 2 valeurs sont proposées :
    - **post** : Pour un formulaire classique
    - **get** : Pour (par exemple) définir un moteur de recherche sur votre site

3. **enctype** : Cet attribut spécifie le format des données envoyées, dans le cas où un protocole n'imposerait pas de format précis. Il possède plusieurs valeurs dont :
    - **"text/plain"** : Valeur utilisée dans le cas d'un formulaire classique
    - **"multipart/form-data"** : Valeur utilisée dans le cas où le formulaire comprendrait un fichier attaché ( `<input type="file" ...>` )

**Exemple pour le serveur d'hébergement Multimania :**

```html
<form method=get action="/cgi-bin/mailer">
```

**Exemple pour un formulaire classique sans l'aide de script CGI :**

```html
<form action="mailto:webmaster@j0k3r.net" method=post enctype="text/plain">
```

## **Champs de saisie**

 La balise `<input type="text" ... >` permet à l'utilisateur de saisir une ligne de texte. Elle a les attributs suivants :

 - **name** : Définit le nom de la donnée (obligatoire)
 - **size** : Définit la taille visible du champ en nombre de caractères
 - **maxlength** : Taille maximale de caractères autorisés
 - **value** : Définit le texte par défaut à l'intérieur du champ

A noter que la valeur type peut avoir plusieurs valeurs dont :

 - **password** : Code secret - **range** : Permet de définir un espace de saisie numérique (exemple entre 0 et 50, min="0" max="50")

Exemple d'un champs de saisie :

```html
<input type="text" name="urlsite" size=40 maxlength=40 value="http://">
```

## **Boîte de texte multiligne**

C'est la balise `<textarea>` qui est utilisée pour réaliser une boîte de texte multiligne. Cette balise est surtout choisie pour permettre aux visiteurs de votre site de laisser un commentaire ou de taper un texte quelconque.

Ses attributs sont :

 - **name** : Définit le nom de la donnée (obligatoire)
 - **rows** : Définit le nombre de lignes dans la boîte de saisie
 - **cols** : Définit le nombre de colonnes (en caractères) dans la boîte de saisie
 - **readonly** : Spécifie que la boîte multiligne est en mode lecture seulement

A noter que si du texte se trouve à l'intérieur des balises `<textarea>` et `</textarea>` il va alors apparaître comme texte par défaut.

Exemple d'une boîte de saisie :

```html
<textarea name="commentaire" cols=30 rows=4>
Tapez votre commentaire
</textarea>
```

## **Listes de choix**

La balise `<select>` présente une liste de propositions, soit sous forme de liste déroulante (un seul choix possible), soit sous forme de menu (plusieurs choix possibles), elle doit être couplée avec la balise `<option>` pour définir les choix.

Voici ses attributs :

 - **name** : Définit le nom de la donnée (obligatoire)
 - **size** : S'il a comme valeur 1(valeur par défaut), c'est une liste déroulante ; si size supérieur à 1 c'est une liste de choix avec une barre de défilement
 - **multiple** : Ce choix est valable uniquement si size est supérieur à 1
  La balise <option> comporte deux attributs :
 - **value** : Nom de la donnée pour le choix
 - **selected** : S'il est présent dans la balise `<option>`, le choix est alors reconnu comme choix par défaut

Exemple d'une liste déroulante :

```html
<select name="liste">
<option value="Choix 1">Choix 1
<option value="Choix 2">Choix 2
<option value="Choix 3">Choix 3
</select>
```

Exemple d'une liste sous forme de menu :

```html
<select name="liste" size=3 multiple>
<option value="Choix 1">Choix 1
<option value="Choix 2">Choix 2
<option value="Choix 3">Choix 3
</select>
```

## **Cases à cocher et Boutons radio**

La Balise `<input>`, que l'on a vu au-dessus, permet aussi de représenter une liste de cases à cocher (plusieurs choix possibles) ou une liste dite "bouton radio" (un seul choix possible). Il suffit pour cela de lui spécifier l'attribut type="checkbox" (cases à cocher) ou type="radio" (bouton radio).

Les autres attributs sont les suivants :

 - **name** : Définit le nom de la donnée (obligatoire)
 - **value** : Nom de la donnée pour le choix
 - **checked** : S'il est présent dans la balise `<input>`, le bouton sera coché par défaut

Exemple d'une liste de cases à cocher :

Cette liste se positionne verticalement du fait que la balise `<br>` a été insérée après chaque choix.

```html
<input type="checkbox" name="CHOIX" value="CASE 1"> CASE 1<br>
<input type="checkbox" name="CHOIX" value="CASE 2"> CASE 2<br>
<input type="checkbox" name="CHOIX" value="CASE 3"> CASE 3<br>
```

Exemple d'une liste à boutons radio :

A noter que le choix 3 est coché par défaut.

Bouton 1 Bouton 2 Bouton 3

```html
<input type="radio" name="CHOX" value="Bouton 1"> Bouton 1
<input type="radio" name="CHOX" value="Bouton 2"> Bouton 2
<input type="radio" name="CHOX" value="Bouton 3" checked> Bouton 3
```

## **Fichier attaché**

Lors d'un envoi de formulaire, vous pouvez proposer au visiteur de vous faire parvenir un fichier attaché (ou pièce jointe), il suffit pour cela d'indiquer la valeur "file" à l'attribut type.

Exemple pour un choix de fichier attaché :

```html
<input type="file" value="fichier">
```

## **Soumettre son formulaire**

La soumission (envoyer) ou la remise à zéro (recommencer) d'un formulaire se fait, une fois de plus, avec la balise `<input>` type, ayant ici deux autres valeurs :

 - **submit** : Envoi le formulaire vers le serveur
 - **reset** : Remet à zéro les choix du formulaire

Les légendes inscrites sur les boutons peuvent être modifiées avec l'attribut value.

Exemple des 2 boutons :

```html
<input type="submit" value="Envoyer">
<input type="reset" value="Recommencer">
```

## **Personnalisez vos boutons**

Vous pouvez créer votre propre bouton d'envoi et de remise à zéro, ce qui mettra une touche personnelle à votre formulaire.

Pour obtenir un bouton personnalisé de remise à zéro (reset), il suffit tout simplement d'encadrer l'image de votre bouton ( avec la balise `<img>` ex : `<img src=" bouton.gif">` ) entre les balises `<a href="votrepageformulaire.htm">` et `</a>`. Cela aura pour effet de recharger votre page html de formulaire et donc d'annuler tous les choix du visiteur.

Exemple d'un bouton "reset" personnalisé :

```html
<a href="formul2.htm">
<img src="img/annuler.gif" border=0 width=45 height=9 alt=" Annuler"></a>
```

En ce qui concerne le bouton d'envoi, il faut une fois de plus passer par la balise input avec l'attribut type="image".

Exemple d'un bouton d'envoi personnalisé :

```html
<input type="image" src="img/envoyer.gif" border=0 width=45 height=9 alt="Envoyer">
```

## **Inclure des données cachées**

Si vous souhaitez envoyer certaines données au script du serveur chargé de traiter votre formulaire, vous devez utiliser la balise `<input>` avec l'attribut type="hidden". Prenez contact avec le service qui vous héberge afin d'obtenir les différentes valeurs à indiquer avec la balise `<input>`

## **Mise en forme des formulaires**

Il y a mille et une façons de concevoir un formulaire. Mais sachez, avant tout, que plus il sera clair et lisible, plus il sera complété par vos visiteurs. Pour cela, vous pouvez opter pour des tableaux, des listes à puces (pour les cases à cocher notamment), des listes de définition et bien sûr, des balises de formatage et d'alignement de texte.

Exemple de formulaire :

Voici un exemple concret de formulaire :

```html
<form action="mailto:email@adresse.com" method=post enctype="text/plain">
Votre E-Mail.
<input type="text" name="email" size=30 maxlength=40 value="nom@provider.domaine">
<br>
<br>
Tapez ici votre commentaire.
<textarea name="comm" cols=31 rows=4>
Votre commentaire
</textarea>
<br>
<br>
<input type="submit" value="Envoyer">
<input type="reset" value="Annuler">
</form>
```
