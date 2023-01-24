var clickCount = 0;
var keyCount = 0;
var inputCount = 0;

function formatTime(millis) { //Convert milliseconds to a more human-understable format of hours, minutes, and seconds
    var secs = parseInt(millis / 1000);
    var minutes = parseInt(secs / 60);
    secs = secs % 60;
    var hours = parseInt(minutes / 60);
    minutes = minutes % 60;
    return ((hours >= 1 ? (hours + " hours ") : "") + (minutes >= 1 ? (minutes + " minutes ") : "") + (secs >= 1 ? (secs + " seconds") : ""));
}

document.addEventListener("click", function() { //Add to the click count whenever the document receives a click
    clickCount++;
});

document.addEventListener("keypress", function() { //Add to the keypress count whenever the document receives a keypress
    keyCount++;
});

document.addEventListener("DOMContentLoaded", function() { //Main functions that run as soon as the document is loaded
    var timeStart = new Date();
    const inputTexts = document.getElementsByTagName("input"); //Keeps track of the number of characters typed in each input field
    for(var i = 0; i < inputTexts.length; i++) {
        inputTexts[i].addEventListener("input", function() {
            inputCount++;
        });
    } 
    
    const textareas = document.getElementsByTagName("textarea"); //Keeps track of the number of characters typed in textarea fields
    for(var i = 0; i < textareas.length; i++) {
        textareas[i].addEventListener("input", function() {
            inputCount++;
        });
    } 

    const sb = document.getElementById("submitbutton"); //Submit button

    sb.addEventListener("click", function(event) {
        event.preventDefault(); // prevent form from refreshing the page upon each submission
        var timeEnd = new Date(); // keep track of the time of submissino of the form
        var time = formatTime(timeEnd - timeStart); // Get the duration the user spent on the form
        
        // Generate the user's behavior statistics at the top of the page
        document.getElementById("tracker-box").innerHTML = 
        `
        <p>Number of mouse clicks: ${clickCount}</p>
        <p>Total time spent: ${time}</p>
        <p>Total key presses: ${keyCount}</p>
        <p>Total number of characters typed: ${inputCount}</p>
        `;
    });
});