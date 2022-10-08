// VARIABLES ----------------------------------------------------------------------------------------------------------------

const cyberlions_header_logo = document.querySelector("#cyberlogoImg");
const cyberlions_header_text = document.querySelector(".cyberlions-nav-text"); /* This is the text that says "CyberLions" */

const email = document.getElementById("email");
const map_location = document.getElementById("location");

// MAIN PAGE ----------------------------------------------------------------------------------------------------------------

const instagram = document.getElementById("insta");
const flickr = document.getElementById("flickr");
const github = document.getElementById("github"); 

instagram?.addEventListener("click", () => {
    window.open("https://www.instagram.com/cyberlions8521/");
});

flickr?.addEventListener("click", () => {
    window.open("https://www.flickr.com/photos/195051844@N07/");
});

github?.addEventListener("click", () => {
    window.open("https://github.com/CyberLions-8521");
});

cyberlions_header_logo?.addEventListener("click", () => { // clicking on the logo will take you to the main page
    window.location.href = "/";
});

cyberlions_header_text?.addEventListener("click", () => {
    window.location.href = "/";
});

// clicking on the image icons will take you to the respective external link (ex. email)
email?.addEventListener("click", () => {
    window.location.href = "mailto:whslionsrobotics@gmail.com";
});

map_location?.addEventListener("click", () => {
    window.open("https://goo.gl/maps/rhpfRFX1a54xiWTq5");
});