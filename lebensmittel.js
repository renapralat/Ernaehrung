// Lebensmitteldatenbank – Nährwerte pro 100g
// Format: { n:"Name", k:kcal, e:Eiweiß(g), z:Zucker(g), kh:Kohlenhydrate(g) }
//
// So editieren (direkt in GitHub):
//   1. Datei öffnen → Stift-Symbol klicken
//   2. Neue Zeile hinzufügen, z.B.: { n:"Mein Lebensmittel", k:100, e:5.0, z:2.0, kh:15.0 },
//   3. "Commit changes" klicken – fertig!
//
// Tipp: Die App sucht hier zuerst. Wird etwas nicht gefunden, sucht sie
// automatisch online (Open Food Facts). Einträge hier sind zuverlässiger.

const DB = [

  // ── OBST ──────────────────────────────────────────────────────────────────
  { n:"Apfel",              k: 52, e: 0.3, z:10.3, kh:13.8 },
  { n:"Ananas",             k: 50, e: 0.5, z: 9.9, kh:13.1 },
  { n:"Avocado",            k:160, e: 2.0, z: 0.4, kh: 8.5 },
  { n:"Banane",             k: 89, e: 1.1, z:12.2, kh:22.8 },
  { n:"Birne",              k: 57, e: 0.4, z: 9.8, kh:15.2 },
  { n:"Blaubeeren",         k: 57, e: 0.7, z: 9.7, kh:14.5 },
  { n:"Erdbeeren",          k: 32, e: 0.7, z: 4.9, kh: 7.7 },
  { n:"Grapefruit",         k: 42, e: 0.8, z: 6.9, kh:10.7 },
  { n:"Himbeeren",          k: 52, e: 1.2, z: 4.4, kh:11.9 },
  { n:"Heidelbeeren",       k: 57, e: 0.7, z: 9.7, kh:14.5 },
  { n:"Kirschen",           k: 63, e: 1.1, z:12.8, kh:16.0 },
  { n:"Kiwi",               k: 61, e: 1.1, z: 9.0, kh:14.7 },
  { n:"Mandarine",          k: 53, e: 0.8, z:10.6, kh:13.3 },
  { n:"Mango",              k: 65, e: 0.5, z:13.7, kh:17.0 },
  { n:"Melone",             k: 34, e: 0.8, z: 7.3, kh: 8.6 },
  { n:"Wassermelone",       k: 30, e: 0.6, z: 6.2, kh: 7.6 },
  { n:"Orange",             k: 47, e: 0.9, z: 8.5, kh:11.8 },
  { n:"Pfirsich",           k: 39, e: 0.9, z: 8.4, kh: 9.5 },
  { n:"Pflaume",            k: 46, e: 0.7, z: 9.9, kh:11.4 },
  { n:"Weintrauben",        k: 69, e: 0.6, z:15.5, kh:18.1 },
  { n:"Zitrone",            k: 29, e: 1.1, z: 2.5, kh: 9.3 },

  // ── GEMÜSE ────────────────────────────────────────────────────────────────
  { n:"Aubergine",          k: 25, e: 1.0, z: 3.5, kh: 5.9 },
  { n:"Blumenkohl",         k: 25, e: 1.9, z: 1.9, kh: 5.0 },
  { n:"Brokkoli",           k: 34, e: 2.8, z: 1.7, kh: 7.0 },
  { n:"Champignons",        k: 22, e: 3.1, z: 1.7, kh: 3.3 },
  { n:"Chicoree",           k: 23, e: 1.7, z: 1.4, kh: 4.7 },
  { n:"Erbsen",             k: 81, e: 5.4, z: 5.5, kh:14.4 },
  { n:"Fenchel",            k: 31, e: 1.2, z: 3.9, kh: 7.3 },
  { n:"Gurke",              k: 16, e: 0.7, z: 1.7, kh: 3.6 },
  { n:"Kartoffel",          k: 77, e: 2.0, z: 0.7, kh:17.0 },
  { n:"Knoblauch",          k:149, e: 6.4, z: 1.0, kh:33.1 },
  { n:"Kohlrabi",           k: 27, e: 1.8, z: 3.6, kh: 6.2 },
  { n:"Kopfsalat",          k: 14, e: 1.4, z: 1.6, kh: 2.2 },
  { n:"Kürbis",             k: 26, e: 1.0, z: 2.8, kh: 6.5 },
  { n:"Lauch",              k: 61, e: 1.5, z: 3.9, kh:14.2 },
  { n:"Möhre",              k: 41, e: 0.9, z: 4.7, kh: 9.6 },
  { n:"Karotte",            k: 41, e: 0.9, z: 4.7, kh: 9.6 },
  { n:"Paprika rot",        k: 31, e: 1.0, z: 4.2, kh: 7.3 },
  { n:"Paprika gelb",       k: 27, e: 1.0, z: 2.9, kh: 6.3 },
  { n:"Paprika grün",       k: 20, e: 0.9, z: 2.6, kh: 4.6 },
  { n:"Pastinake",          k: 75, e: 1.3, z: 4.8, kh:17.9 },
  { n:"Pilze",              k: 22, e: 3.1, z: 1.7, kh: 3.3 },
  { n:"Porree",             k: 61, e: 1.5, z: 3.9, kh:14.2 },
  { n:"Radieschen",         k: 16, e: 0.7, z: 1.9, kh: 3.4 },
  { n:"Rosenkohl",          k: 43, e: 3.4, z: 1.8, kh: 9.0 },
  { n:"Rote Bete",          k: 43, e: 1.6, z: 6.8, kh: 9.6 },
  { n:"Rotkohl",            k: 31, e: 1.5, z: 3.8, kh: 7.4 },
  { n:"Sellerie",           k: 42, e: 1.5, z: 2.5, kh: 9.2 },
  { n:"Spargel",            k: 20, e: 2.2, z: 1.7, kh: 3.7 },
  { n:"Spinat",             k: 23, e: 2.9, z: 0.4, kh: 3.6 },
  { n:"Süßkartoffel",       k: 86, e: 1.6, z: 4.2, kh:20.1 },
  { n:"Tomate",             k: 18, e: 0.9, z: 2.6, kh: 3.9 },
  { n:"Weißkohl",           k: 25, e: 1.3, z: 3.8, kh: 6.1 },
  { n:"Wirsing",            k: 28, e: 2.0, z: 2.8, kh: 5.4 },
  { n:"Zucchini",           k: 17, e: 1.2, z: 1.6, kh: 3.4 },
  { n:"Zwiebel",            k: 40, e: 1.1, z: 4.7, kh: 9.3 },

  // ── GETREIDE & BROT ───────────────────────────────────────────────────────
  { n:"Cornflakes",         k:373, e: 7.5, z: 7.0, kh:84.0 },
  { n:"Couscous roh",       k:376, e:12.8, z: 0.8, kh:77.4 },
  { n:"Couscous gekocht",   k:112, e: 3.8, z: 0.2, kh:23.2 },
  { n:"Haferflocken",       k:370, e:13.5, z: 1.0, kh:58.7 },
  { n:"Müsli",              k:370, e:10.0, z:12.0, kh:62.0 },
  { n:"Nudeln roh",         k:350, e:12.0, z: 3.0, kh:71.0 },
  { n:"Nudeln gekocht",     k:130, e: 5.0, z: 0.5, kh:25.0 },
  { n:"Pasta roh",          k:350, e:12.0, z: 3.0, kh:71.0 },
  { n:"Pasta gekocht",      k:130, e: 5.0, z: 0.5, kh:25.0 },
  { n:"Quinoa roh",         k:368, e:14.1, z: 5.3, kh:64.2 },
  { n:"Quinoa gekocht",     k:120, e: 4.4, z: 0.9, kh:21.3 },
  { n:"Reis roh",           k:360, e: 7.0, z: 0.1, kh:77.0 },
  { n:"Reis gekocht",       k:130, e: 2.7, z: 0.0, kh:28.0 },
  { n:"Toastbrot",          k:265, e: 8.5, z: 3.0, kh:49.0 },
  { n:"Vollkornbrot",       k:241, e: 8.5, z: 1.0, kh:45.0 },
  { n:"Weißbrot",           k:265, e: 8.5, z: 3.0, kh:49.0 },

  // ── MILCH & MILCHPRODUKTE ─────────────────────────────────────────────────
  { n:"Butter",             k:741, e: 0.6, z: 0.1, kh: 0.6 },
  { n:"Frischkäse",         k:150, e: 6.0, z: 3.0, kh: 3.5 },
  { n:"Gouda",              k:356, e:25.0, z: 0.1, kh: 2.3 },
  { n:"Joghurt natur",      k: 61, e: 3.5, z: 4.7, kh: 4.7 },
  { n:"Joghurt 0%",         k: 47, e: 4.3, z: 4.0, kh: 4.0 },
  { n:"Käse",               k:330, e:25.0, z: 0.1, kh: 0.5 },
  { n:"Mozzarella",         k:254, e:18.0, z: 0.0, kh: 2.2 },
  { n:"Quark mager",        k: 67, e:13.5, z: 3.2, kh: 4.1 },
  { n:"Quark",              k:112, e:11.0, z: 2.5, kh: 3.5 },
  { n:"Sahne",              k:292, e: 2.0, z: 3.3, kh: 3.3 },
  { n:"Vollmilch",          k: 61, e: 3.2, z: 4.8, kh: 4.8 },
  { n:"Halbfettmilch",      k: 47, e: 3.3, z: 4.9, kh: 4.9 },

  // ── FLEISCH & FISCH ───────────────────────────────────────────────────────
  { n:"Ei",                 k:155, e:12.6, z: 0.4, kh: 1.1 },
  { n:"Eier",               k:155, e:12.6, z: 0.4, kh: 1.1 },
  { n:"Garnelen",           k: 99, e:19.0, z: 0.0, kh: 1.0 },
  { n:"Hackfleisch",        k:200, e:18.0, z: 0.0, kh: 0.0 },
  { n:"Hähnchenbrust",      k:120, e:23.0, z: 0.0, kh: 0.0 },
  { n:"Hühnchen",           k:120, e:23.0, z: 0.0, kh: 0.0 },
  { n:"Lachs",              k:208, e:20.0, z: 0.0, kh: 0.0 },
  { n:"Rindfleisch",        k:160, e:21.0, z: 0.0, kh: 0.0 },
  { n:"Schinken",           k:145, e:20.0, z: 0.5, kh: 0.5 },
  { n:"Schweinefleisch",    k:180, e:21.0, z: 0.0, kh: 0.0 },
  { n:"Thunfisch Dose",     k:130, e:28.0, z: 0.0, kh: 0.0 },
  { n:"Thunfisch",          k:144, e:23.3, z: 0.0, kh: 0.0 },

  // ── HÜLSENFRÜCHTE ─────────────────────────────────────────────────────────
  { n:"Edamame",            k:121, e:11.0, z: 2.2, kh: 8.9 },
  { n:"Kichererbsen roh",   k:364, e:19.0, z: 2.0, kh:61.0 },
  { n:"Kichererbsen",       k:164, e: 8.9, z: 1.0, kh:27.0 },
  { n:"Linsen roh",         k:352, e:25.0, z: 2.0, kh:60.0 },
  { n:"Linsen",             k:116, e: 9.0, z: 1.5, kh:20.0 },
  { n:"Rote Linsen",        k:116, e: 9.0, z: 1.5, kh:20.0 },
  { n:"Weiße Bohnen",       k:124, e: 8.7, z: 0.5, kh:22.1 },

  // ── NÜSSE & SAMEN ─────────────────────────────────────────────────────────
  { n:"Cashews",            k:553, e:18.2, z: 5.9, kh:30.2 },
  { n:"Chiasamen",          k:486, e:16.5, z: 0.0, kh:42.1 },
  { n:"Erdnüsse",           k:567, e:25.8, z: 4.0, kh:16.1 },
  { n:"Erdnussbutter",      k:588, e:25.0, z: 6.0, kh:21.0 },
  { n:"Leinsamen",          k:534, e:18.3, z: 1.6, kh:28.9 },
  { n:"Mandeln",            k:579, e:21.2, z: 4.4, kh:21.7 },
  { n:"Sesam",              k:573, e:17.7, z: 0.4, kh:23.4 },
  { n:"Sonnenblumenkerne",  k:584, e:20.8, z: 3.4, kh:20.0 },
  { n:"Walnüsse",           k:654, e:15.2, z: 2.6, kh:13.7 },

  // ── GETRÄNKE ──────────────────────────────────────────────────────────────
  { n:"Apfelsaft",          k: 46, e: 0.1, z: 9.9, kh:11.0 },
  { n:"Kaffee",             k:  2, e: 0.3, z: 0.0, kh: 0.0 },
  { n:"Orangensaft",        k: 45, e: 0.7, z: 8.4, kh:10.4 },
  { n:"Tee",                k:  1, e: 0.0, z: 0.0, kh: 0.3 },

  // ── SONSTIGES ─────────────────────────────────────────────────────────────
  { n:"Hummus",             k:166, e: 7.9, z: 0.4, kh:14.3 },
  { n:"Honig",              k:304, e: 0.3, z:80.0, kh:82.4 },
  { n:"Nutella",            k:539, e: 6.3, z:55.9, kh:57.5 },
  { n:"Olivenöl",           k:884, e: 0.0, z: 0.0, kh: 0.0 },
  { n:"Sonnenblumenöl",     k:884, e: 0.0, z: 0.0, kh: 0.0 },
  { n:"Tomatensoße",        k: 45, e: 1.8, z: 5.3, kh: 8.6 },
  { n:"Zucker",             k:399, e: 0.0, z:100.0, kh:100.0 },

];
