//   Name: erzeuge-home-button.js
//  Stand: 26.02.2015, 10:29:10 
// Author: Bernd Fallert, UB Mannheim
// version: Allgemein, jetzt mit Einstellmöglichkeit

self.port.on("InfoTerminalStartseite", function(AktInfoTerminalStartseiteAufrufenWebadresse) {

    console.log( "---------------------------START self.port.on InfoTerminalStartseite -----------------------" );
    console.log(AktInfoTerminalStartseiteAufrufenWebadresse);

    var d                       = document;
    var host                    = d.location.host;
    //------------------------------------------------------------------------------
    // Fuer Pruefung auf RufeExterneURL.php und UB3D
    //------------------------------------------------------------------------------
    //var ScriptName              = d.location.pathname;

    var lZeigeButton            = true;

    var lFehlersuche            = false;
    //var lFehlersuche            = true;



    console.log( "\n\n\n\n" + "lZeigeButton: ______________________" + "\n\n\n\n");
    if (lZeigeButton) {
        var div = document.createElement("div");
        div.innerHTML = "<a id='info-terminal-home-button' href='" + AktInfoTerminalStartseiteAufrufenWebadresse + "' " +
                        "class='schliessbutton_neu_links' title='Home'>" +
                        "</a>";
        div.style.color = "white";
        div.setAttribute("class", "UBMaSchliess");

        console.log( "\n" + '------in iframe?-------------------------------------------' + "\n" );
        var some = "test ob in iframe: ";

        var isInIframe = (window.location != window.parent.location) ? true : false;
        console.log( some + isInIframe);

        if (!isInIframe) {
            document.body.insertBefore(div, document.body.firstChild);
        };
    }
    console.log( "---------------------------ENDE self.port.on InfoTerminalStartseite -----------------------" );

});


self.port.on("prefChange", function(prefName,value) {
    console.log('----------------> ' + prefName);
    console.log('----------------> ' + value);
    //------------------------------------------------
    // wert aus Einstellungsdialog übernehmen
    // Leider ggf. ein Neustart notwendig
    //------------------------------------------------
    if (prefName == 'InfoTerminalStartseiteAufrufenWebadresse') {
        document.getElementById('info-terminal-home-button').href = value;
    }
});
// Eof: erzeuge-home-button.js
