---
layout: post
title: 'MySQL - Soumission d''une requête'
date: '2004-03-19 08:05:17'
author: j0k
tags: '[développement]'
excerpt: 'Cette fonction a besoin d''un retour de connexion réussi donnée par *$connexion* et d''une chaine *$requete* exprimant une clause MySQL correcte.'
---

Cette fonction a besoin d'un retour de connexion réussi donnée par *$connexion* et d'une chaine *$requete* exprimant une clause MySQL correcte. En cas de succès, elle renvoie le résultat, usuellement appelé *$resultat*, ultérieurement exploitable.

```php
function extraire($connexion,$requete)
{
     //requete de sélection
     $resultat = mysql_query($requete, $connexion);
     if ($resultat)
     {
          return $resultat;
     }
     else
     {
          echo 'Erreur dans la requête '.$requete.' ';
          echo 'Message de MySQL : '.mysql_errno($connexion) .
               mysql_error($connexion).' ';
     }
}
```
