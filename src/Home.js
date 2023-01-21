import React from 'react'

import banner from "./images/image-cyberlions-banner.jpg"
import logo from "./images/icons/cyberlions.png";

import cadding from "./images/2023-images/2023-cadding.JPG";

import Section from './helper-components/Section'

export default function Home() {
  return (
    <>

        <main>
          <img className='main-team-background' alt="team background" src={banner} />

          <div className="main-team-logo">
            <img alt="cyberlions logo" src={logo} />
            <h1>It's The CyberLions!</h1>
          </div>
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
