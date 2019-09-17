---
layout: post
title: 'MySQL - Optimiser une base de donnée'
date: '2005-01-18 00:21:56'
author: j0k
tags: développement
excerpt: 'Cela peut paraître absurde ou totalement logique, mais il est bon d''optimiser de temps en temps sa base de donnée ou plutôt ses tables dans la base de donnée.  Voila une explication simple du pourquoi du comment'
---

Cela peut paraître absurde ou totalement logique, mais il est bon d'optimiser de temps en temps sa base de donnée ou plutôt ses tables dans la base de donnée.  Voila une explication simple du pourquoi du comment ^^

## **Mais pourquoi ?**

 Si l'on effectue beaucoup de modification sur une base de donnée de type MySQL (suppression, modification ...), il reste des fois des "débris" de donnée qui traîne par ci par là dans la table.

 Ceci est dû au type de la table, qui est définit (par défaut) en MyISAM (Table non transactionnelle). MyISAM est très puissant mais si l'on fait trop de modification, il laisse traîner des p'tits bouts de donnée de temps en temps.

  Oula je vous fait apparaître un mot inconnu là ... Une base dite *transactionnelle* est une base qui lors d'une requête, si à un endroit il y a une erreur, elle ne va pas interpréter tout le début de la requête.

 Tandis qu'une base de type *non transactionnelle* même si elle trouve une erreur dans la requête, elle exécutera tout ce qui se trouvait avant l'erreur. C'est notamment le cas des bases de donnée de type MyISAM.

## **Quand le faire ?**

 Surtout pas tous les jours, à moins d'avoir un fort trafic sur son site et d'être sûr qu'il y est beaucoup de transit sur votre base de donnée. Cela ne sert à rien d'optimiser sa base tout le temps. C'est un peu comme si l'on scannait entièrement son pc tous les jours ...

 Si vous optimisez une base de donnée "clean" (on dit sans pertes), cela vous fait une requête de plus pour rien.

  Par contre, le faire de temps en temps, genre une fois par semaines, ne fait pas de mal.

 Il faut savoir qu'en général, les pertes occasionnées ne sont jamais de grosses tailles. Ce n'est sûrement pas ça qui remettra en cause votre espace web :p

## **Comment le faire ?**
 C'est tout simple. C'est comme si l'on faisait une banale requête vers le serveur sql.

 Il suffit d'envoyer :

```sql
OPTIMIZE TABLE `table1`, `table2`
```

 Et vos tables passées en paramètres seront de suite optimisées.

## **Et en php ?**
 C'est bien beau de connaître la requête SQL à soumettre, mais si vous avez des dizaines et des dizaines de tables, ça va être lassant de le faire sur chaque à la longue.

 Pour ça il suffit de faire un petit script PHP qui récupère toutes vos tables et par la même occasion les optimise.

```php
mysql_connect('serveur_mysql', 'utilisateur_mysql', 'mot_de_passe_mysql');
$base = 'test';
$table = mysql_list_tables($base);
//on prépare la requête
$sql = "OPTIMIZE TABLE ";
//on recherche toutes les données des tables
$req = mysql_query('SHOW TABLE STATUS');
while($data = mysql_fetch_assoc($req))
{
    //on regarde seulement les tables qui affichent des pertes
    if($data['Data_free'] > 0)
    {
        //et on l'inclut si elle comporte des pertes
        $sql .= '`'.$data['Name'].'`, ';
    }
}
//on enlève le ', ' de trop
$sql = substr($sql, 0, (strlen($sql)-2));
//et on optimise
mysql_query($sql);
mysql_close();
```

Un petit conseil : mettez un lien dans l'administration de votre site, comme ça de temps en temps quand vous allez dans votre partie admin, hop un p'tit clic et vos tables sont optimisées ;)
