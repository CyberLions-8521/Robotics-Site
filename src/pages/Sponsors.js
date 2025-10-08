import React from 'react'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

//Background Images
import BackgroundImg1 from '../assets/images/FRCoutreach.png'
import BackgroundImg2 from '../assets/images/AVRTeam2025.jpg'
import BackgroundImg3 from '../assets/images/cyberlions-banner.jpg'

//Sponsor Logos
import WowLawGroup from '../assets/sponsors/2024/wow-law-group-2.png'
import BAESystems from '../assets/sponsors/2024/BAE-Systems.png'
import GeneHaasFoundation from '../assets/sponsors/2025/Gene-Haas-Foundation.png'
import eKadence from '../assets/sponsors/2025/eKadence.png'

const images = [BackgroundImg1, BackgroundImg2, BackgroundImg3];
  
export default function SupportUs() {
  const [imgHeight, setImgHeight] = useState(`${100 / images.length}vh`);

  // Updates image height on window resize
  useEffect(() => {
      function updateImgHeight() {
        const totalHeight = document.documentElement.scrollHeight;
        setImgHeight(`${totalHeight / images.length}px`);
      }
      updateImgHeight();
      window.addEventListener('resize', updateImgHeight);
      return () => window.removeEventListener('resize', updateImgHeight);
    }, []);

  return (
    <>
    <div className='sponsors-background'>
      <div className='support-us-background-overlay'></div>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          className="sponsors-background-img"
          style={{ height: imgHeight }}
          alt={`Background ${idx + 1}`}
        />
      ))}
  </div>
  <Container className='support-us-container'>
    <h1>Golden Lions</h1>
    <p>Contributions of over $1000</p>
  </Container>
    </>
  )
}