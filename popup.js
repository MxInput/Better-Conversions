var original_value;

chrome.runtime.sendMessage({info: 'thing'}, response => {
    var conversion_text = document.getElementById("conversion");
    var switch_div = document.getElementById("switch");

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
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");

    if (option1.checked) {
        if (option1.value == "bananas") {
            
        }
        else if (option1.value == "adult_man") {

        }
    }
    if (option2.checked) {
        if (option1.value == "two_story") {
            
        }
        else if (option1.value == "elephants") {
            
        }
    }
}