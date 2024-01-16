/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from 'react'

// imports found in index.js
import { Kevilry, Robbie, Froggers } from '../index.js';

export default function Gallery() {

    const gallery = useRef(null);
    const galleryDesc = useRef(null);

    let [imageDescription, setImageDescription] = useState("");
    let [galleryToggle, setGalleryToggle] = useState(0);

    let galleryImages = [Robbie, Kevilry, Froggers];
    let galleryDescList = [
        "Robbie was designed for the Charged Up FRC event for 2023. It is a 6-wheel tank drive with an arm that is able to pick up cones and cubes. There is also a basic autonomous routine to help the alliance win extra points.",
        "The Kevilry is the first FRC robot able to compete in a full game. Our robot can autonomously intake, store, and shoot cargo into hub targets, as well as hang from the medium bar in the endgame hangar.",
        "Froggers is the first FRC robot we produced in our school. Our robot has the ability to detect and autonomously move towards power cells. In addition, with its intake system, we can collect power cells and transport them around."
    ];

    let [leftButtonClicked, setLeftButtonClicked] = useState(false);
    let [rightButtonClicked, setRightButtonClicked] = useState(false);

    useEffect(() => {
        setImageDescription(galleryDescList[Math.abs(galleryToggle) % galleryImages.length]);
    }, [galleryToggle]);

    let modifyLeftButton = () => {
        setLeftButtonClicked(true);
        setGalleryToggle(galleryToggle - 1);
    }

    let modifyRightButton = () => {
        setRightButtonClicked(true);
        setGalleryToggle(galleryToggle + 1);
    }

    const currentImage = galleryImages[Math.abs(galleryToggle) % galleryImages.length];
    const currentAlt = galleryImages[Math.abs(galleryToggle) % galleryImages.length];

    return (
        <section className='gallery'>
            <div className='galleryBox'>
                <div className='galleryHeader'>
                    Learn about our robots.
                </div>
                <div className='galleryBody'>
                    <article className='galleryImageContainer'>
                        <div className='galleryArrow galleryLeft' onClick={modifyLeftButton}></div>
                        <img className='galleryImage' src={currentImage} alt={currentAlt} ref={gallery}></img>
                        <div className='galleryArrow galleryRight' onClick={modifyRightButton}></div>
                    </article>
                </div>
                <p className='galleryCaption' ref={galleryDesc}>{imageDescription}</p>
            </div>
        </section>
    )
}
