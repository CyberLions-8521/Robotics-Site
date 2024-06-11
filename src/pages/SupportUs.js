import React from 'react'
import iClever from '../assets/sponsors/2024/iClever.png'
import SignImaging from '../assets/sponsors/2024/Sign-Imaging.png'
import WestCoastCivil from '../assets/sponsors/2024/West-Coast-Civil.png'
import WowLawGroup from '../assets/sponsors/2024/wow-law-group-2.png'
import SugoiStuff from '../assets/sponsors/2023/Sugoi-Stuff.png'
import TJAerospace from '../assets/sponsors/2023/TJ-Aero-3.png'
import Sunmerry from '../assets/sponsors/2023/Sunmerry.png'
import VoSandwiches from '../assets/sponsors/2023/Vo-Sandwich.png'
import MorStar from '../assets/sponsors/2023/MorStar.png'
import DynamicFab from '../assets/sponsors/2023/Dynamic-Fab.png'
import Arden from '../assets/sponsors/2023/Arden2.png'
import HeimBearings from '../assets/sponsors/2023/Heim-Bearings.png'

export default function SupportUs() {
  return (
    <div className='support-container'>
      <div className='headline'>
        <div className='support-headline'>
          <h1 className='support-header'>WE WOULD BE THRILLED TO HAVE YOU AS A SPONSOR</h1>
          <h2 className='support-subheader'>LEARN ABOUT THE BENEFITS YOU WOULD PROVIDE TO OUR TEAM</h2>
        </div>
      </div>

      <div className='support-info'>
        <div className='support-section-1'>
          <p className='support-text-1'>#1 TRAVEL COSTS</p>
          <p className='support-text-2'>Your funding helps our team compete in more events, including out-of-state competitions, and pay hotel fees so all of our members can go.</p>
        </div>
        <div className='support-section-2'>
          <p className='support-text-1'>#2 FUTURE INSPIRATION</p>
          <p className='support-text-2'>You'll help us purchase robotics equipment, teach incoming members, and allow the CyberLions to grow within STEM.</p>
        </div>
        <div className='support-section-1'>
          <p className='support-text-1'>#3 FOOD!</p>
          <p className='support-text-2'>Often an overlooked expense, your contribution means we can build longer: providing dinner, snacks, and water.</p>
        </div>
      </div>

      <div className='support-sponsors'>
        <h1 className='support-header'>HUGE THANK YOU TO OUR CURRENT SPONSORS</h1>
        <div className='support-sponsor-images'>
          <img alt='iClever' src={iClever} className='sponsor-img'/>
          <img alt='Sign Imaging' src={SignImaging} className='sponsor-img'/>
          <img alt='West Coast Civil' src={WestCoastCivil} className='sponsor-img'/>
          <img alt='WOW Law Group' src={WowLawGroup} className='sponsor-img'/>
          <img alt='Sugoi Stuff' src={SugoiStuff} className='sponsor-img'/>
          <img alt='TJ Aerospace' src={TJAerospace} className='sponsor-img'/>
          <img alt='Sunmerry' src={Sunmerry} className='sponsor-img'/>
          <img alt='Vo Sandwiches' src={VoSandwiches} className='sponsor-img'/>
          <img alt='MorStar' src={MorStar} className='sponsor-img'/>
          <img alt='Dynamic Fab' src={DynamicFab} className='sponsor-img'/>
          <img alt='Arden' src={Arden} className='sponsor-img'/>
          <img alt='Heim Bearings' src={HeimBearings} className='sponsor-img'/>
        </div>
        <p className='support-subheader'>CONTACT US AT WHSLIONSROBOTICS@GMAIL.COM</p>
        <p className='support-subheader'>
          WE ALSO HAVE A <a href="https://gofund.me/96ab06ee" target="_blank" rel="noopener noreferrer" class="support-link">GOFUNDME</a> :)
          </p>
      </div>
    </div>
  )
}