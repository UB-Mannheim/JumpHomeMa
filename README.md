# JumpHomeMa - Firefox Add-on

## Überblick

JumpHomeMa ist ein Add-on für Firefox.

- Das Add-on blendet links unten (mit einem kleinen Abstand zum unteren Rand) einen halbtransparenten Home-Button ein.
- Die URL auf die der Home-Button verweist kann mit den normalen Konfigurationsseite des Add-ons eingestellt werden.
- Der Home-Button wird nicht eingeblendet, wenn die HTML-Datei innerhalb eines iFrames dargestellt wird. (aktuell ist das nicht der Fall)

## Konfiguration

- In Extras / Add-ons / JumpHomeMa / Einstellungen gibt es ein Eingabefeld "URL". In diesem Feld kann die URL hinterlegt werden, auf die der Home-Button verlinkt werden soll.
- Gggf. muss nach dem ändern der URL der Browser neu gestartet werden, damit die neue Adresse akzeptiert wird, oder den Tab aktualisieren

## Notwendige Einstellung in Firefox

- aktuell funktioniert JumpHomeMa nicht, wenn bei Chronik "niemals anlegen" ausgewählt wurde.
  Alternativ kann "nach benutzerdefinierten Einstellungen anlegen" ausgewählt und ein Haken bei
  "Die Chronik löschen, wenn Firefox geschlossen wird" gesetzt werden.

## Licence  ![en](http://bib.uni-mannheim.de/fileadmin/images/github/flag_en.jpeg)

This is free software. You may use it under the terms of the GNU General Public License (GPL). See [LICENSE](LICENSE) for details.

## Lizenz  ![de](http://bib.uni-mannheim.de/fileadmin/images/github/flag_de.jpeg)

Dies ist freie Software. Sie können sie unter den Bedingungen der GNU General Public License (GPL) verwenden. Siehe [LICENSE](LICENSE) für Details.

## Historie

- 1.0.2 19.05.2020, 12:16:00  Problem with options page is fixed
- 1.0.1 18.05.2020, 14:32:00  first version with webextensions, but without working options page
- 1.0.0 18.05.2020, 14:31:00  first version with webextensions
- 0.8.2 03.05.2016, 08:07:00  Ersatz für console.log um in produktiver Version Meldungen ausschalten zu können
- 0.8.1 02.05.2016, 15:32:28  Interne Anpassung wg. Revision, addEventListener statt href
- 0.7   05.03.2015, 15:52:47  Lizenz des Plugins und Lizenz des Quellcodes vereinheitlicht, jetzt in beiden Fällen GNU GPL v3.0
                            Bereinigung beim Icon innerhalb des Home-Button, jetzt png verwendet statt gif
- 0.6   02.03.2015, 15:29:52  Anpassung wg UB Heidelberg, Mobile Seiten, Problem mit Ajax gefixed, Dank an Daniela Wolf
- 0.5   26.02.2015, 11:07:27  jetzt mit Konfigurationsmöglichkeit. Welche URL soll angezeigt werden, ggf. neu starten nach ändern der URL
- 0.4   21.01.2015, 12:00:00  interne Version
- 0.3   20.01.2015, 12:30:00  nur noch wenn nicht innerhalb eines iframes aufgerufen, sonst z.B. Problem mit Ampelseite
- 0.2   16.01.2015, 13:40:00  Einsatzfähig, jetzt hat Button einen Z-Index von 10000 damit sollte es immer on Top sein
- 0.1   15.01.2015, 12:49:14  Abgeleitetetes Projekt begonnen
