import React from 'react'
import { Helmet } from "react-helmet"

import Robot from "../helper-components/Robot.js"
import kevilry from "../images/robots/kelv-robot.png"
import froggers from "../images/robots/frog-robot.png"

export default function OurRobots() {
  return (
    <>
      <Helmet>
        <title>Our Robots | Cyberlions</title>
      </Helmet>

      <div className="our-robots">
        <div className="our-robots-hero">
          <h1>Meet Our Gallery of Robots.</h1>
          <p>Learn about what we build during season</p>
        </div>

        <div className="our-robots-gallery">
          <Robot 
            name="Season 2022 - Kevilry" 
            image={kevilry} 
            description="The Kevilry is the first FRC robot able to compete in a full game. Our robot can autonomously intake, store, and shoot cargo into hub targets, as well as hang from the medium bar in the endgame hangar." 
            award="Regional Finalist" 
          />

          <Robot 
            name="Season 2021 - Froggers" 
            image={froggers} 
            description="Froggers is the first FRC robot we produced in our school. Our robot has the ability to detect and autonomously move towards power cells. In addition, with its intake system, we can collect power cells and transport them around." 
            award="Rookie Game Changer" 
          />
        </div>

      </div>  
    </>
  )
}
