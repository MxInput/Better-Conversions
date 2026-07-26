import { conversion_values, conversions, conversions_descriptions } from './conversion_types.js';
var original_value;

chrome.runtime.sendMessage({info: 'thing'}, response => {
    var conversion_text = document.getElementById("conversion");
    var switch_div = document.getElementById("switch");
    var unit_title = document.getElementById("unit_title");

    var option1 = document.getElementById("option1");
    var option1_label = document.getElementById("option1_label");
    var option2 = document.getElementById("option2");
    var option2_label = document.getElementById("option2_label");

    if (response[1] != null) {
        conversion_text.innerHTML = response[1];
        if (response[0] != null && response[1] != "Enter a valid number") {
            switch_div.style.display = "block";
            conversion_text.innerHTML += response[0];

            if (response[0] == " banana(s) long" || response[0] == " 2-story building(s) long") {
                option1_label.innerHTML = "Bananas";
                option1.value = "bananas";
                option2_label.innerHTML = "2-story buidling";
                option2.value = "two_story";

                if (response[0] == " banana(s) long") {
                    option1.checked = true;
                }
                else {
                    option2.checked = true;
                }
            }
            else if (response[0] == " Adult Man" || response[0] == " Elephant(s)") {
                option1_label.innerHTML = "Adult Man";
                option1.value = "adult_man";
                option2_label.innerHTML = "Elephants";
                option2.value = "elephants";

                if (response[0] == " Adult Man") {
                    option1.checked = true;
                }
                else {
                    option2.checked = true;
                }
            }
        }
        else{
            switch_div.style.display = "none";
        }
    }

    if (response[2] != null) {
        original_value = response[2];
    }
});

function convert() {
    var conversion_desc_keys = Object.values(conversions_descriptions);
    var conversion_val_values = Object.values(conversion_values);
    var conversion_text = document.getElementById("conversion");

    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");

    var index;

    if (original_value != null) {
        if (option1.checked) {
            if (option1.value == "bananas") {
                index = 0;
                var new_value = original_value / conversion_val_values[index];
                var desc = conversion_desc_keys[index];

                conversion_text.innerHTML = new_value + desc;
            }
            else if (option1.value == "adult_man") {
                index = 2;
                var new_value = original_value / conversion_val_values[index];
                var desc = conversion_desc_keys[index];
                
                conversion_text.innerHTML = new_value + desc;
            }
        }
        if (option2.checked) {
            if (option2.value == "two_story") {
                index = 1;
                var new_value = original_value / conversion_val_values[index];
                var desc = conversion_desc_keys[index];
                
                conversion_text.innerHTML = new_value + desc;
            }
            else if (option2.value == "elephants") {
                index = 3;
                var new_value = original_value / conversion_val_values[index];
                var desc = conversion_desc_keys[index];
                
                conversion_text.innerHTML = new_value + desc;
            }
        }
    }
}

document.getElementById("convert").addEventListener('click', convert);