---
layout: post
title: 'Les déclarations Doctype et les en-têtes Content-type'
date: '2006-03-06 06:10:25'
author: j0k
tags: '[]'
excerpt: "Sur beaucoup de forums pour les développeurs web, une question récurrente est posée par rapport au XHTML.      \nFaut-il l'utiliser ? Est ce utile ?   \n  \nA de telle question, Tommy Olsson a décidé de répondre éclaircir une peu ce point. Les réponses n'étant pas forcément pertinente pour le simple lecteur de ce genre de discutions. Tommy aborde      …"
---

Sur beaucoup de forums pour les développeurs web, une question récurrente est posée par rapport au XHTML.
Faut-il l'utiliser ? Est ce utile ?

A de telle question, Tommy Olsson a décidé de répondre éclaircir une peu ce point. Les réponses n'étant pas forcément pertinente pour le simple lecteur de ce genre de discutions. Tommy aborde principalement le sujet de l'importance de la déclaration d'un doctype comparée à celle de l'en-tête Content-Type.

Le [sujet](http://www.pompage.net/pompe/doctypecontenttype/) est intéressant car en fait tout le monde fait de l'XHTML (du moins de plus en plus de personne) mais personne ne mets le bon Content-type pour que le navigateur décode le site en tant qu'une page XML. Tout simplement car IE ne gère pas l'encodage XML pour les pages web. Et vu que IE est utilisé (encore trop) massivement, on ne peut pas utiliser à bon escient les Doctypes XHTML.
