import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/home'
import News from './page/news'
import NewsList from './components/newsList'
import NewsListItem from './components/newsListItem'
import About from './page/about'
import Contact from './page/contact'
import Navbar from './navbar/navbar'
import NoMatch from './page/404'

const data =  [
  {
      "source": {
          "id": null,
          "name": "Journal du geek"
      },
      id: "2",
      "author": "Olivier",
      "title": "La nouvelle palette de couleurs de Google Maps ne plait pas à tout le monde",
      "description": "Difficile de faire l'unanimité, surtout pour un service utilisé par des millions de personnes dans le monde. Le changement de la palette de couleurs dans Google Maps provoque bien des réactions courroucées, beaucoup comparant l'application à Apple Plans. Tout…",
      "url": "https://www.journaldugeek.com/2023/11/26/la-nouvelle-palette-de-couleurs-de-google-maps-ne-plait-pas-a-tout-le-monde/",
      "urlToImage": "https://www.journaldugeek.com/app/uploads/2023/11/Google-Maps.jpg",
      "publishedAt": "2023-11-26T13:00:48Z",
      "content": "Google Maps a déployé de légères modifications dans sa palette de couleurs : elles sont subtiles, mais n’en ont pas moins déclenché des réactions épidermiques parmi les utilisateurs. La teinte bleue,… [+2570 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Journal du geek"
      },
      id: "3",
      "author": "Olivier",
      "title": "Tim Cook prépare sa succession à la tête d’Apple",
      "description": "Depuis 12 ans à la tête d'Apple, Tim Cook a confirmé qu'il préparait sa succession. Le CEO de l'une des plus grandes entreprises au monde veut trouver un successeur en interne.\nTim Cook prépare sa succession à la tête d’Apple",
      "url": "https://www.journaldugeek.com/2023/11/26/tim-cook-prepare-sa-succession-a-la-tete-dapple/",
      "urlToImage": "https://www.journaldugeek.com/app/uploads/2023/11/Tim-Cook.jpg",
      "publishedAt": "2023-11-26T15:00:03Z",
      "content": "Nommé CEO d’Apple en août 2011 en remplacement d’un Steve Jobs très malade, Tim Cook a emmené le constructeur informatique vers les sommets. Qu’on apprécie ou pas sa gestion de l’entreprise et sa vis… [+2217 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Frandroid"
      },
      id: "4",
      "author": "Guillaume Sonnet",
      "title": "Le MacBook Air M2 peut vous revenir à moins de 1 000 € grâce à cette offre du Black Friday",
      "description": "E.Leclerc propose une belle offre sur le MacBook Air M2 version 2022 avec 8 Go de RAM et 256 Go de stockage pour le dernier jour du Black Friday. Le prix : 911 euros au lieu de 1 299 euros. On vous explique tout plus bas.",
      "url": "https://www.frandroid.com/bons-plans/1856421_le-macbook-air-m2-peut-vous-revenir-a-moins-de-1-000-e-grace-a-cette-offre-du-black-friday",
      "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/11/macbook-air-13-m2-black-friday-2023.jpg",
      "publishedAt": "2023-11-26T09:56:29Z",
      "content": "E.Leclerc propose une belle offre sur le MacBook Air M2 version 2022 avec 8 Go de RAM et 256 Go de stockage pour le dernier jour du Black Friday. Le prix : 911 euros au lieu de 1 299 euros. On vous e… [+5816 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Frandroid"
      },
      id: "5",
      "author": "Guillaume Sonnet",
      "title": "Le MacBook Air M1 est une super affaire pour ce dimanche du Black Friday",
      "description": "Amazon propose le Macbook Air M1 de 2020 à l'un de ses meilleurs prix pendant la Black Friday Week, soir 939 euros au lieu de 1 199 euros.",
      "url": "https://www.frandroid.com/bons-plans/1863120_le-macbook-air-m1-est-une-super-affaire-pour-ce-dimanche-du-black-friday",
      "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/11/macbook-air-m1-black-friday-1.jpg",
      "publishedAt": "2023-11-26T09:04:30Z",
      "content": "Amazon propose le Macbook Air M1 de 2020 à l'un de ses meilleurs prix pendant la Black Friday Week, soir 939 euros au lieu de 1 199 euros.\r\nVous attendiez le Black Friday pour vous procurer l’ultrabo… [+5747 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Frandroid"
      },
      id: "6",
      "author": "Geoffroy Husson",
      "title": "Semaine du Black Friday, saga OpenAI (ChatGPT) et bague connectée pas cher – L’actu tech de la semaine",
      "description": "Cette semaine a bien évidemment été marquée par les offres du Black Friday, mais pas seulement. Les rebondissements autour d'OpenAI, l'annonce d'une nouvelle bague connectée ou l'arrivée du RCS sur iMessage... on vous explique tout.",
      "url": "https://www.frandroid.com/actualites-generales/1870941_semaine-du-black-friday-saga-openai-chatgpt-et-bague-connectee-pas-cher-lactu-tech-de-la-semaine",
      "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/11/openai.jpg",
      "publishedAt": "2023-11-26T11:03:00Z",
      "content": "Cette semaine a bien évidemment été marquée par les offres du Black Friday, mais pas seulement. Les rebondissements autour d'OpenAI, l'annonce d'une nouvelle bague connectée ou l'arrivée du RCS sur i… [+2885 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Frandroid"
      },
      id: "7",
      "author": "Mélanie Capelli",
      "title": "Enfin une belle baisse de prix du côté d’Apple pour le Black Friday",
      "description": "L'iPad de 2021 continue de plaire pour son efficacité. Si son prix a été revu à la hausse depuis sa sortie, en ce moment, la tablette tombe à 339 euros au lieu de 439 euros pour le Black Friday. Chez E.Leclerc, il peut même vous revenir encore moins cher.",
      "url": "https://www.frandroid.com/bons-plans/1870625_enfin-une-belle-baisse-de-prix-du-cote-dapple-pour-le-black-friday",
      "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/11/apple-ipad-9-black-friday-2023.jpg",
      "publishedAt": "2023-11-26T09:24:11Z",
      "content": "L'iPad de 2021 continue de plaire pour son efficacité. Si son prix a été revu à la hausse depuis sa sortie, en ce moment, la tablette tombe à 339 euros au lieu de 439 euros pour le Black Friday. Chez… [+4943 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Frandroid"
      },
      id: "8",
      "author": "Ulrich Rozier",
      "title": "Black Friday : les ultimes offres à saisir avant la fin sur Amazon, Fnac, Darty, Boulanger…",
      "description": "C'est le week-end et le Black Friday continue de battre son plein ce dimanche 26 novembre 2023 chez les différentes e-commerçants. Comptez sur nous pour continuer à vous partager les meilleures offres pour ce dernier jour et vous aider à faire les meilleurs c…",
      "url": "https://www.frandroid.com/bons-plans/1869577_black-friday-les-ultimes-offres-a-saisir-avant-la-fin-sur-amazon-fnac-darty-boulanger",
      "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/11/copie-de-blackfriday-frandroid-unes-13.jpg",
      "publishedAt": "2023-11-26T16:47:00Z",
      "content": "C'est le week-end et le Black Friday continue de battre son plein ce dimanche 26 novembre 2023 chez les différentes e-commerçants. Comptez sur nous pour continuer à vous partager les meilleures offre… [+10706 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Les Numériques"
      },
      id: "9",
      "author": "Rick",
      "title": "Actualité : Black Friday 2023 – L'ordinateur Apple Mac Mini (M2) 8 Go / 256 Go \"4 étoiles\" à 629,00 €",
      "description": "L'ordinateur Apple Mac Mini (M2) 8 Go / 256 Go passe sous les 650 € chez Fnac.com, Amazon et Darty.com. C'est actuellement l'un des meilleurs produit de notre comparatif.",
      "url": "https://www.lesnumeriques.com/ordinateur/black-friday-2023-l-ordinateur-apple-mac-mini-m2-8-go-256-go-4-etoiles-a-629-00-n215973.html",
      "urlToImage": "https://cdn.lesnumeriques.com/optim/test/20/204855/cddbcb96-apple-mac-mini-m2__1200_630__0-482-5918-3588_wtmk.jpeg",
      "publishedAt": "2023-11-26T23:00:28Z",
      "content": "Apple n'a pas abandonné le Mac Mini, loin de là. L'ordinateur riquiqui d'Apple revient plus en forme que jamais avec une puce Apple Silicon M2 et le support du wifi 6E. Il devient surtout plus aborda… [+155 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Les Numériques"
      },
      id: "10",
      "author": "Rick",
      "title": "Actualité : Bon plan – L'ordinateur Apple iMac 24 M3 (10 GPU) 8 Go / 256 Go \"5 étoiles\" à 1 714,95 €",
      "description": "L'ordinateur Apple iMac 24 M3 (10 GPU) 8 Go / 256 Go passe sous les 1800 € chez Grosbill. C'est actuellement le meilleur produit de notre comparatif.",
      "url": "https://www.lesnumeriques.com/ordinateur/bon-plan-l-ordinateur-apple-imac-24-m3-10-gpu-8-go-256-go-5-etoiles-a-1-714-95-n215964.html",
      "urlToImage": "https://cdn.lesnumeriques.com/optim/test/21/214554/8aa48919-apple-imac-24-une-mise-a-jour-salutaire-pour-le-roi-des-tout-en-un__1200_630__0-138-2715-1563_wtmk.jpg",
      "publishedAt": "2023-11-26T23:00:23Z",
      "content": "L’iMac, ordinateur tout-en-un d'Apple, subit sa première mise à jour depuis son passage aux puces “maison” Silicon “M”. Il se dote désormais d'une M3 et gagne au passage la compatibilité wifi 6E et B… [+155 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Les Numériques"
      },
      id: "11",
      "author": "Rick",
      "title": "Actualité : Black Friday 2023 – L'enceinte portable Ultimate Ears Megaboom 3 \"4 étoiles\" à 109,99 €",
      "description": "L'enceinte portable Ultimate Ears Megaboom 3 est proposée à 109,99 € chez Amazon.",
      "url": "https://www.lesnumeriques.com/enceintes-portables/black-friday-2023-l-enceinte-portable-ultimate-ears-megaboom-3-4-etoiles-a-109-99-n215988.html",
      "urlToImage": "https://cdn.lesnumeriques.com/optim/produits/381/45651/ultimate_ears-megaboom-3_1403893ebfaa985a__1200_630__overflow.jpg",
      "publishedAt": "2023-11-26T23:00:39Z",
      "content": "Fort du succès de la Boom en 2013, UE lance deux ans plus tard la Megaboom, une jumelle XXL du format portable. Lors de son passage sur notre banc de test, nous avions célébré son ergonomie quasiment… [+1877 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "01net.com"
      },
      id: "12",
      "author": "Bons Plans 01net",
      "title": "Inconsolable, Apple voit le prix de son iPhone 14 Pro Max éclater au Black Friday ",
      "description": "L''iPhone 14 Pro Max est visé par une remise XL pour le Black Friday. Lancé au tarif salé de 1 479 euros, il est aujourd'hui bien plus abordable. Si vous cherchez un modèle ultra puissant signé Apple, c'est un des meilleurs choix que vous puissiez faire.",
      "url": "https://www.01net.com/bons-plans/inconsolable-apple-voit-le-prix-de-son-iphone-14-pro-max-eclater-au-black-friday.html",
      "urlToImage": "https://www.01net.com/app/uploads/2023/11/iphone-14-pro-max-apple.jpg",
      "publishedAt": "2023-11-26T06:31:39Z",
      "content": "L”iPhone 14 Pro Max est visé par une remise XL pour le Black Friday. Lancé au tarif salé de 1 479 euros, il est aujourd’hui bien plus abordable. Si vous cherchez un modèle ultra puissant signé Apple,… [+4515 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "01net.com"
      },
      id: "13",
      "author": "Bons Plans 01net",
      "title": "MacBook Air M2 : Amazon supprime toute sa marge pour vous faire craquer ⚡️",
      "description": "Le MacBook Air M2 est un ordinateur portable récent qui a l'avantage d'être léger, comme sa gamme le requiert, mais aussi performant avec la puce M2 et l'autonomie de longue durée. Pour Black Friday, Amazon dévoile une réduction avantageuse sur ce modèle de f…",
      "url": "https://www.01net.com/bons-plans/macbook-air-m2-amazon-supprime-toute-sa-marge-pour-vous-faire-craquer.html",
      "urlToImage": "https://www.01net.com/app/uploads/2022/11/macbook-air-m2-apple.jpg",
      "publishedAt": "2023-11-26T06:40:38Z",
      "content": "Le MacBook Air M2 est un ordinateur portable récent qui a l’avantage d’être léger, comme sa gamme le requiert, mais aussi performant avec la puce M2 et l’autonomie de longue durée. Pour Black Friday,… [+4442 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "01net.com"
      },
      id: "14",
      "author": "Bons Plans 01net",
      "title": "Dernier jour du Black Friday, l’iPhone 15 se prend une claque de -25%",
      "description": "Les iPhone 15 sont les nouveaux modèles officialisés par Apple en septembre, ils font le plein de nouveautés pour devenir encore plus premium que leur prédécesseur. Surtout, ils sont déjà à prix réduit grâce à AliExpress qui se permet une petite folie au Blac…",
      "url": "https://www.01net.com/bons-plans/dernier-jour-du-black-friday-liphone-15-se-prend-une-claque-de-25.html",
      "urlToImage": "https://www.01net.com/app/uploads/2023/11/iphone-15-bleu-apple.jpg",
      "publishedAt": "2023-11-26T08:13:01Z",
      "content": "Les iPhone 15 sont les nouveaux modèles officialisés par Apple en septembre, ils font le plein de nouveautés pour devenir encore plus premium que leur prédécesseur. Surtout, ils sont déjà à prix rédu… [+4224 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "01net.com"
      },
      id: "15",
      "author": "Bons Plans 01net",
      "title": "Black Friday : Amazon vide tout son stock, 10 pépites pour ce dimanche matin ⚡️",
      "description": "Ce dimanche sonne le dernier jour de la Black Friday Week. Le week-end est toujours intense pour les e-commerçants alors que les Français travaillent sur leurs cadeaux de Noël. Ci-dessous, notre liste des bonnes affaires.",
      "url": "https://www.01net.com/bons-plans/black-friday-amazon-vide-tout-son-stock-10-pepites-pour-ce-dimanche-matin-⚡️.html",
      "urlToImage": "https://www.01net.com/app/uploads/2023/11/BlackFriday2023.jpg",
      "publishedAt": "2023-11-26T06:02:43Z",
      "content": "Ce dimanche sonne le dernier jour de la Black Friday Week. Le week-end est toujours intense pour les e-commerçants alors que les Français travaillent sur leurs cadeaux de Noël. Ci-dessous, notre list… [+5177 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Macbidouille.com"
      },
      id: "16",
      "author": "pmvigier@gmail.com (Philippe)",
      "title": "Les CPU des Mac : Scorpius",
      "description": "TL;DRApple a créé une CPU au potentiel fabuleux pour des cas de niche, avec des moyens pharaoniques dont un Cray qui a après pris la poussière, mais totalement inadaptée pour les logiciels existants de la famille 68000 ou aucun portage de logiciel venu du mon…",
      "url": "https://macbidouille.com/news/2023/11/26/les-cpu-des-mac-scorpius",
      "urlToImage": "http://files.macbidouille.com/mbv3/2023/11/26/PG3Z4Ky9Z1XISGFY.png",
      "publishedAt": "2023-11-26T15:14:24Z",
      "content": "TL;DR\r\nApple a créé une CPU au potentiel fabuleux pour des cas de niche, avec des moyens pharaoniques dont un Cray qui a après pris la poussière, mais totalement inadaptée pour les logiciels existant… [+9631 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Macbidouille.com"
      },
      id: "17",
      "author": "pmvigier@gmail.com (Philippe)",
      "title": "Les CPU des Mac : Scorpius",
      "description": "Motorola avait annoncé en 1988 que l'avenir n'était plus la famille 68000 CISC mais le nouveau 88000 RISC, alors que le 68030 était un succès, très compétitif, et que le Mac IIx qui en était équipé impressionnait tout le monde.Apple avait peu d'options à ce p…",
      "url": "https://macbidouille.com/news/2023/11/26/les-cpu-des-mac-scorpius-1",
      "urlToImage": "http://files.macbidouille.com/mbv3/2023/11/26/PG3Z4Ky9Z1XISGFY.png",
      "publishedAt": "2023-11-26T15:14:24Z",
      "content": "Motorola avait annoncé en 1988 que l'avenir n'était plus la famille 68000 CISC mais le nouveau 88000 RISC, alors que le 68030 était un succès, très compétitif, et que le Mac IIx qui en était équipé i… [+9111 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "ZDNet France"
      },
      id: "18",
      "author": "Frédéric Charles",
      "title": "OpenAI : la magie du Ctrl-Z a t-elle opéré ?",
      "description": "Quelles leçons tirer de cette semaine folle, quand OpenAI a eu 3 CEO différents.\r\nPour revenir à la situation de départ ? Pas vraiment !",
      "url": "https://www.zdnet.fr/blogs/green-si/openai-la-magie-du-ctrl-z-a-t-elle-opere-39962620.htm",
      "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiT85Yj6nPVN0E_MtikgGPAEBLhrmeu8OppzMv-CRl0SMGR07yR7tDjIKozCUkDXmJX63HPv2sTgVTX1lVOMKJBS02Bc3sm6y7Vu00OV4R_-FkLqo1wyM93HIfig2nULA3pab-X7FA1Iidwtv9sx1RUUTnjW6sjEau46vVkQ1aDozq8b-dWBxaHurLaL66/w640-h373/image_2023-11-26_154652058.png",
      "publishedAt": "2023-11-26T17:35:01Z",
      "content": "Le billet précédent soulevait toutes les interrogations sur l'IA générative que posait le départ de Sam Altman d'OpenAI, débarqué par le board de l'organisation à but non lucratif et qui contrôle la … [+7682 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Génération NT"
      },
      id: "19",
      "author": "Bruno C.",
      "title": "Les 20 TOP offres du Black Friday à ne pas rater ! (iPhone 15, PS5, TV OLED LG, Roborock S8...)",
      "description": "Le Black Friday n'est toujours pas terminé et il est encore temps de profiter de superbes offres chez de nombreux e-commerçants comme Amazon, Fnac ou Cdiscount. Smartphones, SSD, PC.. le choix est vaste !",
      "url": "https://www.generation-nt.com/actualites/black-friday-meilleur-produit-2042159",
      "urlToImage": "https://img.generation-nt.com/black-friday-2_0298000001686071.jpg",
      "publishedAt": "2023-11-26T09:10:01Z",
      "content": "La période du Black Friday est un moment clé de l'année pour trouver LA bonne affaire notamment dans le domaine de la high tech qui nous concerne ici. Que vous soyez à la recherche d'un smartphone, d… [+1676 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Begeek.fr"
      },
      id: "20",
      "author": "Morgan Fromentin",
      "title": "La polémique antisémite pourrait coûter 75 millions de dollars en revenu publicitaire à X d’Elon Musk",
      "description": "Selon des rapports, Airbnb, Netflix et Microsoft auraient retiré des millions de dollars de leurs budgets publicitaires. Qu'est-ce qui aurait bien pu pousser ces géants à prendre une telle décision ?",
      "url": "https://www.begeek.fr/la-polemique-antisemite-pourrait-couter-75-millions-de-dollars-en-revenu-publicitaire-a-x-delon-musk-389450",
      "urlToImage": "https://www.begeek.fr/wp-content/uploads/2023/07/Elon-Musk-Twitter-X.jpg",
      "publishedAt": "2023-11-26T09:00:14Z",
      "content": "Selon des rapports, Airbnb, Netflix et Microsoft auraient retiré des millions de dollars de leurs budgets publicitaires. Qu'est-ce qui aurait bien pu pousser ces géants à prendre une telle décision ?… [+1728 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Iphon.fr"
      },
      id: "21",
      "author": "iPhon.fr",
      "title": "Récap : les 6 articles qu’il ne fallait pas manquer cette semaine",
      "description": "Crunchyroll et LumaFusion ont droit à quelques nouveautés majeures pour les utilisateurs d'appareils Apple.",
      "url": "https://www.iphon.fr/post/recapitulatif-top-articles-semaine-47-2023",
      "urlToImage": "https://www.iphon.fr/app/uploads/2022/11/apple-iphone-14-plus.jpg",
      "publishedAt": "2023-11-26T17:08:28Z",
      "content": "Une nouvelle semaine riche en actualités Apple débute en ce lundi. Aujourdhui est jour de reprise, mais aussi synonyme de bilan pour les sept jours passés. Certains dentre vous nont peut-être en effe… [+1107 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Iphon.fr"
      },
      id: "22",
      "author": "iPhon.fr",
      "title": "Que signifie ce dé à coudre signé Apple, apparu sur la toile ?",
      "description": "La société américaine travaille apparemment sur un nouvel accessoire pour son casque de réalité augmentée.",
      "url": "https://www.iphon.fr/post/que-signifie-ce-de-a-coudre-signe-apple-apparu-sur-la-toile",
      "urlToImage": "https://www.iphon.fr/app/uploads/2023/11/interrogation-1400_932.jpg",
      "publishedAt": "2023-11-26T11:30:17Z",
      "content": "Dans un nouveau brevet relayé ce week-end par des médias spécialisés, Apple explique comment ses ingénieurs ont imaginé une nouvelle interface de commande potentielle pour des environnements en réali… [+2385 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "FREDZONE"
      },
      id: "23",
      "author": "Melchior K.",
      "title": "X pourrait perdre jusqu’à 75 millions de dollars de recettes publicitaires d’ici la fin de l’année !",
      "description": "La migration de plus en plus soutenue des annonceurs risque de vraiment affecter les activités de X au cours des prochaines semaines. En effet, au cas où la situation ne rentrerait pas dans l’ordre, le réseau social pourrait perdre jusqu’à 75 millions de doll…",
      "url": "https://www.fredzone.org/x-pourrait-perdre-jusqua-75-millions-de-dollars-de-recettes-publicitaires-dici-la-fin-de-lannee-rmm112",
      "urlToImage": "https://www.fredzone.org/wp-content/uploads/2023/08/boliviainteligente-5jcUy1sfErg-unsplash-scaled.jpg",
      "publishedAt": "2023-11-26T18:35:19Z",
      "content": "La migration de plus en plus soutenue des annonceurs risque de vraiment affecter les activités de X au cours des prochaines semaines. En effet, au cas où la situation ne rentrerait pas dans lordre, l… [+3307 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Maison et Domotique"
      },
      id: "24",
      "author": "Cédric",
      "title": "Des problèmes de Wifi ? Voici 35 solutions pour les résoudre, en promotion pour le #BLACKFRIDAY: Netgear Orbi, TPLink, Linksys, Devolo, Eero, etc.",
      "description": "Ces dispositifs Wifi permettent d'étendre le wifi dans toute la maison. En promo lors du Black Friday, c'est une offre à ne pas louper !",
      "url": "https://www.maison-et-domotique.com/145055-wifi-netgear-orbi-tplink-linksys-devolo-eero-black-friday/",
      "urlToImage": "https://www.maison-et-domotique.com/wp-content/uploads/2021/11/orbi-black-friday.png",
      "publishedAt": "2023-11-26T13:29:37Z",
      "content": "Aujourd'hui, avec tous les appareils connectés que nous avons à la maison, que ce soit pour regarder de la vidéo à la demande, jouer en ligne, ou même avoir un système domotique stable, il est primor… [+3051 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Iphoneaddict.fr"
      },
      id: "25",
      "author": "Troufignou",
      "title": "Apple attaqué une nouvelle fois pour avoir « menacé » des syndiqués",
      "description": "Apple a déjà une histoire vis à vis de l’arrivée des syndicats dans ses couloirs. Obligation d’assister à des réunions anti-syndicats, création de faux syndicats, licenciement de syndiqués particulièrement actifs… On parlerait même d’interrogatoires dans cert…",
      "url": "https://iphoneaddict.fr/post/news-378940-apple-attaque-nouvelle-menace-syndiques",
      "urlToImage": "https://static.iphoneaddict.fr/wp-content/uploads/2023/06/Apple-Store-Londres-1.jpg",
      "publishedAt": "2023-11-26T10:16:07Z",
      "content": "Apple a déjà une histoire vis à vis de l’arrivée des syndicats dans ses couloirs. Obligation d’assister à des réunions anti-syndicats, création de faux syndicats, licenciement de syndiqués particuliè… [+1431 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "ZDNet France"
      },
      id: "26",
      "author": "Frédéric Charles",
      "title": "OpenAI : la magie du Ctrl-Z a t-elle opéré ?",
      "description": "Quelles leçons tirer de cette semaine folle, quand OpenAI a eu 3 CEO différents.\r\nPour revenir à la situation de départ ? Pas vraiment !",
      "url": "https://www.zdnet.fr/blogs/green-si/openai-la-magie-du-ctrl-z-a-t-elle-opere-39962620.htm",
      "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiT85Yj6nPVN0E_MtikgGPAEBLhrmeu8OppzMv-CRl0SMGR07yR7tDjIKozCUkDXmJX63HPv2sTgVTX1lVOMKJBS02Bc3sm6y7Vu00OV4R_-FkLqo1wyM93HIfig2nULA3pab-X7FA1Iidwtv9sx1RUUTnjW6sjEau46vVkQ1aDozq8b-dWBxaHurLaL66/w640-h373/image_2023-11-26_154652058.png",
      "publishedAt": "2023-11-26T17:35:01Z",
      "content": "Le billet précédent soulevait toutes les interrogations sur l'IA générative que posait le départ de Sam Altman d'OpenAI, débarqué par le board de l'organisation à but non lucratif et qui contrôle la … [+7682 chars]"
  },
  {
      "source": {
          "id": "le-monde",
          "name": "Le Monde"
      },
      id: "27",
      "author": "Le Monde avec AFP",
      "title": "Le prestigieux Booker Prize britannique décerné à l’écrivain irlandais Paul Lynch",
      "description": "Dans « Prophet Song », son cinquième roman, l’auteur narre l’histoire d’une Irlande qui sombre dans le totalitarisme d’extrême droite et la violence.",
      "url": "https://www.lemonde.fr/livres/article/2023/11/27/le-prestigieux-booker-prize-britannique-decerne-a-l-ecrivain-irlandais-paul-lynch_6202495_3260.html",
      "urlToImage": "https://img.lemde.fr/2023/11/26/0/0/5145/3430/1440/960/60/0/0129a36_cda627e6fbd0451a9346fed5021a9181-0-b9044366bcd14ab09a2ee746c7b77fd3.jpg",
      "publishedAt": "2023-11-26T23:04:18Z",
      "content": "Paul Lynch au diner de remise du Booker Prize, à Londres, le 26 novembre 2023. ALBERTO PEZZALI / AP\r\nLe prestigieux prix littéraire britannique Booker Prize a été décerné à lauteur irlandais Paul Lyn… [+3700 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Le Soir"
      },
      id: "28",
      "author": "Thomas Netens",
      "title": "L’application Bourse cache un détail surprenant",
      "description": "L’application Bourse est installée par défaut sur l’iPhone. Le design de l’application n’est pas du tout anodin. il s’agit d’un subtil clin d’oeil de la part de Steve Jobs. L’application Bourse de l’iPhone, souvent reléguée au second plan, renferme un secret …",
      "url": "https://belgium-iphone.lesoir.be/2023/11/26/lapplication-bourse-cache-un-detail-surprenant/",
      "urlToImage": "https://belgium-iphone.lesoir.be/wp-content/uploads/2023/11/Application-Bourse-iPhone-1068x580.jpg",
      "publishedAt": "2023-11-26T13:04:20Z",
      "content": "Lapplication Bourse est installée par défaut sur liPhone. Le design de l’application n’est pas du tout anodin. il s’agit d’un subtil clin d’oeil de la part de Steve Jobs.\r\nLapplication Bourse de liPh… [+1891 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "iGeneration"
      },
      id: "29",
      "author": "Christophe Laporte",
      "title": "Le Japon pleure l'iPhone mini",
      "description": "Pour beaucoup, l’arrêt de la commercialisation de l’iPhone mini est un non-événement. Il y a cependant une exception à la règle. Lors de la semaine de la commercialisation de l’iPhone 15, de nombreux Japonais se sont « rués » vers les iPhone 12 mini et iPhone…",
      "url": "https://www.igen.fr/iphone/2023/11/le-japon-pleure-liphone-mini-140697",
      "urlToImage": "https://cdn.mgig.fr/2023/11/mga-c0b864f4-w375-w1500-w750_accroche.jpg",
      "publishedAt": "2023-11-26T20:12:03Z",
      "content": "Pour beaucoup, larrêt de la commercialisation de liPhone mini est un non-événement. Il y a cependant une exception à la règle. Lors de la semaine de la commercialisation de liPhone 15, de nombreux Ja… [+3097 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "MacGeneration"
      },
      id: "30",
      "author": "Christophe Laporte",
      "title": "Elon Musk : un tweet qui pourrait coûter très cher à X (Twitter)",
      "description": "Avec l’affaire OpenAI, on a presque fini par en oublier les « déboires » d’Elon Musk. Son message d'acquiescement sous un post antisémite avait été la goutte de trop pour bon nombre d’annonceurs à commencer par Apple et IBM qui avaient décidé d’arrêter les pu…",
      "url": "https://www.macg.co/ailleurs/2023/11/elon-musk-un-tweet-qui-pourrait-couter-tres-cher-x-twitter-140743",
      "urlToImage": "https://cdn.mgig.fr/2023/11/mga-0eebd287-w375-w1500-w750_accroche.jpg",
      "publishedAt": "2023-11-26T07:00:21Z",
      "content": "Avec laffaire OpenAI, on a presque fini par en oublier les « déboires » dElon Musk. Son message d'acquiescement sous un post antisémite avait été la goutte de trop pour bon nombre dannonceurs à comme… [+2007 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Le Soir"
      },
      id: "31",
      "author": "Lionel Iglesias",
      "title": "Comment Tetris a conquis le monde, à partir de l’URSS",
      "description": "Les jeux vidéo Tetris sont devenus des phénomènes mondiaux, mais leur destin aurait pu être bien différent. Né à Moscou en pleine guerre froide, le parcours de Tetris a été mouvementé avant de pouvoir arriver sur nos consoles. Retour sur la création du puzzle…",
      "url": "https://geeko.lesoir.be/2023/11/26/comment-tetris-a-conquis-le-monde-a-partir-de-lurss/",
      "urlToImage": "https://geeko-media.lesoir.be/wp-content/uploads/2023/11/SavoirsInsolitesTetris-1068x580.jpg",
      "publishedAt": "2023-11-26T14:31:53Z",
      "content": "Les jeux vidéo Tetris sont devenus des phénomènes mondiaux, mais leur destin aurait pu être bien différent. Né à Moscou en pleine guerre froide, le parcours de Tetris a été mouvementé avant de pouvoi… [+4312 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Phonandroid"
      },
      id: "32",
      "author": "David Igue",
      "title": "L’iPad 9 fait l’objet d’une baisse de prix exceptionnelle aujourd’hui",
      "description": "E.Leclerc propose une remise exceptionnelle sur l’iPad 9 (2021), seulement ce dimanche 26 novembre 2023. Le prix de la tablette revient à 292,80 € au lieu de 439 €. CLIQUEZ ICI POUR PROFITER DE CE BON PLAN Seulement ce dimanche...",
      "url": "https://www.phonandroid.com/lipad-9-fait-lobjet-dune-baisse-de-prix-exceptionnelle-aujourdhui.html",
      "urlToImage": "https://wp-pa.phonandroid.com/uploads/2023/05/iPad-9e-generation-2021.jpg",
      "publishedAt": "2023-11-26T10:26:12Z",
      "content": "E.Leclerc propose une remise exceptionnelle sur liPad 9 (2021), seulement ce dimanche 26 novembre 2023. Le prix de la tablette revient à 292,80 au lieu de 439 .\r\nCLIQUEZ ICI POUR PROFITER DE CE BON P… [+1402 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Le Dauphiné Libéré"
      },
      id: "33",
      "author": "JML",
      "title": "Numérique. Mais où va Elon Musk ?",
      "description": "Après une nouvelle fuite d’annonceurs et un énième dérapage du milliardaire Elon Musk, la réputation et l’avenir de la plateforme X (ex-Twitter) semblent compromis.",
      "url": "https://www.ledauphine.com/economie/2023/11/26/mais-ou-va-elon-musk",
      "urlToImage": "https://cdn-s-www.ledauphine.com/images/EDE48D2E-450A-4236-AB0A-3C3A752038DE/FB1200/photo-1700940386.jpg",
      "publishedAt": "2023-11-26T09:00:00Z",
      "content": "Pour Linda Yaccarino, la nouvelle directrice de X (ex-Twitter), la semaine dernière a probablement été longue. Deux jours après un nouveau dérapage complotiste de son patron, accusé par la Maison Bla… [+793 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Lalibre.be"
      },
      id: "34",
      "author": "AFP -",
      "title": "Le romancier irlandais Paul Lynch remporte le prestigieux Booker Prize 2023",
      "description": "Le prestigieux prix littéraire britannique Booker Prize a été décerné à l'auteur irlandais Paul Lynch pour son roman dystopique \"Prophet Song\" lors d'une cérémonie dimanche soir à Londres. ...",
      "url": "https://www.lalibre.be/culture/livres-bd/2023/11/26/le-romancier-irlandais-paul-lynch-remporte-le-prestigieux-booker-prize-2023-ACVHPHXTNRCXRPC7AZOZ6E4UXI/",
      "urlToImage": "https://www.lalibre.be/resizer/cqbtL37fdh-kVJf1RJsFMZHRWB4=/1200x630/filters:format(jpeg):focal(2522x871:2532x861):watermark(cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/OIO44DUUUNC2DB5T3FIJECBT5U.png,0,-0,0,100)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/3YMW6CYKTZHNXI2MFOQ4RWN37A.jpg",
      "publishedAt": "2023-11-26T22:36:15Z",
      "content": "\"Ce livre n'a pas été facile à écrire. Une part de moi pensait que j'allais mettre ma carrière en péril en l'écrivant - mais je devais quand même aller au bout\", a déclaré Paul Lynch après sa victoir… [+3117 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Tomshardware.fr"
      },
      id: "35",
      "author": "Juliette Defrance",
      "title": "Black Friday 2023 : dernière chance pour profiter de ces promotions exceptionnelles !",
      "description": "L'incroyable week-end du Black Friday touche à sa fin, ce qui signifie que vous n'avez plus que quelques heures pour profiter des réductions incroyables dont vous font bénéficier un grand nombre d'enseignes. Pour vous faire gagner du temps, nous avons sélecti…",
      "url": "https://www.tomshardware.fr/black-friday-2023-derniere-chance-pour-profiter-de-ces-promotions-exceptionnelles/",
      "urlToImage": "https://www.tomshardware.fr/content/uploads/sites/3/2023/11/Black-Friday-2023-derniere-minute-e1701007703803.jpg",
      "publishedAt": "2023-11-26T17:30:00Z",
      "content": "L’incroyable week-end du Black Friday touche à sa fin, ce qui signifie que vous n’avez plus que quelques heures pour profiter des réductions incroyables dont vous font bénéficier un grand nombre d’en… [+3892 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Numerama"
      },
      id: "36",
      "author": "Audrey Arouche",
      "title": "Black Friday : Voici les meilleures offres encore en stock ce dimanche",
      "description": "Les promos du Black Friday vont encore durer entre un et trois jours selon les vendeurs. Les meilleures offres de la semaine sont encore disponibles et, comme tous les ans, Numerama en a fait une sélection pour vous.",
      "url": "https://www.numerama.com/tech/1570911-black-friday-voici-les-meilleures-offres-encore-en-stock-ce-dimanche.html",
      "urlToImage": "https://www.numerama.com/wp-content/uploads/2023/11/black-friday-une-3.jpg",
      "publishedAt": "2023-11-26T08:53:00Z",
      "content": "Les promos du Black Friday vont encore durer entre un et trois jours selon les vendeurs. Les meilleures offres de la semaine sont encore disponibles et, comme tous les ans, Numerama en a fait une sél… [+16397 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "L'Express"
      },
      id: "37",
      "author": "Etienne Girard",
      "title": "\"Le Bureau des Légendes\", \"Slow Horses\"... Pourquoi les séries d'espionnage nous captivent",
      "description": "Les productions sur les espions ne cessent de s’empiler, avec quelques ratés et d’épatantes réussites, comme \"Slow Horses\", dont la saison 3 débarque le 1er décembre sur Apple TV+.",
      "url": "https://www.lexpress.fr/societe/le-bureau-des-legendes-slow-horses-pourquoi-les-series-despionnage-nous-captivent-OGWGIOF4NZA7LD7NXOY5WK6WSE/",
      "urlToImage": "https://www.lexpress.fr/resizer/0dFuPa3pvNPNpUFbDSj9t1nFgjE=/1200x630/filters:focal(815x453:825x463)/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/GLYD7ZIAUZB57NH5DODJOSUBTE.jpg",
      "publishedAt": "2023-11-26T07:30:00Z",
      "content": "Suggestion pour les producteurs dagendas en mal dinspiration : ajouter dans leurs semainiers, en plus du nom du saint et de la recette de cuisine à tester, un épisode de série despionnage à visionner… [+3280 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Francetvinfo.fr"
      },
      id: "38",
      "author": null,
      "title": "Qui sont les grands gagnants du feuilleton Sam Altman chez OpenAI ?",
      "description": "Le limogeage de Sam Altman, son embauche chez Microsoft, puis son retour à la tête d’OpenAI – à l’origine de chatGPT – ont tenu la planète tech en haleine, ces derniers jours. Le monde de l’intelligence artificielle n’est plus tout à fait le même. Alors qui s…",
      "url": "https://www.francetvinfo.fr/replay-radio/nouveau-monde/qui-sont-les-grands-gagnants-du-feuilleton-sam-altman-chez-openai_6178167.html",
      "urlToImage": "https://www.francetvinfo.fr/pictures/e3U8t-5TfZN29jH2hwMiZGnUP8s/1500x843/2023/11/25/063-1778708098-65622d189b03e665919102.jpg",
      "publishedAt": "2023-11-26T09:42:07Z",
      "content": "Steve Jobs avait mis douze ans pour revenir à la tête dApple. Jack Dorsey chez Twitter, sept ans. Sam Altman, lui, na même pas mis cinq jours. Cest lui le premier grand gagnant de ce vaudeville inatt… [+2561 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "FRANCE 24 English"
      },
      id: "39",
      "author": "FRANCE 24",
      "title": "L'écrivain irlandais Paul Lynch remporte le Booker Prize britannique 2023",
      "description": "Le prestigieux prix littéraire britannique Booker Prize a été décerné, dimanche soir, à l'Irlandais Paul Lynch pour son roman dystopique \"Prophet Song\". Cette distinction récompense les romans écrits en anglais.",
      "url": "https://www.france24.com/fr/culture/20231126-l-%C3%A9crivain-irlandais-paul-lynch-remporte-le-booker-prize-britannique-2023",
      "urlToImage": "https://s.france24.com/media/display/58456558-8cb4-11ee-9428-005056bf30b7/w:1280/p:16x9/000_34633DZ.jpg",
      "publishedAt": "2023-11-26T23:38:47Z",
      "content": "Le prestigieux prix littéraire britannique Booker Prize a été décerné, dimanche soir, à l'Irlandais Paul Lynch pour son roman dystopique \"Prophet Song\". Cette distinction récompense les romans écrits… [+3769 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "BFMTV"
      },
      id: "40",
      "author": "Louis Mbembe",
      "title": "Lassé de Netflix? Voici cinq plateformes gratuites pour regarder des films et séries",
      "description": "Affranchissez-vous des plateformes de streaming populaires avec cette sélection de services gratuits et légaux pour regarder des films et des séries.",
      "url": "https://www.bfmtv.com/tech/actualites/streaming/lasse-de-netflix-voici-cinq-plateformes-gratuites-pour-regarder-des-films-et-series_AV-202311250098.html",
      "urlToImage": "https://images.bfmtv.com/L89biCbdeKkHMUVQI7jKet8HRZE=/0x105:2048x1257/2048x0/images/Television-1728811.jpg",
      "publishedAt": "2023-11-26T06:02:24Z",
      "content": "Affranchissez-vous des plateformes de streaming populaires avec cette sélection de services gratuits et légaux pour regarder des films et des séries.\r\nSi le streaming vidéo rime souvent avec Netflix … [+4890 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Le Soir"
      },
      id: "41",
      "author": "Thomas Netens",
      "title": "Fumer près de votre Mac : une très mauvaise idée",
      "description": "Fumer tue. Ca, on le sait. Mais fumer réduit également en cendres votre garantie Apple. En effet, plusieurs consommateurs ont eu la mauvaise expérience de voir leur garantie annulée. Des utilisateurs d’Apple aux États-Unis font face à une découverte inattendu…",
      "url": "https://belgium-iphone.lesoir.be/2023/11/26/fumer-pres-de-votre-mac-une-tres-mauvaise-idee/",
      "urlToImage": "https://belgium-iphone.lesoir.be/wp-content/uploads/2023/11/uitbundig-VM4npsIWUb8-unsplash-1068x580.jpg",
      "publishedAt": "2023-11-26T17:04:42Z",
      "content": "Fumer tue. Ca, on le sait. Mais fumer réduit également en cendres votre garantie Apple. En effet, plusieurs consommateurs ont eu la mauvaise expérience de voir leur garantie annulée.\r\nDes utilisateur… [+1733 chars]"
  }
]

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/news' element={<News/>}>
            <Route index element={<NewsList news={data}/>} />
            <Route path=':id' element={<NewsListItem news={data}/>} />
          </Route>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
        </main>
      </BrowserRouter>      
    </>
  )
}

export default App
 