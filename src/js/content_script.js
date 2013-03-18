chrome.extension.sendRequest({
  method: "getSelectorForUrl",
  url: location.href
}, function(response) {
  var selector = response.selector;
  if (!selector) return;

  var redirectTo = $(selector).attr('href');
  if (!redirectTo) return;

  chrome.extension.sendRequest({
    method: "redirectTo",
    url: redirectTo
  });
});