// Name: jump-home-button.js
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

        let getting = browser.storage.sync.get("url");
        getting.then(onGot, onError);
    }
    document.body.appendChild(div);
}



function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
    let URL = "";
    if (item.url) {
        URL = item.url;
    } else {
        URL = "https://www.bib.uni-mannheim.de/";
    };

    let el = document.getElementById("info-terminal-home-button");
    el.addEventListener("click", function(){window.location.href = URL}, false );
    el.addEventListener("touchstart", function(){window.location.href = URL}, false );
    el.addEventListener("touched", function(){window.location.href = URL}, false );
}
