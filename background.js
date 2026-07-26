import { conversion_values, conversions, conversions_descriptions } from './conversion_types.js';

var selected_id = 0;
var units;
var value;
var converted_value;

var menu_items = [];

function isNumeric(num){
  return !isNaN(num)
}

chrome.runtime.onInstalled.addListener(async () => {
    for (const [conversion_id, conversion_type] of Object.entries(conversions)) {
        chrome.contextMenus.create({
            id: "select" + conversion_id,
            title: 'Convert ' + conversion_type,
            type: 'normal',
            contexts: ["selection"],
        });
        menu_items.push("select" + conversion_id);
        localStorage.setItem("menu_items", menu_items);
    }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (menu_items == undefined || menu_items.length == 0) {
        menu_items = localStorage.getItem("menu_items");
    }

    if (info.menuItemId.includes("select")) {
        selected_id = menu_items.indexOf(info.menuItemId);

        var conversion_desc_values = Object.values(conversions_descriptions);
        var conversion_values_arr = Object.values(conversion_values);

        units = conversion_desc_values[selected_id];

        value = info.selectionText;

        if (isNumeric(value)) {
            converted_value = +value;

            if (!isNumeric(converted_value)) {
                converted_value = "Enter a valid number";
            }
            else {
                converted_value = (converted_value / conversion_values_arr[selected_id]).toFixed(3);
                value = +value;
            }
        }
        else {
            converted_value = "Enter a valid number";
        }

        var menu_size = menu_items.length;
        chrome.action.openPopup();
    }
})

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.info === 'thing') {
    processMessage(msg).then(sendResponse);
    return true;
  }
});

function processMessage(msg) {
  return new Promise(resolve => {
    resolve([units, converted_value, value]);
  });
}