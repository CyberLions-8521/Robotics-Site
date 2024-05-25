import { React } from 'react'

import HeroBanner from '../assets/images/cyberlions-banner.jpg'
import Section from '../components/Section'
import Edgar from '../assets/images/edgar.png'
import Vet from '../assets/images/cyberlions-veteran.jpg'
import RobotReveal from '../assets/images/robot-2024.png'
import RobotBackdrop from '../assets/images/IMG_5098.JPG'

export default function Home() {

  return (
    <div className='content-container'>
      
      <section className='hero'>
        <div className='hero-background'>
          <div className='hero-content'>
            <article className='hero-content-text'>
              <p id='hero-content-text-one'>Lions Lead.</p>
              <p id='hero-content-text-two'>Robots Rev.</p>
            </article>
              <img className='hero-content-image' src={HeroBanner} alt='Cyberlions Hero Banner' />
          </div>
        </div>

        {/* wave SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#C94309" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </section>

      <div className='container'>

        <Section 
          title={'We’re a robotics team in Westminster, California'} 
          description={'founded in 2020 as a non-profit. Team 8521 focuses on diversity, inclusion, and provide our members hands-on opportunities to practice real engineering and marketing.'} 
          picture={Edgar} 
          pictureLocation={'left'} 
        />

        <Section 
          title={'We’re also Competitors in FIRST Robotics'} 
          description={'designing, building, teamworking, and making connections with other Robotics teams around the nation, and also internationally.'} 
          picture={Vet} 
          pictureLocation={'right'} 
        />

        <div className='large-quote'>
          <p className='large-quote-quote'>"I love this team."</p>
          <p className='large-quote-author'>- Gregory Berger, Mentor</p>
        </div>

        <div className='robot-reveal-hero'>
          <section className='robot-reveal-hero-text'>
            <p className='robot-reveal-hero-text-title'>Say Hi To Rommeus, Our Latest Robot</p>
            <p className='robot-reveal-hero-text-description'>The Work of Over 50 Robotics Members</p>
          </section>

          <img className='robot-reveal-hero-image' src={RobotReveal} alt='Robot Reveal' />
        </div>

      </div>
      <img className='robot-reveal-hero-backdrop' src={RobotBackdrop} alt='Robot Reveal' />
    </div>
  )
}
