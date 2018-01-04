---
layout: post
title: 'Tidy nettoie votre code HTML'
date: '2005-02-01 00:00:00'
author: j0k
tags: '[développement]'
excerpt: 'Il est fréquent de commettre quelques erreurs lorsque l''on écrit du code HTML dans un éditeur de texte ... et bien voila un petit soft qui vous nettoie tout ça !'
---

Il est fréquent de commettre quelques erreurs lorsque l'on écrit du code HTML dans un éditeur de texte ... et bien voila un petit soft qui vous nettoie tout ça !

Le petit HTML Tidy est un excellent programme de nettoyage des pages HTML.

 C'est un utilitaire faisant partie des projets W3C permettant de corriger automatiquement une page HTML suivant les spécifications officielles du langage. Il vous permet d'enregistrer votre nouvelle page en html, en XHTML (Strict ou Transitionnal), HTML (Strict ou Transitionnal) ...

  HTML Tidy corrige les erreus les plus courrantes commises dans les fichiers HTML. Suivant l'option choisie, après analyse du fichier, il peut soit les corriger automatiquement, soit générer un fichier journal.

  HTML Tidy peut rajouter les balises manquantes ou mal placées, corriger celles qui sont dans un mauvais ordre, insérer des guillemets autour des atributs et même mettre les parenthèses manquantes.

  Du genre, vous avez ce code :

```html
<h1>heading
<h2>subheading</h3>
```

 Il vous le transformera en :

```html
<h1>heading</h1>
<h2>subheading</h2>
```

 Voila un petit outil à posséder et à utiliser.
 Il est disonible en ligne de commande et sous forme d'interface graphique. Voici tous les liens que je vous propose :

  * [Tidy UI](http://users.rcn.com/creitzel/tidy.html) : Interface graphique pour Tidy, tout en anglais, mais simple d'utilisation.
  * [TidyGUI](http://perso.wanadoo.fr/ablavier/TidyGUI/) : Une autre interface graphique pour Tidy, moins bien que Tidy UI (je trouve) mais mieux que les lignes de commandes ^^
  * [Tidy Online](http://infohound.net/tidy/) : On dira une sorte d'interface graphique pour Tidy mais seulement utilisable online.
  * [HTML Tidy](http://tidy.sourceforge.net/) : Le site officiel du projet HTML Tidy. C'est là que vous trouverez la version "ligne de commande" de Tidy. Une fois le .exe installé, vous ouvrez votre console win (cmd) et vous tapez une ligne du genre `tidy -o docnew.html -asxhtml -utf8 -clean -i docold.html`.
