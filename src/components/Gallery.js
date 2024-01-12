import React from 'react'
import { useRef } from 'react'

import Kevilry from '../assets/robots/kelv.jpg'
import Robbie from '../assets/robots/robbie.png'
import Froggers from '../assets/robots/froggers.jpg'

export default function Gallery() {

    const gallery = useRef("gallery");
    let galleryToggle = 0;
    let galleryImages = [Robbie, Kevilry, Froggers];

    const toggleGallery = (direction) => {
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
                        <div className='galleryArrow galleryLeft' onClick={() => toggleGallery("left")}></div>
                        <img className='galleryImage' src={Kevilry} alt={"Froggers"} ref={gallery}></img>
                        <div className='galleryArrow galleryRight' onClick={() => toggleGallery("right")}></div>
                    </div>
                </div>
                <div className='galleryCaption'>Froggers is the first FRC robot we produced in our school. Our robot has the ability to detect and autonomously move towards power cells. In addition, with its intake system, we can collect power cells and transport them around.</div>
            </div>
        </section>

    )
}
