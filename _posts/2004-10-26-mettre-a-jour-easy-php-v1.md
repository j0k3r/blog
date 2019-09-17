---
layout: post
title: 'Mettre à jour EasyPHP v1'
date: '2004-10-26 18:40:03'
author: j0k
tags: développement
excerpt: "Tout le monde connait bien EasyPHP qui permet de mettre en place un système de développement complet en quelques minutes. Mais EasyPHP est orfelin depuis plus d'un an, c'est à dire que son auteur ne le mets plus à jour.   \nEasyPHP est encore sous php4 mais une maigre partie des développeurs a migré vers php5. De plus, rare sont les hébergeurs qui proposent php5."
---

Tout le monde connait bien EasyPHP qui permet de mettre en place un système de développement complet en quelques minutes. Mais EasyPHP est orfelin depuis plus d'un an, c'est à dire que son auteur ne le mets plus à jour.
EasyPHP est encore sous php4 mais une maigre partie des développeurs a migré vers php5. De plus, rare sont les hébergeurs qui proposent php5.

 Seulement EasyPHP 1.7 possède la version 4.3.3 de php ... alors que la dernière est la 4.3.9, qui corrige de nombreux problèmes de sécurité. En tant que bon programmeur que vous êtes, vous devez travailler sur une plate-forme à jour.

  Je vous propose cet article pour mettre facilement EasyPHP à jour :

 - PHP 4.3.9
 - Zend Optimizer 2.5.5
 - phpMyAdmin 2.6.2-pl1
 - MySQL 4.1.12
 - Apache 1.3.34
 - PHP 5

##  _1) PHP 4.3.9_

 La version d'EasyPHP, la 4.3.3, date de plus d'un an. De nombreuses mise à jour ont été effectuées depuis ... surtout au niveau de la sécurité.

 Tout d'abord il faut télécharger l'archive binaire de php à cette adresse [php-4.3.9-Win32](http://fr.php.net/get/php-4.3.9-Win32.zip/from/a/mirror).

 Couper ensuite les serveurs Apache et MySQL via l'icône d'EasyPHP dans la barre des taches.

  Dans le dossier *C:\Program Files\EasyPHP1-7* renommez le dossier *php* en *php_old* (par exemple). Décompressez maintenant l'archive que vous venez de télécharger dans le répertoire d'EasyPHP. Un dossier *php-4.3.9-Win32* doit normalement se créer. Renommez le en *php*. Voila les binaires ont été changé. Il faut maintenant remettre la dll de php4 "à sa place". Allez dans le dossier *phpsapi*, déplacez le fichier *php4apache.dll* dans le dossier *php* (le dossier parent).
 Tout est maintenant en place. Relancez les serveurs Apache et MySQL et allez voir votre [phpinfo()](http://127.0.0.1/home/phpinfo.php) pour vérifier que l'installation c'est bien passé.

##  _2) Zend Optimizer 2.5.5_

 Tout le monde ne connait pas l'application gratuite, éditée par Zend Technologies : Zend Optimizer. Il optimise les codes PHP. Il est idéalement utilisé avec un accélérateur ou un encodeur, qui travaillent déjà sur le code PHP pour l'accélérer ou masquer les sources. Les optimisations permettent de gagner jusqu'à 40% de vitesse.

  Il faut commencer par télécharger le pack [zend_optimizer_255.zip](http://www.j0k3r.net/dl/zend_optimizer_255.zip) que je mets à votre disposition.

 Allez dans le répertoire d'EasyPHP et dézippez l'archive zend_optimizer_255.zip.

 Vous obtenez un dossier Zend Optimizer. Il contient le coeur du moteur de zend optimizer. Ouvrez maintenant votre php.ini (qui se trouve dans le dossier *apache*) et rajoutez ceci à la fin :

```ini
zend_optimizer.optimization_level=15
zend_extension_ts="C:\Program FilesEasy\PHP1-7\Zend\OptimizerlibZendExtensionManager.dll"
zend_extension_manager.optimizer_ts="C:\Program Files\EasyPHP1-7\Zend\OptimizerlibOptimizer-2.5.5"
```

 /!\ **Ces lignes sont valables que si vous avez installé EasyPHP dans C:\Program Files\EasyPHP1-7. Remplacer par le lien de votre EasyPHP dans le cas contraire.**

  Relancez maintenant votre serveur Apache via EasyPHP. Allez ensuite voir votre [phpinfo()](http://127.0.0.1/home/phpinfo.php) et regardez juste avant *PHP Credits*, il y a le descriptif du moteur Zend. Si vous avez correctement suivit l'article, il devrai y avoir mentionner *Copyright (c) 2003-2004, by Zend Technologies with Zend Optimizer v2.5.5*.

##   _3) phpMyAdmin 2.6.2-pl1_ *(MAJ du 30/05/2005)*

 Vous connaissez tous phpMyAdmin qui permet d'administrer MySQL via le web.

 Lui aussi a connu une mise à jour importante c'est dernier temps.

  Pour l'installer rien de plus simple, téléchargez [la derniere version stable](http://www.phpmyadmin.net/home_page/downloads.php). Dézippez le tout dans le dossier d'EasyPHP. Renommez le dossier *phpmyadmin* en *phpmyadmin_old* et le dossier *phpMyAdmin-2.6.2-pl1.zip* en *phpmyadmin*. C'est la même opération que pour changer la version de php.

  Vous n'avez rien à modifier concernant les identifiants de connexion à MySQL. Cependant il vous faut quand même modifier la variable *$cfg['PmaAbsoluteUri_DisableWarning']* à TRUE dans le fichier de configuration (config.inc.php).

 Ne tenez pas compte de "Votre fichier de configuration fait référence à l'utilisateur root sans mot de passe", c'est normal :)

##  _4) MySQL 4.1.12_ *(MAJ du 30/05/2005)*

 EasyPHP intégre une version assez vieille de MySQL (4.0.15). En plus de ça, le groupe MySQL préconise les versions 4.1.x qui sont dorénavant plus stable et destiné à la production.

 Tout d'abord, récupérez la version 4.1.12 [sans installeur (Win)](http://mir2.ovh.net/ftp.mysql.com/Downloads/MySQL-4.1/mysql-noinstall-4.1.12-win32.zip).

  Sauvegardez le répertoire *data* de votre répertoire *mysql* qui se trouve dans celui d'EasyPHP (en le copiant par exemple).
 Ensuite dézipper l'archive que vous venez de télécharger à la racine d'EasyPHP.

 Renommez votre ancien dossier *mysql* en *mysql-4015* et le nouveau dossier (issue du dézippage) en *mysql*.
 Coller maintenant votre dossier *data* dans votre nouveau répertoire mysql (en remplaçant l'ancien), et le tour est joué !

  Allez voir votre [phpMyAdmin](http://localhost/mysql/) pour s'assurer de la bonne installation de MySQL 4.1.12.

##  _5) Apache 1.3.34_ *(MAJ du 20/12/2005)*

 Une version vieillissante d'Apache, la 1.3.27, est fournit avec EasyPHP 1.7.

 Je vous propose de lui donner un joli coup de jeune, en installant la toute derniere : la 1.3.34.

  Pour commencer télécharger l'[archive](http://www.j0k3r.net/dl/apache_1.3.34.rar) d'Apache que je mets à votre disposition.

 Allez dans votre répertoire d'apache au sein du dossier d'EasyPHP et sauvegardez le dossier *conf*. Renommez le dossier actuel d'apache en *apache-1327*. Créez un nouveau répertoire *apache* et dézippez l'archive à l'intérieur. Replacez le dossier *conf* que vous avez sauvegardé dans ce nouveau dossier et votre nouvel apache flambant neuf sera opérationnel.

  Redemarrez votre serveur apache et allez voir le [phpinfo()](http://localhost/mysql/phpinfo.php#module_apache) au niveau du module apache. Il devrai y avoir marqué *Apache Version Apache/1.3.34*.

##  _6) PHP5_ *(MAJ du 21/11/2004)*

 Il est tout a fait possible d'installer PHP5 sur votre plateforme EasyPHP.

 Je ne vais pas vous l'expliquer puisque il est décrit dans la [fap d'EasyPHP](http://www.easyphp.org/faq.php3#50).

##  _7) Conclusion_

 Voila vous avez une toute nouvelle station de travail avec les dernières versions stables pour pouvoir développer en toute tranquilité.

 Biensûr cet article peut tout à fait être utilisé avec d'autre version.

  N'hésitez pas à me laisser vos commentaires, vos réactions ... pour des améliorations ou pour des problèmes que vous auriez éventuellement pu rencontrer.

 Merci

  © j0k
