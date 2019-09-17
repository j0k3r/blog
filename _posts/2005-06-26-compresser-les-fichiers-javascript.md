---
layout: post
title: 'Compresser les fichiers JavaScript'
date: '2005-06-26 10:40:25'
author: j0k
tags: blabla
excerpt: "John Cox a suivit la méthode qui permettait de [compresser les fichiers CSS](http://www.j0k3r.net/news-compresser-les-fichiers-css-289.html) pour l'appliquer [aux fichiers JavaScript](http://wyome.com/index.php?ptid=10&amp;aid=363&amp;module=articles&amp;func=display).     \nCette méthode utilise la compression Gzip, il faut donc posséder le mod_gzip      …"
---

John Cox a suivit la méthode qui permettait de [compresser les fichiers CSS](http://www.j0k3r.net/news-compresser-les-fichiers-css-289.html) pour l'appliquer [aux fichiers JavaScript](http://wyome.com/index.php?ptid=10&amp;aid=363&amp;module=articles&amp;func=display).
Cette méthode utilise la compression Gzip, il faut donc posséder le mod_gzip sur son serveur. Dans son exemple, les fichiers JavaScript passent de 80k à 16k ! On gagne ainsi beaucoup dans le chargement de la page.   Les tests ont été réalisés sous IE6 et Firefox 1.0.4 et tout deux ont correctement détecté le JavaScript.
