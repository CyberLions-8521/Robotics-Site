// VARIABLES ------------------------------------------------------------------------------------------------------------------------- 

const contentSection = document.querySelectorAll(".contentSection");

// FUNCTIONS ------------------------------------------------------------------------------------------------------------------------- 


// MAINSETUP ------------------------------------------------------------------------------------------------------------------------- 

const intersection_controls = {
    rootMargin: "0% 0% -30% 0%"
};

const observer = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {

        if (entry.isIntersecting){

            entry.target.classList.remove("contentHidden"); // Hide content and play animation. Content hidden in the first place so user doesnt see it play after the content has ALREADY loaded
            entry.target.classList.add("fadeFromBottom");

        }
    })    
}, intersection_controls);

observer.observe(contentSection[0]);
observer.observe(contentSection[1]);
observer.observe(contentSection[2]);