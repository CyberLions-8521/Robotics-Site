import React, { useEffect, useRef } from 'react'

import angleForButton from "../images/icons/angle-for-button.png"
import useDetectScroll from "@smakss/react-scroll-direction";

// Using this component creates a scroll to top element on the bottom right side of the website
// Because the element is at a fixed position, the component can be put anywhere in the program
export default function Scroll() {

    let scrollDirection = useDetectScroll({});
    const backToTopReference = useRef();
  
    // Each time the scroll direction changes, run this function
    useEffect(() => {
      if (scrollDirection === "up"){
        backToTopReference.current.classList.remove("content-hidden");
      }
      else if (scrollDirection === "down"){
        backToTopReference.current.classList.add("content-hidden");
      }
    }, [scrollDirection]);
    
    // Scroll to the top of the page with the scroll to top button is clicked
    const scrollToTop = () => {
      window.scrollTo({top: 0, behavior: "smooth"});
  
      backToTopReference.current.classList.add("content-hidden");
    }
  
    useEffect(() => {
      let backTTopLocalRef = backToTopReference.current;
  
      backTTopLocalRef.addEventListener("click", scrollToTop);
  
      return () => {
        backTTopLocalRef.removeEventListener("click", scrollToTop);
      }
    }, [])

  return (
    <section className="back-to-top content-hidden" ref={backToTopReference}>
        <img alt="back to top" src={angleForButton} />
    </section>
  )
}
