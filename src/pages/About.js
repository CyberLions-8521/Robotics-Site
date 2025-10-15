import React from 'react'
import { useEffect, useState, useCallback } from 'react'
import { Container, Accordion, Card } from 'react-bootstrap'

//Background Images (currently pasted from sponsors page, but can import different backgrounds later)
import BackgroundImg1 from '../assets/images/FRCoutreach.png'
import BackgroundImg2 from '../assets/images/AVRTeam2025.jpg'
import BackgroundImg3 from '../assets/images/cyberlions-banner.jpg'
import BackgroundImg4 from '../assets/images/fairboticsdriveteam1.jpg'
import BackgroundImg5 from '../assets/images/edgar.png'
import BackgroundImg6 from '../assets/images/fairboticsalliance.jpg'

const images = [BackgroundImg1, BackgroundImg2, BackgroundImg3, BackgroundImg4, BackgroundImg5, BackgroundImg6];

export default function About() {
  const [imgHeight, setImgHeight] = useState(`${100 / images.length}vh`);
  // Updates image height to match support-us-container height
  const updateImgHeight = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight;
    setImgHeight(`${totalHeight / images.length}px`);
  }, []);

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
      </Container>
    </Container>
    </>
  )
}