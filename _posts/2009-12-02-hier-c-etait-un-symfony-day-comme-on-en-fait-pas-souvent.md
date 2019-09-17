---
redirect_from:
  - /blog/hier-c-etait-un-symfony-day-comme-on-en-fait-pas-souvent
layout: post
title: 'Hier c''était un #symfony day comme on en fait pas souvent !'
date: '2009-12-02 14:13:13'
author: j0k
tags: avent calendar doctrine release symfony
excerpt: "Ce 1er décembre a été riche en nouvelle pour Symfony.\nIl y a eu 3 nouvelles version de Symfony & 3 nouvelles version de Doctrine le même jour. Sans compte le reste !!"
---

Ce 1er décembre 2009 fût riche en nouvelles pour la communauté des symfonians. On savait que les versions 1.3 et 1.4 allaient arriver en même temps fin novembre, mais on ne s'attendait pas forcément à voir 3 nouvelles version de Doctrine et la surprise d'un nouveau calendrier de l'avent !

Doctrine 1.2.0 Stable
---------------------

[Doctrine 1.2.0][1] devait être packagé par défaut avec les nouvelles versions de Symfony, la 1.3 & 1.4. C'est pourquoi elles sont sorties le même jour !

Cette version est la dernière version dite LTS (Long Term Support). Elle sera supportée pendant 18 mois (jusqu'au 06/01/2011).
Dans cette release on trouve une customisation possible lors de l'hydratation des objets, une version améliorée des *getter* magiques de Doctrine. On pourra faire des appels dans ce genre :

```php
$users = $userTable->findByIsAdminAndIsModeratorOrIsSuperAdmin(true, true, true);
```

On a aussi une facilité d'utilisation pour le travail sur les `Nested`, grâce aux nouveaux systèmes d'hydratation justement. La gestion du cache a aussi été amélioré.

Doctrine 1.0.14 & 1.1.6
----------------------

[Doctrine 1.0.14 & 1.1.6][2] sont des versions de maintenance des anciennes branches. Le support de ces deux branches s'arrêtera en mars prochain, il est temps de passer sur Doctrine 1.2 !

Symfony 1.2.10
--------------

Le support de Symfony 1.2.x s'arrêtera en février prochain mais l'idée c'est de porter un paquet de changements qui ont été fait sur la version 1.3 notamment. On note l'ajout de la tâche project:validate qui permet de faciliter la migration vers la version 1.4 en détaillant les points qu'il faut changer pour la migration.

Il y a aussi une rafle de tickets corrigés. Vous pouvez checker les nouveautés de [Symfony 1.2.10][3] sur le blog officiel.

Symfony 1.3 & 1.4
-----------------

On les attendait pour la fin de l'année, pour fin novembre plus précisément. Elles sont [arrivées tout début décembre][4] !

La version 1.3 affiche des améliorations faites par rapport à la 1.2, notamment des briques qui n'avaient pas été intégré par faute de temps (comme swift mailer par exemple). On note aussi l'arriver d'un nouvel onglet dans la web debug toolbar qui permet de voir toutes les variables qui sont passées au template, pratique ! Un travail sur l'amélioration de la performance a aussi été fait.

La version 1.4 est la nouvelle LTS de Symfony: la nouvelle version qui sera supportée pendant les 3 prochaines années. Elle est identique à la version 1.3 mais sans toutes les fonctions, variables etc .. dépréciées. Comme cité dans la release de la version 1.2.10, une tâche project:validate permet d'identifier les changements à faire sur la version 1.3 pour migrer vers la version 1.4 sans trop de problème.

Un nouveau calendrier de l'avent Symfony
----------------------------------------

L'[année dernière][5] on avait eu droit à Jobeet, cette année c'est un tout autre calendrier, tout aussi intéressant !

En effet, il présente [une utilisation plus avancée de Symfony][6] sur plusieurs points :

 * le routing
 * les emails
 * les formulaires
 * Doctrine (version avancée et héritage)
 * l'intégration avec Facebook
 * la ligne de commande
 * et le cache

Mise à part le fait qu'on va certainement découvrir de nouvelles choses, ce qui est encore plus énorme, c'est qu'il sera disponible dans [5 langues chaque jour][7] !!

Et cerise sur le gâteau (comme si ce n'était déjà pas assez), il existe aussi un livre qu'on peut dors et déjà [acheté sur amazon][8].

Que du bon pour cette fin d'année !


  [1]: http://www.doctrine-project.org/blog/doctrine-1-2-0-stable-released
  [2]: http://www.doctrine-project.org/blog/more-doctrine-releases
  [3]: http://www.symfony-project.org/blog/2009/12/01/symfony-1-2-10-preparing-you-for-1-3-and-1-4
  [4]: http://www.symfony-project.org/blog/2009/12/01/symfony-1-3-and-1-4-stable-released
  [5]: http://www.j0k3r.net/blog/les-calendriers-de-l-avent-2008
  [6]: http://www.symfony-project.org/blog/2009/12/01/one-more-thing?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed:+symfony/blog+(symfony+Project+Blog)&utm_content=Google+Reader
  [7]: http://www.symfony-project.org/advent_calendar/
  [8]: http://www.amazon.com/gp/product/2918390178?ie=UTF8&tag=symfonyprojec-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=2918390178
