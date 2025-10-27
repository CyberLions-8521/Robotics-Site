import React from 'react'
import RobotShowcase from '../components/RobotShowcase'

import Robot2025 from '../assets/images/tappy-field-2025.jpg'
import Robot2024 from '../assets/images/rommenus.jpg'
import Robot2023 from '../assets/images/robbie.jpg'
import Robot2022 from '../assets/images/kevilry-2.jpg'

export default function OurRobots() {
  return (
    <>
      <RobotShowcase
        robotBGImage={Robot2025}
        robotYear={'Reefscape 2025'}
        robotName={'Tappy'}
        robotSpecs={
          {
            one: 'Swerve Drivebase',
            two: 'Autonomous',
            three: 'Passive Intake System'
          }
        }
        CADLink=''
        codeLink='https://github.com/CyberLions-8521/Reefscape-2025'
      />
    
      <RobotShowcase
        robotBGImage={Robot2024}
        robotYear={'Crescendo 2024'}
        robotName={'Rommeus Seraph'}
        robotSpecs={
          {
            one: 'Swerve Drivebase',
            two: 'Autonomous',
            three: 'Top Intake system'
          }
        }
        CADLink={{}}
        codeLink='https://github.com/CyberLions-8521/Crescendo2024'
      />

      <RobotShowcase
        robotBGImage={Robot2023}
        robotYear={'Charged up 2023'}
        robotName={'robbie'}
        robotSpecs={
          {
            one: 'Tank Drivebase',
            two: 'Autonomous',
            three: 'Claw Intake system'
          }  
        }
        CADLink=''
        codeLink='https://github.com/CyberLions-8521/ChargedUpFRC2023'
      />

      <RobotShowcase
        robotBGImage={Robot2022}
        robotYear={'rapid react 2022'}
        robotName={'Kevilry'}
        robotSpecs={
          {
            one: 'Tank Drivebase',
            two: 'Autonomous',
            three: 'Top Intake system'
          }
        }
        CADLink=''
        codeLink='https://github.com/CyberLions-8521/RapidReactFRC'
      />
    </>
  )
}