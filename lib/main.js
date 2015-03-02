// main.js
// Projekt: Home-Button-einblenden
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var utils = require('sdk/window/utils');
var windows = require("sdk/windows");


MApreferences = require("sdk/simple-prefs").prefs;
//console.log(MApreferences.InfoTerminalStartseiteAufrufenWebadresse);
var AktInfoTerminalStartseiteAufrufenWebadresse = MApreferences.InfoTerminalStartseiteAufrufenWebadresse;


pageMod.PageMod({
    include: "*",
    contentScriptFile: [ data.url("js/jquery/jquery-2.1.3.min.js"),
                         data.url("js/erzeuge-home-button.js")],
    contentStyleFile: data.url("css/externe.css"),
    // contentStyle is built dynamically here to include an absolute URL
    // for the file referenced by this CSS rule.
    // This workaround is needed because we can't use relative URLs
    // in contentStyleFile or contentStyle.
    contentStyle: [
                    ".schliessbutton_neu_links { background-image: url(" +
                    data.url("images/home_weiss.gif") + ");" +
                    "background-repeat: no-repeat; " +
                    "background-size: 40%; " +
                    "background-position: center; " +
                    "height: 30px; " +
                    "width: 57px; " +
                    "}",
                    "div.UBMaSchliess a.schliessbutton_neu_links {" +
                    "text-decoration: none; " +
                    "}",
                    "body {height: 100%; }"
                   ],
    contentScriptWhen: "ready",
    onAttach: function(worker) {
        worker.port.emit("InfoTerminalStartseite", AktInfoTerminalStartseiteAufrufenWebadresse );
        worker.port.on("prefChange", function(prefName, prefValue) {
          // update page ...
        });
        function onPrefChange(prefName) {
          worker.port.emit("prefChange", prefName, require("sdk/simple-prefs").prefs[prefName]);
        }
        require("sdk/simple-prefs").on("", onPrefChange);
    }
});

