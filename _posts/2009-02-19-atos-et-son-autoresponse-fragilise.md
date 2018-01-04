---
layout: post
title: 'Atos et son autoresponse fragilisé ...'
date: '2009-02-19 02:17:27'
author: j0k
tags: '[atos,autoreponse,ecommerce]'
excerpt: "En début de semaine, j'ai passé en production le nouveau et premier site e-commerce de [Natalys](http://www.natalys.com). Un passage en production facilité par toutes les étapes qui l'ont précédé : le dev, la préprod et la prod \"cachée\".     \nNous avons eu la joie d'avoir les premières commandes passées hier dans la journée. Je pense qu'on est      …"
---

En début de semaine, j'ai passé en production le nouveau et premier site e-commerce de [Natalys](http://www.natalys.com). Un passage en production facilité par toutes les étapes qui l'ont précédé : le dev, la préprod et la prod "cachée".
Nous avons eu la joie d'avoir les premières commandes passées hier dans la journée. Je pense qu'on est tous pareil, quand on sort un site sur lequel on travaille depuis des mois, on suit ses moindres balbutiements à la loupe : le nombre de personnes présentes sur le site, d'où elles viennent, le nombre d'inscrit, les premières commandes, etc ...   Le problème c'est que pour ces commandes, le traitement ne s'est pas fait de bout en bout ... ! Alors que bien évidemment, les vraies fausses commandes effectuées juste avant la mise en production, on parfaitement bien fonctionner.

Après investigation, il s'avère que l'autoréponse de la banque a échoué : je ne l'ai jamais reçu ni vu arriver sur le serveur (et au niveau du rapport envoyé au client, elle indique "failed").   Pour rappel, lorsqu'un internaute valide son paiement sur le site de la banque (que le paiement soit accepté ou refusé), la banque envoie une réponse depuis leur serveur (invisible pour l'internaute) vers le notre en passant en paramètre toutes les informations sur le paiement.   En recevant cette autoréponse, généralement, on traite la commande en changeant son statut, on notifie le client sur l'état de sa commande et on fait diverse autres traitements ... Hors, si nous ne recevons pas cette autoréponse, ces tâches ne sont pas effectuées !

Après avoir vérifié qu'il n'y avait eu aucun changement sur les firewalls du serveur, j'ai passé un coup de fil au mec d'Atos pour savoir pourquoi l'autoréponse avait échoué. Impossible de le savoir réellement, uniquement une réponse floue "elle a échouée". Après discussion, il m'avoue que **l'autoréponse est "fragilisé"** (rassurant ...), qu'il ne faut surtout pas se baser sur elle pour faire des traitements de notre côté et qu'il se peut qu'elle foire de temps en temps ... (et [je ne suis pas le seul](http://twitter.com/krachot/status/1226216830) à avoir cette réponse apparemment).

Je tombe de haut : j'étais persuadé que l'autoréponse était justement plus sécurisé et plus sûr que l'action de l'utilisateur. Du fait qu'elle soit automatiquement envoyée par le serveur de la banque, de façon cachée, cela nous permet de récupérer les informations sur le paiement de façon sûre et systématique. Mais en fait ... non!

Finalement, j'ai placé tout le traitement qui été effectué dans l'autoréponse au niveau de la réponse qu'actionne l'utilisateur. Il faut du coup mettre un peu plus de règle de gestion pour éviter que le traitement soit fait plusieurs fois etc .. mais au moins cela fonctionne tout le temps !!

A noter que le système de paiement utilisé sur [Natalys](http://www.natalys.com) est paramétré pour rediriger le client sur le site juste après avoir saisi ces données bancaires. Il n'y a pas de page de confirmation de la banque. Je précise ce point, car bien souvent, cette page de confirmation est affichée et l'internaute ferme son navigateur à ce moment là ... et vous, si l'autoréponse n'a pas fonctionnait, vous ne recevrez jamais les informations du paiement ...

La question logique que je me pose ...   Comment peut-on anticiper le vautrage de l'autoréponse si on utilise cette page de confirmation sur la banque ?
