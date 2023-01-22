var clickCount = 0;
var keyCount = 0;
var inputCount = 0;

function formatTime(millis) {
    var secs = parseInt(millis / 1000);
    var minutes = parseInt(secs / 60);
    secs = secs % 60;
    var hours = parseInt(minutes / 60);
    minutes = minutes % 60;
    return ((hours >= 1 ? (hours + " hours ") : "") + (minutes >= 1 ? (minutes + " minutes ") : "") + (secs >= 1 ? (secs + " seconds") : ""));
}

document.addEventListener("click", function() {
    clickCount++;
});

document.addEventListener("keypress", function() {
    keyCount++;
});

document.addEventListener("DOMContentLoaded", function() {
    var timeStart = new Date();
    const inputTexts = document.getElementsByTagName("input");
    for(var i = 0; i < inputTexts.length; i++) {
        inputTexts[i].addEventListener("input", function() {
            inputCount++;
        });
    } 
    
    const textareas = document.getElementsByTagName("textarea");
    for(var i = 0; i < textareas.length; i++) {
        textareas[i].addEventListener("input", function() {
            inputCount++;
        });
    } 

    const sb = document.getElementById("submitbutton");

    sb.addEventListener("click", function(event) {
        event.preventDefault();
        var timeEnd = new Date(); 
        var time = formatTime(timeEnd - timeStart);
        document.getElementById("tracker-box").innerHTML = 
        `
        <p>Number of mouse clicks: ${clickCount}</p>
        <p>Total time spent: ${time}</p>
        <p>Total key presses: ${keyCount}</p>
        <p>Total number of characters typed: ${inputCount}</p>
        `;
    });
});