import React, { useState } from 'react'
import RobbieMove from '../assets/images/robbie-move.jpg'
export default function About() {

  let [selectedRole, setSelectedRole] = useState(0);

  const roles = ['MECHANICAL', 'DESIGN', 'PROGRAMMING', 'ELECTRICAL', 'OPERATION MANAGEMENT'];
  const rolesDescriptions = [
    "Use machinery and power tools to fabricate prototypes for robot subsystems. You’re expected to organize and understand the mechanics of the robot and its assembly.",
    "Learn design skills and rapid prototyping techniques through CAD and 3D printing. You're planning, designing, and experimenting with different designs to come up with a working robot.",
    "Develop and integrate Java algorithms that satisfy the requirements of a functionable shooter, intake system, drivetrain and limelight. You'll operate on Github and Visual Studio Code to make the robot function.",
    "Design and manage the robot's electrical board and distribution. You're going to be using wiring and connection techniques to make sure all electrical components are hooked up for the mechanisms to work properly.",
    "Market the team for sponsorships and plan and coordinate club events. You're in charge of overseeing the club budget and FRC inventory and working closely with club advisors and IPT leads."
  ];

  function handleSelectedRole(index) {
    setSelectedRole(index);
  }

  return (
    <div className='about-container'>
      <section className='about-container-content'>
        <header className='about-content-header'>
          <p className='about-content-subtext'>
            WHY EVEN HAVE CYBERLIONS?
          </p>
          <h1 className='about-content-header-text'>
            CYBERLIONS PROVIDE HIGHSCHOOLERS WITH REAL-LIFE EXPERIENCE
          </h1>
          <p className='about-content-text'>
            Our robotics team is challenged by strict rules and limited time and resources to raise funding, design a team brand, and work together to build competition-ready robots. 
          </p>
        </header>
        <section className='about-subteam-container'>
          <article className='about-subteam-selector'>
            <h1>SUBTEAM ROLES</h1>
            <ul className='about-subteam-selection'>
              {roles.map((role, index) => {
                return (
                  <li key={index} 
                      className={selectedRole === index ? 'about-subteam-selection-button selected' : 'about-subteam-selection-button'}
                      onClick={() => handleSelectedRole(index)}>
                    {role}
                  </li>
                )
              })}
            </ul>
          </article>
          <div className='about-subteam-divider'/>
          <article className='about-subteam-details'>
            {selectedRole !== null && <p>{rolesDescriptions[selectedRole]}</p>}
          </article>
        </section>
        <section className='about-subteam-signup'>
          <article className='about-subteam-signup-text'>  
            <h1>Think You'll Fit In?</h1>
            <p>We're always looking for new members. If being a CyberLion sounds right to you, sign up today!</p>
            <a href="https://forms.gle/m2SS7en7DTRzL3qX6" className='about-subteam-signup-text' target="_blank" rel="noopener noreferrer">
              <button>SIGN UP</button>
            </a>
          </article>
          <img src={RobbieMove} alt='cyberlions preview'/>
        </section>
      </section>
    </div>
  )
}