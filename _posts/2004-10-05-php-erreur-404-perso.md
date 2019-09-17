---
layout: post
title: 'PHP - Erreur 404 perso'
date: '2004-10-05 23:19:01'
author: j0k
tags: développement
excerpt: "Ce script permet au visiteur d'un site de soumettre au webmaster une erreur 404 losque celui ci en rencontre une. Pour information, une erreur 404 se produit lorsqu'une page est demandée mais n'existe plus ou a changé de nom.  \nEn général, le serveur affiche un message d'erreur banal. Voici comment le personnaliser."
---

## _1. Présentation_

Ce script permet au visiteur d'un site de soumettre au webmaster une erreur 404 losque celui ci en rencontre une. Pour information, une erreur 404 se produit lorsqu'une page est demandée mais n'existe plus ou a changé de nom. En général, le serveur affiche un message d'erreur banal. Voici comment le personnaliser.

##  _2.  Redirection de l'erreur_

 Tout d'abord, il faut intercepter l'erreur afin de rediriger le visiteur vers une page prévue pour lui indiquer qu'une erreur s'est produite et qu'il peut en informer le webmaster. Cette redirecton se fait en plaçant, à la racine du serveur, le fichier _.htaccess_ contenant la ligne suivante :

```apache
ErrorDocument 404 /erreurs/error404.php
```

  En admettant içi que votre script permettant de soumettre l'erreur se trouve dans le répertoire erreurs et se nomme **error404.php**.

##  _3. Script permettant de soumettre l'erreur_

 Ce script affiche tout d'abord une page d'erreur personnalisée et propose au visiteur de soumettre le bug au webmaster en cliquant sur un bouton. Ce bouton rappelle la page en lui indiquant que l'envoi du rapport de bug est parti et envoi un mail préformaté au webmaster.

```php
<div style="width: 300px; margin: 0 auto; padding-top: 50px">
<?
if(!$_POST)
{
        echo '<strong>ERREUR 404</strong> Fichier non trouvé - Le document demandé n\'existe pas<br />';
        echo '<br />';
        echo '<br />';
        echo 'Vous pouvez soumettre le rapport d\'incident au <br />Webmaster en cliquant sur le bouton ci-dessous. Merci.<br />';
        echo '<form name="rapport" action="?" method="post">';
        echo '<input type="hidden" name="referant" value="'.$_SERVER['HTTP_REFERER'].'" />';
        echo '<input type="hidden" name="request" value="'.$_SERVER['REQUEST_URL'].'" />';
        echo '<input type="submit" value="Soumettre le BUG" />';
        echo '</form>';
}
else
{
        mail("destination@site.com","BUG","REFERANT : ".$_POST['referant']." URL DEMANDEE : ".$_POST['request']);
        echo '<strong>Rapport de BUG envoyé... </strong>Ce lien sera rapidement corrigé. Merci.';
}
?>
<br />
<a href="http://www.votresite.com/index.html">Retour en page d'accueil</a>
</div>
```
