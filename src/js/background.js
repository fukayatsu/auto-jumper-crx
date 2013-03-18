chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.create({
     "url": chrome.extension.getURL("options.html")
  });
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method == "getSelectorForUrl") {
    var pageUrl = request.url;
    var setting = JSON.parse(localStorage.getItem('setting'));

    for (var urlRegExpStr in setting) {
      if (pageUrl.match(new RegExp(urlRegExpStr))) {
        return sendResponse({selector: setting[urlRegExpStr]});
      }
    }
    sendResponse({});

  } else if (request.method == "redirectTo") {
    chrome.tabs.update(sender.tab.id, {url: request.url});
  }
});
