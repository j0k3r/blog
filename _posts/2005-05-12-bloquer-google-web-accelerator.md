---
layout: post
title: 'Bloquer Google Web Accelerator'
date: '2005-05-12 01:10:48'
author: j0k
tags: blabla
excerpt: "Vous avez certainement entendu parler de Google Web Accelerator et pourquoi il pose des problèmes avec quelques sites dues à son prefetching.     \nEt bien [PHP Magazine](http://www.php-mag.net/itr/news/psecom,id,21649,nodeid,113.html) recense une solution facile pour empêcher le prefetching sur votre site à l'aide du mod_rewrite d'Apache.   Les      …"
---

Vous avez certainement entendu parler de Google Web Accelerator et pourquoi il pose des problèmes avec quelques sites dues à son prefetching.
Et bien [PHP Magazine](http://www.php-mag.net/itr/news/psecom,id,21649,nodeid,113.html) recense une solution facile pour empêcher le prefetching sur votre site à l'aide du mod_rewrite d'Apache.   Les lignes qui suivent envoient tout simplement un "401 Access Denied" quand le le header "x-moz: prefetch" est présent dans la requête (en gros quand du prefetching est détecté).

```apache
RewriteCond %{HTTP:x-moz} ^prefetch
RewriteRule ^/*admin/.* * [F,L]
```

Ils ne sont pas sûr que se soit la meilleure solution puisque lors du clic du visiteur, GWA cherchera à retrouver la page ... mais Google dit que c'est la solution la plus recommandé.
