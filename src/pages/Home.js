import { React } from 'react'

import HeroBanner from '../assets/images/cyberlions-banner.jpg'

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

        <p>Hi</p>

      </div>
    </div>
  )
}
