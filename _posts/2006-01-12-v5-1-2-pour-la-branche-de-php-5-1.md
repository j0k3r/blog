---
layout: post
title: 'v5.1.2 pour la branche de PHP 5.1'
date: '2006-01-12 11:30:46'
author: j0k
tags: '[]'
excerpt: "PHP 5.1.2 a été publié aujourd'hui par l'équipe de développement PHP. Cette version apporte des corrections de buGs mais aussi et surtout trois corrections de failles. Le changelog à la sauce nexen :     \nLes points de sécurité importants sont :  \n  \n* L'injection de réponse HTTP a été bloqué dans l'extension de session, et avec la fonction      …"
---

PHP 5.1.2 a été publié aujourd'hui par l'équipe de développement PHP. Cette version apporte des corrections de buGs mais aussi et surtout trois corrections de failles. Le changelog à la sauce nexen :
Les points de sécurité importants sont :

* L'injection de réponse HTTP a été bloqué dans l'extension de session, et avec la fonction header(). Header() ne peut plus être utilisé pour envoyer plusieurs entêtes de réponses en un seul appel.
* Vulnérabilité de format de chaîne dans ext/mysqli.
* Possibilité de XSS dans certaines conditions d'erreurs.

Les améliorations de fonctionnalités sont :

* L'extension Hash a été ajouté au noyau PHP, et est activée par défaut. Cette extension fournit le support des algorithmes de hashage les plus courants, sans dépendance externe.
* XMLWriter a été ajouté à la distribution standard, et activé par  défaut.
* Nouvelle extension OCI8, qui inclut de nombreuses corrections.
* Support de la compression PNG pour GD.
* Ajout de l'option de configuration --enable-gcov pour activer l'interface de couverture du code C.
* getNamespaces() et getDocNamespaces() ont été ajoutée à SimpleXML.

Cette version contient plus de 85 corrections de buGs mineurs, dont :

* Correction de nombreuses régressions de strtotime().
* Correction de plusieurs crash et fuites de mémoire découverts dans imap, pdo, gd, mysqli, mcrypt et soap.
* Correction des problèmes de virtual() avec SSI sur Apache 2.
* Ajout de corrections pour les extensions iconv et sybase_ct.
* Correction des fonctions sunrise et sunset.
* Les bibliothèques SQLite ont été mises à niveau : 2.8.17 et 3.2.8.
* Les exécutables Win32 incluent maintenant libxml2-2.6.22 et  libxslt-1.1.15.

Direction le site de PHP pour le [téléchargement](http://www.php.net/downloads.php#v5).
