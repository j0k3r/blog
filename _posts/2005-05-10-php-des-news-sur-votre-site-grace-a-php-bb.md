---
layout: post
title: 'PHP - Des news sur votre site grâce à phpBB'
date: '2005-05-10 16:42:03'
author: j0k
tags: développement
excerpt: 'Beaucoup de personnes cherchent à lier les commentaires de leur news avec leur forum (phpBB) pour faire vivre un peu plus leur forum et aussi pour le côté pratique.  Je vous sauve encore une fois de cette mauvaise passe en vous montrant comment faire. Ainsi vos news seront directement disponibles dans votre forum et sur votre site.'
---

Beaucoup de personnes cherchent à lier les commentaires de leur news avec leur forum (phpBB) pour faire vivre un peu plus leur forum et aussi pour le côté pratique.  Je vous sauve encore une fois de cette mauvaise passe en vous montrant comment faire. Ainsi vos news seront directement disponibles dans votre forum et sur votre site.

1. Tout d'abord il faut que vous possédiez un forum phpBB, sinon ça ne pourra jamais fonctionner ^^
   phpBB est disponible en français à [cette adresse](http://www.phpbb-fr.com/downloads/download.php?id=3).

2. Ensuite il faut ajouter un nouveau champ pour la table forum de votre forum pour pouvoir spécifier une catégorie du forum qui sera entièrement consacrée aux news.

   ```sql
   ALTER TABLE phpbb_forums ADD forum_news TINYINT(1) NULL DEFAULT '0'
   ```

   **/!\ Fonctionne seulement si le champ de votre table phpBB est de la forme *phpbb_*. Ce qui normalement a été configuré lors de l'installation de phpBB. Dans le cas contraire veuillez modifier *phpbb_forums* par le préfixe que vous avez donné lors de l'installation.**

3. Une fois la table mise à jour il faut maintenant spécifier/créer un forum qui contiendra les news et leurs commentaires.

   Pour cela il faut mettre le nouveau champ que l'on vient d'insérer dans la table phpbb_forums à 1 pour un (_et un seul !!_) forum.

   Lancez phpMyAdmin. Allez dans la table *phpbb_forums*, éditez la ligne qui correspond au forum où seront stockées les news et dans le champ *forum_news*, mettez 1.

4. Voilà votre forum sélectionné, il ne vous reste plus que la partie codage.

   Dans un premier temps il faut récupérer toute ces news et leur nombre de commentaires via un magnifique requête sql (tirée du mod NewsMod de phpBB):

   /?\ Pensez à modifier les identifiants ainsi que la base de donnée à sélectionner !

    ```php
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $bdd = 'phpbb'; // votre base de donnée

    @mysql_connect($host, $user, $pass);
    @mysql_select_db($bdd) or die('Impossible de se connecter');

    $table_prefix = 'phpbb_';
    $sql = "SELECT t.topic_id, t.forum_id, t.topic_title, t.topic_time, t.topic_replies, t.topic_last_post_id, t.topic_views, t.topic_vote, u.username, u.user_id, u.user_rank, u.user_sig, u.user_sig_bbcode_uid, u.user_allowsmile, p.*,  pt.post_text, pt.post_subject, pt.bbcode_uid
        FROM " . $table_prefix. "forums f, " . $table_prefix. "topics t, " . $table_prefix. "posts p, " . $table_prefix. "users u, " . $table_prefix. "posts_text pt
        WHERE f.forum_news = '" . TRUE . "'
            AND t.forum_id = f.forum_id
            AND p.topic_id = t.topic_id
            AND p.post_id = t.topic_first_post_id
            AND pt.post_id = p.post_id
            AND u.user_id = p.poster_id
            AND t.topic_type = '0'
        ORDER BY topic_time DESC";
    $req = mysql_query($sql);
    ```

    Évidemment il faut renseigner la variable *$table_prefix* avec le préfixe que vous avez spécifié lors de l'installation. Si vous n'avez rien touché, ne changez pas cette variable.

5. Une fois toutes les news récupérées, il faut maintenant les afficher :

    ```php
    while($data = mysql_fetch_array($req))
    {
        //Affichage du titre
        echo '<h2>'.$data['topic_title'].'</h2>';
        //Affichage du contenu de la news
        echo '<p>'.$data['post_text'].'</p>';
    }
    ```

6. Ici on a juste affiché les news sur votre site. Rien de plus. Maintenant il faut peut être spécifier un nombre de news à afficher.

    On rajoute tout simplement une variable qui va compter les news et n'en afficher qu'une partie :

    ```php
    //Initialisation de la variable "qui compte les news"
    $j = 1;
    while($data = @mysql_fetch_array($req))
    {
        //Affichage du titre
        echo '<h2>'.$data['topic_title'].'</h2>';
        //Affichage du contenu de la news
        echo '<p>'.$data['post_text'].'</p>';
        //Si on atteints 5 news, on arrête
        if($j >= 5)
        {
            break;
        }
        $j++;
    }
    @mysql_free_result($req);
    ```

7. Voila on a maintenant affiché 5 news sur le site. Maintenant il faut peut être mettre l'auteur, l'heure, le nombre de commentaires ...

    ```php
    //Initialisation de la variable "qui compte les news"
    $j = 1;
    while($data = @mysql_fetch_array($req))
    {
        //Affichage du titre
        echo '<h2>'.$data['topic_title'].'</h2>';
        //Affichage du contenu de la news
        echo '<p>'.$data['post_text'].'</p>';
        //Affichage de l'auteur
        echo '<h3>Poster par <a href="'.$phpbb_root_path;
        echo 'profile.php?mode=viewprofile&u='.$data['user_id'].'">'.$data['username'].'</a>';
        //De l'heure
        echo ' le '.date('d/m/y à H:i', $data['topic_time']).' - ';
        //Des commentaires
        echo '<a href="'.$phpbb_root_path.'viewtopic.php?t=';
        echo $data['topic_id'].'">['.$data['topic_replies'].'] commentaire(s)</a></h3>';
        //Si on atteints 5 news, on arrête
        if($j >= 5)
        {
            break;
        }
        $j++;
    }
    @mysql_free_result($req);
    ```

8. On a presque fini. Maintenant on a nos 5 news, avec l'auteur, l'heure et les commentaires. On pourrai croire que c'est fini ... mais ... il faut peut être prendre en compte le BBcode qui permet de mettre des liens, de la couleur dans les posts.

   Rajoutez donc _tout en haut de votre script_, ces lignes  :

   /!\ Attention pensez bien à renseigner la variable *$phpbb_root_path* avec le chemin vers votre forum ainsi que la variable *$theme* qui est le nom de votre theme utilisé sur votre forum (par défaut c'est subSilver).

    ```php
    define('IN_PHPBB', true);
    $phpbb_root_path = 'forum/';
    $theme = 'subSilver';
    include_once($phpbb_root_path.'includes/template.php');
    include($phpbb_root_path.'includes/functions.php');
    $template = new Template($phpbb_root_path.'templates/'.$theme);
    include_once($phpbb_root_path.'includes/bbcode.php');
    ```

   On vient d'inclure les fichiers nécessaires à l'interprétation du BBcode, il faut maintenant "parser" le contenu de la news :

    ```php
    //Initialisation de la variable "qui compte les news"
    $j = 1;
    while($data = @mysql_fetch_array($req))
    {
        //Affichage du titre
        echo '<h2>'.$data['topic_title'].'</h2>';
        //On parse la news pour y interprété le BBcode
        $message = bbencode_second_pass($data['post_text'], $data['bbcode_uid']);
        $message = str_replace("\n\r", "\n", $message);
        $message = str_replace("\n", "<br />\n", $message);
        //Affichage du contenu de la news
        echo '<p>'.$message.'</p>';
        //Affichage de l'auteur
        echo '<h3>Poster par <a href="'.$phpbb_root_path;
        echo 'profile.php?mode=viewprofile&u='.$data['user_id'].'">'.$data['username'].'</a>';
        //De l'heure
        echo ' le '.date('d/m/y à H:i', $data['topic_time']).' - ';
        //Des commentaires
        echo '<a href="'.$phpbb_root_path.'viewtopic.php?t=';
        echo $data['topic_id'].'">['.$data['topic_replies'].'] commentaire(s)</a></h3>';
        //Si on atteints 5 news, on arrête
        if($j >= 5)
        {
            break;
        }
        $j++;
    }
    @mysql_free_result($req);
    ```

9. Voilà notre news est maintenant toute belle et parsemée de BBcode qui la rend encore plus belle. Mais qu'en est-il des smileys ?

    ```php
    //Initialisation de la variable "qui compte les news"
    $j = 1;
    while($data = @mysql_fetch_array($req))
    {
        //Affichage du titre
        echo '<h2>'.$data['topic_title'].'</h2>';
        //On parse la news pour y interprété le BBcode
        $message = bbencode_second_pass($data['post_text'], $data['bbcode_uid']);
        $message = str_replace("\n\r", "\n", $message);
        $message = str_replace("\n", "<br />\n", $message);
        //On s'occupe des smileys
        $req_smilies = mysql_query('SELECT smilies_id, code, smile_url, emoticon FROM '.$table_prefix.'smilies');
        $k = 0;
        while($data_smilies = mysql_fetch_array($req_smilies))
        {
            $smilies[$k]['code'] = $data_smilies['code'];
            $smilies[$k]['smile_url'] = $data_smilies['smile_url'];
            $smilies[$k]['emoticon'] = $data_smilies['emoticon'];
            $k ++;
        }
        if (count($smilies))
        {
            usort($smilies, 'smiley_sort');
        }
        for ($i = 0; $i < count($smilies); $i++)
        {
            $orig[] = "/(?<=.\W|\W.|^\W)".phpbb_preg_quote($smilies[$i]['code'], "/")."(?=.\W|\W.|\W$)/";
            $repl[] = '<img src="'.$phpbb_root_path.'images/smiles/'.$smilies[$i]['smile_url'].'" alt="'.$smilies[$i]['emoticon'].'" />';
        }
        $message = preg_replace($orig, $repl, ' '.$message.' ');
        $message = substr($message, 1, -1);
        //Affichage du contenu de la news
        echo '<p>'.$message.'</p>';
        //Affichage de l'auteur
        echo '<h3>Poster par <a href="'.$phpbb_root_path;
        echo 'profile.php?mode=viewprofile&u='.$data['user_id'].'">'.$data['username'].'</a>';
        //De l'heure
        echo ' le '.date('d/m/y à H:i', $data['topic_time']).' - ';
        //Des commentaires
        echo '<a href="'.$phpbb_root_path.'viewtopic.php?t=';
        echo $data['topic_id'].'">['.$data['topic_replies'].'] commentaire(s)</a></h3>';
        //Si on atteints 5 news, on arrête
        if($j >= 5)
        {
            break;
        }
        $j++;
    }
    @mysql_free_result($req);
    ```

10. Et voila !!

Vous avez maintenant vos news affichées sur votre site avec en lien le post sur le forum qui vous permet de mettre des commentaires.

La gestion du BBcode et des smileys vous permet de faire de belles news ;o)

Le script est assez long, j'ai fait plusieurs étapes pour bien détailler. Mais vous pouvez vous perdre ^^

Du coup je mets le script général en [téléchargement](http://www.j0k3r.net/dl/News-phpBB.rar), à vous de l'adapter à votre site ensuite.

Si vous avez des problèmes avec ce script, ou des commentaires, le [forum](http://www.j0k3r.net/forum/) est là pour vous ;)

Merci à [Oyo](http://www.j0k3r.net/forum/voir-oyo-335.htm) pour les "optimisations" ;)

© j0k
