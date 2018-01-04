---
layout: post
title: 'Mettre à jour EasyPHP v2'
date: '2005-10-13 22:05:16'
author: j0k
tags: '[développement]'
excerpt: "Depuis le [premier article](http://www.j0k3r.net/articles-mettre-a-jour-easyphp-v1-6.html) sur la mise à jour d'EasyPHP, une nouvelle version est sortie, la 1.8, rendant ce tutoriel \"obsolète\". Cependant ce tutoriel reste toujours valide pour mettre à jour PHP 4.x, Apache 1.x, MySQL 4.x depuis EasyPHP 1.7 ou 1.8.  \nLe staff d'EasyPHP a aussi parlé d'une version 2.0 avec Apache2 et PHP5, mais si on doit attendre aussi longtemps que pour la 1.8, il va falloir faire quelques choses avant. Remarquez qu'ils n'ont pas qu'EasyPHP dans la vie aussi hein !  \n C'est chose faite grâce à ce tutoriel qui permet de mettre à jour EasyPHP 1.7 ou 1.8 avec _toutes_ les dernières versions citées ci-dessous, vous obtiendrez ainsi votre propre version d'EasyPHP 2.0 avant l'heure !"
---

Depuis le [premier article](http://www.j0k3r.net/articles-mettre-a-jour-easyphp-v1-6.html) sur la mise à jour d'EasyPHP, une nouvelle version est sortie, la 1.8, rendant ce tutoriel "obsolète". Cependant ce tutoriel reste toujours valide pour mettre à jour PHP 4.x, Apache 1.x, MySQL 4.x depuis EasyPHP 1.7 ou 1.8.
Le staff d'EasyPHP a aussi parlé d'une version 2.0 avec Apache2 et PHP5, mais si on doit attendre aussi longtemps que pour la 1.8, il va falloir faire quelques choses avant. Remarquez qu'ils n'ont pas qu'EasyPHP dans la vie aussi hein !
 C'est chose faite grâce à ce tutoriel qui permet de mettre à jour EasyPHP 1.7 ou 1.8 avec _toutes_ les dernières versions citées ci-dessous, vous obtiendrez ainsi votre propre version d'EasyPHP 2.0 avant l'heure !

 - PHP 5.0.5
 - phpMyAdmin 2.6.4-pl3
 - MySQL 5.0.15
 - Apache 2.0.55
 - eAccelerator 0.9.3

## _1) Attention, à lire avant tout !!!_

 Cette mise à jour n'est pas du tout aussi facile que la précédente ([Mettre à jour EasyPHP v1](http://www.j0k3r.net/articles-mettre-a-jour-easyphp-v1-6.html)). Elle requiert un niveau plus avancé, que vous avez peut être mais je tiens tout de même à vous mettre en garde.

 Dans tous les cas sauvegarder complètement votre dossier EasyPHP avant toute manipulation. De plus cette installation est spécifique à un serveur Apache2 **avec** PHP5. Si vous voulez installer Apache2 avec PHP 4, il faudra mettre les mains dans le "cambouis". Ceci dit c'est tout à fait faisable.

 Pour terminer cette erratum, arrêter les serveurs MySQL et Apache avant toute modification. Vous les relancerez seulement l'installation fini. C'est à dire une fois que vous aurez correctement tout installé. C'est partiiii !

##   _2) phpMyAdmin 2.6.4-pl3_

 On commence par le plus simple et le plus rapide.
 Prenez la [dernière version](http://www.phpmyadmin.net/home_page/downloads.php) de phpMyAdmin. Dézippez le tout dans le dossier d'EasyPHP. Renommez le dossier *phpmyadmin* en *phpmyadmin_old* et le dossier *phpMyAdmin-2.6.4-pl1* en *phpmyadmin*.

  Depuis la version 2.6.4 de phpMyAdmin, il n'est plus nécessaire d'activer la variable *$cfg['PmaAbsoluteUri_DisableWarning']* puisqu'elle n'existe plus ! Ainsi vous avez (déjà) fini d'installer la nouvelle version de phpMyAdmin ! :p

##   _3) MySQL 5 (MySQL 5.0.15)_

 On attaque "le" un peu moins facile.
 LA grande version de MySQL, la version 5.x, celle qui permettra de faire des triggers, qui lui permettra aussi de rentrer dans la cours des grands et de pouvoir (réellement) rivaliser avec Oracle, PostGreSQL ...

 Tout d'abord, récupérez la version [5.0.15](http://mir2.ovh.net/ftp.mysql.com/Downloads/MySQL-5.0/mysql-noinstall-5.0.15-win32.zip) (ou la dernière disponible) sans installeur (Win).

  Dézippez l'archive que vous venez de télécharger à la racine d'EasyPHP.

 Renommez votre ancien dossier *mysql* en *mysql_old* et le nouveau dossier (issue du dézippage) en *mysql*.

 Allez dans votre dossier *mysql_old*, entrez dans le dossier *data* et sélectionnez tous les dossiers sauf le dossier *mysql* (ne prenez pas les fichier en .err ou en .pid). Ne vous souciez pas du dossier *test*, vous pouvez sans problème le remplacer par celui de MySQL 5. Copiez tout ceci et collez le dans le répertoire *data* de votre nouveau dossier *mysql* (celui de MySQL 5 donc).

 MySQL5 est installé !

##   _4) PHP 5 (5.0.5)_

 La difficulté grandit !
 L'installation de PHP 5 dans EasyPHP n'est pas aussi compliqué que je l'appréhendais !

 Téléchargez tout d'abord la dernière version disponible sur [php.net](http://www.php.net/downloads.php).
 Dans votre dossier d'EasyPHP, renommez le dossier *php* en *php_old* (par exemple). Décompressez maintenant l'archive que vous venez de télécharger dans le répertoire d'EasyPHP. Renommez le dossier provenant de l'archive en *php*. Déplacez ensuite le fichier *libmysql.dll* qui se trouve dans le dossier *php* (le nouveau) dans le dossier *C:/windows/system32/*.

 L'installation de PHP est finie, il faudra ensuite le configurer (très succinctement) une fois Apache installé.

##   _5) Apache 2 (2.0.55)_

 Voilà le plus dur, dernière ligne droite.
 Apache 2 diffère beaucoup d'Apache 1 au niveau de l'arborescence des fichiers ... au niveau des performances et tout plein d'autres choses aussi ! Dans un premier temps, téléchargez la version 2.0.55 d'Apache que je mets à votre disposition via cette [archive](http://www.j0k3r.net/dl/apache_2.0.55.rar).

 Dézippez l'archive, renommez le dossier issu du dézippage en *Apache2* et placez la dans votre dossier d'EasyPHP. Ensuite il vous faut éditer le httpd.conf (se trouvant dans Apache2/conf) pour l'adapter à votre configuration. Je vais vous indiquer les lignes qu'il vous faut modifier (en supposant que votre EasyPHP est installé dans *C:/Logiciel/EasyPHP1-7/*) :

 - *ligne 57* : ServerRoot "C:/Logiciel/EasyPHP1-7/Apache2"
 - *ligne 173, après* : LoadModule php5_module "C:/Logiciel/EasyPHP1-7/php/php5apache2.dll"
 - *ligne 229* : DocumentRoot "C:/Logiciel/EasyPHP1-7/Apache2/htdocs"
 - *ligne 254* : <Directory "C:/Logiciel/EasyPHP1-7/www">
 - *ligne 478* : *Modifiez tous les directories et alias pour qu'ils collent avec votre configuration (pensez à regarder aussi le reste du fichier)*

On configure maintenant PHP avec le bon fichier *php.ini* présent dans le dossier d'Apache2. Modifiez la ligne 331 (extension_dir) pour que cela corresponde à votre configuration d'EasyPHP.

  Voilà les fichiers nécessaire pour Apache 2 sont en place. Maintenant il faut installer le service Apache2 pour pouvoir le faire fonctionner.

 Placez vous dans le dossier *bat* d'*Apache2*. Là vous trouverez cinq fichiers (installApache.bat, startApache.bat, stopApache.bat, uninstallApache.bat et commandesApache.bat).

  On va installer le service et démarrer Apache. Lancez *installApache.bat* puis *startApache.bat*. A ce stade, Apache est installé en tant que service et est lancé.

 Si vous voulez l'arrêter, lancez *stopApache.bat*. Bref les noms sont assez explicites pour que vous compreniez à quoi ils servent. Dans le cas contraire, lisez le *ReadMe.txt* du dossier, il détaille les différents .bat.

 Normalement "tout c'est bien passé" et le service Apache est maintenant installé.

##   _6) eAccelerator 0.9.3_

 C'est la seule étape qui est facultative.
 Il suffit de suivre le tutoriel pour [installer eAccelerator](http://www.j0k3r.net/php-installer-eaccelerator-23.html). Il faut juste prendre la bonne dll pour [PHP 5.0.5](http://www.j0k3r.net/dl/eaccelerator_win_5.0.5.rar) qui n'est pas encore présente sur leur site.

##   _7) On lance le tout_

 Le service Apache2 est maintenant lancé. Ouvrez votre panneau de configuration d'EasyPHP est lancé le serveur mysql et uniquement celui ci. Ne tenez pas compte du fait que le serveur Apache soit marqué comme arrêté ... c'est pas le notre ;)
 Allez voir votre [phpinfo()](http://localhost/mysql/phpinfo.php) pour vérifier que c'est bien votre version de PHP que vous venez d'installer.

 Jeter aussi un oeil à votre [phpMyAdmin](http://localhost/mysql/) pour s'assurer de la bonne installation de MySQL 5.0.15.

 Au passage, ne tenez pas compte de "Votre fichier de configuration fait référence à l'utilisateur root sans mot de passe" dans phpMyAdmin, c'est normal, c'est EasyPHP.

##   _8 )Pour les utilisateurs de EasyPHP 1.8_ :

 EasyPHP 1.8 teste la présence du service Apache pour en afficher l'état. Si vous avez lancé Apache2 avant, EasyPHP le verra déjà lancé donc vert.

 *Un conseil pratique* : Désactivez le démarrage automatique de Apache et MySQL en éditant le fichier EasyPHP.ini se trouvant à la racine de EasyPHP.

Contenu initial :

```ini
[EasyPhp]
AutoStartServers=Y
AutoStartEasyPhp=N
AutoReloadConf=Y
CheckVersion=Y
StartAsServices=N
ShowAlways=N
ExpandPos=N
CheckServerPorts=Y
Lang=Français
```

Le modifier en :

```ini
[EasyPhp]
AutoStartServers=N
AutoStartEasyPhp=N
AutoReloadConf=Y
CheckVersion=Y
StartAsServices=N
ShowAlways=N
ExpandPos=N
CheckServerPorts=Y
Lang=Français
```

  Ainsi quand vous lancerez EasyPHP, il verra apache lancé s'il est actif, et vous n'aurez qu'à lancer à la main MySQL.
 Si vous lancez Apache2 après EasyPHP, l'état d'apache restera rouge, mais ne pas s'en inquiéter si Apache est bien démarré.
 Si le Apache est vert, la commande "Arrêter" de EasyPHP arrêtera VRAIMENT Apache ensuite.
 Tout ce qui est au dessus n'est valable que si on n'a plus de répertoire apache dans EasyPHP ( renommer l'ancien apache en apache_old ).

 C'est pratique pour tout arrêter, on peut arrêter Apache et MySQL avec EasyPHP.

##   _9) Remerciement_

 Un grand merci à Dan (comme à chaque fois !) avec qui on a du passer au moins trois / quatre soirs à essayer de faire fonctionner tout ça. Surtout qu'au début on est un peu parti ... de rien :D

 C'est d'ailleurs lui qui s'est chargé de l'installation sur EasyPHP 1.8

 Merci Dan pour les .bat, pour le temps passé à tester ... et tout et tout !

  © j0k

 *Mis à jour le 06/11/05* :

 - MySQL 5.0.15
 - Apache 2.0.55
 - phpMyAdmin 2.6.4-pl3*
