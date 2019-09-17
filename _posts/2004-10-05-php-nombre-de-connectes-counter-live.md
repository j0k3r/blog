---
layout: post
title: 'PHP - Nombre de connectés (counter live)'
date: '2004-10-05 23:32:36'
author: j0k
tags: développement
excerpt: "e script permet de connaître le nombre de connectés sur un site internet en temps réel. On appelle ceci en anglais un \"live counter\".  \n  Le principe de fonctionnement est simple : l'adresse IP et le temps de connexion de chaque visiteur sont stockés dans une base de données MySQL."
---

## _1. Présentation_

Ce script permet de connaître le nombre de connectés sur un site internet en temps réel. On appelle ceci en anglais un "live counter".

  Le principe de fonctionnement est simple : l'adresse IP et le temps de connexion de chaque visiteur sont stockés dans une base de données MySQL.

  A la première page chargée par un visiteur, son adresse IP est stockée ainsi que l'heure (en secondes) où il a chargé la page. Puis, à chaque nouvelle page chargée, on met à jour l'heure dans la base de données et on supprime les visiteurs qui n'ont pas chargé de page depuis un certain temps, ici nous choisissons 5 minutes (300 secondes).

 Pour connaître le nombre de connectés au site, il suffit de compter le nombre de lignes dans la table MySQL.

##  _2. Structure de la table de stockage_

 Code ci-dessous pour créer votre table sous phpMyAdmin par exemple.

```sql
CREATE TABLE nb_connectes (ip text NOT NULL, time bigint(20) NOT NULL);
```

##  _3. Script à mettre sur chaque page du site_

 Ce script doit être présent sur chaque page de votre site. Pour plus de facilité vous pouvez l'inclure dans un "template" (avec la fonction include en PHP).

  **Note :** Les commentaires sont précédés d'un //.

```php
//Nom de la base :
$opt_connectes_cfgbase = "base";
//Nom d'utilisateur :
$opt_connectes_cfguser = "user";
//Mot de passe :
$opt_connectes_cfgpass = "pass";
//Chemin sgbd :
$opt_connectes_cfghote = "localhost";
// Nombre de secondes de connexion
$nb_connectes_connexion=300; // 5 minutes

// Connexion à la base de données
$base_connectes=mysql_connect($opt_connectes_cfghote, $opt_connectes_cfguser,$opt_connectes_cfgpass);
if (!$base_connectes)
{
echo "<center>Erreur de connexion à la base de données...</center>";
exit();
}

// Sélection de la base
if (! mysql_select_db("$opt_connectes_cfgbase",$base_connectes))
{
mysql_close ($base_connectes);
echo "<center>Erreur de connexion à la base de données...</center>";
exit();
}
// Heure courante
$heure_connectes=date("U");
// Récupère l'adresse IP
$ip_connectes=$_SERVER["REMOTE_ADDR"];
// Recherche de l'Ip dans la base de données[
$query_connectes="select * from nb_connectes where ip='$ip_connectes'";
$result_connectes=@mysql_query($query_connectes,$base_connectes);

if (!$result_connectes)
{
mysql_close($base_connectes);
echo "<center>Impossible d'exécuter la requête...</center>";
exit();
}

$nb_connectes=@mysql_num_rows($result_connectes);
if ($nb_connectes)
{
// Mise à jour de la connexion
$query_connectes="update nb_connectes set time='$heure_connectes' where ip='$ip_connectes'";
$result_connectes=@mysql_query($query_connectes,$base_connectes);
}
else
{
// Création de la connexion
$query_connectes="insert into nb_connectes (ip, time) values ('";
$query_connectes.=$ip_connectes;
$query_connectes.="', '";
$query_connectes.=$heure_connectes;
$query_connectes.="')";
$result_connectes=@mysql_query($query_connectes,$base_connectes);
}

// Calcul tps max de connexion
$heure_max_connectes=$heure_connectes-$nb_connectes_connexion;

// Suppression des connexions max dans la base de données
$query_connectes="delete from nb_connectes where time<'$heure_max_connectes'";
$result_connectes=@mysql_query($query_connectes,$base_connectes);

// Fermeture de la connexion à la base
mysql_close($base_connectes);
```

##  _4. Script d'affichage du nombre de connectés_

```php
//Nom de la base :
$opt_connectes_cfgbase = "base";
//Nom d'utilisateur :
$opt_connectes_cfguser = "user";
//Mot de passe :
$opt_connectes_cfgpass = "pass";
//Chemin sgbd :
$opt_connectes_cfghote = "localhost";

// Connexion à la base de données
$base_connectes=mysql_connect($opt_connectes_cfghote, $opt_connectes_cfguser,$opt_connectes_cfgpass);
if (!$base_connectes)
{
echo "<center>Erreur de connexion à la base de données...</center>";
exit();
}

// Sélection de la base
if (! mysql_select_db("$opt_connectes_cfgbase",$base_connectes))
{
mysql_close($base_connectes);
echo "<center>Erreur de connexion à la base de données...</center>";
exit();
}

// Nombre de connexions dans la base de données
$query_connectes="select * from nb_connectes";
$result_connectes=@mysql_query($query_connectes,$base_connectes);

$nb_connectes=@mysql_num_rows($result_connectes);

echo $nb_connectes;

// Fermeture de la connexion à la base[
mysql_close($base_connectes);
``
