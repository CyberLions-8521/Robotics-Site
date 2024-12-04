import React from 'react'
// import iClever from '../assets/sponsors/2024/iClever.png'
// import SignImaging from '../assets/sponsors/2024/Sign-Imaging.png'
// import WestCoastCivil from '../assets/sponsors/2024/West-Coast-Civil.png'
import WowLawGroup from '../assets/sponsors/2024/wow-law-group-2.png'
import BAESystems from '../assets/sponsors/2024/BAE-Systems.png'
// import SugoiStuff from '../assets/sponsors/2023/Sugoi-Stuff.png'
// import TJAerospace from '../assets/sponsors/2023/TJ-Aero-3.png'
// import Sunmerry from '../assets/sponsors/2023/Sunmerry.png'
// import VoSandwiches from '../assets/sponsors/2023/Vo-Sandwich.png'
// import MorStar from '../assets/sponsors/2023/MorStar.png'
// import DynamicFab from '../assets/sponsors/2023/Dynamic-Fab.png'
// import Arden from '../assets/sponsors/2023/Arden2.png'
// import HeimBearings from '../assets/sponsors/2023/Heim-Bearings.png'


/*
const goldSponsors = [
  'WOW Law Group',
];

const silverSponsors = [
  'None yet'
];

const bronzeSponsors = [
  'Little Hill Design',
  'Plato\'s Closet',
  'West Coast Civil',
  'Harbor Freight Tools',
];

const productDonations = [
  'Hot Topic',
  'Sign Imaging',
  'California Fish Grill',
  'Sensitive Sweets',
  'Urban Plates',
  'Core Digital Media',
  'Ohuhu',
  'Milk Jar Cookies',
  'Crown Gold Exchange',
  'TAP Electronics',
  'Phillips Steel',
]
*/
/*
const listGoldSponsors = goldSponsors.map(sponsor =>
  <li>{sponsor}</li>
);

const listSilverSponsors = silverSponsors.map(sponsor =>
  <li>{sponsor}</li>
);

const listBronzeSponsors = bronzeSponsors.map(sponsor =>
  <li>{sponsor}</li>
);

const listProductSponsors = productDonations.map(sponsor =>
  <li>{sponsor}</li>
);
*/

/* at some point make these a list and function with key and value properties.
  this would also allow them to have logos.

e.g.

id: 0,
name:'WOW Law',
sponsorType:'Gold',
logo:{LOGO},

Could be a good React component ^
*/

/*
Note for sponsor tiers:
Golden Lions should have the biggest logos so they can get more recognition. 
Some sponsors requested this specifically.
*/

/* REMOVED GOFUNDME SECTION (CLOSED)
<p className='support-subheader'>
          WE ALSO HAVE A <a href="https://gofund.me/96ab06ee" target="_blank" rel="noopener noreferrer" class="support-link">GOFUNDME</a>
          </p>
*/

//Have yet to add BAE Systems, will have to throw it into an art editor to edit it and upload the image source here

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
        <h1 className='support-sponsors-header'>HUGE THANK YOU TO OUR CURRENT SPONSORS</h1>
          <div className='support-sponsor-text' >
            
            <div className='support-sponsor-tier-text'>
              <h2 className='support-sponsor-tier'>Golden Lions</h2>
              <p className='support-sponsor-tier-price'>$1000+</p>
            </div>
            <div className='support-tiergroup-gold'>
              <img src={WowLawGroup} className='support-gold-logo' alt='WOW Law Group Logo'/>
              <img src={BAESystems} className='support-gold-logo' alt='BAE Systems Logo'/>
            </div>
            
            <div className='support-sponsor-tier-text'>
              <h2 className='support-sponsor-tier'>Silver Lions</h2>
              <p className='support-sponsor-tier-price'>$500+</p>
            </div>

            <div className='support-sponsor-tier-text'>
              <h2 className='support-sponsor-tier'>Bronze Lions</h2>
              <p className='support-sponsor-tier-price'>$50+</p>
            </div>

          </div>
        <p className='support-subheader'>CONTACT US AT WHSLIONSROBOTICS@GMAIL.COM</p>
      </div>
    </div>
  )
}