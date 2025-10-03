import React, { useEffect, useRef } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import CarouselImage from '../components/CarouselImage'
import NavigationCard from '../components/NavigationCard'
import TimelineItem from '../components/TimelineItem'
import SponsorLogo from '../components/SponsorLogo'

//Hero Header Logo
import AltLogo from '../assets/images/8521-alt-logo.png'

//Banner Images
import Banner1 from '../assets/images/AVRTeam2025.jpg'
import Banner2 from '../assets/images/fairbotics.jpg'
import Banner3 from '../assets/images/fairboticsalliance.jpg'
import Banner4 from '../assets/images/fairboticsdriveteam2.jpg'
import Banner5 from '../assets/images/fairboticsdriveteam1.jpg'

//Navigation Card Images
import CardImg1 from '../assets/images/joshandnick.jpg'
import CardImg2 from '../assets/images/kevilry.jpg'
import CardImg3 from '../assets/images/FRCoutreach.png'

//Timeline Images
import TimelineImg2020 from '../assets/images/FIRSTLogo.png'
import TimelineImg2022 from '../assets/images/kevilry-2.jpg'
import TimelineImg2023 from '../assets/images/robbie-move.jpg'
import TimelineImg2024 from '../assets/images/rommenus.jpg'
import TimelineImg2025 from '../assets/images/reefscape-field-2025.jpg'

//Sponsor Logos
import WowLawGroup from '../assets/sponsors/2024/wow-law-group-2.png'
import BAESystems from '../assets/sponsors/2024/BAE-Systems.png'
import GeneHaasFoundation from '../assets/sponsors/2025/Gene-Haas-Foundation.png'
import eKadence from '../assets/sponsors/2025/eKadence.png'

export default function Home() {
  const h1ref = useRef();
  const h2ref = useRef();

  //handle fade-in on scroll effect
  useEffect(() => {
    function onScroll() {
      [h1ref, h2ref ].forEach(ref => {
        if (!ref.current) return;
        const top = ref.current.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.7;
        if (top < triggerPoint) {
          ref.current.classList.add('fade-in-visible');
        }
      });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
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
      description: "Competed in Orange County Regional and Aerospace Valley Regional.",
      imgSrc: TimelineImg2025,
      imgAlt: "CyberLions Veteran"
    }
  ]

  return (
    <>
      <Container className="home-hero-header">
        <img src={AltLogo} alt="CyberLions 8521 Logo" className="home-hero-logo" />
        <h1>Lions Roar. Robots Rev.</h1>
      </Container>
      <Carousel className='home-carousel' interval={3000} onPause={"hover"}>
        <Carousel.Item>
          <CarouselImage 
            imageSrc={Banner1} 
            altText="First slide" 
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage 
            imageSrc={Banner2} 
            altText="Second slide" 
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage 
            imageSrc={Banner3} 
            altText="Third slide" 
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage 
            imageSrc={Banner4} 
            altText="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage
            imageSrc={Banner5}
            altText="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
      <Container className="home-container" fluid>
        <Container className="home-info">
          <Container className="home-header">
            <h1 ref={h1ref} style={{fontSize: '4rem', color: 'var(--primary-color-2)'}} className="fade-on-scroll">We're a robotics team located in Westminster, California</h1>
            <p ref={h2ref} className="fade-on-scroll">Founded in 2020 as a non-profit, Team 8521 focuses on diversity, inclusion, and providing our members hands-on opportunities to practice real engineering and marketing.</p>
          </Container>
          <Container className="home-cards">
            <NavigationCard
              imgSrc={CardImg1}
              title="ABOUT THE TEAM"
              text="Learn about our team culture, mission, and values."
              buttonText="Learn more"
              buttonLink="/about"
            />
            <NavigationCard
              imgSrc={CardImg2}
              title="OUR ROBOTS"
              text="Check out our robots, including specs, released code, and CAD."
              buttonText="Learn more"
              buttonLink="/robots"
            />
            <NavigationCard
              imgSrc={CardImg3}
              title="SPONSORS"
              text="See our sponsors, as well as how you can support our team."
              buttonText="Learn more"
              buttonLink="/sponsors"
            />
          </Container>
        </Container>
        <Container className="home-timeline">
          <h1 style={{fontSize: '4rem', color: 'var(--primary-color-2)'}}>Our Journey</h1>
          <Container className="home-timeline-items">
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
        <Container className="home-sponsors">
          <p>Team 8521 CyberLions is proud to be sponsored by:</p>
          <Container className="home-sponsors-logos">
            <SponsorLogo
              logoSrc={WowLawGroup}
              altText="Wow Law Group Logo"
              linkUrl="https://www.wowlawgroup.com/"
              isBlack
            />
            <SponsorLogo
              logoSrc={BAESystems}
              altText="BAE Systems Logo"
              linkUrl="https://www.baesystems.com/en"
              isBlack
            />
            <SponsorLogo
              logoSrc={GeneHaasFoundation}
              altText="Gene Haas Foundation Logo"
              linkUrl="https://www.ghaasfoundation.org/"
              isBlack
            />
            <SponsorLogo
              logoSrc={eKadence}
              altText="eKadence Logo"
              linkUrl="https://ekadence.org/"
              isBlack
            />
          </Container>
          <p>To learn how you can support our team, visit our sponsors page.</p>
        </Container>
      </Container>
    </>
  )
}
