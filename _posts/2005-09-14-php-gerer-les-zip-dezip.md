---
layout: post
title: 'PHP - Gérer les zip/dézip'
date: '2005-09-14 22:07:28'
author: j0k
tags: développement
excerpt: 'Il est parfois utile de pouvoir dézipper un fichier via un script, notamment pour faciliter l''auto-installation d''un script (phpBB, dotclear ...) sur un serveur. Le fonctionnement est simple, il faut juste trouver les outils et le savoir pour le faire :)'
---

Il est parfois utile de pouvoir dézipper un fichier via un script, notamment pour faciliter l'auto-installation d'un script (phpBB, dotclear ...) sur un serveur. Le fonctionnement est simple, il faut juste trouver les outils et le savoir pour le faire :)

1. Pour utiliser et manipuler le format zip, il y a deux possibilités : soit on utilise les fonctions natives de PHP, soit on se sert d'une classe en PHP. Dans le cas des fonctions natives de PHP, il faut savoir que tous les hébergeurs ne possèdent pas l'extension au niveau de PHP pour avoir accès aux fonctions.

   De plus, pour que cela fonctionne sous Windows, il faudrai recompiler PHP en spécifiant l'utilisation des fonctions zip en paramètres (trop galère !). Du coup, naturellement, il est plus facile de choisir la classe PHP qui ne nécessite pas les fonctions zip natives de PHP.

2. Il faut récupérer la classe PHP PclZip disponible sur le site de [PHPCoder](http://www.phpconcept.net/pclzip/index.php#download). Son installation est plus que simple, puisque cette classe est représenté sous un seul fichier (de 220Ko quand même !).

3. Son utilisation est simple aussi, du moins dans le sens dans laquelle on va s'en servir. Dans un premier temps, on inclut la classe, puis on crée une instance de la classe pour pouvoir l'utiliser. On passe en paramètre notre fichier zip puis on utilise la méthode *extract* pour extraire les fichiers de l'archive. En passant le paramètre *PCLZIP_OPT_PATH, 'dossier'* à la méthode *extract*, cela dézippe le contenu dans le dossier *dossier* au même niveau que le script.

   ```php
   // on inclut la class
   include('pclzip.lib.php');
   // on crée une instance
   $archive = new PclZip('test.zip');
   // on dézippe notre archive
   if ($archive->extract(PCLZIP_OPT_PATH, 'dossier') == 0)
   {
     die("Error : ".$archive->errorInfo(true));
   }
  ```

   Voila ce que l'on obtient une fois le script exécuté.

   Le contenu de l'archive se trouve maintenant dans le dossier *dossier*.

4. Maintenant pour automatiser tout cela, je ne peux que vous laisser le faire puisque cela peut changer d'une personne à l'autre :)

   Il faut mettre des variables dans tout cela (comme le dossier, le fichier à dézipper...).
   Il faut ensuite modifier les fichiers de configurations de l'application que vous avez installé via les fonctions de lecture/écriture de PHP.

Pour une installation automatique, je vous recommande tout de même de bien agencé vos archives de façon à ce qu'une fois l'archive soit dézippé, vous n'ayez pas besoin de faire des déplacements de fichiers.

Si vous avez des problèmes avec ce script, ou des commentaires, le [forum](http://www.j0k3r.net/forum/) est là pour vous ;)

Infos tirés en partie du [manuel de PclZip](http://www.phpconcept.net/pclzip/man/en/index.php)
