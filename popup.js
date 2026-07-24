chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.greeting) {
        console.log(message.greeting); // Output received message
        // Now you can use the message data as needed in your popup
        // For example, update UI elements with the received data
    }
});