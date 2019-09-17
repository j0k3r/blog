---
layout: post
title: 'Conception d''un client de messagerie IMAP - 1ère partie'
date: '2005-05-10 07:36:47'
author: j0k
tags: blabla
excerpt: "Beaucoup de codeur utilise la fonction mail() pour passer outre un hébergeur et ainsi automatiser des scripts d'envoi de mail (notamment les spammeurs ...).   Mais très peu se penche de l'autre côté du miroir, du côté où l'on réceptionne les mails."
---

Beaucoup de codeur utilise la fonction mail() pour passer outre un hébergeur et ainsi automatiser des scripts d'envoi de mail (notamment les spammeurs ...).   Mais très peu se penche de l'autre côté du miroir, du côté où l'on réceptionne les mails.

Grâce à ses fonctions IMAP (*Pour Internet Message Access Protocol : Nouveau protocole de messagerie pour relever son courrier tout en laissant une copie du message sur le serveur*), PHP peut ainsi consulter et récupérer les mails d'un boite aux lettres.

Dans cette exemple proposé par le [JDN](http://developpeur.journaldunet.com/tutoriel/php/050503-php-email-imap-lecteur-1a.shtml), le client récupérera les mails dans un premier temps.

Dans la deuxième partie (qui est à venir), le client pourra permettre de répondre via SMTP.   Une bonne approche pour se faire un client mail par la suite ^^
