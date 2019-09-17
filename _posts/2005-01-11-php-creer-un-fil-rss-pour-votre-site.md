---
layout: post
title: 'PHP - Créer un fil RSS pour votre site'
date: '2005-01-11 18:11:43'
author: j0k
tags: développement
excerpt: "Vous avez certainement déjà vu des sites qui affichés les news d'autres sites. Avant (et encore un peu maintenant) cela ce faisait via un fichier que l'on appelle entre des balises javascript. Mais le web évolue, et la tendance est au RSS.  \nLe but de ce tuto est de récupérer vos données de MySQL pour ensuite les mettre dans un fichier RSS."
---

Vous avez certainement déjà vu des sites qui affichés les news d'autres sites. Avant (et encore un peu maintenant) cela ce faisait via un fichier que l'on appelle entre des balises javascript. Mais le web évolue, et la tendance est au RSS.  Le but de ce tuto est de récupérer vos données de MySQL pour ensuite les mettre dans un fichier RSS.

## **C'est quoi le RSS ?**

 Le RSS (Really Simple Syndication) est un moyen pour extraire d'un site web du contenu régulièrement mis à jour. Un fichier RSS est un simple fichier texte au format XML comportant la description synthétique du contenu.

##  **Le script et ses explications**

 En tout premier lieu il faut vous connecter à votre base de donnée pour pouvoir récupérer vos news.

```php
include("connect.php");
```

 Puis viens la fonction qui rend votre texte compatible XML. C'est à dire qui va enlever tout ce qui est accents ou autres caractères spéciaux dans ce genre.

```php
function cleanText($intext) {
    return utf8_encode(htmlspecialchars(stripslashes($intext)));
}
```

 Ensuite on dit au serveur qu'il faudra interpréter l'affichage comme un document RSS/XML via la fonction header de php

```php
header("Content-Type: text/xml;charset=utf-8");
```

 On récupère maintenant les news de la base de donnée (adapter la requête sql à votre base en fonction de vos tables et de vos champs)

```php
$query1 = 'SELECT id, email, title, contenu, time FROM table_news';
$result1 = mysql_query($query1);
```

 On crée l'entête du fichier RSS avec des données générales concernant votre site

```php
echo <<<END
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
    <channel>
        <title>Le titre de votre site</title>
        <link>http://www.monsite.net</link>
        <description>Mon site à moi c'est le meilleur</description>
        <language>fr-FR</language>
        <managingEditor>vous@monsite.com</managingEditor>
        <webMaster>webmaster@monsite.com</webMaster>
END;
```

 Ensuite viens l'étape où l'on affiche toutes les news (ici 10), en spécifiant leur titre, le lien, une petite description et la date de parution (en secondes)

```php
for ($i = 0; $i < 10 ; $i++) {
    @$row = mysql_fetch_array($result1);
    $title             = cleanText($row["title"]);
    $mail             = $row["email"];
    $link             = "http://www.monsite.net/news.php?id=".$row["id"];
    $description     = cleanText($row["contenu"]);
    $pubDate         = date("r", $row["time"]);

echo <<<END

        <item>
            <title>$title</title>
            <link>$link</link>
            <author>$mail</author>
            <description>$description</description>
            <pubDate>$pubDate</pubDate>
        </item>
END;

}
```

 Et on fini en fermant les balises du rss

```php
echo <<<END

    </channel>
</rss>
END;
```

 Voila, votre fichier RSS a été généré et est affiché comme un fichier XML.

 Voici le [fichier](http://www.j0k3r.net/phps/rss.phps) complet de cette application.

##  **L'inclure dans votre site**

 Une fois le script qui génère votre fichier RSS créé, il faut maintenant le spécifié dans votre page html (en supposant que le fichier rss.php est à la racine de votre site).

```html
<link rel="alternate" href="/rss.php" type="application/rss+xml" title="News monsite.com" />
```

 Vous pouvez ici changer le titre et le lien, le reste doit rester tel quel.

  Voila vous pouvez maintenant proposé aux webmasters d'afficher vos news sur leur site tout en étant certain qu'elles seront à jour par rapport au news de votre site. Pour cela vous pouvez utiliser un petit lien avec l'image adéquate le tout sous forme de lien pointant directement sur votre fichier RSS.

##  **FireFox et les RSS**

 Grace à Firefox 1.0 vous pouvez visionner des RSS comme des favoris. Lorsque vous arrivez sur un site et que vous voyez ce joli petit logo en bas à droite de votre navigateur, cela veut dire que ce site propose un ou plusieurs fichiers RSS.

 Cliquer dessus et vous arriverai à un interface du même type que pour ajouter un marque-pages.

## **Aller plus loin ... toujours**

 Il serait bon de faire maintenant un lecteur RSS en php pour pouvoir lire ce type de fichier.

 Étant donné qu'il est structuré comme un fichier xml avec des balises et tout ce que comprends un fichier XML, il suffit de chercher les 2/3 fonctions php pour lire du xml et le tour est joué :)

  Adapté du script original de [Rogers Cadenhead](http://www.cadenhead.org/workbench/).

 © j0k
