import React from 'react'
import { useEffect, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// In the home page, we have Section components such as "We're a High School Robotics Team Based In Westminster CA"
// By default React will pass in props as an object. Doing {} destructures the object
export default function Section({ title, description, picture, pictureLocation }) {

    // useRef is a React Hook that allows us to reference a DOM element
    // Refs return an object with a current property. This is the DOM element we want to reference
    const sectionContainerRef = useRef();

    // pass in options and element reference to useIntersectionObserver (allow scroll animations)
    const sectionContainerVisible = useIntersectionObserver({
        
        // root is what checks visiblity (null = browser viewport)
        root: null,
        rootMargin: "0px",

        // threshold is the percentage of the element that needs to be visible to trigger the callback
        threshold: 0.5 
    }, sectionContainerRef);

    // useEffect ensures that it runs on render (running before render causes explosion)
    useEffect(() => {
        if (pictureLocation === "right") {
            sectionContainerRef.current.classList.add("section-container-grey-background");
        }    
    }, [sectionContainerRef, pictureLocation]);
    
    // test that runs when anything rerenders
    useEffect(() => {
        console.log(sectionContainerVisible);
    });

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
