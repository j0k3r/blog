---
layout: post
title: 'PHP - Gestion de fichiers texte'
date: '2004-10-05 22:59:45'
author: j0k
tags: '[développement]'
excerpt: "Le PHP permet de gérer des fichiers textes. C'est à dire que le langage possède tout une série de fonctions permettant de lire, de créer, de modifier et de supprimer des fichiers texte.  \nEtant une bonne alternative aux bases de données pour des applications simples, la gestion de fichiers texte en PHP est facile à mettre en place."
---

## _1. Introduction_

 Le PHP permet de gérer des fichiers textes. C'est à dire que le langage possède tout une série de fonctions permettant de lire, de créer, de modifier et de supprimer des fichiers texte. Etant une bonne alternative aux bases de données pour des applications simples, la gestion de fichiers texte en PHP est facile à mettre en place.

##  _2. Ouverture d'un fichier_

 Afin d'effectuer les opérations de création et de modification d'un fichier, il faut tout d'abord ouvrir une "connexion" (pointeur) vers le fichier concerné. Ceci s'effectue à l'aide de la fonction **fopen** ayant pour paramètres le nom du fichier à ouvrir (ainsi que son chemin s'il n'est pas dans le même répertoire que le script) et le mode d'ouverture. La fonction retourne le pointeur vers le fichier.

  Syntaxe : **int fopen(chaîne nomdufichier, chaîne mode)**

  Les différents modes d'ouverture :

 - **r** -> Lecture seule (place le pointeur au début du fichier)
 - **r+** -> Lecture et écriture (place le pointeur au début du fichier)
 - **w** -> Ecriture seule (place le pointeur au début du fichier et réduit la taille du fichier à 0). S'il n'existe pas, le fichier est créé.
 - **w+** -> Lecture et écriture (place le pointeur au début du fichier et réduit la taille du fichier à 0). S'il n'existe pas, le fichier est créé.
 - **a** -> Ecriture seule (place le pointeur à la fin du fichier). S'il n'existe pas, le fichier est créé.
 - **a+** -> Lecture et écriture (place le pointeur à la fin du fichier). S'il n'existe pas, le fichier est créé.

**Exemple**

```php
$fichier = fopen ("monfichier.txt", "r");
$fichier2 = fopen("../monrepertoire/monfichier2.txt", "w");
```

##  _3. Lecture d'un fichier_

 Une fois le fichier ouvert en lecture, la lecture de celui-ci s'effectue avec la fonction **fread**. Cette fonction permet de stocker le contenu d'un fichier dans une variable (afin de permettre un traitement sur ce contenu ou simplement un affichage) et a pour paramètres le pointeur de fichier et la longueur (en octets) du fichier ou de la partie du fichier à lire.Elle retourne le texte lu.

  Syntaxe : **chaîne fread(int pointeur, int longueur)**

**Exemple**

```php
$contenu = fread($fichier, 1024);
```

  **Note :** Cet exemple ne lit que les 1024 premiers octets du fichier. Pour lire le fichier en entier, il suffit de se servir de la fonction **filesize** retournant la taille du fichier (Cette fonction accèpte comme paramètre le nom du fichier et non le pointeur).
  **Exemple**

```php
$contenu = fread($fichier, filesize ("monfichier.txt"));
```

##  _4. Ecriture dans un fichier_

 Pour écrire dans un fichier, il faut tout d'abord l'ouvrir en écriture (**fopen**). Ensuite, l'insertion de texte dans un fichier se fait à l'aide de la fonction **fwrite**. Cette fonction a pour paramètres le pointeur du fichier et le texte à insérer.

  Syntaxe : **chaîne fwrite(int pointeur, chaîne texte)**

**Exemple**

```php
$erreur = fwrite($fichier, "Contenu à insérer dans le fichier");
```

##  _5. Fermeture d'un fichier_

 Après avoir ouvert un fichier pour le lire ou le modifier, il faut bien évidemment le fermer. Cette action est assurée par la fonction **fclose** qui a pour paramètre le pointeur du fichier ouvert.

  Syntaxe : **chaîne fclose(int pointeur)**

  **Exemple**

```php
$erreur = fclose($fichier);
```

##  _6. Suppression d'un fichier_

 Il est possible en PHP de supprimer physiquement un fichier sur le serveur grâce à la fonction **unlink** ayant comme paramètre le nom du fichier à supprimer (éventuellement le chemin du fichier).

  Syntaxe : **int unlink(chaîne nomdufichier)**

  **Exemple**

```php
$erreur = unlink("monfichier.txt");
$erreur = unlink("../monrepertoire/monfichier.txt");
```

  **Note :** Pour utiliser ces fonctions, il faut bien entendu avoir les droits de lecture et d'écriture sur les fichiers et sur les répertoires contenant ces fichiers.
