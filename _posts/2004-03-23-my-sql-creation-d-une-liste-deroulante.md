---
layout: post
title: 'MySQL - Création d''une liste déroulante'
date: '2004-03-23 19:44:48'
author: j0k
tags: développement
excerpt: 'La fonction *lister()* sera très utilisée pour créer une liste de valeurs de champs destinés à apparaitre comme les éléments d''une liste déroulante HTML (balise SELECT).'
---

La fonction *lister()* sera très utilisée pour créer une liste de valeurs de champs destinés à apparaitre comme les éléments d'une liste déroulante HTML (balise SELECT).
Cette liste prend ses valeurs dans une colonne d'une table :

```php
function lister($connexion, $table, $nomchamp)
{
     //écriture de la requete
     $requete = 'SELECT '.$nomchamp.' FROM '.$table.' ORDER BY '.$nomchamp.' ';

     //extraire la colonne
     $résultat = extraire($connexion, $requete);

     //affichage du composant HTML
     echo '<select name="'.$nomchamp.'">';
     echo '<option value="Choisir">';
     while($ligne = mysql_fetch_object($resultat))
     {
          echo '<option>';
          echo $ligne->$nomchamp;
          echo '</option>';
     }
     echo '</select>';

     //pour libérer la mémoire
     mysql_free_result($resultat);
}
```
