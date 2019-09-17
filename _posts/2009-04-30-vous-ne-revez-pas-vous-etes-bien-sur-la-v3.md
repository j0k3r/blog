---
layout: post
title: 'Vous ne rêvez pas, vous êtes bien sur la v3 !!'
date: '2009-04-30 00:11:49'
author: j0k
tags: doctrine j0k3r_net symfony
excerpt: "Et oui, après un loooong moment de développement, de design, d'intégration, de mous, de laisser-aller, etc ... cette v3 vois enfin le jour !!!\nMême s'il reste (et restera certainement) toujours des coquilles à corriger si et là, il faut bien se lancer un jour !!"
---

La refonte graphique a bien dû commencer il y a maintenant un an passé certainement.
La maquette graphique finale a été validée peu de temps après.
C'est [kath][1] qui s'est occupé de cette refonte graphique !

Il a ensuite fallu faire l'intégration, qui n'a pas été si simple (problème avec les boxs et le centrage global du site, le footer qui a fait des siennes - *et qui en fait toujours d'ailleurs*).

Et puis le concret, la refonte complète sous **Symfony 1.2 et Doctrine 1.0**. C'est ce qui m'a pris le plus de temps.
En premier lieu, j'ai commencé par le backoffice. J'ai repris beaucoup de données de statistiques pour les afficher en dashboard :

* stats feedburner (dans le même genre du dashboard officiel)
* stats adsense de la journée en cours et depuis le début
* mini graphiques sur les derniers inscrits, commentaires, etc .. par semaine
* graphiques de Google Analytics, les mêmes petits qu'on retrouve dans leur dashboard
* et j'ai encore plein d'idées à intégrer.

L'idée c'était d'avoir vraiment une vue de tout ce qui peut donnée statistiques que génèrent le site. Je pense y être pas trop mal arrivé :-)

Quand j'aurai le temps et si ça vous intéresse je ferai des mini tutoriels.

Ensuite, la partie front office et a été une partie de rigolade j'ai envie de dire. Comme l'intégration était faite, il fallait maintenant remplir le moule avec les données de la base.
Pour le côté "blog", j'ai repris [sfSimpleBlogPlugin][2] que j'ai convertis à Symfony 1.2 et Doctrine au passage. J'ai viré pas mal de chose pour arriver à ce que je voulais.

Et forcément, on garde le meilleur pour la fin: la reprise des données ! Et là, je ne pensais vraiment pas me heurter à un problème aussi long et complexe à régler. J'avais quand même de la chance d'utiliser symfony qui m'a grandement facilité la tâche via les fixtures !! Elles m'ont fait gagner du temps et fait chauffer mon processeur aussi.

L'idée c'était de faire un extract de la base existante (mix de phpBB - *pour les news et le forum* - et de tables persos) en yml pour l'insérer ensuite facilement.
C'est justement là le problème, réussir à générer des fixtures propres. Et là je me suis heurté au BBcode de phpBB. Il faut savoir que tous les contenus du site sont "convertis" en [markdown][3] et ça a été une sacré paire de manche pour convertir correctement tout le BBcode ... entre les persos foireux que j'avais et les anciens qui étaient difficilement convertible pour certain. Je me suis bien amusé !

Mais je suis arrivé à mes fins après quelques moi de bataille !

La conversion de phpBB 2.x à sfSimpleForumplugin a été très simple par contre, j'en ai été même étonné.
Ce qui a pris le plus de temps, ça été la réécriture partiel du plugin pour le rendre compatible avec Symfony 1.2 et Doctrine. Vous allez me dire qu'il suffisait d'utiliser DbFinderPlugin et d'activer le sfCompat10, mais non, je ne voulais justement pas passer par cette alternative et faire **vraiment** du Symfony 1.2 !

Je vous passe les quelques problèmes que j'ai eu avec lighttpd (serveur web principal de mon serveur) parce que je suis rapidement passé en proxy et la v3 tourne sur un bon vieux apache.

**Bref, cessons les déboires de développement, passons aux nouveautés !**

* refonte graphique et redéveloppement (mais vous l'aurez compris :p)
* apparitions de tags et de catégories (plus clair que la version précédente)
* menu beaucoup plus clair
* possibilité de se connecter avec Facebook ou OpenID (ou votre ancien compte aussi) - *et bientôt avec twitter*
* ajout d'une catégorie *vrac* qui récupère des liens que je bookmark à droite à gauche
* la *vidéo du moment* qui est en fait une vidéo que j'ai apprécié et que je souhaite partager
* une page de [contact][4] (ouais c'est fou: il n'y en avait pas sur l'ancienne version...)
* une page [à propos][5] (pareil, elle est toute nouvelle)
* remplacement du forum par du Symfony powered - *plus light moins de features qui ne servent à rien*
* les commentaires des news se font maintenant directement sur le site

Voilà, je crois que le gros des changements est listé.

Bon, par contre, je vous vois venir les méticuleux du détail qui tue :-) **Tout** n'est pas finis, il me manque des images à changer, des p'tits trucs à faire par ci par là, mais il faut bien se lancer un jour !!!

Et pour finir, je souhaite remercier toutes celles et ceux qui m'ont aidé (de prêt ou de loin) à sortir cette nouvelle version :

* [kath][6], pour la refonte graphique
* [dan][7] pour ces éternels et méticuleux tests !
* [skullpat][8], [cooly08][9] et [jiceb][10] pour leur retour sur la bêta *privée*
* [engy][11] pour les conseils d'intégration pour ce %£^$à!§ de footer :-)
* et tous les autres qui m'ont conseillé sur certain choix !

Et pour finir, oui je vais commiter sfSimpleDoctrineForumPlugin et p'tet même sfSimpleDoctrineBlogPlugin. Mais pas tout de suite, tout de suite. Le temps que je fasse un peu le ménage dans le code !


  [1]: http://www.kath.fr
  [2]: http://www.symfony-project.org/plugins/sfSimpleBlogPlugin
  [3]: http://fr.wikipedia.org/wiki/Markdown
  [4]: http://www.j0k3r.net/contact
  [5]: http://www.j0k3r.net/apropos
  [6]: http://www.kath.fr
  [7]: http://danrazor.net/
  [8]: http://www.skullpat.com/
  [9]: http://www.digitalthink.fr/wordpress/
  [10]: http://www.jiceb.net/
  [11]: http://randomfeature.net/
