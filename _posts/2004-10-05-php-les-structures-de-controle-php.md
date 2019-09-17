---
redirect_from:
  - /article/php-les-structures-de-controle-php
layout: post
title: 'PHP - Les structures de contrôle PHP'
date: '2004-10-05 22:54:41'
author: j0k
tags: développement
excerpt: 'Ces instructions sont à la base de tout langage de programmation car elles permettent d''effectuer des tests et des boucles indispensables au traitement des données.'
---

## _1. Introduction_

Ces instructions sont à la base de tout langage de programmation car elles permettent d'effectuer des tests et des boucles indispensables au traitement des données.

##  _2. if / else / elseif_

 Permet d'effectuer un traitement si une condition est remplie.

  **Exemple**

```php
if ($valeur==1)
{
   echo "1";
}
```

  On peut aussi effectuer un traitement si la condition n'est pas remplie.

  **Exemple**

```php
if ($valeur==1)
{
   echo "1";
}
else
{
   echo "0";
}
```

  Mais si la condition n'a pas que deux cas possibles, on peut ajouter un autre test.

  **Exemple**

```php
if ($valeur==1)
{
   echo "1";
}
elseif ($valeur==2)
{
   echo "2";
}
else
{
   echo "0";
}
```

##   _3. while / do...while_

 Effectue un traitement tant qu'une condition n'est pas remplie. **while** et **do...while** se distinguent par le fait que lors d'un **do...while**, le traitement est toujours effectué une fois même si la condition est remplie.

  **Exemple**

```php
$valeur=0;
while ($valeur<10)
{
   echo $valeur;
   $valeur++;
}

$valeur=0;
do
{
   echo $valeur;
   $valeur++;
}while ($valeur<10);
```

##  _4. for_

 Tout comme l'instruction **while**, **for** effectue un traitement tant qu'une condition n'est pas remplie. Mais elle intègre le paramétrage de la boucle. C'est-à-dire que l'instruction permet de définir l'initialisation des variables, la condition de fin de boucle et le traitement effectué à chaque itération.

  **Exemple**

```php
for ($cpt=0;$cpt<10;$cpt++)
{
   echo $cpt;
}
```

##  _5. switch_

 Cette instruction remplace une suite de tests **if** et permet de comparer une variable avec plusieurs valeurs possibles et d'effectuer un traitement en conséquence.

  **Exemple**

```php
switch ($valeur)
{
   case 1:
      echo "La valeur est 1";
   break;
   case 2:
      echo "La valeur est 2";
   break;
   case 3:
      echo "La valeur est 3";
   break;
}
```

##  _6. break_

 Cette instruction permet de forcer la sortie d'une boucle avant que la condition de sortie ne soit remplie. Utilisée surtout dans le **switch** elle permet de quitter le test lorsque la valeur est trouvée.
