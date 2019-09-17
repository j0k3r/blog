---
redirect_from:
  - /blog/ma-version-de-sfdoctrinesimpleforumplugin-est-sur-github
layout: post
title: 'Ma version de sfDoctrineSimpleForumPlugin est sur #github !'
date: '2010-03-20 18:51:49'
author: j0k
tags: doctrine github phpBB2 sfDoctrineSimpleForumPlugin symfony
excerpt: "Nombreux ont été les développeurs Symfony à me demander la version du plugin sfSimpleForumPlugin que j'avais converti sous Doctrine sur mon site car ils ne trouvaient pas leur bonheur dans ce qui existait. C'est pourquoi je me suis décidé à la publier, \"brut de décoffrage\" sur github."
---

J'ai commencé les devs de la v3 [fin 2009][1]. A cette époque je n'avais pas trouvé de script de forum compatible Doctrine qui tenait la route. Alors, je me suis pris un weekend et j'ai converti l'actuel [sfSimpleForumPlugin][2] sous Doctrine.

Une fois la v3 sortie, j'ai été contacté par plusieurs développeurs qui me demandaient quelle version de sfDoctrineSimpleForumPlugin j'utilisais sur mon site car ils étaient intéressés pour l'avoir. Je leur répondais à chaque fois que c'était *ma* version et que je devais prendre le temps ed la publier.

Fin janvier, [Vincent][3] me contacte sur twitter pour à peu près la même chose. Et du coup, je me suis ensuite lancé dans un rapide ménage du plugin pour le publier sur github !

Et c'est maintenant chose fait, vous pouvez trouver [sfDoctrineSimpleForumPlugin sur github][4] !

Mon site tourne (encore) sur Symfony 1.2 mais je me suis efforcé de rendre sfDoctrineSimpleForumPlugin compatible avec la 1.4. J'ai fait un rapide readme (grandement repris de la version propel).

J'ai aussi rajouté une tâche que j'ai appelé `fixForum`. Elle m'a beaucoup servi quand j'ai importé mes données depuis phpBB2 (et là j'en vois qui vont maintenant me demander mon script d'export phpBB2 -> sfDoctrineSimpleForumPlugin ...). Cette tâche permet de mettre à jour les données qui sont normalement calculées à chaque nouveau post ou topic créé:

  - nb_posts
  - latest_post_id
  - nb_topics

Lors de l'import brut (je suis passé de phpBB2 -> fichier yaml -> sfDoctrineSimpleForumPlugin) ces données n'étaient pas calculés automatiquement.

Je n'ai plus rien à ajouter pour le moment. N'hésite pas à forker le plugin et à soumettre vos modifications :-)


  [1]: http://www.j0k3r.net/blog/teasing-v3-0
  [2]: http://www.symfony-project.org/plugins/sfSimpleForumPlugin
  [3]: http://twitter.com/vjousse
  [4]: http://github.com/j0k3r/sfDoctrineSimpleForumPlugin
