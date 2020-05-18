function saveOptions(e) {
  browser.storage.sync.set({
    url: document.querySelector("#url").value
  });
  e.preventDefault();
}

function restoreOptions() {
  var storageItem = browser.storage.managed.get('url');
  storageItem.then((res) => {
    document.querySelector("#managed-url").innerText = res.url;
  });

  var gettingItem = browser.storage.sync.get('url');
  gettingItem.then((res) => {
    document.querySelector("#url").value = res.url || 'http:\\www.bib.uni-mannheim.de';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);