chrome.tabs.onUpdated.addListener((tabId) => {
  obj[tabId] = '';
});

let obj = {};
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, { file: "app.js" });
  let currentId = tab.id;
  if (obj[`${currentId}`] === true) {
    chrome.browserAction.setIcon({ 'path': { '16': 'disabled16.png', '128': 'disabled128.png' }, tabId: currentId });
    chrome.browserAction.setTitle({ title: 'Visual Markup (Disabled)' });
    obj[`${currentId}`] = false;
  } else {
    chrome.browserAction.setIcon({ 'path': { '16': 'enabled16.png', '128': 'enabled128.png' }, tabId: currentId });
    chrome.browserAction.setTitle({ title: 'Visual Markup (Enabled)' });
    obj[`${currentId}`] = true;
  }
});
