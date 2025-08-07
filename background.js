chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "qwen-selection",
    title: "Send to Qwen",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "qwen-selection") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    }, () => {
      chrome.tabs.sendMessage(tab.id, {
        type: "QWEN_SEND_SELECTION",
        selectionText: info.selectionText
      });
    });
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});
