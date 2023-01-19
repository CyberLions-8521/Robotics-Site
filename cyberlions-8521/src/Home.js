import React from 'react'
import Section from './helper-components/Section'

import frc_shooting_action from "./images/frc-images/frc-action.jpg";
import frc_building_robot from "./images/frc-images/frc-robot4.jpg";

export default function Home() {
  return (
    <>

        <Section 
          title="We're a High School Robotics Team Based In Westminster CA" 
          description=" Founded in August 2020 at Westminster High School, the CyberLions gathers students from grade levels 9-12 to innovate and cultivate well-rounded life skills and experiences, including the self-confidence to lead and facilitate others in the future."
          picture={frc_building_robot}      
          pictureLocation="left"
        />

    </>
  )
}
