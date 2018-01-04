---
layout: post
title: 'symfony 1.2, Jobeet et Doctrine'
date: '2008-12-02 10:05:58'
author: j0k
tags: '[doctrine,jobeet,symfony]'
excerpt: "Ce mois de décembre commence fort en nouvelles fraiches !   Plein de nouveautés du côté de symfony, dont l'apparition d'un calendrier de l'Avent, toujours intéressant à suivre !  \n  \n**symfony 1.2**   Tout d'abord la [nouvelle version de symfony](http://www.symfony-project.org/blog/2008/12/01/symfony-1-2-is-already-available) a été publié      …"
---

Ce mois de décembre commence fort en nouvelles fraiches !   Plein de nouveautés du côté de symfony, dont l'apparition d'un calendrier de l'Avent, toujours intéressant à suivre !

**symfony 1.2**

Tout d'abord la [nouvelle version de symfony](http://www.symfony-project.org/blog/2008/12/01/symfony-1-2-is-already-available) a été publié hier. Cette nouvelle version intègre beaucoup de nouveautés. Comme la version 1.1, elle permet d'avancer doucement mais surement vers un nouveau symfony (2.0 ?).

Une liste rapide de ce qui a changé :

* Propel est maintenant disponible en plugin et intègre la version 1.3 (basé sur PDO et donc plus rapide que la version précédente)
* Doctrine est aussi intégré par défaut en tant que plugin (mais désactivé par défaut)
* Le framework sfForm a encore évolué, proposant de nouveaux widgets, nouveaux validateurs et l'imbrication de formulaire (nested forms)
* Prototype et scriptaculous sont maintenant disponible en plugin, cela sous entends que l'on peut plus facilement qu'avant remplacer la couche Javascript par un autre framework (jQuery, YUI, etc ...)
* Le système de routing a beaucoup évolué aussi. On peut maintenant simuler des requêtes PUT et DELETE (en plus de GET et POST)
* L'admin generator est compatible avec sfForm
* et [plein d'autres choses](http://www.symfony-project.org/tutorial/1_2/whats-new) !

**Jobeet, le remplaçant d'Askeet**

Si vous avez commencé à utiliser symfony à partir de la version 1.0 (ou avant), vous avez certainement fait un tour du côté du tutoriel [Askeet](http://www.symfony-project.org/askeet/1_0/en/).   C'était un calendrier de l'Avent qui permet de réaliser un digg-like sous symfony de A à Z en 24 jours. Ce tutoriel a grandement favorisé l'utilisation de symfony 1.0.

Lorsque la version 1.1 est sortie, ce tutoriel n'a pas été mis à jour. Il est donc devenu obsolète pour tous ceux qui découvraient symfony et qui voulait l'apprendre par le biais d'un tutoriel complet et surtout pratique !

 ![image](http://www.symfony-project.org/images/jobeet/flyer_2_220_100.png)
La version 1.2 est sortie récemment et par la même occasion un nouveau calendrier de l'Avent est en place ! [Jobeet](http://www.symfony-project.org/jobeet/1_2/en/) va vous permettre de réaliser un site de A à Z avec la nouvelle version de symfony ! Il permettra notamment de voir les nouvelles fonctionnalités de symfony.   Ce qui va intéressant aussi c'est d'apprendre comment bien utiliser symfony grâce à la simple lecture et compréhension du code *made by the symfony core team*.

**Le symfony doctrine book**

Les nouvelles sur symfony n'arrêtent pas de tomber depuis hier, Jonathan Wage a publié la documentation pour [utiliser Doctrine avec symfony](http://www.symfony-project.org/blog/2008/12/02/introducing-the-symfony-doctrine-book).

 ![image](http://img79.imageshack.us/img79/5604/logogd7.png)
Là aussi, dans la même lignée que Jobeet, cette documentation permettra à tous ceux qui sont désireux de quitter propel pour utiliser doctrine, ou tout simplement essayer doctrine, de ne pas se lancer sans filet. Le tutoriel reprend tout ce qui touche à l'utilisation de doctrine :

* La connexion (simple ou multiple)
* La configuration et le paramétrage
* La création du modèle
* Les données de test
* Des exemples de requêtes

C'était les rapides news du mois de décembre concernant symfony. On n'est pas à l'abri de nouvelles informations :-)

PS: Ça faisait un long moment que je n'avais pas fait de news, mais il faut trouver le temps !
C'est aussi en partie dû à la v3 qui arrive bien vite. Au début j'étais parti sur la version 1.0 de symfony mais j'ai changé pour la version 1.2. Ça prend un peu de temps de tout rendre compatible :-)

Ceci dit, à défaut de lire des news ici (mais ça va revenir !), vous pouvez toujours me suivre sur [twitter](http://twitter.com/j0k).

