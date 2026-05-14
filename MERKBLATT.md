# Merkblatt: Claude richtig nutzen
*Erfahrungen aus der Entwicklung der Ernährungsprotokoll-App*

---

## Die drei Claude-Kanäle – und was wo geht

### 1. Claude.ai (Browser-Chat)
- Normaler Chat: gut für Fragen, Texte, Analyse, Artefakte
- **Artefakte entstehen** wenn man sagt: „erstelle das als Artefakt" oder „als React gerendert"
- **Artefakte ins Artefakte-Menü**: nur in einem **Projekt** (nicht im normalen Chat) – dort werden sie dauerhaft in der Projektbibliothek gespeichert
- Claude kann Artefakte **nicht selbst löschen** – das macht nur man selbst über die Oberfläche
- Kein dauerhaftes Gedächtnis zwischen Sitzungen

### 2. Claude Code (dieser Kanal – Kommandozeile/CLI)
- Arbeitet direkt mit echten Dateien auf dem Computer oder GitHub
- Änderungen auf GitHub sind **dauerhaft** – das ist das echte Gedächtnis
- Kein dauerhaftes Gedächtnis zwischen Sitzungen – aber die Dateien bleiben
- Kann keine Claude.ai-Artefakte erstellen
- Ideal für: Web-Apps bauen, Code schreiben, Dateien verwalten, GitHub-Workflow

### 3. Lokale Claude-App (Desktop)
- Ähnlich wie Claude.ai, aber lokal installiert
- Web Speech API (Mikrofon im Browser) funktioniert hier oft **nicht** – nur im Browser

---

## Was Claude kann – und was nicht

### Kann Claude:
- Web-Apps von Grund auf bauen und schrittweise verbessern
- Fehler finden und beheben – wenn man genau beschreibt, was passiert
- Code in vielen Programmiersprachen verstehen und schreiben
- Natürliche Sprache (auch Deutsch mit Füllwörtern) sinnvoll verarbeiten
- Werte aus seinem Training abrufen (z.B. Nährwerte, Fakten, Maßeinheiten)
- Auf GitHub direkt committen, Pull Requests erstellen und mergen

### Kann Claude nicht:
- Sich zwischen Sitzungen erinnern (kein dauerhaftes Gedächtnis)
- Bezahlung über Telefónica oder Handyrechnung für API-Schlüssel
- Artefakte löschen (nur der Nutzer kann das)
- Eine andere App „von innen" steuern (z.B. automatisch Buttons in einer fremden App drücken)
- Garantieren, dass externe APIs (wie Open Food Facts) korrekte Werte liefern

---

## Fallstricke – was schiefgehen kann

| Problem | Ursache | Lösung |
|---|---|---|
| Falsche Kalorien (z.B. 155 kcal für Kaffee) | Open Food Facts findet ein falsches Produkt | Lokale Datenbank hat immer Vorrang |
| „ein Espresso" trifft den Eintrag „Ei" | „ein" beginnt mit „ei" → Präfix-Suche trifft „Ei" | Artikel vor der Suche entfernen |
| Mikrofon macht Duplikate (Android) | `continuous:true` auf Android unzuverlässig | Einzelerkennung mit automatischem Neustart |
| Sprachspeicher enthält alten Text | `gesprochenText` wird nicht geleert | ✕-Button drücken für sauberen Neustart |
| Push zu main abgelehnt (403) | Direktes Pushen zu main ist gesperrt | Feature-Branch erstellen + Pull Request |

---

## Gute Arbeitsweise mit Claude Code

1. **Immer einen neuen Chat starten** wenn ein neues Thema/Projekt kommt
2. **Kurz erklären** was schon vorhanden ist: „Ich habe eine App auf GitHub unter renapralat/Ernaehrung"
3. **Eine Sache nach der anderen** – nicht 5 Wünsche auf einmal
4. **Schriftliche Vorbereitung** hilft bei komplexen Anforderungen
5. **GitHub ist das Gedächtnis** – alles Wichtige landet dort, nicht im Chat

---

## Workflow Ernährungsprotokoll-App

```
Erfassen (Sprache + Mikrofon)
    ↓
Text-Export (.txt) – nur Lebensmittelnamen, kein CSV
    ↓
In KI-App (Claude.ai) einfügen
    ↓
Separate Analyse pro Lebensmittel + Gesamtübersicht
```

---

## Maßeinheiten die die App versteht

Teelöffel, Esslöffel (TL/EL), Tasse, Kelle, Glas, Becher, Scheibe,
Handvoll, Portion, Prise, **Schuss** (25ml), **Stück** (100g),
g, ml, kg, l, Gramm

**Zahlwörter:** ein/eine, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, zwölf

**Bruchteile:** halb/halbe/halber (0.5), viertel (0.25)

---

*Zuletzt aktualisiert: Mai 2026 – aus dem Entwicklungs-Chat*
