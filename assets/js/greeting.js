/* This script shows a greeting to user based on users current time 
example taken from JavasSctrip jQuery book https://javascriptbook.com/code/c01/add-content.html - see also README */

let today = new Date(); // create a new date object
let hourNow = today.getHours(); // find the current hour
let greeting;

//display the greetting based on users current time
if (hourNow > 18) {
    greeting = "Good Evening & good luck";
} else if (hourNow > 12) {
    greeting = "Good Afternoon & good luck";
} else if (hourNow > 0) {
    greeting = "Good Morning & good luck";
} else {
    greeting = "Welcome & good luck";
}
let el = document.getElementById("greeting");
el.textContent = greeting;