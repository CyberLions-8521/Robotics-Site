import React from 'react'
import { useRef } from 'react'

import Kevilry from '../assets/images/kevilry.jpg'
import Bingus from '../assets/images/sidewaysBingus.png'

export default function Gallery() {

    let gallery = useRef("gallery");

    let galleryLeft = () => {
        //huh?????????
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
                <div className='galleryCaption'>Froggers is the first FRC robot we produced in our school. Our robot has the ability to detect and autonomously move towards power cells. In addition, with its intake system, we can collect power cells and transport them around.</div>
            </div>
        </section>
    )
}
