import React, {useRef, useEffect} from 'react'
import useIntersectionObserver from './hooks/useIntersectionObserver'

import banner from "./images/image-cyberlions-banner2.jpg"
import Button from "./helper-components/Button.js"

import kevilry from "./images/robots/tinywow_kelv-robot_14213921.png"
import starlight from "./images/icons/starlight.png"

import nasa from "./images/sponsors/nasa.png"
import abbott from "./images/sponsors/abbott.png"

import NewsletterSection from './helper-components/NewsletterSection'
import Debugging from './images/2022-images/debugging.jpg'
import Planning from './images/2022-images/planning.jpg'
import Building from './images/2022-images/building.jpg'

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
          <img className='main-background' alt="cyberlions competition background" src={banner} />

          {/* A hero text is a statement that describes the purpose of the product or service (mission statement) */}
          <div className="main-hero-text">
            <h1 ref={mainTeamSlogan}>We Are The Cyberlions...</h1>

            <article className="main-hero-text-description">
              <p>...a high school robotics team that aims to provide our community with hands-on opportunities and mentor ships. We empower our community and give them the chance to show their inner leader and motivator.</p>
            </article>

            <article className="main-button-hyperlinks">            
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

        {/* Featuring the latest robot Kevilry and facts about its design */}
        <div className="featured-robot-display">
          <h1 ref={kevilryDisplayHeader}>2022 Robot: The Kevilry</h1>

          <img className="featured-robot-display-image" alt="The Kevilry" src={kevilry} draggable="false" />

          <img className="featured-robot-display-starlight" id="star-one" alt="star" src={starlight} />
          <img className="featured-robot-display-starlight" id="star-two" alt="star" src={starlight} />
          <img className="featured-robot-display-starlight" id="star-thr" alt="star" src={starlight} />

          <div className="featured-robot-display-table">
            <section>
              <h2>Functionality</h2>
              
              <ul>
                <li>Ball Intake System</li>
                <li>Shooter</li>
                <li>Elevator + Hook</li>
                <li>Autonomous Mode</li>
              </ul>
            </section>
            <section>
              <h2>Awards</h2>

              <ul>
                <li>Rookie All Star Award</li>
                <li>Regional Finalists</li>
                <li>Highest Rookie Seed</li>
              </ul>
            </section>
          </div>
        </div>

        <div className="root-sponsor-thanks">
          <h1>Thank You To Our Sponsors</h1>

          <div className="root-sponsor-thanks-icons">
            <img alt="nasa sponsor" src={nasa} />
            <img alt="abbott sponsor" src={abbott} />
          </div>
        </div>

        <div className="newsletter-container">
          <h1>Check Out Our Newsletter</h1>

          <div className="newsletter-container-listing">

            <NewsletterSection 
              title="2021 Season Recap" 
              image={Debugging} 
              text={"Lorem ipsum Lorem Lorem ipsum Lorem Lorem ipsum Lorem Lorem ipsum Lorem Lorem ipsum Lorem ipsumLorem ipsum Lorem Lorem ipsum Lorem ..."} />
            <NewsletterSection 
              title="2020 Season Recap" 
              image={Planning} 
              text={"Lorem ipsum Lorem Lorem ipsum Lorem Lorem ipsum Lorem Lorem ipsum Lorem Lorem ipsum Lorem ipsumLorem ipsum Lorem Lorem ipsum Lorem ..."} />
            <NewsletterSection 
              title="2019 Season Recap" 
              image={Building} 
              text={"Lorem ipsum Lorem Lorem ipsum Lorem Lorem ipsum Lorem Lorem ipsum Lorem Lorem ipsum Lorem ipsumLorem ipsum Lorem Lorem ipsum Lorem ..."} />

          </div>

        </div>

    </>
  )
}
