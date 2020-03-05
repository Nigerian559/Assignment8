// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.


let backgroundcolor = document.getElementById("background-color");
let foregroundcolor = document.getElementById("foreground-color");
let form = document.getElementById("preferences-form");
let greeting = document.getElementById("greeting");
let name = document.getElementById("name");
let body = document.querySelector("body");

const changebackgroundcolor = event => {
    event.preventDefault();
    let backgroundcolorContents = backgroundcolor.value;
    localStorage.setItem("background", backgroundcolor.value);
    body.style.backgroundColor = backgroundcolorContents
};
const changeforegroundcolor = event => {
    event.preventDefault();
    let foregroundcolorContents = foregroundcolor.value;
    localStorage.setItem("foreground", foregroundcolor.value);
    body.style.color = foregroundcolorContents;
};

const displayname = event => {
    event.preventDefault();
    let nameContents = name.value;
    localStorage.setItem("name", nameContents);
    greeting.innerText = "Hello " + nameContents;
};

form.addEventListener("submit", changebackgroundcolor);
form.addEventListener("submit", changeforegroundcolor);
form.addEventListener("submit", displayname);


let pageColor = localStorage.getItem("background"); 

let textColor = localStorage.getItem("foreground"); 

let text = localStorage.getItem("name"); 

function setUpDefault() {
    if (text != null) {
        greeting.innerText = "Hello " + text;
 
    }
    if (textColor != null) {
        body.style.color = textColor;

    }
    if (pageColor != null) {
        body.style.backgroundColor = pageColor;

    }
};
setUpDefault();


