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

const cyberlions_header_logo = document.querySelector("#cyberlogoImg");
const cyberlions_header_text = document.querySelector(".cyberlions-nav-text"); /* This is the text that says "CyberLions" */

cyberlions_header_logo?.addEventListener("click", () => {
    window.location.href = "/";
});

cyberlions_header_text?.addEventListener("click", () => {
    window.location.href = "/";
});