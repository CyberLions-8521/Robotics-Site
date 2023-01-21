import { useState, useEffect, useRef, useElementOnScreen } from 'react';
import React from 'react'

import banner from "./images/image-cyberlions-banner.jpg"
import cadding from "./images/2023-images/2023-cadding.JPG";

import Section from './helper-components/Section'

export default function Home() {
  // Find state and visiblity of navigation
  const [isVisible, setVisible] = useState(false);

  return (
    <>

        <main>
          <img className='main-team-background' alt="team background" src={banner} />
          {/* <h1>FRC Team 8521 <br /> CyberLions</h1> */}
        </main>

        <Section 
          title="We're a High School Robotics Team Based In Westminster CA" 
          description=" Founded in August 2020 at Westminster High School, the CyberLions gathers students from grade levels 9-12 to innovate and cultivate well-rounded life skills and experiences, including the self-confidence to lead and facilitate others in the future."
          picture={cadding}      
          pictureLocation="left"
        />

    </>
  )
}
