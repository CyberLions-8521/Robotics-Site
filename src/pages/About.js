import React from 'react'
import { useEffect, useState, useCallback } from 'react'
import { Container } from 'react-bootstrap'

import SubteamCard from '../components/SubteamCard'
import InfoSection from '../components/InfoSection'
import TimelineItem from '../components/TimelineItem'

//Background Images (currently pasted from sponsors page, but can import different backgrounds later)
import BackgroundImg1 from '../assets/images/FRCoutreach.png'
import BackgroundImg2 from '../assets/images/AVRTeam2025.jpg'
import BackgroundImg3 from '../assets/images/cyberlions-banner.jpg'
import BackgroundImg4 from '../assets/images/fairboticsdriveteam1.jpg'
import BackgroundImg5 from '../assets/images/edgar.png'
import BackgroundImg6 from '../assets/images/fairboticsalliance.jpg'

//Subteam Images
import BuildTeamImg from '../assets/images/BuildTeam.JPG'
import ElectricalImg from '../assets/images/Electrical.JPG'
import ProgrammingImg from '../assets/images/Programming.jpg'
import OperationsImg from '../assets/images/OperationsManagement.jpg'

//Images for Info Sections
import OutreachImg from '../assets/images/2025girlscouts.jpg'
import CommunityImg from '../assets/images/AVRTeam2025.jpg'
import JoinUsImg from '../assets/images/JoinUs.jpg'

//Timeline Images
import TimelineImg2020 from '../assets/images/FIRSTLogo.png'
import TimelineImg2022 from '../assets/images/kevilry-2.jpg'
import TimelineImg2023 from '../assets/images/robbie-move.jpg'
import TimelineImg2024 from '../assets/images/rommenus.jpg'
import TimelineImg2025 from '../assets/images/tappy-2.jpg'

const images = [BackgroundImg1, BackgroundImg2, BackgroundImg3, BackgroundImg4, BackgroundImg5, BackgroundImg6];

export default function About() {
  // State to hold calculated image height
  const [imgHeight, setImgHeight] = useState(`${100 / images.length}vh`);
  // Updates image height to match support-us-container height
  const updateImgHeight = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight;
    setImgHeight(`${totalHeight / images.length}px`);
  }, []);

  //Timeline Data
  const timelineData = [
    { year: 2020,
      title: "Team Founded", 
      description: "Team established in 2020",
      imgSrc: TimelineImg2020,
      imgAlt: "CyberLions Veteran"
    },
    { year: 2022,
      title: "Rookie Year",
      description: "Competed in Orange County Regional with a record of 8-8-0, winning the Rookie All-Star Award, Regional Finalists, and Highest Rookie Seed.",
      imgSrc: TimelineImg2022,
      imgAlt: "CyberLions Veteran"
    },
    { year: 2023,
      title: "Charged Up",
      description: "Competed in Orange County Regional and Silicon Valley Regional.",
      imgSrc: TimelineImg2023,
      imgAlt: "CyberLions Veteran"
    },
    { year: 2024,
      title: "Crescendo",
      description: "Competed in Orange County Regional and Ventura Regional, winning the Team Spirit Award.",
      imgSrc: TimelineImg2024,
      imgAlt: "CyberLions Veteran"
    },
    {
      year: 2025,
      title: "REEFSCAPE",
      description: "Competed in Orange County Regional and Aerospace Valley Regional. During our off-season competitions, we became alliance captains for the first time and won the Judges Award at Socal Showdown.",
      imgSrc: TimelineImg2025,
      imgAlt: "CyberLions Veteran"
    }
  ]

  useEffect(() => {
    updateImgHeight(); // Run on mount
    window.addEventListener('resize', updateImgHeight);

    // Run after all images load
    const imgs = document.querySelectorAll('.background-img');
    imgs.forEach(img => {
      img.addEventListener('load', updateImgHeight);
    });

    return () => {
      window.removeEventListener('resize', updateImgHeight);
      imgs.forEach(img => {
        img.removeEventListener('load', updateImgHeight);
      });
    };
  }, [updateImgHeight, images.length]);

  return (
    <>
    <div className='about-background'>
      <div className='about-background-overlay'></div>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          className="background-img"
          style={{ height: imgHeight }}
          alt={`Background ${idx + 1}`}
        />
      ))}
    </div>

    <Container className="about-container" fluid>
      <h1>About the CyberLions</h1>
      <p>Insert creative and inspiring description here</p>
      <Container className="about-why-robotics">
          <iframe 
            width="1000" 
            height="563" 
            src="https://www.youtube.com/embed/8KKq_N7rqac?si=iWQP-olUheRZfCtI&autoplay=1&mute=1&loop=1&playlist=8KKq_N7rqac" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
          >
          </iframe>
          <div className="about-why-robotics-text">
            <h1>Why Do Robotics?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
      </Container>

      <Container className='about-subteams'>
        <h1>Real world experience</h1>
        <p>Explanation of subteams</p>
        <div className='about-subteams-cards'>
          <SubteamCard
            title="Build Team"
            description="The Build Team is responsible for designing and constructing the physical components of the robot. This includes mechanical design, fabrication, assembly, and maintenance. They work closely with the Programming Team to ensure that the robot meets all competition requirements and performs optimally."
            imgSrc={BuildTeamImg}
            imgAlt="Build Team"
          />
          <SubteamCard
            title="Electrical"
            description="The Electrical Team is responsible for designing and implementing the robot's electrical systems, including wiring, sensors, and power distribution. They work closely with the Build Team to ensure that all electrical components are properly integrated and function as intended."
            imgSrc={ElectricalImg}
            imgAlt="Electrical Team"
          />
          <SubteamCard
            title="Programming"
            description="The Programming Team is responsible for writing the code that controls the robot, including autonomous navigation and teleoperated control. They work closely with the Build Team to ensure that the software and hardware components integrate seamlessly."
            imgSrc={ProgrammingImg}
            imgAlt="Programming Team"
          />
          <SubteamCard
            title="Operations & Management"
            description="The Operations & Management Team is responsible for overseeing the entire robotics program, including budgeting, scheduling, and team coordination. They ensure that all subteams work together effectively and that the project stays on track."
            imgSrc={OperationsImg}
            imgAlt="Operations & Management Team"
          />
        </div>

        <Container className='about-outreach'>
          <h1>Outreach & Impact</h1>
          <InfoSection
            imgSrc={OutreachImg}
            imgAlt="Outreach Image"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imgLeft={true}
          />
        </Container>

        <Container className='about-community'>
          <h1>Community</h1>
          <InfoSection
            imgSrc={CommunityImg}
            imgAlt="Community Image"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imgLeft={false}
          />
        </Container>

        <Container className='about-join-us'>
          <h1>Join the Pride</h1>
          <InfoSection
            imgSrc={JoinUsImg}
            imgAlt="Join Us Image"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imgLeft={true}
          />
        </Container>

        <Container className="about-timeline">
          <h1>Our Journey</h1>
          <Container className="about-timeline-items">
            {timelineData.map((item, index) => (
              <TimelineItem 
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
              />
            ))}
          </Container>
        </Container>


      </Container>
    </Container>
    </>
  )
}