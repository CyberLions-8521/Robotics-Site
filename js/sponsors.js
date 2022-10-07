// VARIABLES ------------------------------------------------------------------------------------------------------------------------- 

const cyberlions_header_logo = document.querySelector("#cyberlogoImg");
const cyberlions_header_text = document.querySelector(".cyberlions-nav-text"); /* This is the text that says "CyberLions" */

const galleryArticles = document.getElementsByClassName("sponser-gallery-slideshow-image-wrapper")[0].children;
const galleryDots = document.getElementsByClassName("sponser-gallery-slideshow-index-dots")[0].children;

// FUNCTIONS -------------------------------------------------------------------------------------------------------------------------

let galleryIndex = 0;

function galleryLoop(){ // Forever switch between sponsor logos

    for (let i = 0; i < galleryArticles.length; i += 1) {
        galleryArticles[i].classList.add("contentHidden"); // Hide all logos at first
        galleryArticles[i].classList.remove("fadeSlideShow"); 

        // These dots help indicate which logo is currently being displayed and how many logos there are to the user
        galleryDots[i].style.background = "var(--lightLionsRed)";
    }

    galleryIndex += 1;
    galleryArticles[galleryIndex - 1].classList.remove("contentHidden"); // -1 because the index starts at 0
    galleryArticles[galleryIndex - 1].classList.add("fadeSlideShow"); 

    galleryDots[galleryIndex - 1].style.background = "var(--lionsRed)";

    if (galleryIndex >= galleryArticles.length) {
        galleryIndex = 0; // Reset the index so it loops through all images again 
    }

    setTimeout(galleryLoop, 3500); // Remember that timeout is async 
}

galleryLoop();

// MAINSETUP -------------------------------------------------------------------------------------------------------------------------

cyberlions_header_logo?.addEventListener("click", () => {
    window.location.href = "/";
});

cyberlions_header_text?.addEventListener("click", () => {
    window.location.href = "/";
});