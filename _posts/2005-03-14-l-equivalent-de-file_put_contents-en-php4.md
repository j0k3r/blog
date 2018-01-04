---
layout: post
title: 'L''équivalent de file_put_contents en php4'
date: '2005-03-14 07:51:47'
author: j0k
tags: '[]'
excerpt: "Le [journadunet](http://developpeur.journaldunet.com/tutoriel/php/050315-php-remplacer-file-put-contents.shtml) publie une réponse à une question souvent posée : \"Quel est l'équivalent PHP4 de la fonction PHP5 file_put_contents() ?\".     \nCette fonctione permet d'écrire une chaîne dans un fichier. Elle permets ainsi d'éviter de passer par fopen() avec le      …"
---

Le [journadunet](http://developpeur.journaldunet.com/tutoriel/php/050315-php-remplacer-file-put-contents.shtml) publie une réponse à une question souvent posée : "Quel est l'équivalent PHP4 de la fonction PHP5 file_put_contents() ?".
Cette fonctione permet d'écrire une chaîne dans un fichier. Elle permets ainsi d'éviter de passer par fopen() avec le paramètre filename, flags et, éventuellement, context, par fwrite() avec les données data, et par fclose().

C'est une fonction très pratique mais disponible seulement sous php5. Alors que sa soeur file_get_contents est disponible depuis quelques temps sous php4.

Bonne lecture :)
