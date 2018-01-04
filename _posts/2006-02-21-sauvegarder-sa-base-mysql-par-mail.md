---
layout: post
title: 'Sauvegarder sa base MySQL par mail'
date: '2006-02-21 08:46:01'
author: j0k
tags: '[]'
excerpt: 'Il est primordial pour son site d''effectuer des sauvegardes (backups) de sa base de donnée mais aussi de ces fichiers quasi quotidiennement. Ainsi si votre hébergeur vous fait défaut, vous perdez uniquement les données de la journée. Certes certains hébergeurs offrent la possibilité de faire des sauvegardes automatiques à partir de certaines offres (c''est le cas de mon      ...'
---

Il est primordial pour son site d'effectuer des sauvegardes (backups) de sa base de donnée mais aussi de ces fichiers quasi quotidiennement. Ainsi si votre hébergeur vous fait défaut, vous perdez uniquement les données de la journée. Certes certains hébergeurs offrent la possibilité de faire des sauvegardes automatiques à partir de certaines offres (c'est le cas de mon hébergeur).
Une façon simple de faire des backups sans empiéter sur son hébergement est de s'envoyer les backups par mail. Voici un [script](http://www.sematopia.com/?61=p) qui vous permet d'exporter votre base, de la stocker dans une archive et d'envoyer le tout par mail. Il suffit de le coupler à cron pour avoir un envoyer journalier (ou de bidouiller un script PHP pour ceux qui n'ont pas accès à cron) et le tour est joué.

Cependant, selon la taille de votre base, le mail risque d'être rejeté par votre serveur mail (pour pièces jointes trop importante). Dans ce cas, il faudrait scinder l'archive en plusieurs parties de x octets et envoyer plusieurs mails ... mais c'est tout de suite moins facile :)

Via [nexen](http://www.nexen.net/actualites/tutorial/sauvegarde_mysql_via_email_et_php.php).
