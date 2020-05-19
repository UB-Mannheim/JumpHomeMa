# Infoterminal Startseite aufrufen

## Überblick

- Das Add-on blendet links unten (mit einem kleinen Abstand zum unteren Rand) einen halbtransparenten Home-Button ein.
- Die URL, auf die der Home-Button verweist, kann mit der normalen Konfigurationsseite des Add-ons eingestellt werden.

## Konfiguration

- In Extras / Add-ons / InfoTerminal Startseite aufrufen / Einstellungen gibt es ein Eingabefeld "URL". In diesem Feld kann die URL hinterlegt werden auf die der Home-Button verlinkt werden soll.
- Ggf. muss nach dem Ändern der URL der Browser neu gestartet werden, damit die neue Adresse akzeptiert wird, oder den aktuelle Tab neu laden.


# Entwicklung

## Fehler suchen
web-ext lint

## Packages into .zip file
web-ext build -o --ignore-files quelldaten Protokolle *.log package-lock.json TODO.md *.cmd __stillgelegt_package.json icons/*.old.svg icons/icon-komprimiert.svg lib data background.js

Packages an extension into a .zip file, ignoring files that are commonly unwanted in packages, such as .git and other artifacts.

