import { React } from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

import Mascot from '../assets/images/cyberlions-mascot.png'

export default function Newsletter() {
  return (
    <div className='newsletter-body'>
      <div className='newsletter-top'>
        <div display='flex' flexDirection='column'>
          <div className='newsletter-header'>
            WHAT'S BEEN GOING ON?
          </div>
          <div className='newsletter-description'>
            Updates on our team's progress and accomplishments.
          </div>
        </div>
        <img src={Mascot} className='newsletter-mascot'></img>
      </div>
      
      <div className='newsletter-content'>
        <div className='newsletter-drive'>
          <div className='newsletter-subheader'>
            Newsletter
          </div>
          {/* from inside google doc: file --> share --> publish to web --> embed */}
          <iframe className='newsletter-embed' src="https://docs.google.com/document/d/e/2PACX-1vSVZCZ-ljA1I8thZG4QW2Bv1DHZJu0XlFNedCBHAbf88pKnAxK1dsXfJsjPiaWeKYCMUyNjTPZxcw2a/pub?embedded=true"></iframe>
        </div>
        <div className='newsletter-instagram'>
          <div className='newsletter-subheader'>
            Instagram (@cyberlions8521)
          </div>
          {/* Instagram's embed doesn't work in react for some reason */}
          <InstagramEmbed url='https://www.instagram.com/cyberlions8521/' className='newsletter-embed'></InstagramEmbed>
        </div>
      </div>
    </div>
  )
}
