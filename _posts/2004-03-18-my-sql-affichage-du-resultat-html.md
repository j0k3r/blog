---
layout: post
title: 'MySQL - Affichage du résultat (HTML)'
date: '2004-03-18 14:28:56'
author: j0k
tags: développement
excerpt: 'Je vais vous montrer comment afficher le résultat d''une requête sql dans un tableau HTML.'
---

Je vais vous montrer comment afficher le résultat d'une requête sql dans un tableau HTML.
On suppose que l'utilisateur *$user* est déjà connecté à la base *$bd*, et qu'il a soumis avec succès sa requête *$requete*. Il s'agit d'afficher correctement les enregistrements obtenus à partir de l'identificateur de résultat *$resultat*. C'est le rôle de cette fonction *afficher($resultat)* qui utilise ainsi :

```php
//obtention du résultat de la recherche
$connexion = connecter($host, $user, $pass);

//obtention du résultat de la soumission de la requête
$resultat = extraire($connexion, $requete);

//affichage de ce résultat
afficher($resultat);
```

La fonction en question :

```php
function afficher($r)
{
     //quelle est la dimension du résultat
     $nblignes = mysql_num_rows($r);
     $nbchamps = mysql_num_fiels($r);

     //affichage de l'entête du tableau html avec les noms des champs
     echo '<table style="border: 2px solid;"><tr>';

     for($i=0; $i < $nbchamps; i++)
     {
          $tabchamps[$i] = mysql_fetch_name($r, $i);
          echo '<th>'.$tabchamps[$i].'</th>';
     }
     echo '</tr>';

     //affichage des enregistrements du résultat
     for($i=0; $i < $nblignes; $i++)
     {
          $ligne = mysql_fetch_row($resultat);
          echo '<tr>';
          for($j=0; $j < $nbchamps; $j++)
          {
               echo '<td>'.$ligne[$j].'</td>';
          }
          echo '</tr>';
     }

     echo '</table>';
}
```
