---
redirect_from:
  - /article/html-premier-code-html
layout: post
title: 'HTML - Premier code HTML'
date: '2003-03-25 06:08:46'
author: j0k
tags: développement
excerpt: 'Le code HTML est un langage de description. A l''aide d''instructions que vous insérez, vous allez définir la forme de votre texte (gras, italique, polices, ...), inclure des images, du son, implanter des liens vers d''autres pages...'
---

## **Définition**
Le code HTML est un langage de description. A l'aide d'instructions que vous insérez, vous allez définir la forme de votre texte (gras, italique, polices, ...), inclure des images, du son, implanter des liens vers d'autres pages...

  **Exemple**

 Une balise (ou tag) est facilement identifiable, elle est constituée d'un mot (ou plusieurs dans certain cas) encadrée par les signes inférieur ( < ) et supérieur ( > ).


 1. Balise d'ouverture
 2. Votre texte
 3. Balise de Fermeture

## **Les premières balises (ou tags)**

 **La balise `<html>`** : Elle apparaît en premier et signale aux différents navigateurs que c'est une page Web, le tag </html> indique la fin de la page.

  **La balise `<head>`** : Elle indique les informations propres à votre page. Elle inclut les balise title et body ainsi que les balises meta qui permettront aux moteurs de recherche d'indexer votre site Web.

  **La balise `<title>`** : Elle définit le titre de votre site (ou page). Ce titre se loge dans la barre supérieure de votre navigateur, ainsi que lors d'un ajout dans les favoris (ou bookmark) d'un navigateur.

  **La balise `<body>`** : Elle va contenir toutes les informations qui s'afficheront dans la fenêtre du navigateur : Textes, liens, images...

## **Les balises indispensables**

 Tableau des balises les plus rencontrées

  Balise Description

 - **`<a>`** -> Lien hypertexte
 - **`<b>`** -> Texte en gras
 - **`<br>`** -> Saut de ligne
 - **`<center>`** -> Centrage
 - **`<font>`** -> Définition du texte
 - **`<h1>`** à **`<h6>`** -> Titre de niveau 1 à 6
 - **`<hr>`** -> Filet horizontal (séparation)
 - **`<i>`** -> Texte en italique
 - **`<p>`** -> Début d'un paragraphe (saut de 2 lignes)
 - **`<table>`** -> Structure d'un tableau
 - **`<tr>`** -> Ligne d'un tableau
 - **`<td>`** -> Cellule d'un tableau

## **Première page avec le bloc-notes**

 Avant de commencer à écrire votre première page, il vous faut un éditeur html, mais le plus simple et le plus économique pour débuter reste le bloc-notes de Windows. Malheureusement son plus gros désavantage que vous devez "tout faire à la main" mais c'est une excellente façon de progresser.

 1. Ouvrir le Bloc-notes
 (sous Windows : Démarrer, programmes, accessoires et bloc-notes)
 2. Tapez votre code (le retour chariot n'est pas obligatoire, et il n'a aucun effet ou presque sur le html, il permet juste d'avoir une meilleure visibilité de la syntaxe html)
 3. Sauvegardez votre fichier
 4. Enregistrez le fichier avec l'extension .htm (dans la majorité des cas la première page vue par vos visiteurs se nomme index.htm ou index.html ou encore index.shtml)

## **Quelques règles simples pour débuter**

 1. Pratiquement toutes les balises vont par paire ( balises d'ouverture et de fermeture, exemple : `<b>` et `</b>` )
 2. Ecrivez vos balises en minusules, cela peut faciliter le transfert de votre code vers le XHTML
 3. Essayer d'aérer au maximum votre code
 4. Le langage HTML ignore les retours chariot et les tabulations. Servez-vous des balises `<br>` ou `<p>` pour passer à la ligne
 5. Certaines balises sont ignorées par certains navigateurs ou ne s'affichent pas de la même façon. Ex: Un titre de niveau supérieur h1 ne s'affiche pas de la même façon selon le navigateur utilisé
 6. Le cas des balises spécifiques à Internet Explorer (ex: `<marquee>` ) ou à Netscape (ex: `<blink>` ) est un peu plus épineux, essayez de ne pas trop en abuser !! ou mieux ne les utilisez pas, Internet par définition c'est pour tous et pas seulement pour Microsoft et Netscape !!
