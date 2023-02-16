import React, {useRef, useEffect} from 'react'
import useIntersectionObserver from './hooks/useIntersectionObserver'

import banner from "./images/image-cyberlions-banner2.jpg"
import Button from "./helper-components/Button.js"

import kevilry from "./images/robots/kelv-robot.png"

import nasa from "./images/sponsors/nasa.png"
import abbott from "./images/sponsors/abbott.png"

export default function Home({navigation}) {

    // useRef is a React Hook that allows us to reference a DOM element
    // Refs return an object with a current property. This is the DOM element we want to reference
    const kevilryDisplayHeader = useRef();
    const navigationBar = navigation;
   
    // Opening a Door Into Creative Minds. Used for when the user scrolls back up to make the navigation bar transparent again
    const mainTeamSlogan = useRef();

    const kevilryDisplayHeaderVisible = useIntersectionObserver({
      // root is what checks visiblity (null = browser viewport)
      root: null,
      rootMargin: "0px",

      // threshold is the percentage of the element that needs to be visible to trigger the callback
      threshold: 0.4 
    }, kevilryDisplayHeader);

    const mainTeamSloganVisible = useIntersectionObserver({
      // root is what checks visiblity (null = browser viewport)
      root: null,
      rootMargin: "0px",

      // threshold is the percentage of the element that needs to be visible to trigger the callback
      threshold: 0.0 
    }, mainTeamSlogan);

  useEffect(() => {
    if (kevilryDisplayHeaderVisible === true || mainTeamSloganVisible === false){
      navigationBar.current.className ="nav-background";
    }
    else{
      navigationBar.current.className = "";
    }
  }, [mainTeamSlogan, mainTeamSloganVisible, navigationBar, kevilryDisplayHeaderVisible]);

  return (
    <>
        <main>
          <img className='main-team-background' alt="team background" src={banner} />

          <div className="main-team-banner">
            <h1 ref={mainTeamSlogan}>We Are The Cyberlions...</h1>

            <article className="main-team-description">
              <p>...a high school robotics team that aims to provide our community with hands-on opportunities and mentor ships. We empower our community and give them the chance to show their inner leader and motivator.</p>
            </article>

            <article className="main-team-button-hyperlinks">            
              <Button content="Learn More" 
                hex="#cd2027" 
                link="/about/" 
              />
              <Button content="Support Us" 
                hex="#cd2027" 
                link="/support-us/" 
              />
            </article>
          </div>
        </main>

        <div className="root-kevilry-display">
          <h1 ref={kevilryDisplayHeader}>2022 Robot: The Kevilry</h1>
          <img alt="The Kevilry" src={kevilry} draggable="false" />
        </div>

        <div className="root-sponsor-thanks">
          <h1>Thank You To Our Sponsors</h1>

          <div className="root-sponsor-thanks-icons">
            <img alt="nasa sponsor" src={nasa} />
            <img alt="abbott sponsor" src={abbott} />
          </div>
        </div>

    </>
  )
}
