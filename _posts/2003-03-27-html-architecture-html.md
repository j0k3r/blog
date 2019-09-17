---
layout: post
title: 'HTML - Architecture HTML'
date: '2003-03-27 09:13:44'
author: j0k
tags: développement
excerpt: 'Toutes les instructions HTML sont exprimées dans des balises (ou "tags"), délimitées par des crochets (signe inférieur **<** et signe supérieur **>** ).'
---

## **Règles HTML et balises**

Toutes les instructions HTML sont exprimées dans des balises (ou "tags"), délimitées par des crochets (signe inférieur **<** et signe supérieur **>** ).
Cette structure est toujours la même. Cependant, chaque balise doit être ouverte et fermée (sauf rares exceptions). Notez que la balise de fermeture est toujours identique à la balise d'ouverture sauf qu'elle comporte une barre oblique après le signe < .

  Exemple :

```html
<font color="#ff0000"><b>texte</b></font>
```

  Les majuscules et les minuscules dans les instructions n'ont aucune importance, même s'il vaut mieux écrire toutes ses balises en minuscules afin de faciliter le futur transfert en XHTML de votre code HTML. De même, veillez à bien respecter les ordres d'ouverture et de fermeture sinon vous risquez de perdre en lisibilité.

## **Schéma des relations conteneur - contenu entre les éléments d'un document HTML**

Missing ...

## **Structure et en-tête du document ( `<head>` )**

 Avant de commencer à écrire l'en-tête, votre document principal (ou chaque page de votre projet, mais ce n'est pas obligatoire) doit comporter une instruction doctype qui permet de définir le standard HTML que vous allez utiliser.

## **Commandes doctype pour les différentes versions HTML**

  Version HTML -> Commande

 - **HTML 1.0** -> `<!doctype html public "-//ietf//dtd level1//en">`
 - **HTML 2.0** -> `<!doctype html public "-//ietf//dtd html//en">`
 - **HTML 3.0** -> `<!doctype html public "-//ietf//dtd html 3.0//en">`
 - **HTML 3.2** -> `<!doctype html public "-//w3c//dtd html 3.2//en">`
 - **HTML 4.0 en transition** -> `<!doctype html public "-//w3c//dtd html 4.0 transitional//en">`
 - **HTML 4.0** -> `<!doctype html public "-//w3c//dtd html 4.0//en">`

Ensuite, vous devez entrer la balise qui indique le début de votre fichier, puis la balise <head> dans laquelle sont résumées des informations générales, c'est à dire le titre de votre page (c'est aussi le titre qui apparaîtra dans les favoris du visiteur, s'il vous ajoute à sa liste de favoris) et les balises qui permettent d'indexer (référencer) votre site (ces balises seront étudiées dans la rubrique suivante).

## **Le corps du document ( `<body>` )**

 Il est à noter que, pour l'instant, le navigateur ne visualisera rien, car les véritables données qu'il va afficher vont se trouver dans la balise . Cette balise détermine le corps du document : c'est ici que vous allez intégrer titres, textes, images, tableaux, liens...

 Le tag <body> a de nombreux attributs :

 - **bgcolor** : Définit la couleur du fond de l'écran
 - **text** : Définit la couleur du texte
 - **link** : Définit la couleur des liens
 - **vlink** : Définit la couleur des liens déjà visités
 - **alink** : Définit la couleur des liens activés, c'est à dire quand le pointeur de la souris passe dessus
 - **background** : Définit l'image (gif ou jpeg) à utiliser comme fond d'écran
 - **bgproperties** : Si définie comme "fixed", l'image de fond ne défile pas (uniquement avec I.Explorer)
 - **leftmargin** : Définit la largeur de la marge de gauche en pixels
 - **topmargin** : Définit la largeur de la marge du haut en pixels

## **Exemple typique d'une page HTML (sans les balises meta)**

```html
 <html>
 <head>
 <title> Ma première page</ title>
 </head>
 <body bgcolor="white" text="black" link="blue" vlink="green" alink="red">

 <br>Voici votre première page <br>
 </body>
 </html>
```

## **Commenter un document**

 Vous pouvez commenter votre code source sans que le navigateur affiche ce commentaire. Cela peut s'avérer pratique, si vous êtes plusieurs à travailler sur le même document. Cette instruction est aussi utilisée lors de l'écriture d'un script Javascript pour cacher le code aux navigateurs non compatibles.

  Exemple :

```html
<!-- Ceci est un commentaire. -->
```
