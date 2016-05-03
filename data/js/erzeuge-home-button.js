//   Name: erzeuge-home-button.js
//  Stand: 2016-05-03, 08:01:18
// Author: Bernd Fallert, UB Mannheim
// version: Allgemein, jetzt mit Einstellmöglichkeit

var debug = false;
//var debug       = true;
var debug_level = 3;

self.port.on("InfoTerminalStartseite", function(AktInfoTerminalStartseiteAufrufenWebadresse) {

    apiLog('---------------------------START self.port.on InfoTerminalStartseite -----------------------', 'n', 0);
    apiLog(AktInfoTerminalStartseiteAufrufenWebadresse, 'n', 0);

    var lZeigeButton            = true;

    apiLog("\n\n\n\n" + "lZeigeButton: ______________________" + "\n\n\n\n", 'n', 0);
    if (lZeigeButton) {
        var div = document.createElement("div");
        div.innerHTML = "<a id='info-terminal-home-button' " +
                        "data-ajax='false' " +
                        "class='schliessbutton_neu_links' " +
                        "title='Home'>" +
                        "</a>";
        div.style.color = "white";
        div.setAttribute("class", "UBMaSchliess");

        apiLog("\n" + '------in iframe?-------------------------------------------' + "\n", 'n', 0);

        var isInIframe = (window.location != window.parent.location) ? true : false;
        apiLog('test ob in iframe: ' + isInIframe, 0);

        if (!isInIframe) {
            document.body.insertBefore(div, document.body.firstChild);

            var el = document.getElementById("info-terminal-home-button");
            el.addEventListener("click", function(){window.location.href = AktInfoTerminalStartseiteAufrufenWebadresse}, false );
            el.addEventListener("touchstart", function(){window.location.href = AktInfoTerminalStartseiteAufrufenWebadresse}, false );
            el.addEventListener("touched", function(){window.location.href = AktInfoTerminalStartseiteAufrufenWebadresse}, false );
        }
    }
    apiLog("---------------------------ENDE self.port.on InfoTerminalStartseite -----------------------", 0);
});


self.port.on("prefChange", function(prefName,value) {
    apiLog( '---------->  prefChange: ' + prefName, 'n', 0 );
    apiLog( '----------> ' + value, 'n', 0 );
    //------------------------------------------------
    // wert aus Einstellungsdialog übernehmen
    // Leider ggf. ein Neustart notwendig
    //------------------------------------------------
    if (prefName == 'InfoTerminalStartseiteAufrufenWebadresse') {
        document.getElementById('info-terminal-home-button').href = value;
    }
});

//==============================================================================
//      Name: apiLog
//   Aufgabe: Debugging-Meldungen in der Firebug-Konsole oder auf einem
//              anderen Weg ausgeben
// Parameter: pText
//                  => der auszugebende Text
//            pType
//                  => Typ der Ausgabe
//                      n  / normal
//                      i / info
//                      g / group / gruppiere
//                      ge / groupEnd / gruppiereEnde
//                      e / /error / f / fehler
//            pDebugLevel
//                  =>  0 am wenigsten Meldungen
//                      1
//                      2
//==============================================================================
function apiLog( pText, pType, pDebugLevel ) {
    // Ausnahmsweise nicht ausgeben, sonst wird alles etwas unuebersichtlich!
    //        apiLog( " ---------------------------------------------------------------------", 'info', 0);
    //        apiLog( " this.apiLog", 'info', 0);
    //        apiLog( " ---------------------------------------------------------------------", 'info', 0);

    if (debug) {
        if ( pDebugLevel <= debug_level ) {
            if (pType == '' || pType == 'n' || pType == 'normal') {
                console.log( pText );
            } else if (pType == 'info' || pType == 'i' ) {
                console.info( pText );
            } else if (pType == 'group' || pType == 'g' || pType == 'gruppiere'  ) {
                if ($.browser.msie) {
                    console.log( "=========GROUP===============================================================" );
                    console.log( pText );
                    console.log( "=========GROUP===============================================================" );
                } else {
                    console.group( pText );
                }

            } else if (pType == 'groupEnd' || pType == 'ge' || pType == 'gruppiereEnde'  ) {
                //console.groupEnd();
                if ($.browser.msie) {
                    console.log( "=========GROUP END============================================================" );
                } else {
                    console.groupEnd();
                }
            } else if (pType == 'error' || pType == 'e' || pType == 'f'  || pType == 'fehler'  ) {
                console.error( pText );
            }
        }
    }
}
// Eof: erzeuge-home-button.js
