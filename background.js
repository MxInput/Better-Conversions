import { conversions } from './conversion_types.js';
import { conversion_values } from './conversion_types.js';

var units;
var value;

chrome.runtime.onInstalled.addListener(async () => {
    for (const [tld, conversion_type] of Object.entries(conversions)) {
    chrome.contextMenus.create({
        id: "select" + tld,
        title: 'Convert ' + conversion_type,
        type: 'normal',
        contexts: ["selection"],
        });
    }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId.includes("select")) {
        units = "hi";
        chrome.action.openPopup();
        var message = "Hello from background script!";
        
        // Send message to popup script
        chrome.runtime.sendMessage({ greeting: message });
    }
})