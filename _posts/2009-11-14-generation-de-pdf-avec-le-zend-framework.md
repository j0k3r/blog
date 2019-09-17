---
layout: post
title: 'Génération de PDF avec le Zend Framework'
date: '2009-11-14 23:09:10'
author: j0k
tags: développement
excerpt: "La génération de documents PDF bien formatés avec PHP est une tâche plutôt difficile. Il existe habituellement deux approches principales. Avec suffisamment de temps et de patience, ces deux approches font l'affaire, mais laissent tout de même à désirer. L'approche **HTML vers PDF** qui peut être efficace pour de simple document mais peut s'avérer complexe et avec un rendu moins fidèle sur de gros document. L'approche **programmation** où l'on définit les éléments en se basant sur des coordonnées. Et là par contre, c'est très complexe à mettre en oeuvre. Et il existe une 3è méthode en utilisant LiveDocx !"
---

>**Note**
> Cet article a été écrit par un
> rédacteur invité.

La génération de documents PDF bien formatés avec PHP est une tâche plutôt difficile. Il existe habituellement deux approches principales. Avec suffisamment de temps et de patience, ces deux approches font l'affaire, mais laissent tout de même à désirer :

**L'approche HTML vers PDF**: Cette approche est très employée dans des applications traditionnelles. Dans ce cas, un document est programmé en HTML et converti en PDF en utilisant une des nombreuses librairies Open Source (*domPDF, HTML 2 (F)PDF, HTML_ToPDF, mPDF etc.*). Cependant, le HTML n'est pas un format orienté page (tel le PDF) et donc ce n'est pas possible d'exécuter une conversion fidèle de HTML en PDF. Les caractéristiques typiques de format d'un fichier de traitement de texte, tels que les en-têtes et pieds de page, les veuves et orphelins ou encore la numérotation de pages ne peuvent tout simplement pas être représentés en HTML.

**L'approche programmation**: Cette approche offre un contrôle total sur le PDF résultant. Cependant, il faut que toutes les coordonnées x et y de chaque ligne de texte, les formes géométriques et les graphiques soient fixés par le code source 2. Non seulement, c'est une solution qui prend énormément de temps, mais elle est également très fragile : à chaque fois que la mise en page d'un document est changée, le programmeur doit retravailler son code source.

## Une approche totalement nouvelle

Cet article présente une troisième approche totalement nouvelle : elle repose sur des modèles qui ont été créés dans un environnement WYSIWYG, tels que Microsoft® Word ou Open Office, puis chargés avec des données dans PHP. Le document résultant peut être enregistré non seulement sous PDF, mais aussi en tant que DOCX, DOC et RTF. Cette approche multiplateforme a été mise en œuvre en utilisant le Zend Framework.

Avant d'arriver à une discussion technique sur les travaux internes de cette nouvelle approche, prenons d'abord un exemple pratique ! Le code PHP5 suivant montre la génération d'un PDF dans lequel les champs *software*, *licensee* et *company* sont remplis avec des données scalaires dans le modèle [template.docx][1] [46.7 KB]. Le document résultant [document.pdf][2] [104.7 KB] est créé et enregistré sur le disque.

```php
$phpLiveDocx = new Zend_Service_LiveDocx_MailMerge(
    array (
        'username' => 'yourUsername',
        'password' => 'yourPassword'
    )
);

$phpLiveDocx->setLocalTemplate('template.docx');

$phpLiveDocx->assign('software', 'Magic Graphical Compression Suite v1.9');
$phpLiveDocx->assign('licensee', 'Henry Smith');
$phpLiveDocx->assign('company',  'Megasoft Co-operation');

$phpLiveDocx->createDocument();

$document = $phpLiveDocx->retrieveDocument('pdf');

file_put_contents('document.pdf', $document);

unset($phpLiveDocx);
```

Le code démontré dans cet article sera livré avec [Zend Framework 1.10][3] lorsqu'il sera disponible. Bien qu'à l'heure de la rédaction de cet article il n'y a pas encore de date officiel de sortie, le lancement de 1.10 est attendu pour fin 2009. En attendant, vous pouvez faire un checkout des composants du répertoire Subversion [Standard Incubator][4].

## Présentation de LiveDocx

[LiveDocx][5] est un service [SOAP][6] pour la génération de document basé sur les composants de traitement de texte [TX Text Control .NET][7]. Il permet de remplir des modèles de traitement de texte avec des données dans tous les langages de programmation supportant SOAP. Le document résultant peut être enregistré sous tout format supporté. Toutefois, cet article se concentre sur l'utilisation de LiveDocx dans PHP5.

Les composants de l'implémentation du Zend Framework dans LiveDocx sont situés dans le fichier standard de distribution `/Zend/Service/LiveDocx/`. C'est possible d'utiliser LiveDocx directement avec le [SoapClient][8] de PHP5, sans le Zend Framework, ainsi qu'avec la librairie tierce partie [NuSOAP][9]. L'approche NuSOAP permet d'utiliser LiveDocx aussi dans PHP4. Cependant, cet article est centré sur les composants officiels du Zend Framework dans PHP5.

## Modèles et documents

Tout au long de cet article, nous nous référons aux termes *modèle* et *document*. C'est important de comprendre la différence entre les deux.

**Modèles**: le terme *modèle* renvoie au fichier d'entrée contenant les champs de données et de texte. Les modèles peuvent être un des formats de fichier suivants:

  - DOCX - Format Office Open XML
  - DOC - Format Microsoft® Word DOC
  - RTF - Format Rich Text
  - TXD - Format TX Text Control®

Les modèles peuvent être sauvegardés soit *localement* sur l'ordinateur du client (celui à partir duquel la requête SOAP est démarrée) ou à *distance* sur le serveur LiveDocx. Le choix entre ces deux solutions dépend de l'application que vous développez.

Si vous enregistez les modèles localement, vous devez les transférer sur le serveur avec les données à charger à chaque requête. Cette approche est inefficace, si le modèle reste le même à chaque fois. Il est préférable de télécharger le modèle une seule fois sur le serveur LiveDocx, puis de le référencer dans tous les requêtes subséquentes. De cette façon, seules les données qui doivent être chargées sont transférées du client au serveur terminal. La plupart des applications qui utilisent LiveDocx tombent dans cette catégorie.

D'un autre côté, si vous avez un modèle qui change constamment ou une application dans laquelle vous autorisez les utilisateurs à télécharger des modèles, vous devez stocker les modèles localement et les transférer à chaque requête. Cette approche est manifestement plus lente car le modèle et les données sont transférés à chaque requête.

**Documents**: le terme *document* décrit dans le contexte de LiveDocx un fichier généré par le service Web, donc un modèle rempli avec des données. Les documents peuvent être enregistrés sous chacun des formats suivants :

  - DOCX - Format Office Open XML
  - DOC - Format Microsoft® Word DOC
  - HTML - Format XHTML 1.0 Transitional
  - RTF - Format Rich Text
  - PDF - Format Acrobat® Portable Document
  - TXD - Format TX Text Control
  - TXT - Format ANSI Plain Text

Outre les formats de fichier de traitement de texte nommés ci-dessus, les documents peuvent également enregistrés sous les formats de fichiers d'image suivants :

  - BMP - Format Bitmap Image
  - GIF - Format Graphics Interchange
  - JPG - Format Joint Photographic Experts Group
  - PNG - Format Portable Network Graphics
  - TIFF - Format Tagged Image File
  - WMF - Format Windows Meta File

## Utilisation de LiveDocx

Dans ce paragraphe, nous allons étudier toute la procédure de création d'un document en utilisant LiveDocx.

### Création d'un modèle dans Microsoft® Word 2007

Le premier pas dans n'importe quel projet LiveDocx est la création d'un modèle. Pour cela, vous pouvez utiliser soit Open Office ou Microsoft® Word. Dans cet article, nous allons utiliser Microsoft® Word 2007. Si vous préférez employer Open Office, veuillez consulter le [Blog LiveDocx][10].

Démarrez en créant un nouveau fichier dans Microsoft® Word 2007 et enregistrez le fichier modèle sous *template.docx*.
Vous pouvez commencer à concevoir le modèle en insérant du texte, des graphiques et des champs de données avec la boîte de dialogue *Field* affichée ci-après.

![Insert merge field in Microsoft® Word 2007][11]

Au bout d'un moment, vous aurez un modèle qui contient des images, du texte et un certain nombre de champs de données. Ces derniers sont représentés par *{ MERGEFIELD nom }* et seront remplis par des données scalaires dans la prochaine étape. La capture d'écran suivante du modèle dans Microsoft® Word 2007 vous montre de quoi il peut avoir l'air :

![Template in Microsoft® Word 2007][12]

Sauvegardez le modèle [template.docx][13] [46 KB] quand vous avez terminé.

### Charger les modèles avec des données

Maintenant que vous avez le fichier modèle, vous devez le charger avec des données. Dans l'exemple suivant, nous allons attribuer des types de données scalaires, dans ce cas des chaînes de caractères, au modèle.

```php
$phpLiveDocx = new Zend_Service_LiveDocx_MailMerge(
    array (
        'username' => 'yourUsername',
        'password' => 'yourPassword'
    )
);

$phpLiveDocx->setLocalTemplate('template.docx');

$phpLiveDocx->assign('software', 'Magic Graphical Compression Suite v1.9');
$phpLiveDocx->assign('licensee', 'Henry Smith');
$phpLiveDocx->assign('company',  'Megasoft Co-operation');
$phpLiveDocx->assign('date',     'January 14, 2009');
$phpLiveDocx->assign('time',     '4:30:43 PM CET');
$phpLiveDocx->assign('city',     'Bremen');
$phpLiveDocx->assign('country',  'Germany');

$phpLiveDocx->createDocument();

$document = $phpLiveDocx->retrieveDocument('pdf');

file_put_contents('document.pdf', $document);

unset($phpLiveDocx);
```

Dans plusieurs applications, en particulier celles dans lesquelles les fichiers PDF sont utilisés pour des raisons d'archivage, vous devriez fixer les métadonnées du fichier PDF. La méthode `setDocumentProperties()` doit être déterminée avant `createDocument()` :

```php
$documentProperties = array(
    'title'    => 'Magic Graphical Compression Suite v1.9',
    'author'   => 'Megasoft Co-operation',
    'subject'  => 'Magic Graphical Compression Suite v1.9',
    'keywords' => 'Graphics, Magical, Compress, Suite, License'
);

$phpLiveDocx->setDocumentProperties($documentProperties);
```

Le document résultant [document.pdf][14] [104 KB] est enregistré sur le disque et peut être ouvert dans votre lecteur PDF favori, tel que le Document Viewer livré avec Ubuntu :

![Template in Document Viewer][15]

### Attribution de données composées à LiveDocx

Outre les données scalaires qui ont été assignées au modèle dans l'exemple précédent, vous pouvez également attribuer des données composées, tel un tableau associatif. Prenez le modèle [template.doc][16] [20.5 KB] et le document résultant [document.pdf][17] [77.6 KB]. Observez en particulier la partie suivante du modèle :

![Template in Microsoft® Word, cropped. Click to enlarge.][18]

La partie du modèle entre les crochets **I** et **I** est répétée tout au long du document pour produire les rangées du tableau. Le tableau associatif suivant utilise un sous-tableau pour chaque rangée.

En utilisant le code PHP5, vous allez charger le modèle avec un tableau associatif de données de numéros de téléphone. Pour plus de clarté, cet exemple montre seulement la partie dans laquelle est attibué le tableau associatif. L'objet de LiveDocx, la création de document et les procédures récupérables sont identiques aux exemples précédents et ont été omis :

```php
// instanciez LiveDocx

$billConnections = array(
  array(
      'connection_number'   => '+11 (0)222 333 441',
      'connection_duration' => '00:01:01',
      'fee'                 => '1.15'
  ),
  array(
      'connection_number'   => '+11 (0)222 333 442',
      'connection_duration' => '00:01:02',
      'fee'                 => '1.15'
  ),
  array(
      'connection_number'   => '+11 (0)222 333 443',
      'connection_duration' => '00:01:03',
      'fee'                 => '1.15'
  ),
  array(
      'connection_number'   => '+11 (0)222 333 444',
      'connection_duration' => '00:01:04',
      'fee'                 => '1.15'
  )
);

$phpLiveDocx->assign('connection', $billConnections);

// générez et récupérez le document
```

Le document résultant contient un tableau avec les données qui lui ont été attribuées :

![Template in PDF document viewer, cropped. Click to enlarge.][19]

### Génération de fichiers d'image avec LiveDocx

Outre les formats de fichier de traitement de texte listés auparavant qui sont supportés par LiveDocx, vous pouvez également enregistrer les documents résultants sous un ou plusieurs fichiers d'image. Pour cela, `Zend_Service_LiveDocx_MailMerge` offrent les méthodes `getAllBitmaps()` et `getBitmaps()` :

```php
// instanciez LiveDocx

// enregistrez toutes les images matricielles
// (zoomFactor, format)
$bitmaps = $phpLiveDocx->getAllBitmaps(100, 'png');
```

De la même façon, il est possible de ne récupérer que les images de certaines pages :

```php
// enregistrez seulement les images matricielles de certaines pages
// (fromPage, toPage, zoomFactor, format)
$bitmaps = $phpLiveDocx->getBitmaps(2, 2, 100, 'png');
```

Notez le paramètre `zoomFactor`. C'est un pourcentage situé entre 10% et 400%. Cette commande est idéale pour générer des imagettes du document créé, par exemple, pour l'afficher dans le navigateur en prévisualisation.

Les fichiers d'image peuvent être enregistrés sur le disque en itérant sur le tableau `$bitmaps`. Chaque valeur contient une page de données binaires :

```php
// enregistrez sur le disque
// (une page par valeur)
foreach ($bitmaps as $pageNumber => $bitmapData)
{
    $filename = sprintf('documentPage%d.png', $pageNumber);
    file_put_contents($filename, $bitmapData);
    printf('Written %d bytes to disk as %s.%s', filesize($filename), $filename, PHP_EOL);
}
```

## Déployer LiveDocx dans vos propres applications

Tout le code source PHP, incluant les composants LiveDocx, qui est livré avec le Zend Framework est sorti sous la licence *Free BSD*. Ainsi, vous pouvez déployer, modifier et redistribuer le code source PHP dans des projets selon les termes de cette licence. Le serveur SOAP de LiveDocx est toutefois un logiciel propriétaire. Vous avez trois possibilités pour déployer ce service SOAP dans vos propres applications :

 1. **Serveur public gratuit**

    Les développeurs choisissent cette approche dans la majorité des applications. Le serveur LiveDocx par défaut qui est référencé dans les composants du Zend Framework est un serveur public gratuit. Il a toutes les opérations et fonctions des serveurs d'hébergement et peut être utilisé gratuitement dans vos propres applications. Tout ce dont vous avez besoin sont un nom d'utilisateur et un mot de passe - pour cela, [cliquez ici][20].

 2. **Solution d'hébergement**

    Si votre application doit créer des milliers de documents par jour, vous devrez payer une modeste cotisation mensuelle pour accéder à votre propre serveur LiveDocx. En association avec des fournisseurs d'hébergement dominants dispersés dans le monde entier, vous pouvez louer un tel serveur d'hébergement de première qualité dans votre région géographique. Cela réduit le temps de latence et, comme votre application est la seule qui fonctionne sur le serveur, cela augmente la performance.

 3. **Licence complète**

    Pour des applications à très haut débit, il est possible d'installer un ou plusieurs serveurs LiveDocx dans vote propre réseau local. Cette approche réduit le temps de latence à un minimum absolu car le serveur LiveDocx est connecté au serveur d'application web par un réseau local gigabit. Les applications typiques pour la licence complète sont les billets d'avion, la création de factures pour les opérateurs de télécommunications et les applications qui traitent des données très sensibles et privées, tels que des rapports médicaux ou financiers.

## En savoir plus

Cette article est une première approche de ce que vous pouvez faire avec LiveDocx. Si vous désirez en savoir plus sur cette nouvelle plateforme performante de génération de document, veuillez consulter les ressources suivantes :

LiveDocx dans PHP5

  - [Blog phpLiveDocx.][21]
  - [Articles techniques.][22]

Service SOAP LiveDocx

  - [Blog LiveDocx.][23]
  - [Référence API.][24]

N'hésitez pas à [contacter l'auteur][25] ou vous adresser [au support technique][26] dans le forum d'assistance (gratuit) à tout moment.

![Jonathan Maron][27]


  [1]: http://www.phplivedocx.org/wp-content/uploads/2009/01/license-agreement-template.docx
  [2]: http://www.phplivedocx.org/wp-content/uploads/2009/01/license-agreement-document.pdf
  [3]: http://www.zendframework.com/download/latest
  [4]: http://framework.zend.com/svn/framework/standard/incubator/
  [5]: http://www.livedocx.com/
  [6]: http://en.wikipedia.org/wiki/SOAP
  [7]: http://www.textcontrol.com/
  [8]: http://www.phplivedocx.org/articles/using-livedocx-without-the-zend-framework/
  [9]: http://www.phplivedocx.org/articles/using-livedocx-with-nusoap/
  [10]: http://blog.livedocx.com/post/Creating-templates-using-OpenOfficeorg.aspx
  [11]: /media/articles/zend_pdf/msword-dialog.png
  [12]: /media/articles/zend_pdf/msword-basic-template.png
  [13]: http://www.phplivedocx.org/wp-content/uploads/2009/01/license-agreement-template.docx
  [14]: http://www.phplivedocx.org/wp-content/uploads/2009/01/license-agreement-document.pdf
  [15]: /media/articles/zend_pdf/msword-basic-document.png
  [16]: http://www.phplivedocx.org/wp-content/uploads/2009/01/telephone-bill-template.doc
  [17]: http://www.phplivedocx.org/wp-content/uploads/2009/01/telephone-bill-document.pdf
  [18]: /media/articles/zend_pdf/msword-complex-template.png
  [19]: /media/articles/zend_pdf/docviewer-complex-template.png
  [20]: https://www.livedocx.com/user/account_registration.aspx
  [21]: http://www.phplivedocx.org/
  [22]: http://www.phplivedocx.org/articles/
  [23]: http://blog.livedocx.com/
  [24]: http://www.livedocx.com/pub/documentation/api.aspx
  [25]: http://www.phplivedocx.org/contact/
  [26]: http://www.phplivedocx.org/support/
  [27]: /media/articles/zend_pdf/jonathan_maron.png
