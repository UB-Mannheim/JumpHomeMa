# JumpHomeMa

## Überblick

JumpHomeMa ist ein Addon für Firefox.

- Das AddOn blendet links unten (mit einem kleinen Abstand zum unteren Rand) einen halbtransparenten Home-Button ein.
- Die URL auf die der Home-Button verweist kann mit den normalen Konfigurationsseite des AddOns eingestellt werden.
- Der Home-Button wird nicht eingeblendet, wenn die HTML-Datei innerhalb eines iFrames dargestellt wird.
- Bei lokalen Dateien, die nur über file:// aufgerufen werden, wird der Home-Button nicht angezeigt.

## Konfiguration

- In Extras / Addon / JumpHomeMa / Einstellungen gibt es ein Eingabefeld "URL". In diesem Feld kann die URL hinterlegt werden, auf die der Home-Button verlinkt werden soll.
- Gggf. muss nach dem Ändern der URL der Browser neu gestartet werden, damit die neue Adresse akzeptiert wird.

## Notwendige Einstellung in Firefox

- aktuell funktioniert JumpHomeMa nicht, wenn bei Chronik "niemals anlegen" ausgewählt wurde.
  Alternativ kann "nach benutzerdefinierten Einstellungen anlegen" ausgewählt und ein Haken bei
  "Die Chronik löschen, wenn Firefox geschlossen wird" gesetzt werden.

## Licence  ![en](http://bib.uni-mannheim.de/fileadmin/scripts/flag_en.jpeg)

This is free software. You may use it under the terms of the GNU General Public License (GPL). See [LICENSE](LICENSE) for details.

## LIZENZ  ![de](http://bib.uni-mannheim.de/fileadmin/scripts/flag_de.jpeg)

Dies ist freie Software. Sie können sie unter den Bedingungen der GNU General Public License (GPL) verwenden. Siehe [LICENSE](LICENSE) für Details.

## Historie

- 0.6 02.03.2015, 15:29:52  Anpassung wg UB Heidelberg, Mobile Seiten, Problem mit Ajax gefixed, Dank an Daniela Wolf
- 0.5 26.02.2015, 11:07:27  jetzt mit Konfigurationsmöglichkeit. Welche URL soll angezeigt werden, ggf. neu starten nach ändern der URL
- 0.4 21.01.2015, 12:00:00  interne Version
- 0.3 20.01.2015, 12:30:00  nur noch wenn nicht innerhalb eines iframes aufgerufen, sonst z.B. Problem mit Ampelseite
- 0.2 16.01.2015, 13:40:00  Einsatzfähig, jetzt hat Button einen Z-Index von 10000 damit sollte es immer on Top sein
- 0.1 15.01.2015, 12:49:14  Abgeleitetetes Projekt begonnen
