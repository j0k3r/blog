---
layout: post
title: 'Asus Maximus Formula et E8400, pas vraiment copain !'
date: '2008-05-24 08:49:06'
author: j0k
tags: '[asus,hardware,intel]'
excerpt: "Pour une fois, je ne vais pas parler de programmation, de développement web ou d'un script révolutionnaire, mais tout simplement de matos informatique !     \nJ'ai acheté il y a 2/3 mois une nouvelle config PC (enfin, les achats se sont étalés sur plusieurs mois vu la disponibilité des processeurs e8000...) qui comprenait notamment une carte mère …"
---

Pour une fois, je ne vais pas parler de programmation, de développement web ou d'un script révolutionnaire, mais tout simplement de matos informatique !
J'ai acheté il y a 2/3 mois une nouvelle config PC (enfin, les achats se sont étalés sur plusieurs mois vu la disponibilité des processeurs e8000...) qui comprenait notamment une carte mère [Asus Maximus Formula](http://fr.asus.com/products.aspx?l1=3&l2=11&l3=572&l4=0&model=1889&modelmenu=1) et un processeur [Intel E8400](http://processorfinder.intel.com/details.aspx?sSpec=SLAPL).

Une fois ma tour vidée de son ancienne carte mère et de tout ce qui gênait, j'installe tout fièrement ma nouvelle carte mère avec son processeur. Il faut rappeler que cette carte possède un petit écran LCD qui permet d'avoir des informations sur la carte mère en temps réel. Généralement, il affiche plein d'informations quand le PC démarre mais une fois qu'il a démarré, il affiche ... l'heure ! Waouh !   Bref, tout bien installé et emboité, j'allume la bête. Et là je vois passé plein d'infos sur le LCD, CPU INIT, DET RAM, TEST CMOS et pour finir CMOS ERROR et ... plus rien, le pc ne bip pas, les ventilos tournent à fond et plus rien ne se passe ...

Après avoir essayé tout un paquet de truc, changement de ram, clear du CMOS, débranchement de tous les périphériques, le CMOS ERROR était toujours présent ...   J'ai finalement demandé à mon ami Google ce que je pouvais faire ! Et j'ai trouvé qu'en fait **le bios par défaut de la carte mère Asus Maximus Formula ne supporte pas les processeurs e8000** (même la série e7000 remarque...). Et, en voyant [la liste des processeurs et le bios compatible](http://support.asus.com/cpusupport/cpusupport.aspx?model=Maximus%20Formula&SLanguage=fr-FR), il s'avère qu'il n'y a pas que les e8000 qui ne sont pas compatible par défaut. Toutes les solutions dont parler les divers internautes étaient globalement la même : booter avec un autre processeur pour flasher le bios avec la version la plus récente et ensuite, remettre le e8400 pour pouvoir booter sans problème.

Autant dire que si vous voulez un PC qui marche avec cette configuration (Maximus Formula et e8400) il faut aussi que vous achetiez un Celeron ou un processeur compatible ... Nah mais c'est quoi ce délire ??? Et le pire, c'est que personne ne le sait vraiment ... Je ne vous raconte ma joie quand j'ai appris la nouvelle, moi qui était tout enthousiaste de tester ma nouvelle config !!

J'ai eu la chance d'avoir une amie avec un processeur compatible, j'ai pu flasher le bios avec la version la plus récente. Pour cette opération, j'ai eu la chance d'avoir EZ Flash sur ma carte mère, qui permet de flasher le bios depuis une clé USB par exemple tout en étant dans le bios, enfin, sans être sous Windows je veux dire.

Au final, je regarderai plus attentivement sur le net ces problèmes d'incompatibilité (dire qu'il faudrait aussi regarder la compatibilité carte mère / carte graphique) la prochainement fois que je changerai de config ...   Dans l'espoir d'aider une personne qui serait dans le même que moi ces derniers temps ;-)
