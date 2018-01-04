---
layout: post
title: 'Sécurisé un serveur MySQL sous Windows'
date: '2005-02-01 12:18:15'
author: j0k
tags: '[]'
excerpt: "On a vu passer *Forbot* qui cherchait les serveurs MySQL mal configurés sous Windows pour transmettre des données sensibles sur le serveur lui même. *Forbot* n'est pas vraiment un vers à proprement dit, puisque une fois la communication entre lui et ses controleurs coupé, sa diffusion été stoppé.     \nIl est important de rappeler que Forbot n'a exploité aucunes      …"
---

On a vu passer *Forbot* qui cherchait les serveurs MySQL mal configurés sous Windows pour transmettre des données sensibles sur le serveur lui même. *Forbot* n'est pas vraiment un vers à proprement dit, puisque une fois la communication entre lui et ses controleurs coupé, sa diffusion été stoppé.

Il est important de rappeler que Forbot n'a exploité aucunes faiblesses ou vulnérabilité de MySQL. Forbot a agit en exploitant les installations mal configurées de MySQL qui avaient été installées sans mot de passe ou avec un mot de passe trop simple. Quelques exemples des mots de passe que Forbot a essayé d'employer pour accéder au compte de racine de MySQL sont abcd1234 et 654321 (cf la [liste complète](http://www3.ca.com/securityadvisor/virusinfo/virus.aspx?id=41547) des pass qu'il a essayé).

[Cet article](http://www.vbmysql.com/articles/security/securing_mysql_windows.html) décrit comment installé correctement un serveur MySQL sous Windows en le sécurisant un maximum. Les étapes principales comportent la céation de comptes utilisateur par défaut, la limitation de l'accès externe, et l'utilisation de mots de passe forts (dur à trouver en gros).
