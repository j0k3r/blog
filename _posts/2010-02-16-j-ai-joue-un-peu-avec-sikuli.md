---
redirect_from:
  - /blog/j-ai-joue-un-peu-avec-sikuli
layout: post
title: 'J''ai joué un peu avec Sikuli ...'
date: '2010-02-16 08:22:04'
author: j0k
tags: automation gui java python sikuli
excerpt: "Il y a quelques temps j'ai vu passé le projet Sikuli. Sikuli permet de contrôler une interface graphique en se basant sur des images. Les exemples données sur le site officiel montrent comment contrôler le changement de statut sur Skype, changer une adresse IP, etc .. Pour des raisons personnelles, j'ai dû me pencher sur Sikuli pour mettre en place quelques automatisations. Voilà un peu ce que je retiens (pour le moment) de mon utilisation de Sikuli."
---

> Comme toute geek développeur 2.0 qui
> se respecte, je fais de la veille. Le
> problème de cette veille c'est qu'on
> voit passer plein de nouveau script,
> nouvelle technique, nouveau langage,
> etc ... On regarde un peu en diagonale
> et on se dit que ça semble hyper
> intéressant, on bookmark, on twitte,
> on share en se disant qu'on regardera
> au moment venu. Ce moment arrive très
> très rarement.

Il y a quelques temps j'ai vu passé le projet [Sikuli][1]. Sikuli permet de contrôler une interface graphique en se basant sur des images. Les exemples données sur le site officiel montrent comment contrôler le changement de statut sur Skype, changer une adresse IP, etc ..
Pour des raisons personnelles, j'ai dû me pencher sur Sikuli pour mettre en place quelques automatisations. Voilà un peu ce que je retiens (pour le moment) de mon utilisation de Sikuli.

Prise en main
-------------

L'installation est très rapide (sous réserve que vous ayez déjà java d'installer). L'IDE fournit avec Sikuli est très basique (trop même des fois).L'affichage est divisé en 3 parties:

 - L'éditeur à proprement parler (continuellement en mode pseudo wysiwyg)
 - Le trace du traitement
 - Un encart pour les tests unitaires

Utilisation
-----------

L'autocompletion n'est pas toujours active, mais les fonctions utilisées sont très basiques: `find()`, `click()`, etc ... chaque fonction de ce genre prend en paramètre un screenshot. Il suffit de cliquer sur le bouton pour prendre un screenshot: l'IDE se ferme, un voile gris se mets sur votre écran et vous pouvez sélectionner une zone pour le screenshot. L'image est ensuite enregistrée dans le dossier de votre projet et apparait en paramètre de votre fonction.
Une fois le screenshot pris, en cliquant dessus on peut émuler la recherche de ce screenshot sur l'écran et ainsi ajuster la similitude. Ainsi, on peut reconnaitre une forme même si par exemple, elle se retrouve avec une autre forme par dessus (dans l'absolu).

Pour tester notre bout de code, on peut lancer un mode "pas à pas", qui va vous montrer ce que trouve le script avant de faire les actions. Pratique pour voir comment se déroule la recherche.

Côté code, c'est du Jython. Un interpréteur Python écrit en Java.
Chaque projet est constitué de deux fichiers sources:

 - un .py qui correspond au code brut
 - un .html qui est la représentation avec les images dans l'IDE

En regardant le code du .py, on voit très bien que c'est du Python (non sans dec' ?) et que toutes les références faites aux images, sont les noms de fichier présent dans le même dossier:

```
c2 = find(Pattern("1265534956718.png").similar(0.65))
```

C'est pratique des fois pour affiner quelques éléments dans le code. Un peu comme quand on développait sous Dreamweaver en mode Wysiwyg complet et que de temps en temps il fallait corriger à la main les lignes de codes dégueulasse qu'il générait ! ..

A la longue
-----------

Le p'tit script que j'ai développé tourne toutes les nuits pour faire, à ma place, ce que je fais dans la journée.
J'ai souvent été emmené à avoir des problèmes de mémoires, le script faisant souvent des reloads dans Chrome, je devais rapidement atteindre le maximum de mémoire vive et le matin, je me rendais compte que mon onglet utilisé quelques choses comme 600Mo ...

Un autre problème concerne le stockage des screenshots qu'il fait pour faire ses recherches. A chaque fois que vous utilisez `find()`, `click()` et ces copains, Sikuli prends un screenshot de votre écran, le stocke dans le dossier temporaire de la machine, fait la recherche dans cette image à partir de votre screenshot et une fois fini, il ne supprime pas le fichier ! Je vous laisse imaginer un tel script tourner pendant plusieurs nuits d'affiler .. J'ai eu droit à "espace disque insuffisant sur C:". Les screenshots prenaient ... 25Go .. [C'est un bug connu][2]. Pour pallier au bug, j'ai fait un méthode qui ouvre un terminal, écrit une ligne de commande qui supprime tous les fichiers temporaires, mais bon ...

L'IDE présente des p'tits soucis de copier/coller mal géré. Le Ctrl+Z ne fonctionne pas non plus ... et ça, c'est sacrément handicapant.

Quand on lance un script, l'IDE de Sikuli se ferme pour tourner en tache de fond. Il existe normalement un raccourci clavier (Alt+ Maj + C) qui permet de forcer l'arrêt. Mais il n'a jamais fonctionné chez moi ... obligé de killer à la main javaw.exe. Le problème dans ce cas, c'est qu'on perds les modifications faites et non enregistrées de notre script. Ahem

Mais ça sert à quoi en fait ?
-----------------------------

Le site officiel grouille d'utilisation plus ou moins intéressantes: [tweeter][3], [faire le ménage sur son pc][4], [changer son statut facebook][5], etc ...
On pourrait éventuellement s'en servir pour faire des tests fonctionnels d'application. Un peu comme si on utilisait sfWebBrowserPlugin quoi :-)

L'idée qui me vient en tête c'est la création de bots par exemple, pour automatiser l'inscription, la pollution, etc ..
Il est assez simple de casser un captcha avec Sikuli, il faut simplement constituer la base de données des images potentielles pour le faire (je l'ai fait donc ..).


  [1]: http://sikuli.org/
  [2]: https://bugs.launchpad.net/sikuli/+bug/515003
  [3]: http://sikuli.org/blog/?p=108
  [4]: http://sikuli.org/blog/?p=76
  [5]: http://sikuli.org/blog/?p=61
