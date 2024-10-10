document.getElementById('renameButton').addEventListener('click', function() {
  const newTitle = document.getElementById('newTitle').value;

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];

    // Save the title to chrome storage
    chrome.storage.local.set({ [activeTab.url]: newTitle });

    // Change the title of the current tab
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: setTitle,
      args: [newTitle]
    });
  });
});

function setTitle(newTitle) {
  document.title = newTitle;
}
