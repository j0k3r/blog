---
layout: post
title: 'HTML - Listes'
date: '2003-03-14 05:52:30'
author: j0k
tags: développement
excerpt: 'Les listes en HTML'
---

## _1. Liste ordonnée_

Une liste ordonnée s'obtient avec la commande `<ol>` qui permet d'avoir une liste numérotée qui s'incrémente automatiquement. La balise `<ol>` est définie avec `<li>` qui représente un item. La balise `<lh>` indique le titre de la liste.

Exemple d'une liste ordonnée avec 3 items :
<ol>
<lh>Titre</lh>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</ol>

```html
<ol>
<lh>Titre</lh>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</ol>
```

Les autres attributs pour la balise `<ol>` :

 - **type=a** : Marqueurs en majuscules
 - **type=a** : Marqueurs en minuscules
 - **type=I** : Marqueurs en chiffres romains (majuscules)
 - **type=i** : Marqueurs en chiffres romains (minuscules)
 - **type=1** : Marqueurs en nombres (choix par défaut)
 - **start=n** : Valeur de départ du marqueur

Exemple d'une liste en chiffres romains (majuscules) démarrant au chiffre 2 :

<ol type=I start=2>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</ol>

```html
<ol type=I start=2>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</ol>
```

##  _2. Liste non ordonnée_

Une liste non ordonnée s'obtient avec la commande `<ul>` qui permet d'avoir une liste, précédée d'une puce.La balise `<ul>` est définie avec `<li>` qui représente un item. La balise `<lh>` indique le titre de la liste.

Exemple d'une liste non ordonnée avec 3 items :

<ul>
<lh>Titre</lh>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</ul>

```html
<ul>
<lh>Titre</lh>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</ul>
```

Les autres attributs pour la balise `<ul>` :

 - **compact** : Spécifie une liste compacte
 - **type=disc** : Puce en forme de disque plein (valable seulement sous netscape)
 - **type=circle** : Puce en forme de disque vide (valable seulement sous netscape)
 - **type=square** : Puce en forme de carré (valable seulement sous netscape)
  Exemple d'une liste compacte, avec des puces en forme de disque vide (valable que sous netscape) :

<ul compact type=circle>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</ul>

```html
<ul compact type=circle>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</ul>
```

##  _3. Liste menu_

 La balise `<menu>` permet d'avoir une liste menu. A noter que la balise `<menu>` n'a que l'attribut compact.

  Exemple d'une liste menu avec 3 items :

<menu>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</menu>

```html
<menu>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</menu>
```

##  _4. Liste avec définition_

Une liste de termes et de définitions correspondantes s'obtient avec la balise `<dl>` qui est accompagnée des balises `<dt>` et `<dd>`. `<dt>` représente le terme et `<dd>` la définition du terme. A noter que la balise `<dl>` n'a que l'attribut compact.

  Exemple d'une liste de définition avec 1 terme et 3 définitions de 3 termes :

<dl>
<dt>Terme</dt>
<dd>def 1</dd>
<dd>def 2</dd>
<dd>def 3</dd>
</dl>

```html
<dl>
<dt>Terme</dt>
<dd>def 1</dd>
<dd>def 2</dd>
<dd>def 3</dd>
</dl>
```

##  _5. Combiner les types de listes_

 Bien entendu, vous pouvez combiner plusieurs listes.

  Exemple d'une liste combinant une liste ordonnée avec une liste de définition :

<ol type=I>
<li>item 1</li>
<dl>
<dt>Terme</dt>
<dd>def 1</dd>
</dl>
</ol>

```html
<ol type=I>
<li>item 1</li>
<dl>
<dt>Terme</dt>
<dd>def 1</dd>
</dl>
</ol>
```

##  _6. Créer vos propres puces_

 Deux solutions s'offrent à vous pour créer vos propres puces :

 - Soit vous passez par l'attribut src="puce.gif" si, par exemple, le fichier graphique de vos puces personnalisées se nomme puces.gif, mais cet attribut est spécifique à I.Explorer.
 - Soit vous remplacez l'attribut la balise `<li>` par la balise `<img>`, en définissant votre image comme un simple fichier gif.
 Cette solution est la meilleure car elle est valable pour tous les navigateurs. Attention de faire un break `<br>` après chaque ligne.

Exemple d'une liste non ordonnée avec un fichier gif :

<ul>
<img src="img/pucemini.gif" />Personnalisez
<br>
<img src="img/pucemini.gif" />vos puces !!
</ul>

```html
<ul>
<img src="img/pucemini.gif" />Personnalisez
<br>
<img src="img/pucemini.gif" />vos puces !!
</ul>
```
