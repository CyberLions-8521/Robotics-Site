import React from 'react'
import { useEffect, useState, useCallback } from 'react'
import { Container } from 'react-bootstrap'

import SponsorLogo from '../components/SponsorLogo'

//Background Images
import BackgroundImg1 from '../assets/images/FRCoutreach.png'
import BackgroundImg2 from '../assets/images/AVRTeam2025.jpg'
import BackgroundImg3 from '../assets/images/cyberlions-banner.jpg'
import BackgroundImg4 from '../assets/images/fairboticsdriveteam1.jpg'
import BackgroundImg5 from '../assets/images/edgar.png'
import BackgroundImg6 from '../assets/images/fairboticsalliance.jpg'

//Sponsor Logos
import WowLawGroup from '../assets/sponsors/2024/wow-law-group-2.png'
import BAESystems from '../assets/sponsors/2024/BAE-Systems.png'
import GeneHaasFoundation from '../assets/sponsors/2025/Gene-Haas-Foundation.png'
import eKadence from '../assets/sponsors/2025/eKadence.png'

const images = [BackgroundImg1, BackgroundImg2, BackgroundImg3, BackgroundImg4, BackgroundImg5, BackgroundImg6];

export default function SupportUs() {
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
    <div className='sponsors-background'>
      <div className='support-us-background-overlay'></div>
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
  
  <Container className='support-us-container'>
    <div className="fade-on-load">
      <Container className='sponsor-tier'>
        <h1>Golden Lions</h1>
        <p>Contributions of over $1000</p>
        <Container className='sponsor-logos-container'>
          <SponsorLogo logoSrc={GeneHaasFoundation} altText="Gene Haas Foundation Logo" linkUrl="https://www.genehaasfoundation.org/" isBlack={false} />
          <SponsorLogo logoSrc={eKadence} altText="eKadence Logo" linkUrl="https://ekadence.com/" isBlack={false} />
          <SponsorLogo logoSrc={WowLawGroup} altText="Wow Law Group Logo" linkUrl="https://www.wowlawgroup.com/" isBlack={false} />
          <SponsorLogo logoSrc={BAESystems} altText="BAE Systems Logo" linkUrl="https://www.baesystems.com/" isBlack={false} />
        </Container>
      </Container>

      <Container className='sponsor-tier'>
        <h1>Silver Lions</h1>
        <p>Contributions of over $500</p>
        <p>No sponsors in this category (yet) ^-^</p>
      </Container>

      <Container className='sponsor-tier'>
        <h1>Bronze Lions</h1>
        <p>Contributions of over $50</p>
        <p>No sponsors in this category (yet) ^-^</p>
      </Container>

      <Container className='sponsor-tier'>
        <h1>Other Supporters</h1>
        <p>Though not a formal sponsor, the following organizations have supported the team in other ways, such as providing products and services.</p>
        <ul>
          <li>
            <a href="https://share.google/plhoQrRGBCeic3gj5" target="_blank" rel="noopener noreferrer">
              Hot Com Tam
            </a>
          </li>
        </ul>
      </Container>
    </div>

    <Container className='new-sponsor-info'>
      <h2>Interested in Supporting Us?</h2>
      <p>Your contributions can help us achieve our goals and support the team in various ways.</p>
      <h3>#1 Travel Costs</h3>
      <p>Traveling to competitions and events can be expensive. Your support can help cover these costs and compete in more events, including overnight stays that require hotel accomodations.</p>
      <h3>#2 Future Inspiration</h3>
      <p>You'll help us purchase robotics equipment, teach incoming members, and allow the CyberLions to grow within STEM.</p>
      <h3>#3 Food!</h3>
      <p>Often an overlooked expense, your contribution means we can build longer: providing meals, snacks, and water.</p>

      <p>To reach out to our team, contact us at whslionsrobotics@gmail.com.</p>
    </Container>
  </Container>
    </>
  )
}