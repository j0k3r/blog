---
layout: post
title: 'symfony 1.1 et la (belle) roadmap de symfony 1.2 !'
date: '2008-07-01 03:44:50'
author: j0k
tags: roadmap symfony
excerpt: "symfony 1.1 a été releasé hier. Une très bonne nouvelle !     \nCette version inclue [plein de bonnes choses](http://prendreuncafe.com/blog/post/2008/06/30/Symfony-11-est-dans-les-bacs) …"
---

symfony 1.1 a été releasé hier. Une très bonne nouvelle !
Cette version inclue [plein de bonnes choses](http://prendreuncafe.com/blog/post/2008/06/30/Symfony-11-est-dans-les-bacs) :

* Le nouveau framework de formulaires sfForms
* Un nouveau système de gestion de tâches en ligne de commande
* Le parser YAML a été réécrit from scratch et propose maintenant des messages d'erreurs contextualisés
* La gestion des formats web permet à votre application de fournir une réponse et un format différents en fonction du type de requête entrante (iphone, bot ..)
* La gestion des plugins propose maintenant une API compatible avec le standard PEAR et gère notamment les dépendances
* La couche ORM Propel est maintenant proposée sous la forme d'un plugin
* Le routing a été grandement amélioré tant en performances qu'en extensibilité et souplesse de configuration
* La compatibilité avec symfony 1.0 est assurée grâce au plugin sfCompat10, fourni par défaut
* Enfin, plus de 8500 tests unitaires et fonctionnels garantissent la stabilité de l'API et préviennent de l'apparition de régressions.

La liste est déjà très intéressante.   Aujourd'hui, Fabien Potencier a annoncé la [roadmap de la version 1.2](http://www.symfony-project.org/blog/2008/07/01/symfony-1-2-roadmap) de symfony qui devrait sortir au mois d'octobre 2008 ! (oui, oui, dans 4 mois).   Là encore, la liste des fonctionnalités et des améliorations prévus est plus qu'alléchante :

* L'admin generator intègrera le nouveau framework de formulaires
* Propel et Doctrine seront tous les deux intégrer de base
* La sécurité sera accentuée par l'utilisation de filtre se basant sur l'extension [filter](http://fr.php.net/filter) native depuis PHP 5.2.
* La librairie [Swift Mailer](http://www.swiftmailer.org/) sera intégrée par défaut
* La librairie JavaScript ne sera plus imposée (actuellement symfony utilise nativement prototype). _Des plugins permettront d'utiliser n'importe quelle librairie JavaScript_. (en voilà une excellente nouvelle !!)
* La tâche project:deploy va être concrètement discutée
* PHP 5.2 minimum

Seule la tâche de l'admin generator est un "must-have", les autres sont *seulement* au rang de "nice-to-have". Vu le temps imparti et le nombre de fonctionnalités à développer, Fabien ne sera plus la seule personne à développer, il sera épaulé par d'autres développeurs (très reconnu dans la communauté de symfony).

Sortie prévue octobre 2008, vivement !!
