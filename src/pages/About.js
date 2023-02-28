import React from 'react'
import { Helmet } from 'react-helmet'

import mechanical from '../images/2022-images/hardware.jpg'
import electrical from '../images/2022-images/electrical.jpg'
import software from '../images/2022-images/programming.jpg'
import operations from '../images/2022-images/operations.jpg'
import design from '../images/2023-images/design.jpg'

export default function About() {
  return (
        <>
            <Helmet>
                <title>About | Cyberlions</title>
            </Helmet>

            {/* about-container AKA the about's parent, is neccessary to center the about div which has all the content in it */}
            <div className="about-container">
                <div className="about">
                    <div className="about-hero">
                        <h3>Why Even Have CyberLions?</h3>
                        <h1>CyberLions Give Highschoolers Real Life Experience</h1>
                        <p>Our Robotics team is challenged under strict rules and limited time and resources to raise funding, design a team brand, and work together to build competition-ready robots.  </p>
                    </div>

                    <div className="about-images">
                        <img id="mechanical" alt="mechanical" src={mechanical} />
                        <img id="design" alt="design" src={design} />
                        <img id="electrical" alt="electrical" src={electrical} />
                        <img id="software" alt="software" src={software} />
                        <img id="operations" alt="operations" src={operations} />
                    </div>

                    <main className="about-subteams-container">
                        <div className="about-subteams-container-hero">
                            <h1>Our Division Subteams</h1>
                            <h2>Being Part of The CyberLions Means You're Part of a Major Role</h2>
                        </div>

                        <div className="about-subteams">
                            <article className="about-subteams-mechanical-design">
                                <h1>Mechanical and Design Team</h1>
                                <p>Learn design skills and rapid prototyping techniques through CAD and 3d printing.  You're planning, designing, and testing different mechanisms using workshop tools and hardware to manufacture and assemble the robot.</p>
                            </article>

                            <article className="about-subteams-operations">
                                <h1>Operations Management Team</h1>
                                <p>Market the team for sponsorships and plan and corrdinate club events. You're in charge of overseeing the club budget and FRC inventory, working closely with club advisors and IPT leads.</p>
                            </article>

                            <article className="about-subteams-electrical">
                                <h1>Electrical Team</h1>
                                <p>Design and manage the robot's electrical board and distribution. You're going to be using wiring and connection techniques to make sure all electrical components are hooked up for the mechanisms to work properly.</p>
                            </article>

                            <article className="about-subteams-software">
                                <h1>Software Team</h1>
                                <p> Develop and integrate Java algorithms that satisfy the requirements of a functionable shooter, intake system, drivetrain and limelight. You'll operate on Github and Visual Studio Code to make the robot function.</p>
                            </article>
                        </div>
                    </main>

                    <div className="about-shameless-plug">
                        <div className="about-shameless-plug-blur"></div>

                        <h1>Help Us Keep Going</h1>
                        <section className="about-shameless-plug-text">
                            <p>We founded the CyberLions on a random afternoon in 2020, and now we want to establish a strong robotics foundation for future years to come.</p>
                            <p>Your sponsorship will help our members learn the skills and have the material to design and manufacture a competition-ready robot.</p>

                            <a href="/support-us">Learn More</a>
                        </section>                        
                    </div>
                </div>
            </div>
        </>
    )
}
