import { conversions } from './conversion_types.js';

chrome.runtime.onInstalled.addListener(async () => {
    for (const [tld, conversion_type] of Object.entries(conversions)) {
    chrome.contextMenus.create({
        id: "select" + tld,
        title: 'Convert "%s" to ' + conversion_type,
        type: 'normal',
        contexts: ["selection"],
        });
    }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId.includes("select")) {
    console.log("selected text is ", info.selectionText)
    }
})