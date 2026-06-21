// Lebensmitteldatenbank – Nährwerte pro 100g
// Format: { n:"Name", k:kcal, e:Eiweiß(g), z:Zucker(g), kh:Kohlenhydrate(g), f:Fett(g),
//           sf:ges.Fettsäuren(g), lys:Lysin(mg), arg:Arginin(mg), s:Stückgewicht(g) }
//
// So editieren (direkt in GitHub):
//   1. Datei öffnen → Stift-Symbol klicken
//   2. Neue Zeile hinzufügen, z.B.: { n:"Mein Lebensmittel", k:100, e:5.0, z:2.0, kh:15.0, f:3.0 },
//   3. "Commit changes" klicken – fertig!
//
// Tipp: Die App sucht hier zuerst. Wird etwas nicht gefunden, sucht sie
// automatisch online (Open Food Facts). Einträge hier sind zuverlässiger.

const DB = [

  // ── OBST ──────────────────────────────────────────────────────────────────
  { n:"Apfel",              k: 52, e: 0.3, z:10.3, kh:13.8, f: 0.2, sf: 0.0, lys: 13, arg:  6 },
  { n:"Ananas",             k: 50, e: 0.5, z: 9.9, kh:13.1, f: 0.1, sf: 0.0, lys: 28, arg: 15 },
  { n:"Avocado",            k:160, e: 2.0, z: 0.4, kh: 8.5, f:15.0, sf: 2.1, lys: 72, arg: 58 },
  { n:"Banane",             k: 89, e: 1.1, z:12.2, kh:22.8, f: 0.3, sf: 0.1, lys: 50, arg: 49 },
  { n:"Birne",              k: 57, e: 0.4, z: 9.8, kh:15.2, f: 0.1, sf: 0.0, lys: 15, arg:  8 },
  { n:"Blaubeeren",         k: 57, e: 0.7, z: 9.7, kh:14.5, f: 0.3, sf: 0.0, lys: 11, arg: 36 },
  { n:"Erdbeeren",          k: 32, e: 0.7, z: 4.9, kh: 7.7, f: 0.3, sf: 0.0, lys: 25, arg: 27, s: 12 },
  { n:"Grapefruit",         k: 42, e: 0.8, z: 6.9, kh:10.7, f: 0.1, sf: 0.0, lys: 25, arg: 13 },
  { n:"Himbeeren",          k: 52, e: 1.2, z: 4.4, kh:11.9, f: 0.7, sf: 0.0, lys: 20, arg: 20 },
  { n:"Heidelbeeren",       k: 57, e: 0.7, z: 9.7, kh:14.5, f: 0.3, sf: 0.0, lys: 11, arg: 36 },
  { n:"Kirschen",           k: 63, e: 1.1, z:12.8, kh:16.0, f: 0.3, sf: 0.0, lys: 40, arg: 30, s:  7 },
  { n:"Kiwi",               k: 61, e: 1.1, z: 9.0, kh:14.7, f: 0.5, sf: 0.0, lys: 48, arg: 37 },
  { n:"Mandarine",          k: 53, e: 0.8, z:10.6, kh:13.3, f: 0.2, sf: 0.0, lys: 28, arg: 15 },
  { n:"Mango",              k: 65, e: 0.5, z:13.7, kh:17.0, f: 0.4, sf: 0.1, lys: 61, arg: 27 },
  { n:"Melone",             k: 34, e: 0.8, z: 7.3, kh: 8.6, f: 0.2, sf: 0.0, lys: 10, arg: 21 },
  { n:"Wassermelone",       k: 30, e: 0.6, z: 6.2, kh: 7.6, f: 0.2, sf: 0.0, lys: 16, arg: 56 },
  { n:"Orange",             k: 47, e: 0.9, z: 8.5, kh:11.8, f: 0.1, sf: 0.0, lys: 47, arg: 25 },
  { n:"Pfirsich",           k: 39, e: 0.9, z: 8.4, kh: 9.5, f: 0.1, sf: 0.0, lys: 24, arg: 12 },
  { n:"Pflaume",            k: 46, e: 0.7, z: 9.9, kh:11.4, f: 0.3, sf: 0.0, lys: 22, arg: 10 },
  { n:"Weintrauben",        k: 69, e: 0.6, z:15.5, kh:18.1, f: 0.2, sf: 0.1, lys: 18, arg: 29 },
  { n:"Zitrone",            k: 29, e: 1.1, z: 2.5, kh: 9.3, f: 0.3, sf: 0.0, lys: 28, arg: 17 },

  // ── GEMÜSE ────────────────────────────────────────────────────────────────
  { n:"Aubergine",          k: 25, e: 1.0, z: 3.5, kh: 5.9, f: 0.2, sf: 0.0, lys: 31, arg: 44 },
  { n:"Blumenkohl",         k: 25, e: 1.9, z: 1.9, kh: 5.0, f: 0.3, sf: 0.0, lys: 82, arg: 64 },
  { n:"Brokkoli",           k: 34, e: 2.8, z: 1.7, kh: 7.0, f: 0.4, sf: 0.0, lys:129, arg: 77 },
  { n:"Champignons",        k: 22, e: 3.1, z: 1.7, kh: 3.3, f: 0.3, sf: 0.1, lys: 93, arg: 84 },
  { n:"Chicoree",           k: 23, e: 1.7, z: 1.4, kh: 4.7, f: 0.2, sf: 0.0, lys: 30, arg: 30 },
  { n:"Erbsen",             k: 81, e: 5.4, z: 5.5, kh:14.4, f: 0.4, sf: 0.1, lys:317, arg:432 },
  { n:"Fenchel",            k: 31, e: 1.2, z: 3.9, kh: 7.3, f: 0.2, sf: 0.0, lys: 36, arg: 62 },
  { n:"Gurke",              k: 16, e: 0.7, z: 1.7, kh: 3.6, f: 0.1, sf: 0.0, lys: 24, arg: 26 },
  { n:"Kartoffel",          k: 77, e: 2.0, z: 0.7, kh:17.0, f: 0.1, sf: 0.0, lys:110, arg: 71 },
  { n:"Knoblauch",          k:149, e: 6.4, z: 1.0, kh:33.1, f: 0.5, sf: 0.1, lys:273, arg:634 },
  { n:"Kohlrabi",           k: 27, e: 1.8, z: 3.6, kh: 6.2, f: 0.2, sf: 0.0, lys: 57, arg: 50 },
  { n:"Kopfsalat",          k: 14, e: 1.4, z: 1.6, kh: 2.2, f: 0.2, sf: 0.0, lys: 52, arg: 43 },
  { n:"Kürbis",             k: 26, e: 1.0, z: 2.8, kh: 6.5, f: 0.1, sf: 0.0, lys: 36, arg: 33 },
  { n:"Lauch",              k: 61, e: 1.5, z: 3.9, kh:14.2, f: 0.3, sf: 0.0, lys: 46, arg: 60 },
  { n:"Möhre",              k: 41, e: 0.9, z: 4.7, kh: 9.6, f: 0.2, sf: 0.0, lys: 38, arg: 30, s: 80 },
  { n:"Karotte",            k: 41, e: 0.9, z: 4.7, kh: 9.6, f: 0.2, sf: 0.0, lys: 38, arg: 30, s: 80 },
  { n:"Paprika rot",        k: 31, e: 1.0, z: 4.2, kh: 7.3, f: 0.3, sf: 0.1, lys: 23, arg: 31 },
  { n:"Paprika gelb",       k: 27, e: 1.0, z: 2.9, kh: 6.3, f: 0.2, sf: 0.0, lys: 20, arg: 25 },
  { n:"Paprika grün",       k: 20, e: 0.9, z: 2.6, kh: 4.6, f: 0.2, sf: 0.0, lys: 23, arg: 31 },
  { n:"Pastinake",          k: 75, e: 1.3, z: 4.8, kh:17.9, f: 0.3, sf: 0.0, lys: 55, arg: 50 },
  { n:"Pilze",              k: 22, e: 3.1, z: 1.7, kh: 3.3, f: 0.3, sf: 0.1, lys: 93, arg: 84 },
  { n:"Porree",             k: 61, e: 1.5, z: 3.9, kh:14.2, f: 0.3, sf: 0.0, lys: 46, arg: 60 },
  { n:"Radieschen",         k: 16, e: 0.7, z: 1.9, kh: 3.4, f: 0.1, sf: 0.0, lys: 22, arg: 37 },
  { n:"Rosenkohl",          k: 43, e: 3.4, z: 1.8, kh: 9.0, f: 0.5, sf: 0.1, lys:162, arg: 92 },
  { n:"Rote Bete",          k: 43, e: 1.6, z: 6.8, kh: 9.6, f: 0.1, sf: 0.0, lys: 40, arg: 24 },
  { n:"Rotkohl",            k: 31, e: 1.5, z: 3.8, kh: 7.4, f: 0.1, sf: 0.0, lys: 62, arg: 30 },
  { n:"Sellerie",           k: 42, e: 1.5, z: 2.5, kh: 9.2, f: 0.3, sf: 0.1, lys: 32, arg: 43 },
  { n:"Spargel",            k: 20, e: 2.2, z: 1.7, kh: 3.7, f: 0.1, sf: 0.0, lys: 84, arg: 81 },
  { n:"Spinat",             k: 23, e: 2.9, z: 0.4, kh: 3.6, f: 0.4, sf: 0.1, lys:174, arg:162 },
  { n:"Süßkartoffel",       k: 86, e: 1.6, z: 4.2, kh:20.1, f: 0.1, sf: 0.0, lys: 38, arg: 45 },
  { n:"Tomate",             k: 18, e: 0.9, z: 2.6, kh: 3.9, f: 0.2, sf: 0.0, lys: 22, arg: 15, s:100 },
  { n:"Weißkohl",           k: 25, e: 1.3, z: 3.8, kh: 6.1, f: 0.1, sf: 0.0, lys: 52, arg: 57 },
  { n:"Wirsing",            k: 28, e: 2.0, z: 2.8, kh: 5.4, f: 0.4, sf: 0.1, lys: 95, arg: 72 },
  { n:"Zucchini",           k: 17, e: 1.2, z: 1.6, kh: 3.4, f: 0.3, sf: 0.1, lys: 47, arg: 47 },
  { n:"Zwiebel",            k: 40, e: 1.1, z: 4.7, kh: 9.3, f: 0.1, sf: 0.0, lys: 50, arg: 82 },

  // ── GETREIDE & BROT ───────────────────────────────────────────────────────
  { n:"Brötchen",           k:270, e: 9.0, z: 2.5, kh:51.0, f: 3.0, sf: 0.6, lys: 90, arg:250 },
  { n:"Körnerbrötchen",     k:265, e:10.0, z: 2.0, kh:45.0, f: 3.5, sf: 0.5, lys:110, arg:300 },
  { n:"Vollkornbrötchen",   k:250, e: 9.5, z: 1.5, kh:43.0, f: 3.0, sf: 0.5, lys:130, arg:350 },
  { n:"Laugenbrezel",       k:310, e: 9.0, z: 1.5, kh:62.0, f: 1.5, sf: 0.2, lys:100, arg:270 },
  { n:"Cornflakes",         k:373, e: 7.5, z: 7.0, kh:84.0, f: 0.8, sf: 0.2, lys:120, arg:280 },
  { n:"Couscous roh",       k:376, e:12.8, z: 0.8, kh:77.4, f: 0.6, sf: 0.1, lys:195, arg:440 },
  { n:"Couscous gekocht",   k:112, e: 3.8, z: 0.2, kh:23.2, f: 0.2, sf: 0.0, lys: 58, arg:132 },
  { n:"Haferflocken",       k:370, e:13.5, z: 1.0, kh:58.7, f: 7.0, sf: 1.2, lys:580, arg:847 },
  { n:"Müsli",              k:370, e:10.0, z:12.0, kh:62.0, f: 6.0, sf: 1.0, lys:250, arg:400 },
  { n:"Nudeln roh",         k:350, e:12.0, z: 3.0, kh:71.0, f: 1.5, sf: 0.3, lys:160, arg:360 },
  { n:"Nudeln gekocht",     k:130, e: 5.0, z: 0.5, kh:25.0, f: 0.9, sf: 0.1, lys: 60, arg:134 },
  { n:"Pasta roh",          k:350, e:12.0, z: 3.0, kh:71.0, f: 1.5, sf: 0.3, lys:160, arg:360 },
  { n:"Pasta gekocht",      k:130, e: 5.0, z: 0.5, kh:25.0, f: 0.9, sf: 0.1, lys: 60, arg:134 },
  { n:"Quinoa roh",         k:368, e:14.1, z: 5.3, kh:64.2, f: 6.1, sf: 0.7, lys:588, arg:1091 },
  { n:"Quinoa gekocht",     k:120, e: 4.4, z: 0.9, kh:21.3, f: 1.9, sf: 0.2, lys:190, arg:354 },
  { n:"Reis roh",           k:360, e: 7.0, z: 0.1, kh:77.0, f: 0.7, sf: 0.1, lys:270, arg:560 },
  { n:"Reis gekocht",       k:130, e: 2.7, z: 0.0, kh:28.0, f: 0.3, sf: 0.0, lys: 98, arg:203 },
  { n:"Toastbrot",          k:265, e: 8.5, z: 3.0, kh:49.0, f: 3.5, sf: 0.8, lys:110, arg:280 },
  { n:"Vollkornbrot",       k:241, e: 8.5, z: 1.0, kh:45.0, f: 1.7, sf: 0.4, lys:220, arg:440 },
  { n:"Weißbrot",           k:265, e: 8.5, z: 3.0, kh:49.0, f: 3.5, sf: 0.8, lys:110, arg:280 },

  // ── MILCH & MILCHPRODUKTE ─────────────────────────────────────────────────
  { n:"Butter",             k:741, e: 0.6, z: 0.1, kh: 0.6, f:83.0, sf:51.4, lys: 27, arg: 25 },
  { n:"Frischkäse",         k:150, e: 6.0, z: 3.0, kh: 3.5, f:11.0, sf: 6.8, lys:430, arg:320 },
  { n:"Gouda",              k:356, e:25.0, z: 0.1, kh: 2.3, f:27.0, sf:17.4, lys:2060, arg:920 },
  { n:"Joghurt natur",      k: 61, e: 3.5, z: 4.7, kh: 4.7, f: 3.5, sf: 2.1, lys:260, arg:110 },
  { n:"Joghurt 0,1%",       k: 37, e: 3.5, z: 3.8, kh: 4.0, f: 0.1, sf: 0.0, lys:260, arg:110 },
  { n:"Joghurt 1,5%",       k: 47, e: 3.8, z: 3.8, kh: 4.0, f: 1.5, sf: 1.0, lys:260, arg:110 },
  { n:"Joghurt 0%",         k: 47, e: 4.3, z: 4.0, kh: 4.0, f: 0.1, sf: 0.1, lys:340, arg: 90 },
  { n:"Käse",               k:330, e:25.0, z: 0.1, kh: 0.5, f:27.0, sf:17.4, lys:1800, arg:800 },
  { n:"Mozzarella",         k:254, e:18.0, z: 0.0, kh: 2.2, f:20.0, sf:12.6, lys:1500, arg:680 },
  { n:"Quark mager",        k: 67, e:13.5, z: 3.2, kh: 4.1, f: 0.2, sf: 0.1, lys:980, arg:440 },
  { n:"Quark",              k:112, e:11.0, z: 2.5, kh: 3.5, f: 5.1, sf: 3.3, lys:850, arg:380 },
  { n:"Sahne",              k:292, e: 2.0, z: 3.3, kh: 3.3, f:29.0, sf:19.1, lys:160, arg: 70 },
  { n:"Schlagsahne",       k:302, e: 2.3, z: 2.7, kh: 2.7, f:31.0, sf:20.4, lys:180, arg: 75 },
  { n:"Joghurt 3,5%",      k: 61, e: 3.5, z: 4.0, kh: 4.7, f: 3.5, sf: 2.1, lys:260, arg:110 },
  { n:"Vollmilch",          k: 61, e: 3.2, z: 4.8, kh: 4.8, f: 3.5, sf: 2.1, lys:230, arg: 90 },
  { n:"Halbfettmilch",      k: 47, e: 3.3, z: 4.9, kh: 4.9, f: 1.5, sf: 0.9, lys:250, arg: 95 },

  // ── FLEISCH & FISCH ───────────────────────────────────────────────────────
  { n:"Ei",                 k:155, e:12.6, z: 0.4, kh: 1.1, f:11.2, sf: 3.1, lys:912, arg:756 },
  { n:"Eier",               k:155, e:12.6, z: 0.4, kh: 1.1, f:11.2, sf: 3.1, lys:912, arg:756 },
  { n:"Garnelen",           k: 99, e:19.0, z: 0.0, kh: 1.0, f: 0.9, sf: 0.2, lys:1718, arg:1454 },
  { n:"Hackfleisch",        k:200, e:18.0, z: 0.0, kh: 0.0, f:14.0, sf: 6.5, lys:1620, arg:1250 },
  { n:"Hähnchenbrust",      k:120, e:23.0, z: 0.0, kh: 0.0, f: 3.0, sf: 0.9, lys:2020, arg:1370 },
  { n:"Hühnchen",           k:120, e:23.0, z: 0.0, kh: 0.0, f: 3.0, sf: 0.9, lys:2020, arg:1370 },
  { n:"Lachs",              k:208, e:20.0, z: 0.0, kh: 0.0, f:13.0, sf: 3.2, lys:1820, arg:1220 },
  { n:"Rindfleisch",        k:160, e:21.0, z: 0.0, kh: 0.0, f: 7.0, sf: 3.1, lys:1830, arg:1420 },
  { n:"Schinken",           k:145, e:20.0, z: 0.5, kh: 0.5, f: 6.0, sf: 2.2, lys:1780, arg:1350 },
  { n:"Schweinefleisch",    k:180, e:21.0, z: 0.0, kh: 0.0, f: 9.0, sf: 3.4, lys:1760, arg:1340 },
  { n:"Thunfisch Dose",     k:130, e:28.0, z: 0.0, kh: 0.0, f: 3.0, sf: 0.8, lys:2460, arg:1650 },
  { n:"Thunfisch",          k:144, e:23.3, z: 0.0, kh: 0.0, f: 4.9, sf: 1.4, lys:2300, arg:1520 },

  // ── HÜLSENFRÜCHTE ─────────────────────────────────────────────────────────
  { n:"Edamame",            k:121, e:11.0, z: 2.2, kh: 8.9, f: 5.2, sf: 0.6, lys:648, arg:838 },
  { n:"Kichererbsen roh",   k:364, e:19.0, z: 2.0, kh:61.0, f: 6.0, sf: 0.6, lys:1380, arg:2210 },
  { n:"Kichererbsen",       k:164, e: 8.9, z: 1.0, kh:27.0, f: 2.6, sf: 0.3, lys:520, arg:840 },
  { n:"Linsen roh",         k:352, e:25.0, z: 2.0, kh:60.0, f: 1.1, sf: 0.2, lys:1720, arg:2100 },
  { n:"Linsen",             k:116, e: 9.0, z: 1.5, kh:20.0, f: 0.4, sf: 0.1, lys:624, arg:765 },
  { n:"Rote Linsen",        k:116, e: 9.0, z: 1.5, kh:20.0, f: 0.4, sf: 0.1, lys:624, arg:765 },
  { n:"Weiße Bohnen",       k:124, e: 8.7, z: 0.5, kh:22.1, f: 0.8, sf: 0.1, lys:612, arg:588 },

  // ── NÜSSE & SAMEN ─────────────────────────────────────────────────────────
  { n:"Cashews",                  k:553, e:18.2, z: 5.9, kh:30.2, f:43.9, sf: 7.7, lys: 938, arg:2123 },
  { n:"Chiasamen",                k:486, e:16.5, z: 0.0, kh:42.1, f:30.7, sf: 3.3, lys: 970, arg:2098 },
  { n:"Erdnüsse",                 k:567, e:25.8, z: 4.0, kh:16.1, f:49.2, sf: 6.8, lys: 926, arg:3086 },
  { n:"Erdnussbutter",            k:588, e:25.0, z: 6.0, kh:21.0, f:50.0, sf: 6.3, lys: 856, arg:2872 },
  { n:"Kürbiskerne",              k:559, e:30.0, z: 6.0, kh:14.0, f:46.0, sf: 8.7, lys:1090, arg:5353 },
  { n:"Kürbiskern",               k: 28, e: 1.5, z: 0.3, kh: 0.7, f: 2.3, sf: 0.4, lys:  55, arg: 268 },   // pro Stück (~5g)
  { n:"Leinsamen",                k:534, e:18.3, z: 1.6, kh:28.9, f:42.2, sf: 3.7, lys: 862, arg:2430 },
  { n:"Mandeln",                  k:579, e:21.2, z: 4.4, kh:21.7, f:49.4, sf: 3.8, lys: 577, arg:2447 },
  { n:"Sesam",                    k:573, e:17.7, z: 0.4, kh:23.4, f:48.0, sf: 6.7, lys: 648, arg:2630 },
  { n:"Sonnenblumenkerne",        k:584, e:20.8, z: 3.4, kh:20.0, f:51.5, sf: 4.5, lys: 758, arg:2398 },
  { n:"Walnüsse",                 k:654, e:15.2, z: 2.6, kh:13.7, f:65.2, sf: 6.1, lys: 424, arg:2278 },

  // ── GETRÄNKE ──────────────────────────────────────────────────────────────
  { n:"Apfelsaft",                k: 46, e: 0.1, z: 9.9, kh:11.0, f: 0.1, sf: 0.0, lys:  6, arg:  5 },
  { n:"Espresso",                 k:  2, e: 0.1, z: 0.0, kh: 0.0, f: 0.1, sf: 0.0, lys:  5, arg:  1 },
  { n:"Espresso Doppio",          k:  4, e: 0.2, z: 0.0, kh: 0.0, f: 0.2, sf: 0.0, lys: 10, arg:  2 },
  { n:"Kaffee",                   k:  2, e: 0.3, z: 0.0, kh: 0.0, f: 0.1, sf: 0.0, lys:  5, arg:  1 },
  { n:"Kaffee Crema",             k:  5, e: 0.2, z: 0.0, kh: 0.1, f: 0.1, sf: 0.0, lys:  5, arg:  1 },
  { n:"Kaffeebohnen",             k:  2, e: 0.3, z: 0.0, kh: 0.0, f: 0.1, sf: 0.0, lys:  5, arg:  1 },
  { n:"Filterkaffee",             k:  2, e: 0.3, z: 0.0, kh: 0.0, f: 0.1, sf: 0.0, lys:  5, arg:  1 },
  { n:"Americano",                k:  2, e: 0.1, z: 0.0, kh: 0.0, f: 0.1, sf: 0.0, lys:  5, arg:  1 },
  { n:"Cappuccino",               k: 80, e: 4.0, z: 3.5, kh: 6.0, f: 3.0, sf: 1.9, lys:290, arg:112 },   // Standard ~200ml
  { n:"kleiner Cappuccino",       k: 60, e: 3.0, z: 2.5, kh: 4.5, f: 2.5, sf: 1.4, lys:216, arg: 84 },
  { n:"großer Cappuccino",        k:120, e: 7.0, z: 5.0, kh: 9.0, f: 5.0, sf: 3.1, lys:504, arg:196 },
  { n:"Latte Macchiato",          k: 55, e: 2.8, z: 4.8, kh: 4.8, f: 2.0, sf: 1.3, lys:202, arg: 78 },
  { n:"Schuss Milch",             k: 20, e: 1.0, z: 1.5, kh: 1.5, f: 0.9, sf: 0.5, lys: 60, arg: 23 },   // ~25ml Vollmilch
  { n:"Schuss Sojamilch",         k: 11, e: 0.9, z: 0.3, kh: 0.8, f: 0.4, sf: 0.1, lys: 50, arg: 58 },
  { n:"Geflügelbrühe",            k:  7, e: 1.0, z: 0.0, kh: 0.3, f: 0.1, sf: 0.0, lys: 75, arg: 60 },
  { n:"Orangensaft",              k: 45, e: 0.7, z: 8.4, kh:10.4, f: 0.2, sf: 0.0, lys: 20, arg: 18 },
  { n:"Tee",                      k:  1, e: 0.0, z: 0.0, kh: 0.3, f: 0.0, sf: 0.0, lys:  2, arg:  1 },
  { n:"Sojamilch",                k: 33, e: 3.3, z: 0.5, kh: 0.5, f: 1.8, sf: 0.2, lys:190, arg:230 },
  { n:"Hafermilch",               k: 45, e: 1.0, z: 4.0, kh: 6.6, f: 1.5, sf: 0.2, lys: 48, arg: 56 },
  { n:"Mandelmilch",              k: 13, e: 0.5, z: 0.1, kh: 0.3, f: 1.1, sf: 0.1, lys: 25, arg: 80 },

  // ── MILCHPRODUKTE ERGÄNZUNG ───────────────────────────────────────────────
  { n:"Joghurt griechisch", k:133, e: 5.7, z: 3.9, kh: 3.9, f:10.0, sf: 6.4, lys:380, arg:175 },
  { n:"Skyr",               k: 65, e:11.0, z: 4.0, kh: 4.0, f: 0.2, sf: 0.1, lys:820, arg:370 },
  { n:"Kefir",              k: 52, e: 3.3, z: 4.0, kh: 4.8, f: 1.0, sf: 0.7, lys:240, arg:100 },
  { n:"Schmand",            k:238, e: 2.7, z: 3.0, kh: 3.5, f:24.0, sf:14.2, lys:200, arg: 80 },
  { n:"Crème fraîche",      k:292, e: 2.2, z: 2.9, kh: 2.9, f:30.0, sf:19.4, lys:140, arg: 60 },

  // ── AUFSCHNITT & WURST ────────────────────────────────────────────────────
  { n:"Salami",             k:380, e:22.0, z: 0.0, kh: 1.0, f:33.0, sf:13.4, lys:1560, arg:1240 },
  { n:"Leberwurst",         k:310, e:13.0, z: 0.5, kh: 3.0, f:27.0, sf:10.2, lys: 870, arg: 700 },
  { n:"Putenbrust",         k:107, e:22.0, z: 0.0, kh: 0.0, f: 1.5, sf: 0.5, lys:1940, arg:1450 },
  { n:"Mortadella",         k:285, e:14.0, z: 0.5, kh: 1.5, f:24.0, sf: 9.4, lys: 940, arg: 810 },

  // ── SONSTIGES ─────────────────────────────────────────────────────────────
  { n:"Hanfsamen",                k:553, e:31.6, z: 1.5, kh: 8.7, f:48.7, sf: 5.2, lys:1170, arg:5120 },
  { n:"Hanfprotein",              k:338, e:50.0, z: 2.5, kh:19.0, f:10.0, sf: 1.1, lys:1550, arg:7800 },
  { n:"Haferkleie",               k:246, e:13.5, z: 0.9, kh:66.0, f: 7.0, sf: 1.4, lys: 636, arg: 800 },
  { n:"Eiweißpulver",             k:370, e:75.0, z: 4.0, kh:10.0, f: 5.0, sf: 1.5, lys:8000, arg:2200 },
  { n:"Proteinpulver",            k:370, e:75.0, z: 4.0, kh:10.0, f: 5.0, sf: 1.5, lys:8000, arg:2200 },
  { n:"Eiweißshake Pulver",       k:400, e:80.0, z: 3.0, kh:10.0, f: 6.0, sf: 1.8, lys:8500, arg:2000 },
  { n:"Eiweiß Schokolade",        k:470, e:30.0, z:20.0, kh:35.0, f:20.0, sf:13.0, lys:1800, arg:1200 },
  { n:"Protein Snack",            k:440, e:40.0, z: 2.0, kh:20.0, f:15.0, sf: 4.0, lys:2200, arg:1800 },
  { n:"Marmelade",                k:250, e: 0.5, z:55.0, kh:60.0, f: 0.1, sf: 0.0, lys:  10, arg:  10, s:8 },
  { n:"Hummus",                   k:166, e: 7.9, z: 0.4, kh:14.3, f: 9.6, sf: 1.1, lys: 410, arg: 800 },
  { n:"Honig",                    k:304, e: 0.3, z:80.0, kh:82.4, f: 0.0, sf: 0.0, lys:   5, arg:  10, s:8 },
  { n:"Nutella",                  k:539, e: 6.3, z:55.9, kh:57.5, f:30.9, sf:10.5, lys: 250, arg: 450 },
  { n:"Olivenöl",                 k:884, e: 0.0, z: 0.0, kh: 0.0, f:100.0, sf:13.8, lys:  0, arg:   0 },
  { n:"Sonnenblumenöl",           k:884, e: 0.0, z: 0.0, kh: 0.0, f:100.0, sf:10.1, lys:  0, arg:   0 },
  { n:"Tomatensoße",              k: 45, e: 1.8, z: 5.3, kh: 8.6, f: 1.5, sf: 0.2, lys:  42, arg:  35 },
  { n:"Pesto",                    k:430, e: 5.0, z: 2.0, kh: 5.0, f:40.0, sf: 6.0, lys: 250, arg: 600 },
  { n:"Mayonnaise",               k:680, e: 1.3, z: 1.2, kh: 2.6, f:74.0, sf:11.8, lys:  60, arg:  90 },
  { n:"Zucker",                   k:399, e: 0.0, z:100.0, kh:100.0, f: 0.0, sf: 0.0, lys: 0, arg:   0 },
  { n:"Kokosöl",                  k:862, e: 0.0, z: 0.0, kh: 0.0, f:100.0, sf:82.5, lys:  0, arg:   0 },
  { n:"Tuc",                      k:450, e: 7.0, z: 3.0, kh:64.0, f:18.0, sf: 4.0, lys: 110, arg: 270 },
  { n:"Tuc Cracker",              k: 19, e: 0.3, z: 0.1, kh: 3.0, f: 0.9, sf: 0.2, lys:   5, arg:  11 },   // pro Stück
  { n:"Maiswaffel",               k: 35, e: 0.7, z: 0.2, kh: 7.5, f: 0.4, sf: 0.0, lys:  12, arg:  32 },   // pro Stück
  { n:"Walnuss",                  k: 33, e: 0.8, z: 0.3, kh: 0.7, f: 3.3, sf: 0.3, lys:  21, arg: 115 },   // pro Stück
  { n:"Cashewkern",               k: 10, e: 0.3, z: 0.4, kh: 1.6, f: 0.5, sf: 0.1, lys:  17, arg:  38 },   // pro Stück
  { n:"Kaper",                    k:  1, e: 0.1, z: 0.0, kh: 0.1, f: 0.0, sf: 0.0, lys:   3, arg:   3 },   // pro Stück
  { n:"Mispel",                   k: 47, e: 0.4, z: 5.7, kh:12.0, f: 0.4, sf: 0.0, lys:  15, arg:  20, s:25 },
  { n:"Japanische Erdnussbälle",  k:510, e:20.0, z: 3.0, kh:60.0, f:25.0, sf: 2.5, lys: 450, arg:1500 },
  { n:"Cranberry getrocknet",     k:308, e: 0.1, z:65.0, kh:75.0, f: 1.0, sf: 0.1, lys:  15, arg:  10 },   // ⚠ viel Zucker
  { n:"Cranberry",                k: 46, e: 0.4, z: 4.0, kh:12.0, f: 0.1, sf: 0.0, lys:  16, arg:  14, s:  2 },   // frisch, ~2g/Stück
  { n:"Drachenfrucht getrocknet", k:270, e: 3.0, z:60.0, kh:65.0, f: 1.0, sf: 0.2, lys:  60, arg:  55 },   // ⚠ viel Zucker
  { n:"Drachenfrucht",            k: 60, e: 1.2, z: 8.0, kh:13.0, f: 0.4, sf: 0.0, lys:  20, arg:  18 },   // frisch

  // ── EIGENMARKEN & SPEZIALPRODUKTE ────────────────────────────────────────
  // Alle Werte pro 100g. s = Gramm pro Stück (Eingabe: "3 Grüne Oliven" → 3×4g)
  // sf = gesättigte Fettsäuren (g), lys = Lysin (mg), arg = Arginin (mg)

  // Getränke / Milchersatz
  { n:"Sojadrink Kaufland",       k: 33, e: 3.2, z: 0.0, kh: 0.2, f: 1.9, sf: 0.3, lys: 190, arg: 230 },
  { n:"Cappuccino Tchibo",        k: 47, e: 2.2, z: 3.1, kh: 3.2, f: 1.6, sf: 1.0, lys: 170, arg:  70 },
  { n:"Champagner",               k: 90, e: 0.3, z: 2.5, kh: 2.5, f: 0.0, sf: 0.0, lys:   3, arg:   5 },  // ~12% Alk, per 100ml
  { n:"Sekt",                     k: 75, e: 0.3, z: 1.0, kh: 2.5, f: 0.0, sf: 0.0, lys:   3, arg:   5 },  // ~11% Alk, per 100ml
  { n:"Weißwein",                 k: 66, e: 0.1, z: 0.5, kh: 1.5, f: 0.0, sf: 0.0, lys:   2, arg:   4 },  // ~11% Alk, per 100ml
  { n:"Rotwein",                  k: 70, e: 0.1, z: 0.5, kh: 2.0, f: 0.0, sf: 0.0, lys:   2, arg:   4 },  // ~12% Alk, per 100ml
  { n:"Bier",                     k: 43, e: 0.5, z: 0.0, kh: 3.5, f: 0.0, sf: 0.0, lys:  10, arg:  10 },  // ~5% Alk, per 100ml

  // Riegel & Waffeln
  { n:"Proteinkick Rossmann",      k:479, e:28.0, z: 2.3, kh:20.0, f:16.0, sf: 7.3, lys:1200, arg:2000, s: 25 },  // Nussmischung, nicht Riegel
  { n:"Maiswaffel Rossmann",      k:386, e: 7.1, z: 1.4, kh:80.0, f: 2.9, sf: 0.6, lys: 214, arg: 357, s:  7 },

  // Milchprodukte Edeka Eigenmarke
  { n:"Schlagsahne Edeka",        k:292, e: 2.3, z: 3.2, kh: 3.2, f:30.0, sf:21.0, lys: 180, arg:  80 },
  { n:"Magerquark Edeka",         k: 67, e:12.0, z: 4.0, kh: 4.0, f: 0.2, sf: 0.1, lys: 960, arg: 440 },
  { n:"Mozzarella Standard Edeka",k:245, e:18.5, z: 1.0, kh: 1.0, f:18.5, sf:12.5, lys:1520, arg: 680 },
  { n:"Mozzarella fettarm Edeka", k:165, e:21.0, z: 1.5, kh: 1.5, f: 8.5, sf: 5.8, lys:1750, arg: 780 },

  // Café-Gebäck
  { n:"Porridge Kuchen Tchibo",   k:325, e: 6.5, z:15.0, kh:45.0, f:11.9, sf: 3.1, lys: 263, arg: 363, s: 80 },

  // Getrocknete Früchte (Kimmich Thüringen)
  { n:"Cranberry Kimmich",        k:360, e: 0.3, z:68.0, kh:87.0, f: 0.8, sf: 0.0, lys:  20, arg:  30, s:  2 },
  { n:"Drachenfrucht getr. Kimmich", k:367, e:7.0, z:41.0, kh:72.0, f:4.0, sf:1.0, lys:300, arg:467, s: 3 },

  // Nussprodukte
  { n:"Erdnuss Japan Style",      k:426, e:10.0, z:22.0, kh:66.0, f:12.0, sf: 2.0, lys: 380, arg: 750 },
  { n:"Mandelmus EnerBiO",        k:634, e:23.0, z: 4.2, kh: 6.5, f:54.0, sf: 4.5, lys: 610, arg:2310, s:8 },
  { n:"Erdnussmus EnerBiO",       k:611, e:28.0, z: 4.5, kh:11.0, f:49.0, sf: 6.8, lys: 920, arg:3120, s:8 },

  // Schokolade (Stück)
  { n:"Vollmilchschokolade Stück",k:543, e: 7.1, z:54.3, kh:57.1, f:31.4, sf:20.0, lys: 500, arg: 257, s:  7 },
  { n:"Bitterschokolade 70%",     k:586, e: 7.1, z:28.6, kh:35.7, f:42.9, sf:25.7, lys: 343, arg: 643, s:  7 },
  { n:"Eiweißschokolade",         k:514, e:25.7, z:11.4, kh:21.4, f:34.3, sf:20.0, lys:1714, arg:1214, s:  7 },
  { n:"Konfekt Praline",          k:542, e: 5.8, z:51.7, kh:58.3, f:31.7, sf:17.5, lys: 250, arg: 267, s: 12 },

  // Knabbergebäck
  { n:"Keks zum Kaffee",          k:486, e: 5.7, z:27.1, kh:71.4, f:18.6, sf: 8.6, lys: 171, arg: 214, s:  7 },

  // Brot & Brötchen (Bäcker)
  { n:"Baguette Scheibe",         k:256, e: 8.4, z: 2.0, kh:52.8, f: 1.2, sf: 0.4, lys: 180, arg: 320, s: 25 },
  { n:"Laugenstange Bäcker",      k:288, e: 8.1, z: 1.0, kh:53.8, f: 3.1, sf: 1.0, lys: 163, arg: 275, s: 80 },
  { n:"Laugenbrezel Bäcker",      k:286, e: 8.1, z: 1.0, kh:54.3, f: 3.1, sf: 1.0, lys: 164, arg: 271, s: 70 },
  { n:"Rosinenbrötchen",          k:305, e: 8.0, z:13.1, kh:56.9, f: 4.3, sf: 1.7, lys: 169, arg: 246, s: 65 },
  { n:"Milchbrötchen",            k:330, e: 9.0, z:11.0, kh:54.0, f: 8.4, sf: 3.8, lys: 240, arg: 260, s: 50 },

  // Weihnachtsgebäck
  { n:"Christstollen",            k:390, e: 5.0, z:28.0, kh:46.0, f:19.0, sf: 8.5, lys: 160, arg: 240, s:100 },
  { n:"Elisenlebkuchen",          k:407, e: 9.7, z:34.3, kh:40.0, f:21.4, sf: 2.6, lys: 400, arg: 829, s: 70 },
  { n:"Napfkuchen",               k:400, e: 5.4, z:25.0, kh:48.6, f:20.0, sf: 9.3, lys: 200, arg: 186, s: 70 },
  { n:"Walnussblechkuchen",       k:385, e: 6.5, z:19.0, kh:38.0, f:22.0, sf: 4.5, lys: 210, arg: 490, s:100 },

  // Oliven & Antipasti
  { n:"Grüne Olive",              k:150, e: 1.0, z: 0.0, kh: 0.0, f:15.0, sf: 2.5, lys:  50, arg:  75, s:  4 },
  { n:"Schwarze Olive",           k:175, e: 1.3, z: 0.0, kh: 0.0, f:17.5, sf: 2.5, lys:  50, arg:  75, s:  4 },
  { n:"Riesenkaper",              k: 20, e: 2.0, z: 0.0, kh: 2.0, f: 0.0, sf: 0.0, lys:  60, arg:  80, s:  5 },

  // Käse
  { n:"Parmesan",                 k:400, e:32.0, z: 0.0, kh: 0.0, f:30.0, sf:20.0, lys:2650, arg:1150 },
  { n:"Schärdinger Käse",         k:375, e:26.0, z: 0.0, kh: 0.0, f:30.0, sf:20.0, lys:2100, arg: 950 },
  { n:"Harzer Käse",              k:125, e:27.0, z: 0.1, kh: 0.1, f: 0.5, sf: 0.3, lys:2240, arg:1010 },
  { n:"Camembert",                k:290, e:20.0, z: 0.1, kh: 0.1, f:23.0, sf:15.0, lys:1650, arg: 750 },
  { n:"Camembert fettarm",        k:205, e:24.0, z: 0.2, kh: 0.2, f:11.0, sf: 7.3, lys:1980, arg: 890 },

  // Wurst & Aufschnitt (Scheiben)
  { n:"Kochschinken Scheibe",     k:108, e:19.2, z: 0.8, kh: 0.8, f: 3.2, sf: 1.2, lys:1640, arg:1280, s: 25 },
  { n:"Corned Beef Scheibe",      k:115, e:22.0, z: 0.0, kh: 0.0, f: 3.0, sf: 1.5, lys:1900, arg:1450, s: 20 },
  { n:"Zungenwurst Scheibe",      k:260, e:15.0, z: 0.5, kh: 0.5, f:22.5, sf: 9.0, lys:1200, arg: 950, s: 20 },
  { n:"Schweinebraten Scheibe",   k:160, e:21.0, z: 0.0, kh: 0.0, f: 8.0, sf: 3.0, lys:1800, arg:1367, s: 30 },
  { n:"Blutwurst Thüringen",      k:320, e:13.5, z: 0.5, kh: 1.0, f:29.0, sf:11.5, lys:1110, arg: 840 },
  { n:"Rotwurst Thüringen",       k:285, e:15.0, z: 0.5, kh: 1.0, f:25.0, sf:10.0, lys:1230, arg: 930 },
  { n:"Knackwurst Thüringen",     k:360, e:19.0, z: 1.0, kh: 1.5, f:31.0, sf:13.0, lys:1580, arg:1180 },

  // Eier
  { n:"Spiegelei mit Butter",     k:208, e:12.0, z: 0.6, kh: 0.6, f:17.7, sf: 7.8, lys: 862, arg: 738, s: 65 },

  // Früchte mit Stückgewicht
  { n:"Banane mittel",            k: 93, e: 1.1, z:12.2, kh:20.4, f: 0.2, sf: 0.1, lys:  50, arg:  50, s:110 },
  { n:"Apfel mittel",             k: 52, e: 0.3, z:10.3, kh:11.4, f: 0.2, sf: 0.1, lys:   8, arg:   9, s:150 },
  { n:"Mandarine klein",          k: 50, e: 0.8, z: 9.2, kh:10.2, f: 0.2, sf: 0.0, lys:  30, arg:  36, s: 50 },
  { n:"Orange mittel",            k: 48, e: 1.0, z: 8.3, kh: 8.3, f: 0.2, sf: 0.0, lys:  27, arg:  30, s:150 },
  { n:"Süßkirsche",               k: 63, e: 0.9, z:11.1, kh:12.9, f: 0.3, sf: 0.1, lys:  34, arg:  29, s:  7 },
  { n:"Sauerkirsche",             k: 53, e: 1.0, z: 8.3, kh:10.0, f: 0.3, sf: 0.1, lys:  33, arg:  30, s:  6 },
  { n:"Pflaume mittel",           k: 47, e: 0.6, z: 7.5, kh:10.2, f: 0.2, sf: 0.0, lys:  15, arg:  13, s: 30 },

  // Nüsse & Kerne (Stück)
  { n:"Cashewkern pur",           k:580, e:18.0, z: 6.0, kh:30.0, f:44.0, sf: 8.0, lys: 840, arg:2100, s:  1 },
  { n:"Salzmandel",               k:633, e:21.7, z: 5.0, kh: 5.0, f:55.0, sf: 5.0, lys: 600, arg:2500, s:1.2 },
  { n:"Kürbiskern pur",           k:600, e:30.0, z: 1.0, kh: 2.0, f:50.0, sf:10.0, lys:1100, arg:4300, s:0.2 },
  { n:"Walnusskern",              k:675, e:15.0, z: 2.5, kh: 5.0, f:65.0, sf: 5.0, lys: 425, arg:1500, s:  4 },

  // Protein-Shakes (Portionsangabe als Zubereitung)
  { n:"Proteinoform 25+",         k:389, e:72.0, z: 0.5, kh: 2.5, f: 7.4, sf: 1.6, lys:4611, arg:6411, s: 35 },
  { n:"Sports Factory Protein",   k:365, e:80.0, z: 0.5, kh: 4.2, f: 2.5, sf: 0.8, lys:5800, arg:5200, s: 25 },  // Vegan Hazelnut, 1 Messlöffel=25g
  { n:"Protein Shake Hazelnut",   k:367, e:82.0, z: 4.1, kh: 5.9, f: 1.0, sf: 0.6, lys:5980, arg:5490, s: 30 },
  { n:"Bio Protein Shake Raab",   k:385, e:78.0, z: 0.2, kh: 3.5, f: 6.1, sf: 1.6, lys:5480, arg:6120, s: 20 },
  { n:"Multipower Whey Schoko",   k:373, e:73.3, z: 3.7, kh: 5.3, f: 3.5, sf: 2.2, lys:6960, arg:2050, s: 30 },

  // ── GEMÜSEGERICHTE & FERTIGGERICHTE ──────────────────────────────────────
  { n:"Wurzelgemüse",             k: 40, e: 0.7, z: 3.5, kh: 9.0, f: 1.0, sf: 0.1, lys: 35, arg: 30 },
  { n:"Gemüsepfanne",             k: 65, e: 1.0, z: 3.0, kh: 6.0, f: 4.0, sf: 0.4, lys: 40, arg: 45 },   // mit etwas Öl, pro 100g
  { n:"gedünstete Möhren",        k: 35, e: 0.8, z: 4.0, kh: 8.0, f: 0.5, sf: 0.1, lys: 33, arg: 27 },

  // ── FLEISCH ERGÄNZUNG ─────────────────────────────────────────────────────
  { n:"Maishähnchenfleisch",           k:165, e:25.0, z: 0.0, kh: 0.0, f: 7.0, sf: 2.0, lys:1900, arg:1350 },
  { n:"Maishähnchenfleisch ohne Haut", k:150, e:31.0, z: 0.0, kh: 0.0, f: 3.0, sf: 0.8, lys:2700, arg:1900 },
  { n:"Blutwurst",                k:270, e: 9.0, z: 0.5, kh: 2.0, f:22.0, sf: 8.7, lys: 690, arg: 500 },
  { n:"Thüringer Bratwurst",      k:320, e:18.0, z: 0.0, kh: 2.0, f:27.0, sf:10.0, lys:1400, arg:1100 },   // pro Stück/Portion
  { n:"Thüringer Rostbrätel",     k:370, e:28.0, z: 0.0, kh: 0.0, f:30.0, sf:11.5, lys:1750, arg:1350 },   // pro Portion

  // ── RESTAURANTGERICHTE (Richtwerte pro Portion) ───────────────────────────
  { n:"Lady Steak Gaststätte",    k:280, e:35.0, z: 0.0, kh: 0.0, f:14.0, sf: 5.5, lys:2900, arg:2200 },
  { n:"Lady Steak",               k:280, e:35.0, z: 0.0, kh: 0.0, f:14.0, sf: 5.5, lys:2900, arg:2200 },
  { n:"Pommes Gaststätte",        k:530, e: 7.0, z: 0.0, kh:70.0, f:28.0, sf:12.0, lys: 130, arg: 270 },
  { n:"Pommes frites",            k:312, e: 3.4, z: 0.3, kh:41.0, f:15.0, sf: 3.5, lys:  80, arg: 160 },   // pro 100g
  { n:"Bratkartoffeln",           k:180, e: 2.5, z: 0.3, kh:23.0, f: 8.0, sf: 1.1, lys:  88, arg:  56 },   // pro 100g

];
