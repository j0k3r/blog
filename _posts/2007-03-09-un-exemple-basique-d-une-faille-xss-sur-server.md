---
layout: post
title: 'Un exemple basique d''une faille XSS sur `$_SERVER`'
date: '2007-03-09 10:02:01'
author: j0k
tags: '[php,security,xss]'
excerpt: "Les failles XSS sont les failles qui sont le plus à redouter en ce moment.     \nL'exécution de code JavaScript par injection chez le client permet notamment de récupérer de précieux cookie et autre.   L'exemple ici peut être assez courant si le développeur n'est pas assez attentionné sur le code qu'il produit.  \n  \nLa technique s'applique sur      …"
---

Les failles XSS sont les failles qui sont le plus à redouter en ce moment.
L'exécution de code JavaScript par injection chez le client permet notamment de récupérer de précieux cookie et autre.   L'exemple ici peut être assez courant si le développeur n'est pas assez attentionné sur le code qu'il produit.

La technique s'applique sur la superglobale PHP : `$_SERVER` et notamment sur la valeur de `$_SERVER['PHP_SELF']` (qui renvoie le nom du script exécuté) qui est très souvent utilisé dans les formulaires.

[Julien Pauli vous explique](http://blog.developpez.com/index.php?blog=126&title=server_php_self_et_xss&more=1&c=1&tb=1&pb=1) comment exploiter la faille et évidemment comment vous en protéger.
