---
redirect_from:
  - /article/html-multimedia-audio
layout: post
title: 'HTML - Multimedia - Audio'
date: '2003-03-09 19:50:38'
author: j0k
tags: développement
excerpt: 'Voici un tableau récapitulant les différents formats, leurs origines ainsi que les logiciels permettant de les lire.'
---

## **Les différents formats audio**

Voici un tableau récapitulant les différents formats, leurs origines ainsi que les logiciels permettant de les lire.

 - **.aiff ou .aif** (*Format son du Macintosh*) -> W.Media.Player
 - **.au** (*Format son de SUN / NEXT (UNIX)*) -> W.Media.Player
 - **.iff** (*Format son de l'Amiga*) -> W.Media.Player
 - **.m3u** (*Liste fichiers sons*) -> Winamp
 - **.mid **ou **.midi** (*Musical Instrument Digital Interface*) -> W.Media.Player
 - **.mod** ou **.xml** ou **.s3m** (*Format Musical (Amiga)*) -> Mod Plug-in
 - **.mp3** ou **.mp2** ou **.mpa** (*MPEG Layer 3 - 2 - 1*) -> Winamp - Sonique
 - **.pcm** (*Echantillon sonore*) -> Winamp
 - **.rpm** ou **.ra** ou **.rm** -> (*Format RealAudio (ou RealVideo)*)  RealPlayer
 - **.voc** (*Echantillon sonore*) -> Winamp
 - **.wav** ou **.wave** (*Format son de Windows*) -> W.Media.Player

## **Comment intégrer un son MIDI ou WAV ?**

 L'intégration d'un fichier MIDI ou WAV (valable aussi pour .au ou .aiff) peut s'effectuer de différentes façons :

 - Soit avec la balise `<bgsound>`
 - Soit avec la balise `<a href>`
 - Soit avec la balise `<embed>`

1. **La balise `<bgsound>`** *(Compatible IE, pas compatible Netscape)*
 Cette balise permet d'intégrer un arrière-plan sonore (attention : elle est spécifique à I.Explorer, elle ne fonctionnera pas avec Netscape) et possède plusieurs attributs :
    - **src** : Spécifie l'URL complète (chemin) du fichier à charger
    - **loop** : Spécifie le nombre de fois où le fichier sera joué (si la valeur est -1 le fichier sera joué indéfiniment)

    Exemple :

    ```html
    <bgsound src="dico.mid" loop=2>
    ```

2. **La balise `<a>`**
 Le plus simple pour insérer un son dans une page est d'appeler ce son par un lien hypertexte.
  Exemple :

    ```html
    <a href="divers/exson.wav">Cliquez-ici</a>
    ```

3.  **La balise `<embed>`**(Compatible IE & Netscape)
    La balise permet d'inclure n'importe quel son. Elle fait appel, dans certains cas, à un module externe (plugin). Attention : elle n'est pas compatible avec certains navigateurs (I.Explorer 3.0 par exemple), c'est pour cela que vous pouvez utiliser les balises `<noembed>` et `</noembed>` ( ignoré par les navigateurs qui comprennent la balise `<embed>` ) pour fournir un texte ou une image de remplacement et même la balise `<bgsound>`.

    Voici les attributs de la balise `<embed>` :

      - **align** : aligne la console ou le texte (4 valeurs possibles, right, left, top, bottom).
      - **border** : Largeur de la bordure du cadre (en pixels)
      - **width** : Largeur de la fenêtre qui accueillera la console
      - **height** : Hauteur de la fenêtre qui accueillera la console
      - **pluginspace** : URL de la page Web contenant les informations sur le plug-in (facultatif)
      - **src** : URL complète (chemin) du fichier
      - **autostart** : Spécifie si l'objet multimédia est joué automatiquement (true) ou non (false) (défaut : true)
      - **autoload** : Spécifie si le chargement de l'objet multimédia s'effectue automatiquement (true) ou non (false) (défaut : true)
      - **loop** : Spécifie le nombre de fois où le fichier sera joué (si la valeur est -1 le fichier sera joué indéfiniment)
      - **type** : Indique le type MIME ex: type="audio/mod" (facultatif)
      - **controls** : Indique l'aspect de la console de contrôle
      - **console** : Affiche toute la console (choix par défaut)
      - **smallconsole** : Affiche une console réduite
      - **playbutton** : Affiche seulement le bouton lecture
      - **stopbutton** : Affiche seulement le bouton stop
      - **pausebutton** : Affiche seulement le bouton pause
      - **volumelever** : Affiche seulement le bouton volume
      - **hidden** : Cache le panneau de contrôle
      - **volume** : Volume initial en pourcentage
      - **startime** : Indique le temps de départ par rapport au début du fichier (sous forme mm:ss)
      - **endtime** : Indique le temps de fin par rapport au début du fichier (sous forme mm:ss)

    A noter que quelques attributs sont spécifiques à certains plug-ins.

    Exemple :

    ```html
    <embed src="divers/funky2.mid" width=145 height=45 autostart="false">
    ```

## **Comment intégrer du son au format .MP3 ?**

 L'intégration d'un fichier .MP3 est identique à l'intégration d'un fichier MIDI ou WAV. Attention tout de même à la taille de votre fichier (il ne doit pas être supérieur à 40-60 Ko, sinon proposez-le en téléchargement). Pour encoder un fichier au format MP3, il faut un "encoder". Voilà une petite liste de liens où l'on peut trouver de nombreux utilitaires pour travailler les fichiers .MP3 :

 - [Le site officiel du MP3](http://www.mp3.com/)
 - [Le site officiel du MPEG](http://www.mpeg.org/)
 - [Le player Winamp (Windows)](http://www.winamp.com/)
 - [Le player Macamp (Mac)](http://www.macamp.com/)
 - [AudioActive : un lecteur-encoder MP3](http://www.audioactive.com/)

## **Intégrer du son avec RealAudio**

 L'intégration d'un fichier RealAudio est similaire à un fichier MIDI ou WAV. Par contre, l'attribut embed possède certains attributs particuliers, notamment l'attribut controls, qui possède des valeurs spécifiques :

 - **all** : La fenêtre de contrôle est complète
 - **controlpanel** : Intègre les boutons play, pause, et stop ainsi que le curseur de position
 - **infovolumepane**l : Intègre une fenêtre d'information ainsi que le curseur de volume
 - **infopanel** : N'intègre que la fenêtre d'information
 - **statusbar** : Intègre une barre d'état
 - **playbutton** : Intègre les boutons play et pause
 - **stopbutton** : N'intègre que le bouton stop

L'attribut console=nom permet, si vous avez plusieurs fichiers sur une même page, de les relier par le même nom et donc d'obtenir les mêmes attributs pour controls.

Exemple :

```html
<embed src="divers/exreal.ra" controls="controlpanel" width=200 height=35 autostart="false">
```

## **Principe du streaming**

Le principe du streaming est simple. Il s'agit d'une méthode qui permet d'obtenir un téléchargement fluide : le fichier sonore (ou vidéo) se chargera petit à petit, ce qui sera transparent et non pénalisant pour le visiteur.

  Intégrer un son avec RealPlayer (même principe pour une vidéo), en faisant appel au streaming, se passe en trois étapes :

- Créer le fichier au format RealAudio
- Création du Metafile
- Intégrer le fichier final dans votre page

    1.  **Créer le fichier au format RealAudio**
 Pour créer un fichier RealAudio, vous devez passer par l'utilitaire Real Encoder 3.1(audio seulement) ou Real Encoder 5 (audio et vidéo) disponible gratuitement.
 Cet utilitaire permet de transformer un fichier .wav en .ra, son utilisation est très simple.
    2.  **Création du Metafile**
 Le Metafile est juste un fichier ayant l'extension .ram et contenant une ligne qui appellera votre fichier RealAudio. Exemple : si votre fichier s'appelle audio.ra, qu'il a été transféré par FTP dans un répertoire se nommant son et que l'adresse de votre site est www.music.com :

```html
http://www.music.com/son/audio.ra
```

  La création de ce fichier que l'on nommera meta.ram se fait tout simplement avec un éditeur de texte (le bloc-note par exemple). Attention tout de même aux majuscules et minuscules.
    3.  **Intégrer le fichier final dans votre page**
 Pour relier votre page à ce Metafile, il suffit de créer un lien hypertexte qui appellera celui-ci et lancera RealPlayer.

Exemple si vous avez transféré votre Metafile sur la racine de votre site :

```html
<a href="meta.ram">Du streaming avec RealAudio</a>
```

Note : Il est possible d'opter pour la balise `<embed>` à la place du lien.

## **Intégrer un module avec ModPlug-in**

Comme vu ci-dessus, chaque module externe (plug-in) possèdent ses propres attributs et valeurs. ModPlug-in qui lit des modules musicaux (.mod, .xm, .s3m) ne déroge pas à cette règle. Voici les attributs et valeurs particulières de la balise `<embed>`

- **controls** : Indique l'aspect de l'interface. 2 valeurs sont possibles :
    - **stereo** : Affiche deux spectrogrammes
    - **mono** : Affiche un spectrogramme
- **volume** : Indique le volume (entre 1 et 100 - valeur par défaut : 100)
- **autonext** : Indique, si vous avez intégré plusieurs modules musicaux
- **spcolor** : Indique la couleur du spectrogramme
- **spcolorhi** : Indique la couleur du spectrogramme (valeur haute)
- **bgcolor** : Indique la couleur de la console
- **vucolor** : Indique la couleur du vumètre
- **vucolorhi** : Indique la couleur du vumètre (valeur haute)

Exemple :

```html
<embed type="audio/mod" src="fellow.mod" width=250 height=48 controls="mono" autostart="false" border=0>
```
