import { useRef, useState } from 'react'

import Kevilry from '../assets/robots/kelv.jpg'
import Robbie from '../assets/robots/robbie.png'
import Froggers from '../assets/robots/froggers.jpg'

export default function Gallery() {

    const gallery = useRef("gallery");
    const galleryDesc = useRef("galleryDesc")
    let galleryToggle = 0;
    let galleryImages = [Robbie, Kevilry, Froggers];
    let galleryDescList = [
        "Robbie was designed for the Charged Up FRC event for 2023. It is a 6-wheel tank drive with an arm that is able to pick up cones and cubes. There is also a basic autonomous routine to help the alliance win extra points.",
        "The Kevilry is the first FRC robot able to compete in a full game. Our robot can autonomously intake, store, and shoot cargo into hub targets, as well as hang from the medium bar in the endgame hangar.",
        "Froggers is the first FRC robot we produced in our school. Our robot has the ability to detect and autonomously move towards power cells. In addition, with its intake system, we can collect power cells and transport them around."
    ]
    let galleryDescription = "fard";

    let toggleGallery = (direction) => {
        if (direction === "left") {
            galleryToggle = galleryToggle - 1;
        } else if (direction === "right"){
            galleryToggle = galleryToggle + 1;
        }
        gallery.current.src = (galleryImages[Math.abs(galleryToggle) % galleryImages.length]);
    }

    return (
        <section className='gallery'>
            <div className='galleryBox'>
                <div className='galleryHeader'>
                    Learn about our robots.
                </div>
                <div className='galleryBody'>
                    <div className='galleryImageContainer'>
                        <div className='galleryArrow galleryRight'></div>
                        <img className='galleryImage' src={Kevilry} alt={"Froggers"} ref={gallery} onCLick={galleryLeft}></img>
                        <div className='galleryArrow galleryLeft'></div>

                    </div>
                </div>
                <div className='galleryCaption' ref={galleryDesc}>{galleryDescription}</div>
            </div>
        </section>
    )
}
