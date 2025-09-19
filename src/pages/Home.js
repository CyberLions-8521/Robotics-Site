import React, { useEffect, useRef } from 'react'
import { Carousel, Container, Card, Button } from 'react-bootstrap'
import CarouselImage from '../components/CarouselImage'
import NavigationCard from '../components/NavigationCard'

import Banner1 from '../assets/images/cyberlions-banner.jpg'
import Banner2 from '../assets/images/edgar.png'
import Banner3 from '../assets/images/cyberlions-veteran.png'

import CardImg1 from '../assets/images/kevilry.jpg'

export default function Home() {
  const h1ref = useRef();
  const h2ref = useRef();

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
      <Carousel className='home-carousel' interval={3000} onPause={"hover"}>
        <Carousel.Item>
          <CarouselImage 
            imageSrc={Banner1} 
            altText="First slide" 
            captionHeader="First slide label" 
            captionText="Nulla vitae elit libero, a pharetra augue mollis interdum." 
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage 
            imageSrc={Banner2} 
            altText="Second slide" 
            captionHeader="Second slide label" 
            captionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage 
            imageSrc={Banner3} 
            altText="Third slide" 
            captionHeader="Third slide label" 
            captionText="Praesent commodo cursus magna, vel scelerisque nisl consectetur." 
          />
        </Carousel.Item>
      </Carousel>
      <Container className="home-info">
  <h1 ref={h1ref} style={{fontSize: '3rem', color: 'var(--primary-color-2)'}} className="fade-on-scroll">We're a robotics team located in Westminster, California</h1>
        <p ref={h2ref} className="fade-on-scroll">Founded in 2020 as a non-profit, Team 8521 focuses on diversity, inclusion, and providing our members hands-on opportunities to practice real engineering and marketing.</p>
        <Container className="home-cards">
          <NavigationCard
            imgSrc={CardImg1}
            title="ABOUT THE TEAM"
            text="Learn about our team culture, mission, and values."
            buttonText="Learn more"
            buttonLink="/about"
          />
          <NavigationCard
            imgSrc={CardImg1}
            title="OUR ROBOTS"
            text="Check out our robots, including specs, released code, and CAD."
            buttonText="Learn more"
            buttonLink="/robots"
          />
          <NavigationCard
            imgSrc={CardImg1}
            title="SPONSORS"
            text="See our sponsors, as well as how you can support our team."
            buttonText="Learn more"
            buttonLink="/sponsors"
          />
        </Container>
      </Container>
    </>
  )
}
