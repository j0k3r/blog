---
layout: post
title: 'PHP - Afficher la date du jour'
date: '2004-10-05 23:15:56'
author: j0k
tags: '[développement]'
excerpt: 'Ce script est très simple et se compose de trois étapes : récupérer la date du jour, la mettre en forme et l''afficher. La première étape dépend en fait de la troisième car selon le format d''affichage que l''on veut utiliser, il faut récupérer les informations appropriées.'
---

## _1. Présentation_

Ce script est très simple et se compose de trois étapes : récupérer la date du jour, la mettre en forme et l'afficher. La première étape dépend en fait de la troisième car selon le format d'affichage que l'on veut utiliser, il faut récupérer les informations appropriées.

Pour cet exemple, le format est le suivant :

  *(jour de la semaine) (jour du mois) (mois) (année)*
 Exemple : Lundi 25 Décembre 2000

##  _2. Récupération des données_

 Cette étape se réalise à l'aide de la fonction **date()** qui permet de récupérer dans des variables toutes sortes d'informations sur les dates. Les paramètres utilisés pour cette fonction sont les suivants : 'l' pour le jour de la semaine, 'd' pour le jour du mois, 'm' pour le mois et 'Y' pour l'année.

```php
$nomjour = date("l");
$jour = date("d");
$nommois = date("m");
$annee = date("Y");
```

##  _3. Mise en forme_

 La mise en forme est nécessaire car le jour de la semaine retourné par la fonction est en anglais et le mois est un nombre alors que nous voulons afficher son nom.

 - Affectation du nom du jour

```php
switch ($nomjour)
{
   case "Monday":
      $nomjour="Lundi";
   break;
   case "Tuesday":
      $nomjour="Mardi";
   break;
   case "Wednesday":
      $nomjour="Mercredi";
   break;
   case "Thursday":
      $nomjour="Jeudi";
   break;
   case "Friday":
      $nomjour="Vendredi";
   break;
   case "Saturday":
      $nomjour="Samedi";
   break;
   case "Sunday":
      $nomjour="Dimanche";
   break;
}
```

 - Affectation du nom du mois

```php
switch ($nommois)
{
   case 1:
      $nommois="Janvier";
   break;
   case 2:
      $nommois="Février";
   break;
   case 3:
      $nommois="Mars";
   break;
   case 4:
      $nommois="Avril";
   break;
   case 5:
      $nommois="Mai";
   break;
   case 6:
      $nommois="Juin";
   break;
   case 7:
      $nommois="Juillet";
   break;
   case 8:
      $nommois="Août";
   break;
   case 9:
      $nommois="Septembre";
   break;
   case 10:
      $nommois="Octobre";
   break;
   case 11:
      $nommois="Novembre";
   break;
   case 12:
      $nommois="Decembre";
   break;
}
```

##  _4. Affichage_

 Il ne reste plus qu'a faire afficher la date du jour.

```php
print($nomjour);
echo $nomjour.' '.$jour.' '.$nommois.' '.$annee;
```
