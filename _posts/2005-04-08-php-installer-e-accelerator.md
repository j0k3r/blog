---
layout: post
title: 'PHP - Installer eAccelerator'
date: '2005-04-08 20:35:12'
author: j0k
tags: développement
excerpt: 'Vous avez certainement remarqué les performances d''eAccelerator face à (un de ces concurrents) Zend Optimizer. Et bien je vous ai fait un petit tutoriel pour l''installer sur votre machine Windows (avec EasyPHP ou non).'
---

Vous avez certainement remarqué les performances d'eAccelerator face à (un de ces concurrents) Zend Optimizer. Et bien je vous ai fait un petit tutoriel pour l'installer sur votre machine Windows (avec EasyPHP ou non).

1. Avant toute chose, il faut savoir qu'eAccelerator et Zend Optimizer peuvent fonctionner ensemble mais il n'y a aucun intérêt à le faire.

   Étant donné qu'ils font tous les deux à peu prêt le même travail cela devrait créer des conflits ... mais cela fonctionne. Néanmoins c'est déconseillé.

   Si vous avez installé Zend Optimizer, allez dans le php.ini et enlever les lignes qui correspondent à Zend Optimizer (pour les lignes correspondant à mon tutoriel) :

    ```ini
    [Zend]
    zend_optimizer.optimization_level=15
    zend_extension_ts="C:\Program Files\EasyPHP1-7\Zend\libZendExtensionManager.dll"
    zend_extension_manager.optimizer_ts="C:\Program Files\EasyPHP1-7\Zend\libOptimizer-2.5.5"
    ```

2. Tout d'abord il faut vous procurer les fichiers d'eAccelerator ([eaccelerator_0.9.2.rar](http://www.j0k3r.net/dl/eaccelerator_0.9.2.rar)) et aussi la .dll "qui fait tout" ([http://www.arnot.info/eaccelerator/](http://www.arnot.info/eaccelerator/)).

    Prenez la dll Windows correspondant à votre version de PHP (pour le savoir vous pouvez regarder votre phpinfo).

3. Dézipper l'archive à la racine d'EasyPHP (ou dans le même répertoire qui contient les dossiers d'apache, mysql ...).

   Télécharger la dll et placez là dans le répertoire /php/ et renommez là en eaccelerator.dll.

   Une fois cette opération terminée, eAccelerator est physiquement sur votre serveur mais il faut maintenant indique à PHP qu'il doit le charger pour s'en servir.

4. Pour cela il faut modifier le fichier php.ini (qui se trouve dans /apache/ sous EasyPHP) et rajoutez ces lignes à la fin du fichier :

    ```ìni
    [eaccelerator]
    zend_extension_ts="C:\Program Files\EasyPHP1-7\php\eaccelerator.dll"
    eaccelerator.cache_dir = "C:\Program Files\EasyPHP1-7\eaccelerator\tmp"
    eaccelerator.shm_size="16"
    eaccelerator.enable="1"
    eaccelerator.optimizer="1"
    eaccelerator.check_mtime="1"
    eaccelerator.debug="0"
    eaccelerator.filter=""
    eaccelerator.shm_max="0"
    eaccelerator.shm_ttl="0"
    eaccelerator.shm_prune_period="0"
    eaccelerator.shm_only="0"
    eaccelerator.compress="1"
    eaccelerator.compress_level="9"
    eaccelerator.keys="shm_and_disk"
    eaccelerator.sessions="shm_and_disk"
    eaccelerator.content="shm_and_disk"
    ```

   Ces lignes correspondent à une installation sous EasyPHP. Vous devez modifier le chemin d'accès pour la variable zend_extension_ts et eaccelerator.cache_dir avec celle de votre configuration serveur.

5. Une fois tout cela configuré, on va maintenant mettre une petite directive pour administrer un peu eAccelerator.
   Ouvrez votre fichier de configuration d'apache (httpd.conf qui se trouve dans le répertoire /apache/conf/) et rajoutez ces lignes à la fin du fichier :

    ```apache
    Alias "/eaccelerator" "C:/Program Files/EasyPHP1-7/eaccelerator"
    <Directory "C:/Program Files/EasyPHP1-7/eaccelerator">
       Options Indexes FollowSymLinks Includes
       AllowOverride All
       #Order allow,deny
       Allow from all
    </Directory>
    ```

    En remplaçant le chemin de votre dossier d'eAccelerator par le votre.
    Redémarrez apache.

6. Ensuite vous devez mettre un mot de passe pour accéder à eAccelerator. Taper cette url dans votre navigateur [http://localhost/eaccelerator/eaccelerator_password.php](http://localhost/eaccelerator/eaccelerator_password.php) et entrez votre login et pass.

   Mettez ensuite les deux lignes qu'il vous donne à la suite de votre php.ini, enregistrez le tout et redémarrez apache.

Voila eAccelerator est maintenant installé sur votre machine et vous pouvez le contrôler via le pannel d'admin disponible à cette adresse : [http://localhost/eaccelerator/eaccelerator.php](http://localhost/eaccelerator/eaccelerator.php)
Infos tirées en partie du [site officiel](http://eaccelerator.net/HomeFr).
