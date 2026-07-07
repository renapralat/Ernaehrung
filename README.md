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
- **Export** als Text oder CSV
- **Wiederholen**: frühere Mahlzeiten mit einem Klick neu erfassen
- **Neu bewerten**: Nährwerte eines bestehenden Eintrags neu ermitteln lassen (z.B. nachdem ein fehlendes Lebensmittel ergänzt wurde) – überschreibt direkt den Eintrag, kein erneutes Datum nötig
- **Fehlende Lebensmittel per KI recherchieren**: wird ein Lebensmittel nirgends gefunden, kann die KI gezielt dafür recherchieren; das Ergebnis landet in einer eigenen Zusatz-Datenbank (Supabase), `lebensmittel.js` bleibt dabei unangetastet
- **Kategorie nachträglich ändern** direkt am Eintrag
- **KI-Bewertung** der Mahlzeit (Qualität, Arginin/Lysin-Verhältnis)

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
- **Zusatz-Datenbank**: Tabelle `eigene_lebensmittel` – per KI recherchierte Lebensmittel, die weder in `lebensmittel.js` noch bei Open Food Facts gefunden wurden. Wird beim App-Start geladen und bei der Suche wie die eigene Datenbank behandelt. `lebensmittel.js` wird dadurch nie automatisch verändert.
- **KI**: GitHub Models (GPT-4o-mini, konfigurierbar)
- **Nährwert-Fallback**: Open Food Facts API

### Fehlende Werte nachtragen

Wird ein Lebensmittel weder in der eigenen DB noch bei Open Food Facts gefunden ("Nicht gefunden (0 kcal)"), erscheint pro fehlendem Lebensmittel ein Button „🤖 KI recherchieren & speichern". Er fragt die KI gezielt nach den Nährwerten (inkl. gesättigte Fettsäuren, Lysin, Arginin) und speichert das Ergebnis nach Bestätigung in `eigene_lebensmittel`. Ein GitHub-Token (⚙️ oben rechts) wird dafür benötigt.

### Einträge neu bewerten

Am Eintrag steht neben ↩ Wiederholen und ✕ jetzt auch 🔄 Neu bewerten. Es sucht die Nährwerte für die im Eintrag gespeicherten Lebensmittel automatisch neu (z.B. weil inzwischen ein fehlendes Lebensmittel ergänzt wurde), zeigt das Ergebnis in bearbeitbaren Feldern zur Kontrolle an und überschreibt beim Speichern direkt den bestehenden Eintrag – Datum und Kategorie bleiben unverändert, es muss nichts neu eingegeben werden.

---

## Warnungen

Die App zeigt automatisch Warnungen wenn:
- Eiweißzufuhr < 20 g pro Mahlzeit
- Fettanteil > 35 % der Kalorien
- Gesättigte Fettsäuren > 6 g pro Mahlzeit
- Lysin/Arginin-Verhältnis < 1 (ungünstig bei Herpes-Anfälligkeit)
