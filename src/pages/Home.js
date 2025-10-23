import React, { useEffect, useRef } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import CarouselImage from '../components/CarouselImage'
import NavigationCard from '../components/NavigationCard'
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
      [h1ref, h2ref].forEach(ref => {
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
            <p ref={h2ref} className="fade-on-scroll">Founded in 2020, Team 8521 is a student-led, non-profit organization that consists of passionate individuals who share a common interest in robotics. We participate in <a href="https://www.firstinspires.org/robotics/frc" target="_blank" rel="noopener noreferrer" style={{color: 'var(--hyperlink-color)'}}>FIRST Robotics Competition (FRC)</a>, a national program and community with thousands of teams worldwide.</p>
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
