---
layout: post
title: 'Des explications par rapport à phpBB 2.0.15'
date: '2005-05-25 10:08:53'
author: j0k
tags: blabla
excerpt: 'Selon les dires du post de [Graham](http://www.phpbb.com/phpBB/viewtopic.php?f=14&amp;t=292017), étant modérateur de la team phpBB, certaines personnes aurait eut des réticences quand à passer à php 2.0.15 ou tout simplement quelques problèmes, il souhaite mettre au clair ce qu''apporte vraiment cette nouvelle version.   )   Le plus gros changement dans      ...'
---

Selon les dires du post de [Graham](http://www.phpbb.com/phpBB/viewtopic.php?f=14&amp;t=292017), étant modérateur de la team phpBB, certaines personnes aurait eut des réticences quand à passer à php 2.0.15 ou tout simplement quelques problèmes, il souhaite mettre au clair ce qu'apporte vraiment cette nouvelle version.      Le plus gros changement dans cette version est la ré-authentification pour accéder au panel d'administration. C'est une fonctionnalité d'Olympus (phpBB 3.0.0) qui a été mis en place (tout comme le cryptogramme visuel lors de l'inscription) pour accroître la protection de votre forum contre certains problèmes qu'il y avait dans les versions précédentes. Pour résumer, lorsque vous êtes loggé en administrateur, vous pouvez faire ce que vous voulez ... du coup si quelqu'un visite le forum sous votre identité, *peut être parce que vous vous êtes connecté d'un cybercafé, ou d'un PC public ou peut être aussi parce que la personne a réussi à truquer un cookie pour ce faire passer pour vous*, il pourra tout faire. Tandis qu'avec ce système, il doit connaître votre mot de passe pour accéder au panel.

Il rappelle aussi qu'il faut à chaque nouvelle upgrade, exécuté le fichier *update_to_latest.php* qui permet entre autre de changer le numéro de version de votre forum mais aussi d'ajouter des modifications dans la base de donnée, ce qui n'est pas du tout négligeable !   C'est aussi important que de mettre à jour les fichiers.
