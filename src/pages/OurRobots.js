import React from 'react'
import { Helmet } from "react-helmet"

import Robot from "../helper-components/Robot.js"
import kevilry from "../images/robots/kelv.jpg"
import froggers from "../images/robots/froggers.jpg"
import robbie from "../images/robots/robbie.png"

export default function OurRobots() {
  return (
    <>
      <Helmet>
        <title>Team 8521 - Our Robots</title>
      </Helmet>

      <div className="our-robots">
        <div className="our-robots-hero">
          <h1>Meet Our Gallery of Robots.</h1>
          <p>Learn about what we build during the season</p>
        </div>

        <div className="our-robots-gallery">
        <Robot 
            season="FRC Season 2023: Charged Up"
            name="Robbie" 
            image={robbie} 
            description="Robbie was designed for the Charged Up FRC event for 2023. It is a 6-wheel tank drive with an arm that is able to pick up cones and cubes. There is also a basic autonomous routine to help the alliance win extra points." 
          />

          <Robot 
            season="FRC Season 2022: Rapid React"
            name="Kevilry" 
            image={kevilry} 
            description="The Kevilry is the first FRC robot able to compete in a full game. Our robot can autonomously intake, store, and shoot cargo into hub targets, as well as hang from the medium bar in the endgame hangar." 
          />

          <Robot 
            season="FRC Season 2021:Infinite Recharge at Home"
            name="Froggers" 
            image={froggers} 
            description="Froggers is the first FRC robot we produced in our school. Our robot has the ability to detect and autonomously move towards power cells. In addition, with its intake system, we can collect power cells and transport them around." 
          />
        </div>

      </div>  
    </>
  )
}
