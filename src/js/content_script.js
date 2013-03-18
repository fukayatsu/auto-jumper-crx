chrome.extension.sendRequest({
  method: "getSelectorForUrl",
  url: location.href
}, function(response) {
  var selector = response.selector;
  if (!selector) return;

  var href = $(selector)[0].href;
  if (!href) return;

  chrome.extension.sendRequest({
    method: "redirectTo",
    url: href
  });
});