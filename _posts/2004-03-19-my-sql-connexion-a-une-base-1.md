---
layout: post
title: 'MySQL - Connexion à une base'
date: '2004-03-19 23:28:11'
author: j0k
tags: '[développement]'
excerpt: 'Cette fonction est chargée d''établir la connexion au moteur MySQL et en cas de succès, d''assurer l''ouverture d''une base.'
---

Cette fonction est chargée d'établir la connexion au moteur MySQL et en cas de succès, d'assurer l'ouverture d'une base. Elle renvoie un entier qui identifie la connexion et qui sera utilisé par la suite. Elle utilise les valeurs des paramètres suivants :  *$host* : le nom du serveur qui héberge les bases de données MySQL.

 - *$user* : le nom de l'utilisateur
 - *$pass* : et son mot de passe
 - *$bd* : le nom de la base à connecter

```php
function connecter($user,$pass,$bd,$host)
{
     //Connexion au serveur MySQL
     $connexion = mysql_connect($host, $user, $pass);
     if(!$connexion)
     {
          echo 'Connexion impossible au serveur '.$host;
          exit;
     }

     //connexion à la base
     $ok = mysql_select_db($bd, $connexion);
     if(!$ok)
     {
          echo 'Connexion impossible à la base'.$bd;
          exit;
     }

     return $connexion;
}
```
