---
redirect_from:
  - /blog/php-5-1-4-correction-d-un-joli-bug
layout: post
title: 'PHP 5.1.4, correction d''un joli buG'
date: '2006-05-05 11:36:02'
author: j0k
tags: blabla
excerpt: "Publié peut être trop précipitamment, PHP 5.1.3 possédait un buG assez critique au niveau de la variable POST. Tout comme dans la sapi FastCGI qui comportait aussi quelques problèmes. On remarque aussi qu'un buG au niveau de la fonction highlight_string() a aussi été corrigé, tout comme les drivers PDO ODBC qui présentaient de sérieux problèmes.     \nLe buG      …"
---

Publié peut être trop précipitamment, PHP 5.1.3 possédait un buG assez critique au niveau de la variable `$_POST`. Tout comme dans la sapi FastCGI qui comportait aussi quelques problèmes. On remarque aussi qu'un buG au niveau de la fonction highlight_string() a aussi été corrigé, tout comme les drivers PDO ODBC qui présentaient de sérieux problèmes.
Le buG qui touché la variable `$_POST` était assez rigolo. Il suffisait d'avoir un formulaire tout banal :

```
<div class="html4strict">
<span class="sc2">
<a target="_blank"&nbsp; href="http://december.com/html/4/element/html.html">
<span class="kw2">&lt;html&gt;</a>   <span class="sc2">
<a target="_blank"&nbsp; href="http://december.com/html/4/element/head.html">
<span class="kw2">&lt;head&gt;</a>   <span class="sc2">
<a target="_blank"&nbsp; href="http://december.com/html/4/element/title.html">
<span class="kw2">&lt;title&gt;</a>test<span class="sc2">
<span class="kw2">&lt;/title&gt;   <span class="sc2">
<a target="_blank"&nbsp; href="http://december.com/html/4/element/meta.html">
<span class="kw2">&lt;meta</a> <span class="kw3">http-equiv=<span class="st0">"Content-Type" <span class="kw3">content=<span class="st0">"text/html; charset=utf-8" /<span class="kw2">&gt;</a>   <span class="sc2">
<span class="kw2">&lt;/head&gt;   <span class="sc2">
<a target="_blank"&nbsp; href="http://december.com/html/4/element/body.html">
<span class="kw2">&lt;body&gt;</a>   <span class="sc2">
<a target="_blank"&nbsp; href="http://december.com/html/4/element/form.html">
<span class="kw2">&lt;form</a> <span class="kw3">method=<span class="st0">"post" <span class="kw3">action=<span class="st0">"" <span class="kw3">enctype=<span class="st0">"multipart/form-data"<span class="kw2">&gt;</a>   <span class="sc2">
<a target="_blank"&nbsp; href="http://december.com/html/4/element/input.html">
<span class="kw2">&lt;input</a> <span class="kw3">type=<span class="st0">"text" <span class="kw3">name=<span class="st0">"masivasid[id_1]" <span class="kw3">value=<span class="st0">"Nzzz1"/<span class="kw2">&gt;</a>
<span class="sc2">
<a target="_blank"&nbsp; href="http://december.com/html/4/element/br.html">
<span class="kw2">&lt;br</a>/<span class="kw2">&gt;</a>   <span class="sc2">
<a target="_blank"&nbsp; href="http://december.com/html/4/element/input.html">
<span class="kw2">&lt;input</a> <span class="kw3">type=<span class="st0">"text" <span class="kw3">name=<span class="st0">"masivasid[id_2]" <span class="kw3">value=<span class="st0">"Nzzz2"/<span class="kw2">&gt;</a>
<span class="sc2">
<a target="_blank"&nbsp; href="http://december.com/html/4/element/br.html">
<span class="kw2">&lt;br</a>/<span class="kw2">&gt;</a>   <span class="sc2">
<a target="_blank"&nbsp; href="http://december.com/html/4/element/input.html">
<span class="kw2">&lt;input</a> <span class="kw3">type=<span class="st0">"submit"/<span class="kw2">&gt;</a>   <span class="sc2">
<span class="kw2">&lt;/form&gt;   <span class="sc2">
<span class="kw2">&lt;/body&gt;   <span class="sc2">
<span class="kw2">&lt;/html&gt;</div>``   Et lors de la soumission la variable $_POST contenait :   **php**   ``<div class="php">
<a target="_blank"&nbsp; href="http://www.php.net/array">
<span class="kw3">Array</a>   <span class="br0">&#40;   &nbsp; &nbsp; <span class="br0">&#91;masivasid<span class="br0">&#93; =&gt; <a target="_blank"&nbsp; href="http://www.php.net/array">
<span class="kw3">Array</a>   &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#40;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#91;id_<span class="nu0">1<span class="br0">&#93; =&gt; Nzzz1   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#91;id_<span class="nu0">2<span class="br0">&#93; =&gt; <a target="_blank"&nbsp; href="http://www.php.net/array">
<span class="kw3">Array</a>   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#40;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#91;id_<span class="nu0">1<span class="br0">&#93; =&gt; Nzzz2   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#41;   &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#41;   <span class="br0">&#41;</div>``   Au lieu de :   **php**   ``<div class="php">
<a target="_blank"&nbsp; href="http://www.php.net/array">
<span class="kw3">Array</a>   <span class="br0">&#40;   &nbsp; &nbsp; <span class="br0">&#91;masivasid<span class="br0">&#93; =&gt; <a target="_blank"&nbsp; href="http://www.php.net/array">
<span class="kw3">Array</a>   &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#40;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#91;id_<span class="nu0">1<span class="br0">&#93; =&gt; Nzzz1   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#91;id_<span class="nu0">2<span class="br0">&#93; =&gt; Nzzz2   &nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#41;   <span class="br0">&#41;</div>
```

Tous les utilisateurs de PHP sont invités à mettre à jour leur [version](http://www.php.net/downloads.php#v5).
