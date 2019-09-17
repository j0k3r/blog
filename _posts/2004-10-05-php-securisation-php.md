---
redirect_from:
  - /article/php-securisation-php
layout: post
title: 'PHP - Sécurisation PHP'
date: '2004-10-05 23:06:53'
author: j0k
tags: développement
excerpt: 'Trop de webmasters font régulièrement confiance en leur restriction d''accès htaccess... Voici comment outrepasser une sécurisation htaccess soit sans mots de passe soit en récupérant le pass sans aucunes difficultées !'
---

Trop de webmasters font régulièrement confiance en leur restriction d'accès htaccess... Voici comment outrepasser une sécurisation htaccess soit sans mots de passe soit en récupérant le pass sans aucunes difficultées !

## _Les sites concernés_

  Les sites concernés par la faille sont les sites en php comportant des "pseudo-frames", c'est à dire qui ouvre la page dans une partie bien définie du site (comme les frames) à l'aide d'un script qui affichera dans le navigateur quelque chose du genre :

 *www.lesite.com/index.php?page=sommaire.php*

##  _Le fonctionnement des "pseudos-frames"_

```php
if(!isset($page)) {
   include "index2.php";
}
else{
   if(file_exists("page")){
      include "page.php";
   }
}
```

 Pour cet exemple, la page d'accueil sera index2.php puis les autres seront ouvertes sous la forme : *page=lapagesouhaitee.php*. Le navigateur ouvrira alors la page lapagesouhaitee.php dans la partie définie par le webmaster, généralement dans un tableau.

##  _La faille_

  Comme tous les scripts php, l'include peut accéder à tout... sans passer par les restrictions d'accès...

 Admettons un site possédant un forum, un livre d'or, un système de news ou autres protégés par l'htaccess. Il faut d'abord se renseigner sur le serveur pour savoir comment fonctionne son système de restriction d'accès ; c'est généralement le fichier .htaccess qui nous indique où se situe le fichier de mot de passe (généralement .htpasswd). Admettons que le répertoire protégé soit "admin", pour accéder à son fichier htaccess, il suffit alors de logger le fichier dans la partie où aurait du apparaître les pages "normales" du site. Il nous suffit donc de taper :

 *http://www.lesite.com/?page=admin/.htaccess* pour obtenir un résultat du genre :

```apache
AuthUserFile /usr/local/etc/httpd/htdocs/www.lesite.com/repertoiresecret/.htpasswd
AuthGroupFile /dev/null
AuthName ByPassword
AuthType Basic
require valid-user
```

 Récupérez les pass de la même manière :

 *http://www.lesite.com/?page=repertoiresecret/.htpasswd*

 Vous obtiendrez alors un résultat tel que :

 - Root: password
 - Pass: hzvteam

Mais il se peut que le pass soit crypté par exemple password deviendrait 4bV2gKtZ0Whys. C'est un cryptage DES, la seule manière que je connais pour le cracker et le dico ou le brute force. Le plus rapide et le plus efficace est l'incontournable John the ripper que vous pourrez trouver partout sur le net.

 Vous remarquerez donc que cette faille n'est pas à prendre à la légère. Surtout que la prise de contrôle d'un système de news, par exemple, permet d'effacer le site en utilisant la même méthode que sur Hotmail.

##  _Sécurisation_

  Beaucoup de webmasters sécurisent leur site de manière trop faible. La plupart des sites en php utilisant les includes, pour se protéger, utilisent un script ajoutant l'extension .php pour que l'on ne puisse pas accéder au .htpasswd, qui serait alors considéré comme .htpasswd.php. Pour cette très faible sécurisation, le script modifié est :

```php
if(!isset($page)) {
   include "index2.php";
}
else{
   if(file_exists("$page.php")){
      include "$page.php";
   }
}
```

Mais rien ne nous empêche d'aller fouiner dans le dossier protégé sans pass ! Car dans un dossier, quelle est la page que l'on est sûr de trouver ? l'index bien sûr !

Donc on aura à coup sûr :
*http://www.lesite.com/?page=repertoireprotege/index*.
Mais voici comment faire pour que la sécurisation soit complète, c'est à dire que personne ne puisse voir le contenu du dossier protégé.

Lorsque l'on fait afficher l'index du dossier protégé en utilisant la méthode de l'include, la page alors affichée n'est pas affichée dans son répertoire où elle devrait être (c'est à dire dans le répertoire protégé) mais dans le répertoire principal (celui où se trouve la page contenant la "pseudo-frame").

Il faut donc sécuriser la page d'index par un mot de passe. Même très simple car ce n'est pas l'important. Le pirate, même en ayant le mot de passe valide sera redirigé vers une erreur 404 car il ne fait pas parti du répertoire principal :)

J'espère que je me suis bien fait comprendre...

Pour résumer, remplacez le script de pseudo-frame vulnérable par celui présenté dans le chapitre de sécurisation et sécurisez l'index par un système de mot de passe tel que vous pouvez en trouver un peu partout sur le net.
