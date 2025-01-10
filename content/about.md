---js
const eleventyNavigation = {
	key: "À propos",
	order: 3
};

const title = "À propos";
const layout = "layouts/post.njk";
const date = false;
---
### Qui suis-je ?

Je m'appelle **[Jérémy Benoist](https://www.j0k3r.net)** et je travaille dans le domaine du web. Je suis actuellement VPE chez [20 Minutes](https://www.20minutes.fr).
J'ai déambulé chez [Ypok](https://www.ypok.com), Baobaz, [Fnac.com](https://www.fnac.com) et [L'Express](https://www.lexpress.fr).

J'ai fait des interventions dans mon ancienne école, [HETIC](https://www.hetic.net/), pour essayer de convertir quelques élèves à Symfony en leur présentant le framework et en leur faisant une rapide initiation.

Avant de rentrer dans le monde des heures supplémentaires, j'ai fait mes études à HETIC justement où j'ai pu me former et apprendre énormément de choses intéressantes sur le multimédia, la gestion de projet et tout ce qui touche de prêt ou de loin à une agence web.

Vous pouvez me retrouver sur [Mastodon](https://mamot.fr/@j0k), [Last.fm](https://www.last.fm/fr/user/j0k3r_n0ir) mais aussi sur [Flickr](https://www.flickr.com/photos/j0k/), [Strava](https://www.strava.com/athletes/j0k) et surement ailleurs.

#### Les voyages

J'ai tendance à beaucoup aimer voyager et à raconter mes voyages sur un [blog de voyage](https://wildtrip.blog) que j'agrémente avec quelques photos. Même si tous mes voyages n'y sont par manque de temps, il y en a déjà une bonne partie.

### À propos du site
**C'est un site statique** généré via [11ty](https://www.11ty.dev/). Il a été généré pour la dernière fois le {{ page.date | readableDate}}.

Il est hébergé sur [Netlify](https://app.netlify.com/sites/j0k3r-net/deploys) et le code est disponible sur [GitHub](https://github.com/j0k3r/blog).

J'ai eu la bonne idée en 2009 de convertir tous mes articles, mes news, mes posts en markdown (ils étaient stockés avec des balises [*bbcode*](https://fr.wikipedia.org/wiki/BBCode) avant). Cela m'a permis de pouvoir garder une très grande majorité des articles que j'avais écrit. *Je ne sais pas si c'est une bonne chose vu leur qualité*.

### Et pour l'histoire ...

J'avais pour habitude de mettre des numéros de version à mon site web (je n'avais aucune idée de *SemVer* dans les années 2000).

Cette version serait logiquement **la v5**.

Une description des autres versions :

 - **v1** (2003) : Ouh c'était moche. Un design en `<table>` de 3 colonnes, ultra *hype* pour l'époque avec l'affichage de l'heure en temps réel et du nombre total de visiteurs
 - **v2** (2004) : Complètement ré-écrite avec [plein de nouveautés](/la-v2-est-publique.html)
 - **v2.1** (2004) : Du comestique seulement, [on dirait](/v2-1-is-out.html)
 - **v2.2** (2005) : Avec de l'HTML Strict et de l'AJAX, [le top de l'époque](/j0k3r-n3t-v2-2-launched.html)
 - **v3** (2009) : C'était une *Rolls-Royce* qui tournait sur symfony1 avec un forum, une partie membre, des commentaires, une backoffice chiadé, etc. J'avais même fait [un teasing](/teasing-v3-0.html) et un [super article](/vous-ne-revez-pas-vous-etes-bien-sur-la-v3.html) pour la sortie en avril 2009
 - **v4** (2018) : Migration vers Jekyll, Netlify, GitHub, etc..
 - **v5** (2025) : Migration vers 11ty (et au revoir Ruby !!)
