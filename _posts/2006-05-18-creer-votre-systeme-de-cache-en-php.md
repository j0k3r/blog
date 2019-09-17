---
layout: post
title: 'Créer votre système de cache en PHP'
date: '2006-05-18 08:38:54'
author: j0k
tags: blabla
excerpt: "Dans un nouveau tutoriel PHP, le JDN présente deux façons de créer son propre système de cache : soit en passant les en-têtes HTTP soit en utilisant la mise en tampon des données.     \nLe fonctionnement fondamental d'un script de cache pourrait ce définir ainsi :  \n  \n1. recevoir la requête pour une ressource   2. vérifier s'il existe une      …"
---

Dans un nouveau tutoriel PHP, le JDN présente deux façons de créer son propre système de cache : soit en passant les en-têtes HTTP soit en utilisant la mise en tampon des données.
Le fonctionnement fondamental d'un script de cache pourrait ce définir ainsi :

1. recevoir la requête pour une ressource
2. vérifier s'il existe une version &quot;cachée&quot; de cette ressource   ---&gt; c'est le cas, vérifier si elle est toujours valide   ------&gt; ce n'est pas le cas, créer une nouvelle version cachée et la stocker   ---&gt; si ce n'est pas le cas, créer une version cachée et la stocker
3. envoyer la version cachée au navigateur

Comme expliqué plus haut, deux façons sont expliquées et détaillés. Les deux fonctionnent globalement pareil mais ne s'implémente pas de la même manière.   Un bon [tutoriel](http://developpeur.journaldunet.com/tutoriel/php/060515-php-cache-serveur-1.shtml) à lire et à suivre !
