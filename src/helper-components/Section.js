import React from 'react'
import { useRef } from 'react';

// In the home page, we have Section components such as "We're a High School Robotics Team Based In Westminster CA"
// By default React will pass in props as an object. Doing {} destructures the object
export default function Section({ title, description, picture, pictureLocation }) {
  
    // useRef is a React Hook that allows us to reference a DOM element
    const sectionContainerRef = useRef();
  
    // Refs return an object with a current property. This is the DOM element we want to reference
    if (pictureLocation === "right") {
        sectionContainerRef.current.classList.add("section-container-grey-background");
    }

    return (
    <>
        <div className="section-container" ref={sectionContainerRef}>

            {/* If picture is not empty, render the image (if statement shorthand) */}
            {/* AKA CS Short Circuiting */}
            {pictureLocation === "left" && <img className="section-image" src={picture} alt="section img" />}

            <article className='section-text'>
                <h1>{title}</h1>
                <p>{description}</p>
            </article>            

            {pictureLocation === "right" && <img className="section-image" src={picture} alt="section img" />}
        </div>

    </>
  )
}
