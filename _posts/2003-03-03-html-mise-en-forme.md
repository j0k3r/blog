---
redirect_from:
  - /article/html-mise-en-forme
layout: post
title: 'HTML - Mise en forme'
date: '2003-03-03 03:02:02'
author: j0k
tags: développement
excerpt: 'Ces instructions, dites logiques, laissent le navigateur interpréter le formatage du texte. Ces balises sont souvent utilisées (mais de moins en moins) dans un environnement non graphique (sous DOS par exemple).'
---

## _1. La mise en forme logique_

Ces instructions, dites logiques, laissent le navigateur interpréter le formatage du texte. Ces balises sont souvent utilisées (mais de moins en moins) dans un environnement non graphique (sous DOS par exemple).

  Pour utiliser ces balises, il suffit d'entourer votre texte avec la balise d'ouverture choisie et la balise de fermeture correspondante.

  Voici toutes les balises de mise en forme logique et leur code source :

  <cite>cite : Pour effectuer une citation</cite>
`<cite>cite : Pour effectuer une citation</cite>`

  <code>code : Pour indiquer du code informatique</code>
 `<code>code : Pour indiquer du code informatique</code>`

  <em>em : (emphase) Similaire à l'italique</em>
` <em>em : (emphase) Similaire à l'italique</em>`

  <kbd>kbd : (Keyboard, clavier) Utilisé généralement pour indiquer une réponse d'utilisateur</kbd>
` <kbd>kbd : (Keyboard, clavier) Utilisé généralement pour indiquer une réponse d'utilisateur</kbd>`

  <samp>samp : Affiche les caractères de manière littérale</samp>
` <samp>samp : Affiche les caractères de manière littérale</samp>`

  <strong>strong : Permet de faire ressortir du texte (gras)</strong>
` <strong>strong : Permet de faire ressortir du texte (gras)</strong>`

  <var>var : Indique une variable</var>
` <var>var : Indique une variable</var>`

  <dfn>dfn : Permet de créer une sous définition</dfn>
` <dfn>dfn : Permet de créer une sous définition</dfn>`

  Vous pouvez bien sur imbriquer plusieurs balises attention tout de même à respecter l'ordre de fermeture.

Exemple : <em><strong>Texte en italique et en gras</em></strong>
` <em><strong>Texte en italique et en gras</em></strong>`

##  _2. La mise en forme physique_

 Ces instructions, dites physiques, sont plus proches de l'auteur. En effet, avec ces balises ci-dessous, c'est vous qui décidez ce que le navigateur affichera, même s'il y a certaines limites.

  Pour utiliser ces balises, il suffit d'encadrer votre texte avec la balise d'ouverture choisie et la balise de fermeture correspondante.

  Voici toutes les balises de mise en forme physique et le code source :

  <b>b : Permet de faire ressortir du texte gras</b>
 `<b>b : Permet de faire ressortir du texte gras</b>`

  <i>I : Met le texte en Italique ( ou <italic> )</i>
` <i>I : Met le texte en Italique ( ou <italic> )</i>`

  <tt>tt : Affiche le texte en police style machine à écrire</tt>
` <tt>tt : Affiche le texte en police style machine à écrire</tt>`

  <u>u : Souligne le texte</u>
` <u>u : Souligne le texte</u>`

  <strike>strike : Barre le texte</strike>
` <strike>strike : Barre le texte</strike>`

  <big>big : Permet d'utiliser une police plus grande</big>
` <big>big : Permet d'utiliser une police plus grande</big>`

  <small>small : Permet d'utiliser une police plus petite</small>
` <small>small : Permet d'utiliser une police plus petite</small>`

  sub : <sub>Affiche le texte en indice (décalé vers le bas de la ligne)</sub>
` sub : <sub>Affiche le texte en indice (décalé vers le bas de la ligne)</sub>`

  sup : <sup>Affiche le texte en exposant (décalé vers le haut de la ligne)</sup>
` sup : <sup>Affiche le texte en exposant (décalé vers le haut de la ligne)</sup>`

  Vous pouvez bien sur imbriquer plusieurs balises les unes avec les autres. Attention tout de même à respecter l'ordre de fermeture.

Exemple : <i><b>Texte en italique et en gras</b></i>
` <i><b>Texte en italique et en gras</b></i> `

##  _3. Les polices de caractères_

 Il n'y a rien de plus facile à spécifier qu'une police. La méthode à utiliser par le HTML s'appuie sur la balise `<font>`.
Cependant, pour que votre document se visualise correctement (c'est à dire avec la police définie dans votre document), essayez d'employer une police standard (arial, courrier ...) à toutes les plates-formes, sinon c'est la police paramétrée par défaut sur le navigateur de chaque visiteur qui prévaudra et sera affichée.

  La balise `<font>` possède plusieurs attributs :

 - face : Permet de définir, par ordre de priorité, les noms des polices
 - size : Permet de définir la taille de la police de 1 à 7(valeur par défaut : 3)
  A noter qu'il peut être utilisé de deux manières :
 - Absolue : size=2
 - Relative : size= +2
 - color : Permet de définir la couleur du texte (soit avec le nom de la couleur soit avec la valeur hexadécimale correspondante)

  Cas de la balise `<basefont>`

 La balise `<basefont>` est utilisée pour définir la police standard. Elle ne possède pas de balise de fermeture, et elle emploie les mêmes attributs que la balise `<font>`. En réalité, il n'y a aucune différence importante avec la balise `<font>`.

  Quelques exemples d'utilisation de la balise `<font>` et leur code source :

  <font face="comic sans ms, arial">Police Comic Sans Ms - Taille par défaut (3)</font>
 `<font face="comic sans ms, arial">Police Comic Sans Ms - Taille par défaut (3)</font>`

  <font face="impact, verdana" size=2 color="green">Police Impact - Taille 2 - Couleur : Verte</font>
 `<font face="impact, verdana" size=2 color="green">Police Impact - Taille 2 - Couleur : Verte</font>`

##  _4. L'accentuation_

 Pour inclure des caractères accentués, vous devez remplacer la lettre accentuée par l'entité correspondante (code ISO 88-59-1 ou ISO Latin-1). En effet, cela permet une harmonisation entre les différents systèmes d'exploitation et surtout entre les différentes particularités de chaque langue. Le principe est le même pour insérer des caractères spéciaux.
