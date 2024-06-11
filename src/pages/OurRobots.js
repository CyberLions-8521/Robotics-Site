import React from 'react'
import RobotShowcase from '../components/RobotShowcase'

import rommenus from '../assets/images/rommenus.jpg'
import robbie from '../assets/images/robbie.jpg'
import kevilry2 from '../assets/images/kevilry-2.jpg'

export default function OurRobots() {
  return (
    <>
      <RobotShowcase
        robotBGImage={rommenus}
        robotYear={'Crescendo 2024'}
        robotName={'Rommeus Seraph'}
        robotSpecs={
          {
            one: 'Swerve Drivebase',
            two: 'Autonomous',
            three: 'Top Intake system'
          }
        }
      />

      <RobotShowcase
        robotBGImage={robbie}
        robotYear={'Charged up 2023'}
        robotName={'robbie'}
        robotSpecs={
          {
            one: 'Tank Drivebase',
            two: 'Autonomous',
            three: 'Claw Intake system'
          }  
        }
      />

      <RobotShowcase
        robotBGImage={kevilry2}
        robotYear={'rapid react 2022'}
        robotName={'Kevilry'}
        robotSpecs={
          {
            one: 'Tank Drivebase',
            two: 'Autonomous',
            three: 'Top Intake system'
          }
        }          
      />
    </>
  )
}