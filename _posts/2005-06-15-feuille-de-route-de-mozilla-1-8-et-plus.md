---
layout: post
title: 'Feuille de route de Mozilla 1.8 et plus'
date: '2005-06-15 09:44:47'
author: j0k
tags: '[]'
excerpt: 'Brendan Eich [décrit](http://weblogs.mozillazine.org/roadmap/archives/008240.html) sur son blog la feuille de route des versions 1.8 et plus de Mozilla.   Vous ne le saviez peut être pas, mais Firefox 1.1 est en fait basé sur Mozilla 1.8. Via la publication de Deer Park Alpha 1, la fondation a validé la version 1.8 bêta 2. La prochaine étape est le 1.8 bêta 3,      ...'
---

Brendan Eich [décrit](http://weblogs.mozillazine.org/roadmap/archives/008240.html) sur son blog la feuille de route des versions 1.8 et plus de Mozilla.   Vous ne le saviez peut être pas, mais Firefox 1.1 est en fait basé sur Mozilla 1.8. Via la publication de Deer Park Alpha 1, la fondation a validé la version 1.8 bêta 2. La prochaine étape est le 1.8 bêta 3, qui entraînera un nouvelle version de Deer Park pour les développeurs (alpha 2). Puis suivra la version 1.8 bêta 4 qui devrait être la dernière bêta avant les premières release candidate.
   Peu de nouveaux changements majeurs seront effectués sur les versions 1.8, à l'exception de quelques modifications architecturales pour améliorer la sécurité et le travail restant nécessaire pour terminer le service de mise à jour logiciel de Firefox 1.1. Il intégrera notamment l'outil [bsdif](http://www.daemonology.net/bsdiff/) qui permettra de ne plus télécharger entièrement une nouvelle version à chaque mise à jour de sécurité.

Le sous-système du traitement graphique de Mozilla est actuellement ré-architecturé pour utiliser la bibliothèque graphique vectorielle open source [Cairo](http://www.cairographics.org/). Cela permettra à Mozilla d'exploiter le matériel graphique 3D moderne.

L'implémentation SVG est aussi prévu dans la version 1.8 propulsé la aussi par Cairo. Dans la version 1.9, la migration vers Cairo continuera, le projet final vise à ce que pratiquement tous les traitements graphiques de Mozilla s'appuient sur cette bibliothèque.
