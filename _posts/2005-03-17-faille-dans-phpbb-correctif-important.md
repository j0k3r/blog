---
layout: post
title: 'Faille dans phpBB, correctif important !!'
date: '2005-03-17 06:52:02'
author: j0k
tags: '[]'
excerpt: "Ces derniers jours, le forum phpBB-fr a été victime d'un pirate ayant utilisé une nouvelle faille de phpBB 2.0.13.     \nEn attendant que le phpBB Group publie un correctif pour cette nouvelle faille de sécurité, nous conseillons à tous les possesseurs de forum phpBB d'appliquer le correctif suivant :   )"
---

Ces derniers jours, le forum phpBB-fr a été victime d'un pirate ayant utilisé une nouvelle faille de phpBB 2.0.13.
En attendant que le phpBB Group publie un correctif pour cette nouvelle faille de sécurité, nous conseillons à tous les possesseurs de forum phpBB d'appliquer le correctif suivant :      includes/sessions.php

```php
$userdata['user_id'] = ANONYMOUS;
$userdata['user_level'] = USER;
$userdata['user_id'] = ANONYMOUS;
$userdata['user_level'] = USER;
```

Merci à "Some One" pour le correctif.   Vous devez bien entendu posséder la version 2.0.13 de phpBB avant d'appliquer ce correctif.   *(Infos tirés du mail de l'équipe phpBB-fr)*
