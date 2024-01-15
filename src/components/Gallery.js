/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from 'react'

// imports found in index.js
import { Kevilry, Robbie, Froggers } from '../index.js';

export default function Gallery() {

    const gallery = useRef("gallery");
    let galleryToggle = 0;
    let galleryImages = [Robbie, Kevilry, Froggers];
    const galleryDesc = useRef("galleryDesc")

    let imageDescription = "";

    let [leftButtonClicked, setLeftButtonClicked] = useState(false);
    let [rightButtonClicked, setRightButtonClicked] = useState(false);

    let galleryDescList = [
        "Robbie was designed for the Charged Up FRC event for 2023. It is a 6-wheel tank drive with an arm that is able to pick up cones and cubes. There is also a basic autonomous routine to help the alliance win extra points.",
        "The Kevilry is the first FRC robot able to compete in a full game. Our robot can autonomously intake, store, and shoot cargo into hub targets, as well as hang from the medium bar in the endgame hangar.",
        "Froggers is the first FRC robot we produced in our school. Our robot has the ability to detect and autonomously move towards power cells. In addition, with its intake system, we can collect power cells and transport them around."
    ]

    let modifyLeftButton = () => {
        setLeftButtonClicked(true);
    }
    let modifyRightButton = () => {
        setRightButtonClicked(true);
    }

    // In order for the gallery description to exist across renders, you need to set a useEffect and probably a useState as well
    useEffect(() => {

    }, [leftButtonClicked, rightButtonClicked]);


    let toggleGallery = (direction) => {
        (direction === "left") ? galleryToggle -= 1 : galleryToggle += 1;

        gallery.current.src = galleryImages[Math.abs(galleryToggle) % galleryImages.length];

        // https://stackoverflow.com/questions/29044518/safe-alternative-to-dangerouslysetinnerhtml
        imageDescription = galleryDescList[Math.abs(galleryToggle) % galleryImages.length];
        console.log(imageDescription);
    }

    return (
        <section className='gallery'>
            <div className='galleryBox'>
                <div className='galleryHeader'>
                    Learn about our robots.
                </div>
                <div className='galleryBody'>
                    <article className='galleryImageContainer'>
                        
                        <div className='galleryArrow galleryRight' onClick={modifyLeftButton}></div>
                        <img className='galleryImage' src={Kevilry} alt={"Froggers"} ref={gallery}></img>
                        <div className='galleryArrow galleryLeft' onClick={modifyRightButton}></div>

                    </article>
                </div>
                <p className='galleryCaption' ref={galleryDesc}>{imageDescription}</p>
            </div>
        </section>
    )
}
