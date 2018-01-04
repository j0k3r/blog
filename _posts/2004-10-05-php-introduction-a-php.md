---
layout: post
title: 'PHP - Introduction à PHP'
date: '2004-10-05 22:47:08'
author: j0k
tags: '[développement]'
excerpt: 'La première version de PHP fut créée par Rasmus Lerdorf en 1994. Cette version appelée à l''époque Personal Home Pages, était simplement destinée à son usage personnel, a noter que cette version supportait déjà des requêtes SQL (base de données).'
---

## _1. Naissance du PHP_

**PHP** : Hypertext PreProcessor

 La première version de PHP fut créée par Rasmus Lerdorf en 1994. Cette version appelée à l'époque Personal Home Pages, était simplement destinée à son usage personnel, a noter que cette version supportait déjà des requêtes SQL (base de données).
En 1995, PHP 1.0 était en libre téléchargement. A l'heure actuelle plus de 500 000 sites utilisent ce langage très populaire, simple d'approche et surtout très puissant qui est en passe de devenir le standard du futur avec sa version 4 dont la principale innovation et la possibilité d'utiliser les sessions.

##  _2. Principe du PHP_

 Le langage est avant tout un langage de script (scripting). Le code inseré dans les pages HTML, est alors exécuter par le serveur sous réserve que vos pages portent l'extention .php3 (ou encore .php ou .php4).Ce principe est par exemple différent de JavaScript ou les scripts sont exécutés par le navigateur (client), mais il est identique à la technologie ASP de Microsoft.

 Très simple à appréhender car possédant une syntaxe claire et très proche du langage C, le PHP reste une solution qui conviendra aux débutant comme aux professionnels, pour dynamiser un site Web ou l'interfacer avec une Base de données.

##  _3. Positionnement face aux autres langages_

 Le PHP comme vu ci-dessus utilise une syntaxe très simple car elle reste très proche du C, langage maîtrisé par la plupart des développeurs. A l'heure actuelle les "concurrents" de PHP sont :

 - **ASP** : Technologie de Microsoft très similaire, utilisant un langage de script, généralement VBScript (Version allégée de Visual Basic)
 - **PERL** : Langage de script puissant, adapté à Internet mais très difficile à maîtriser
 - **CGI** : Composants exécutables, rapide mais spécifiques à la plate forme-serveur

##  _4. Intégration et syntaxe de PHP_

Avant d'utiliser du PHP, il faut dans un premier temps :

 - S'assurer que votre hébergeur supporte celui-ci. Dans le cas d'un hébergeur dit "gratuit", on notera que par exemple, Multimania, Nexen, Free, ou encore Chez.com supportent le PHP (pas intégralement car certaines fonctions comme mail() ne sont pas activées).
 - Renommer l'extension du document HTML en **.php** ou **.php3** ou **.php4**

Il existe 4 façons d'intégrer du code PHP à l'intérieur de document HTML

  A l'aide des tags <?...?> :

```php
<? echo ("Premier exemple PHP"); ?>
```

  A l'aide des tags <?php...?> :

```php
<?php echo ("Premier exemple PHP"); ?>
```

  A l'aide de délimiteur de type ASP (<% ... %>)

```php
<% echo ("Premier exemple PHP"); %>
```

  A l'aide de la balise <script language="…"></script> :

```php
<script language="PHP">
<!--
echo ("Premier exemple PHP");
//-->
</script>
```

  La syntaxe du PHP comme vu ci-dessus ressemble fortement à celle du langage C. Les instructions sont séparées par des points-virgules. Il est conseillé de mettre une instruction par ligne et "d'aérer son code" le plus possible en mettant des tabulations car la lisibilité d'un script est très importante.
