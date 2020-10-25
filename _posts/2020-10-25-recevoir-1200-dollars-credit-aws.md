---
layout: post
title: 'Comment recevoir 1200$ de crédit par an pour s’amuser sur AWS'
date: '2020-10-25 10:21:34'
author: j0k
tags: aws credit astuce
excerpt: "Si comme moi vous aimez bien mettre vos projets persos sur AWS (parce que c'est quand même plus pratique que d'avoir un serveur dédié à gérer), j'ai une petite astuce pour avoir des 1200$ de crédits AWS par an. Il suffit de créer une Flash Briefing Skill Alexa et le tour est joué !"
---
Au boulot, nous sommes en pleine migration vers le cloud public d’AWS. En vrai, il ne reste que les vieux vieux projets sur le cloud privé.

En jouant beaucoup avec AWS au travail, je découvre plein de nouvelles possibilités, de nouvelles facilitées, de nouvelles manières de travailler, etc. Par exemple, le fait de pouvoir scripter son infra avec du code, c’est vraiment pratique.

A tel point que bien souvent maintenant, j’utilise aussi AWS pour mes projets perso (dans la mesure du possible).

Mais comme tout le monde le sait, (la console) AWS est facile à utiliser et on arrive rapidement à déployer plusieurs services sans vraiment savoir combien cela va coûter à la fin (et on a souvent des surprises).
Il existe évidemment des services pour estimer la facture finale mais je les ai toujours trouvés trop difficiles à paramétrer pour avoir une vraie estimation.

C’est là qu’entre en jeu **une petite astuce pour avoir des crédits AWS** de façon à limiter les coûts. Je parle ici d’un petit plus, pas d’un moyen de faire tourner l’infra complète d’un gros site gratos.

**AWS vous offre 100$ par mois** sans limite de temps pour couvrir les frais que pourrait engendrer une skill Alexa.
Et il existe une façon très simple d’y arriver : créer une [Flash Briefing Skill](https://developer.amazon.com/en-US/docs/alexa/flashbriefing/understand-the-flash-briefing-skill-api.html).

Trois choses sont nécessaires :
- un compte AWS
- une facture supérieure à 0$ sur AWS
- un flux RSS (dont la dernière publication date de moins de 7 jours). _Pour info, un flux ATOM ne fonctionnera pas._

Prenez votre flux RSS et faites-en une skill.

Connectez-vous sur [la console Alexa](https://developer.amazon.com/alexa/console/ask) avec vos identifiants Amazon (mon compte perso Amazon est le même que mon compte AWS) :

1. Cliquez sur le bouton “_Create Skill_”.
2. Choisissez de créer un flash briefing.
3. Votre skill est créée, il faut maintenant renseigner votre flux RSS (Cliquez sur “_Add new feed_”).
4. Puis renseignez tout le formulaire (n’hésitez pas à passer votre souris sur les ? pour savoir quoi mettre).
  {% cloudinary /assets/images/flash-briefing-form.png alt="Flash Briefing formulaire" %}
5. Une fois que vous avez sauvegardé, passer sur l’onglet “_Distribution_” et remplissez le formulaire.
6. Enfin passez sur l’onglet “_Certification_” pour lancer une validation. Corrigez éventuellement les erreurs.
7. Si aucune erreur n’est trouvée, vous pouvez passer sur le sous menu “_Submission_” à gauche.
  {% cloudinary /assets/images/skill-ready-for-submission.png alt="Skill ready to be submitted" %}

La validation par les équipes d’Alexa peut prendre un peu de temps et vous serez sûrement sollicité pour faire des changements dans votre code.

Quand votre skill sera validée, vous pouvez soumettre la demande de crédits [depuis cette page](https://developer.amazon.com/en-US/alexa/alexa-skills-kit/new/aws-promotional-credits#application).

Une fois confirmé, vous recevrez le mois suivant (aux alentours du 15) un mail vous disant que votre compte AWS a été crédité de 100$ parce que votre skill a généré des frais AWS (même si votre skill n’est pas hébergée sur AWS et que les frais générés n’ont rien à voir avec votre skill).

{% cloudinary /assets/images/mail-aws-credit.png alt="Email d'AWS indiquant le gain de crédit" %}

À noter que vous recevrez aussi 100$ de plus la première fois.

**Ce qui fait 1200$ de crédit par an dont 1300$ la première année. Ça vous laisse de quoi jouer tranquille !**

Par exemple, ce que j’utilise actuellement pour mes projets persos ne me coûte rien :
- Plusieurs domaines dans Route 53 (parce que c’est quand même chiant de gérer bind à la main)
- Quelques EC2 nano / small
- Beaucoup de lambdas
- Quelques tables DynamoDB
- Un RDS MySQL
- Quelques buckets S3 pour des backups
