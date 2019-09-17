---
layout: post
title: 'En vrac, de retour de vacances .. (partie 2)'
date: '2008-05-15 12:12:23'
author: j0k
tags: doctrine jquery symfony twitter vrac
excerpt: 'Deuxième et dernière partie pour ce retour de vacances. Décidément c''est fou tout ce qu''il se passe sur le web quand on le quitte seulement quelques jours ... mais en même temps, ça fait un bien fou de décrocher de temps en temps ;-)'
---

Deuxième et dernière partie pour ce retour de vacances. Décidément c'est fou tout ce qu'il se passe sur le web quand on le quitte seulement quelques jours ... mais en même temps, ça fait un bien fou de décrocher de temps en temps ;-)

* **[symfony 1.0.16](http://www.symfony-project.org/blog/2008/05/14/symfony-1-0-16-is-out)**   Les versions de symfony s'enchainent ces derniers temps ! La version 1.0.16 corrige une vilaine faille de sécurité qui d'ailleurs [émoustille un peu](http://pookey.co.uk/blog/archives/50-Does-Sensio-care-Symfony-security-concerns-and-other-issues.html) la personne qui a remonté cette faille il y a ... un an maintenant (!). Du coup, il remets un peu cause la remontée des failles de sécurité et leur traitement au sein de la communauté symfony.

* **Fini le stockage d'informations dans les cookies, place à [window.name](http://www.thomasfrank.se/sessionvars.html) !**   Un p'tit malin devait certainement en avoir marre des restrictions au nivau des cookies quand à leur taille et à trouver une solution pour stocker des informations "client side" pouvant aller jusqu'à 2Mo (autant dire qu'on peut en mettre des informations !).   L'astuce est d'utiliser window.name qui est normalement utiliser pour nommer les frames ou les fenêtres (et comme les frames se font de moins en moins). Il est évident qu'il ne faut pas l'utiliser pour y mettre des informations sensibles mais cette façon est plus sécurisée que les cookies !

* **Ah, [twitter aurait un réel intérêt](http://www.archicampus.net/wordpress/?p=243) ?**   J'ai jamais réellement voulu me mettre à utiliser twitter pour faire du "3615 MyLife" dont tout le monde se fout. Mais des fois, ce genre de réfection et de constatation venant de personne qui, comme moi, n'en trouvait pas un réel intérêt, pourrait me faire réfléchir ...

* **[Un clone de SWFObject mais fait avec jQuery](http://jquery.lukelutman.com/plugins/flash/)**   Il fonctionne à peu près pareil... ouais autant utiliser l'original alors ? Hmm à vous de voir après ;-)

* **Un [template gratuit pour un backoffice](http://www.webresourcesdepot.com/free-admin-template-for-web-applications/)**   L'idée n'est pas mauvaise, on trouve facilement des templates pour faire des fronts offices n'importe où sur le net, mais c'est vrai qu'il est moins simple de trouver des templates de back office "propre". J'aime.

* **Le site de web de [phpdoctrine subversionné](http://www.phpdoctrine.org/svnweb/trunk/)**   C'est toujours intéressant de regarder comment les autres ont fait telle ou telle chose. Jwage mets à disposition le site de [phpdoctrine](http://www.phpdoctrine.org), qui a fraichement migrer vers [symfony 1.1 et Doctrine 0.11](http://www.phpdoctrine.org/blog/website-upgraded-to-symfony-1-1-and-doctrine-0-11).

* **Clever Age publie un [livre blanc au sujet des frameworks PHP pour l'entreprise](http://www.clever-age.com/veille/publications/livres-blancs/livre-blanc-frameworks-php-pour-l-entreprise.html)**   "Ce livre blanc aborde les différents aspects du choix d’un framework : problématiques fonctionnelles, techniques et stratégiques, avec notamment une analyse approfondie des questions d’extensibilité, de documentation et de sécurité. Quatre frameworks en vogue sont présentés en détail (CakePHP, CodeIgniter, **s**ymfony, et le Zend Framework), l’étude mettant en lumière les avantages et inconvénients de chacun."

* **Un tableau de [comparaison entre SQL Server, PostgreSQL et MySQL](http://www.postgresonline.com/journal/index.php?/archives/51-guid.html)**   Il ne vous dira pas tout seul de choisir SQL Serveur, MySQL ou PostgreSQL mais a plus la prétention de lister des faits sur les caractéristiques de chacun d'eux. Ainsi, on peut vite voir lequel possède le plus de défaut et de qualité dans la solution que l'on recherche.

* **Une méga [encyclopédie pour les développeurs web](http://code.google.com/doctype/overview.html) (par Google)**   Tout plein de trucs et astuces et autres pour aider le pauvre développeur web, parce que Google a utiliser les clés de "l'open web", il veut nous en faire profiter maintenant !   Note: on peut aussi la [télécharger](http://code.google.com/doctype/downloading.html) !

* **(bonus) [Stopper la demande de redémarrage (lourdingue) de Windows après avoir mis à jour son système](http://lifehacker.com/software/top/get-rid-of-windows-update-restart-nag-183976.php)**   Alors ça, je pense que ça va faire plaisir à bon nombre d'utilisateurs windows qui pestent toujours à la fin d'une mise à jour Windows quand celui ci les oblige à redémarrer.   Apparemment on peut le désactiver ! J'ai pas encore fait de mise à jour depuis, on verra ...

Et maintenant je m'excuse un peu des deux derniers posts "fourre tout" qui traite que trop rapidement de chaque élément mais c'est p'tet certainement le mieux pour les diffuser tous d'un coup...

La v3 sera plus simple pour de la publication "rapide" ;-) (oui oui j'y travaille, elle sortira !!)
