---
layout: post
title: 'MySQL - Administration MySQL'
date: '2004-03-22 05:26:43'
author: j0k
tags: développement
excerpt: 'Je vais vous montrer comment administrer une base MySQL en ligne de commande (exemple sous un shell Linux).'
---

Je vais vous montrer comment administrer une base MySQL en ligne de commande (exemple sous un shell Linux).

## **Le serveur MySQL est-il en fonctionnement ? Comment le démarrer ? :**

 - Pour simplement vérifier l'état du serveur, on passe la commande standart : `ps ax | grep mysql` ou encore */etc/rc.d/init.d/mysql status*
 - Si mysqld est en fonctionnement, on obtient les références des processus lancés par le programme */usr/sbin/mysqld*
 - Si nécessaire, au cas où le serveur mysqld n'est pas lancé au démarrage (comme pour les autres "démons"), on peut démarrer ou arrêter le "moteur" MySQL par la commande : `/etc/rc.d/init.d/mysql {start | stop}`
 - Pour lancer le serveur mysqld automatiquement au démarrage de la machine (ou lors d'un reboot), utiliser l'utilitaire *drakkxservices*, et cocher *mysql*.

## **Commande de connexion générale :**

 Le paramètre *-u user* est indispensable si l'utilisateur MySQL user qui veut se connecter, est différent du compte utilisateur actuellement connecté au système. Si le serveur MySQL est hébérgé par une autre machine, il faut son nom d'hôte après le paramètre *-h*. Si on met juste le paramètre *-p*, le mot de passe est demandé interactivement.

```
# mysql -h machine -u root -pmoi //ne pas mettre d'espace après le -p
mysql>
```

## **Pour se connecter directement à une base :**

 On précise le nom de cette base aussi dans la ligne de commande, généralement à la fin. Exemple : *root* veut ouvrir la base de d'administration système mysql (sous-entendu sur la machine *localhost*) puis interroger la table *user* :

```
# mysql -u root -p mysql
Enter password: ...
Welcome to the MySQL monitor
........
mysql>SELECT host,user,password FROM user;
//On peut apercevoir le mot de passe de root crypté
```

## **Comment créer une nouvelle base :**

 *root* crée une nouvelle base de donnée nommée *essais* et vérifie sa présence.

```
# mysql -u root -p
mysql>CREATE DATABASE essais;
Query OK, 1 row affected (0.00 sec)
mysql>SHOW DATABASES;
```

La nouvelle base *essais* sera installée dans un répertoire qui porte son nom, c'est à dire ici */var/lib/mysql/essais*. Pour le moment ce répertoire créé est vide. Il porte les droits de propriété *700* pour le compte système *mysql*.

## **Comment supprimer une base :**

 En mode console, root passe la commande sans possibilité de récupération ultérieure !

```
mysql>DR0P DATABASE essais;
Query OK, 0 row affected (0.00 sec)
```

## **Comment créer des utilisateurs :**

 C'est le privilège de *root* de gérer les utilisateurs des bases de données, et de leur accorder les droits au niveau d'une base ou d'une table.

 Les commandes *grant* et *revoke* permettent d'attribuer et de retirer des droits d'accès. Il est possible de préciser si l'utilisateur aura le droit d'accès à la base seulement localement (clause *TO user@localhost*) ou (*TO user@'%'*).

L'utilisateur sera à ce moment créé en même temps.

```
mysql>GRANT [ALL PRIVILEGES | liste de privilèges]
ON [base.table | base.*]
TO [user@localhost | 'user@%' | 'user@%.domaine']
IDENTIFIED BY "mot-de-passe";
```
