---
layout: post
title: 'PHPExcel, une classe pour générer des fichiers Excel2007'
date: '2007-02-24 02:46:27'
author: j0k
tags: excel php
excerpt: "Dans une application web, le client demande très souvent de pouvoir exporter ces données au format Excel de façon à pour faire un traitement derrière (de statistiques ou autre).     \nGénéralement, on utilise le format csv, qui est extrêmement facile à mettre en place puisque très proche d'une fichier texte basique.   Mais cela pose des fois des soucis au      …"
---

Dans une application web, le client demande très souvent de pouvoir exporter ces données au format Excel de façon à pour faire un traitement derrière (de statistiques ou autre).
Généralement, on utilise le format csv, qui est extrêmement facile à mettre en place puisque très proche d'une fichier texte basique.   Mais cela pose des fois des soucis au niveau du séparateur (";" ou "," ...). Ainsi, on opte alors pour des classes PHP qui génère directement un _vrai_ fichier Excel.   Personnellement, j'utilise [BiffBase](http://developer.blueshoes.org/phpdocu/blueshoes_framework/packageless/BiffBase.html) qui est très simple à comprendre.

Le format du fichier ayant apparemment changé dans la version 2007 d'Excel, PHPExcel vous permet de générer un fichier compatible avec Excel 2007. Il vous permet de mettre des méta-données comme l'auteur, le titre, la description, d'insérer des images, de changer la police ... tout ce qu'il faut quoi !

La [version 1.0 est sortie](http://www.codeplex.com/PHPExcel) cette semaine.
