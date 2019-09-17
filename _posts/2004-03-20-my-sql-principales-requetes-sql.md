---
layout: post
title: 'MySQL - Principales requêtes SQL'
date: '2004-03-20 14:59:06'
author: j0k
tags: développement
excerpt: 'Voici des exemples concrets pour vous montrez les principales requêtes SQL.'
---

Voici des exemples concrets pour vous montrez les principales requêtes SQL.

## **Affichage des tables d'une base de donnée :**

```sql
SHOW TABLES;
```

##  **Affichage de la structure d'une table (Utilisateur) :**

```sql
EXPLAIN Utilisateur;
```

##  **Création d'une table :**

```sql
CREATE TABLE Utilisateur (
     UserID   bigint(20)  NOT NULL AUTO_INCREMENT,
     nom   varchar(40)  NOT NULL defaut' ',
     prenom   varchar(40)  NOT NULL defaut' ',
     fonction   varchar(20)  defaut' ',
     PRIMARY KEY (UserID);
);
```

##  **Insertion de données dans une table :**

```sql
INSERT INTO Utilisateur
VALUES (
     '',
     'Dupond',
     'Roger',
     'technicien',
);
```

##  **Affichage des données stockées dans une table :**

```sql
SELECT nom,prenom
FROM Utilisateur
WHERE (fonction = 'technicien')
ORDER BY Nom;
```

##  **Ajouter un champ à une table :**

```sql
ALTER TABLE Utilisateur
ADD birth date NOT NULL;
```

##  **Modifier le type d'un champ d'une table :**

```sql
ALTER TABLE Utilisateur
ADD prenom varchar(50) NOT NULL defaut 'toto';
```

##  **Supprimer un champ d'une table :**

```sql
ALTER TABLE Utilisateur
ADD birth;
```
