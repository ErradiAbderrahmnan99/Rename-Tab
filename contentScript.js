chrome.storage.local.get(window.location.href, function(result) {
    if (result[window.location.href]) {
      document.title = result[window.location.href];
    }
  });
  