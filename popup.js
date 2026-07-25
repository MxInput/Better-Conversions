chrome.runtime.sendMessage({info: 'thing'}, response => {
    if (response[1] != null) {
        document.getElementById("conversion").innerHTML = response[1];
        if (response[0] != null && response[1] != "Enter a valid number") {
            document.getElementById("conversion").innerHTML += response[0];
        }
    }
});