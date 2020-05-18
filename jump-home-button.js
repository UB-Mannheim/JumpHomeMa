//document.body.textContent = "";

var lZeigeButton            = true;

if (lZeigeButton) {

var header = document.createElement('h1');
header.textContent = "This page has been eaten";
header.style.color = "hotpink";
document.body.appendChild(header);

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
        el.addEventListener("click", function(){window.location.href = AktInfoTerminalStartseiteAufrufenWebadresse}, false );
        el.addEventListener("touchstart", function(){window.location.href = AktInfoTerminalStartseiteAufrufenWebadresse}, false );
        el.addEventListener("touched", function(){window.location.href = AktInfoTerminalStartseiteAufrufenWebadresse}, false );
    }
    document.body.appendChild(div);
}



/*

pageMod.PageMod({
    include: "*",
    contentScriptFile: [ data.url("js/erzeuge-home-button.js")],
    contentStyleFile: data.url("css/externe.css"),
    // contentStyle is built dynamically here to include an absolute URL
    // for the file referenced by this CSS rule.
    // This workaround is needed because we can't use relative URLs
    // in contentStyleFile or contentStyle.
    contentStyle: [
                    ".schliessbutton_neu_links { background-image: url(" +
                    data.url("images/home_weiss.png") + ");" +
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
*/