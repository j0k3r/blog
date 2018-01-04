---
layout: post
title: 'Importer des données sans connaître la table originale'
date: '2006-09-22 08:16:54'
author: DanRaZor
tags: '[]'
excerpt: "Nexen nous explique dans un des ses [billets](http://www.nexen.net/actualites/trucs/importer_des_donnees_sans_connaitre_la_table.php) comment importer des données d'une table dont on ne connait pas la structure.     \nOn y apprend qu'il n'est même pas la peine de créer une table structurée.   Une simple table de varchar suffit et ensuite il y a moyen      …"
---

Nexen nous explique dans un des ses [billets](http://www.nexen.net/actualites/trucs/importer_des_donnees_sans_connaitre_la_table.php) comment importer des données d'une table dont on ne connait pas la structure.
On y apprend qu'il n'est même pas la peine de créer une table structurée.   Une simple table de varchar suffit et ensuite il y a moyen de redéterminer le type réel des données.   On peut alors recomposer la table dans son ensemble ou du moins avoir une suggestion de table avec la simple requête :

```sql
SELECT * FROM table procedure analyse(100);
```

Une méthode pratique pour sauvegarder des données brutes voir même pour optimiser la table   vu que la requête propose à priori les types les plus adaptés.
