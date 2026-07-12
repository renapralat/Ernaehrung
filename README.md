# Ernährungsprotokoll

Persönliches Ernährungstagebuch als single-page Web-App — optimiert für **Spracheingabe**.  
Live-URL: [renapralat.github.io/Ernaehrung](https://renapralat.github.io/Ernaehrung/)

---

## Funktionen

- **Spracheingabe** per Mikrofon-Taste — mehrere Lebensmittel auf einmal sprechen
- **Drei Quellen** für Nährwerte: eigene Datenbank → Open Food Facts → KI (in dieser Reihenfolge)
- **Autocomplete** aus eigener Datenbank beim Tippen
- **Kategorien**: Frühstück, Mittag, Abendessen, Snack, Gaststätte (oder freier Text)
- **Tagesansicht** mit Gesamtwerten und Makronährstoff-Prozenten
- **Suche** in gespeicherten Einträgen (nach Name, Datum, Kategorie)
- **Export** als Text oder CSV, sowie als **Brief** (Klartext-Tabellenform für den Arzt): zeigt ganz oben Makroziel (Eiweiß/Fett/KH-Verhältnis) und aktuelles Kalorienziel; pro Tag direkt unter dem Datum die Notiz (falls vorhanden), Schritte samt Bewegungs-kcal, Netto-kcal, Abweichung vom Kalorienziel sowie die tatsächlichen Makro-Anteile (Eiw./Fett/KH) mit einer zweiten Zeile darunter, die je Makro die Abweichung vom Makroziel zeigt (z.B. „+7 -1 -7"); die Einträge werden nach Kategorie gruppiert (Frühstück, Mittag, Abendessen zuerst in dieser Reihenfolge, danach Snack/Gaststätte/eigene Kategorien/„Ohne Kategorie" in beliebiger Reihenfolge) – die Zwischensumme steht direkt in der Kategoriezeile (nur wenn die Kategorie mehr als einen Eintrag enthält, sonst entfällt sie als redundant), darunter der Trennstrich, danach die Einzelposten; Bestandteile einer zusammengesetzten Mahlzeit sind mit vorangestelltem „+" vor dem kcal-Wert gekennzeichnet; am Ende die Tagesgesamtsumme – Lysin/Arginin werden in der Briefform bewusst weggelassen, da für die ärztliche Beurteilung uninteressant (bleiben im Tab/CSV-Export erhalten)
- **Tagesnotiz**: pro Tag ein kurzer Freitext (max. 60 Zeichen) zu Befinden/Besonderheiten, direkt unter dem Datum – erscheint auch in der Briefform neben dem Datum
- **Wiederholen**: frühere Mahlzeiten mit einem Klick neu erfassen
- **Neu bewerten**: Nährwerte eines bestehenden Eintrags neu ermitteln lassen (z.B. nachdem ein fehlendes Lebensmittel ergänzt wurde) – überschreibt direkt den Eintrag, kein erneutes Datum nötig. Die Menge (Gramm) ist dabei direkt korrigierbar (z.B. bei einer falsch eingeschätzten Kelle/Esslöffel), die Nährwerte werden dann automatisch neu berechnet
- **Schritte statt Kalorien**: Bewegung wird als Schrittzahl eingetragen und automatisch in kcal umgerechnet (≈ 35 kcal/1000 Schritte bei normalem Gehtempo)
- **Analyse ansehen**: wie ein bestehender Eintrag mit dem heutigen Datenstand bewertet würde – rein zur Ansicht, ohne etwas zu speichern oder zu verändern
- **Fehlende Lebensmittel automatisch per KI recherchieren**: wird ein Lebensmittel nirgends gefunden, recherchiert die KI von selbst dafür (inkl. realistischer Portionsgröße) und fragt vor dem Speichern nur noch zur Bestätigung; das Ergebnis landet in einer eigenen Zusatz-Datenbank (Supabase), `lebensmittel.js` bleibt dabei unangetastet
- **📋 Eigene Lebensmittel verwalten**: eigene Zusatz-Datenbank jederzeit einsehen, Lebensmittel von Hand neu anlegen oder KI-Werte nachträglich korrigieren/löschen (⚙️-Leiste oben)
- **Kategorie nachträglich ändern** direkt am Eintrag
- **KI-Bewertung** der Mahlzeit (Qualität, Arginin/Lysin-Verhältnis)
- **Farbcodierung** der Nährwerte, überall einheitlich: Eiweiß grün, Fett und Zucker kräftig rot, Kohlenhydrate blau, gesättigte Fettsäuren schwach rot, Lysin/Arginin schwach blau
- **Einheitliche Reihenfolge** der Nährwerte überall (App und Briefform): Eiweiß, Fett, gesättigte Fettsäuren, Kohlenhydrate, Zucker

---

## Eingabe — Kurzanleitung

### Mengenangaben

| Format | Beispiel | Ergebnis |
|--------|----------|---------|
| Gramm | `150 g Joghurt` | 150 g |
| Gramm (Zahlwort) | `zehn gramm Käse` | 10 g |
| Kilogramm | `0,5 kg Kartoffeln` | 500 g |
| Milliliter | `200 ml Milch` | 200 ml |
| Teelöffel / TL | `ein Teelöffel Honig` | 5 g |
| Esslöffel / EL | `zwei Esslöffel Olivenöl` | 30 g |
| Messlöffel | `1 Messlöffel Proteinpulver` | 30 g |
| Tasse | `eine Tasse Haferflocken` | 200 g |
| Kelle | `zwei Kellen Suppe` | 300 g |
| Glas | `ein Glas Wasser` | 200 g |
| Becher | `ein Becher Quark` | 200 g |
| Scheibe | `drei Scheiben Brot` | 90 g |
| Handvoll | `eine Handvoll Nüsse` | 30 g |
| Portion | `eine Portion Salat` | 150 g |
| Prise | `eine Prise Salz` | 1 g |
| Schuss | `ein Schuss Zitronensaft` | 25 g |
| Stück | `zwei Stück Kuchen` | 200 g |
| Anzahl | `fünf Kirschen` | 5 × Stückgewicht |
| Bruchteil | `halbe Avocado` | 0,5 × Stückgewicht |
| Viertel | `viertel Avocado` | 0,25 × Stückgewicht |
| Achtel | `ein Achtel Avocado` | 0,125 × Stückgewicht |
| Bruchschreibweise | `1/8 Avocado`, `3/4 Tomate` | berechnet automatisch |

### Mehrere Lebensmittel gleichzeitig

Verbindungswörter (werden automatisch aufgeteilt):
- `und`, `sowie`, `außerdem`, `plus`
- Komma: `Joghurt, Haferflocken, Banane`

Ohne Verbindungswort (automatisch erkannt):
- `eine Möhre 10 g Butter eine mittlere Kartoffel`
- `ein Esslöffel Haferflocken zwei Esslöffel Haferkleie`

### Sprach-Tipps

- Sprich deutlich, besonders bei Lebensmittelnamen
- „Stopp" beendet die Aufnahme und speichert sofort
- Das Mikrofon stoppt automatisch, wenn du tippst
- Maßeinheit immer VOR dem Lebensmittelnamen: `„ein Teelöffel Erdnussmus"`

---

## Eigene Lebensmitteldatenbank (`lebensmittel.js`)

Felder pro Eintrag:

| Feld | Bedeutung | Einheit |
|------|-----------|---------|
| `n` | Name | — |
| `k` | Kalorien | kcal/100 g |
| `e` | Eiweiß | g/100 g |
| `z` | Zucker | g/100 g |
| `kh` | Kohlenhydrate gesamt | g/100 g |
| `f` | Fett | g/100 g |
| `sf` | Gesättigte Fettsäuren | g/100 g |
| `lys` | Lysin | mg/100 g |
| `arg` | Arginin | mg/100 g |
| `s` | Stückgewicht | g/Stück |

Das `s`-Feld (Stückgewicht) wird für Mengenangaben ohne Einheit genutzt:  
`fünf Kirschen` → 5 × `s` Gramm

---

## Backend

- **Datenbank**: Supabase (PostgreSQL), Tabelle `ernaehrung`
- **Zusatz-Datenbank**: Tabelle `eigene_lebensmittel` – per KI recherchierte oder von Hand angelegte Lebensmittel, die weder in `lebensmittel.js` noch bei Open Food Facts gefunden wurden. Wird beim App-Start geladen und bei der Suche **zuerst** durchsucht (vor `lebensmittel.js`), da sie persönlich kuratiert ist. `lebensmittel.js` wird dadurch nie automatisch verändert.
- **KI**: GitHub Models (GPT-4o-mini, konfigurierbar)
- **Nährwert-Fallback**: Open Food Facts API

### Fehlende Werte nachtragen

Wird ein Lebensmittel weder in der eigenen DB noch bei Open Food Facts gefunden ("Nicht gefunden (0 kcal)"), startet die KI-Recherche automatisch (kein Klick nötig) und fragt gezielt nach den Nährwerten inkl. realistischer Portionsgröße (gesättigte Fettsäuren, Lysin, Arginin, Portion in Gramm). Vor dem Speichern in `eigene_lebensmittel` zeigt die App die ermittelten Werte zur Kontrolle an – erst nach Bestätigung wird gespeichert. Ein GitHub-Token (⚙️ oben rechts) wird dafür benötigt; ohne Token bleibt der manuelle „🤖 KI recherchieren & speichern"-Button als Fallback.

### Eigene Lebensmittel verwalten

Über „📋 Eigene Lebensmittel" (⚙️-Leiste oben) lässt sich die Zusatz-Datenbank jederzeit einsehen: neue Lebensmittel von Hand anlegen (z.B. von der Verpackung abgelesene Werte), bestehende Einträge korrigieren (✎) oder löschen (✕) – unabhängig von der automatischen KI-Recherche. Im Formular gibt es zusätzlich den Button „🤖 Werte per KI ermitteln" – trägt den Namen ein, die App fragt zuerst Open Food Facts (kein Token nötig) und lässt die KI danach nur noch gesättigte Fettsäuren/Lysin/Arginin/Portionsgröße ergänzen, die Open Food Facts nie liefert. Beim Tippen des Namens schlägt die App außerdem bereits vorhandene eigene Lebensmittel vor, um Duplikate zu vermeiden – ein Klick auf einen Vorschlag öffnet den bestehenden Eintrag zum Bearbeiten statt einen neuen anzulegen. Die Werte bleiben vor dem Speichern editierbar. `lebensmittel.js` bleibt davon immer unberührt.

### Einträge neu bewerten

Am Eintrag steht neben ↩ Wiederholen und ✕ jetzt auch 🔄 Neu bewerten. Es sucht die Nährwerte für die im Eintrag gespeicherten Lebensmittel automatisch neu (z.B. weil inzwischen ein fehlendes Lebensmittel ergänzt wurde), zeigt das Ergebnis in bearbeitbaren Feldern zur Kontrolle an und überschreibt beim Speichern direkt den bestehenden Eintrag – Datum und Kategorie bleiben unverändert, es muss nichts neu eingegeben werden.

---

## Warnungen

Die App zeigt automatisch Warnungen wenn:
- Eiweißzufuhr < 20 g pro Mahlzeit
- Fettanteil > 35 % der Kalorien
- Gesättigte Fettsäuren > 6 g pro Mahlzeit
- Lysin/Arginin-Verhältnis < 1 (ungünstig bei Herpes-Anfälligkeit)
