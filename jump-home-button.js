var lZeigeButton            = true;

if (lZeigeButton) {
    var div = document.createElement("div");
    div.innerHTML = "<a id='info-terminal-home-button' " +
                    "data-ajax='false' " +
                    "class='schliessbutton_neu_links' " +
                    "title='Home'>" +
                    "</a>";
    div.style.color = "white";

    div.setAttribute("class", "UBMaSchliess");

    var isInIframe = (window.location != window.parent.location) ? true : false;

    if (!isInIframe) {
        document.body.insertBefore(div, document.body.firstChild);

        var el = document.getElementById("info-terminal-home-button");
        // at the moment a fix URL to test the function until the option page works
        AktInfoTerminalStartseiteAufrufenWebadresse = "http:\\www.bib.uni-mannheim.de";
        //el.addEventListener("click", function(){window.location.href = AktInfoTerminalStartseiteAufrufenWebadresse}, false );
        el.addEventListener("click", function(){window.location.href = xTest}, false );
        el.addEventListener("touchstart", function(){window.location.href = AktInfoTerminalStartseiteAufrufenWebadresse}, false );
        el.addEventListener("touched", function(){window.location.href = AktInfoTerminalStartseiteAufrufenWebadresse}, false );
    }
    document.body.appendChild(div);
}
