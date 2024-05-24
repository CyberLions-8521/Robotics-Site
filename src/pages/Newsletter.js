import { React } from 'react'

import Mascot from '../assets/images/cyberlions-mascot.png'

export default function Newsletter() {
  return (
    <div className='newsletter-top'>
      <div className='newsletter-header'>
        WHAT'S BEEN GOING ON?
      </div>
      <img src={Mascot} className='newsletter-mascot'></img>
    </div>
  )
}
