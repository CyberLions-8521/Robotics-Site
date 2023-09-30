import React from 'react'
import { Helmet } from "react-helmet"

import Profile from "../helper-components/Profile.js"
import path from "../images/icons/map-marker.png"
import bulb from "../images/icons/bulb.png"
import grape from "../images/icons/grape.png"

import wowLawGroup from "../images/sponsors/2024/wow-law-group-2.png"
import ardenEngi from "../images/sponsors/2023/Arden2.png"
import dynamicFab from "../images/sponsors/2023/Dynamic-Fab.png"
import heimBearings from "../images/sponsors/2023/Heim-Bearings.png"
import morStar from "../images/sponsors/2023/MorStar.png"
import sugoiStuff from "../images/sponsors/2023/Sugoi-Stuff.png"
import sunMerry from "../images/sponsors/2023/Sunmerry.png"
import tjAero from "../images/sponsors/2023/TJ-Aero-3.png"
import voSandwich from "../images/sponsors/2023/Vo-Sandwich.png"

import Scroll from '../helper-components/Scroll'

export default function SupportUs() {
  return (
    <>
      <Helmet>
        <title>Team 8521 - Support Us</title>
      </Helmet>

      <div className="support-us">
        <div className="support-us-hero">
          <h1>More Opportunities For Our Robotics Club!</h1>
          <p>Learn about what your help means to us.</p>
        </div>

        {/* What sponsoring CyberLions will entail. Includes link to GoFundMe */}
        <div className="support-us-content">
          <section className="support-us-content-benefits">

            <Profile
              image={path}
              imageDescription="Travel Costs"
              header="Travel Costs"
              text="Your funding helps our team compete in more events, including out-of-state competitions, and pay hotel fees so all our members can go."
            />

            <Profile
              image={bulb}
              imageDescription="Light Bulb"
              header="Future Inspiration"
              text="You'll help us purchase robotics equipment, teach incoming members, and allow the CyberLions to grow within STEM."
            />

            <Profile
              image={grape}
              imageDescription="Grape"
              header="Food!"
              text="Often an overlooked expense, your contribution means we can build longer: providing dinner, snacks, and water."
            />
          </section>

          <a href="https://gofund.me/c310ade8" target="_blank" rel="noreferrer">Visit Our GoFundMe</a>
        </div>

        <div className="support-us-sponsors">
          <h1>Thank You To Our Sponsors</h1>

          <section className="support-us-sponsors-list">
            <img alt="WoW Law Group" src={wowLawGroup} />
            <img alt="Arden Enginnering" src={ardenEngi} />
            <img alt="Dynamic Fabrications" src={dynamicFab} />
            <img alt="Heim Bearings" src={heimBearings} />
            <img alt="Morstar Electric" src={morStar} />
            <img alt="Sugoi Stuff" src={sugoiStuff} />
            <img alt="Sunmerry" src={sunMerry} />
            <img alt="TJ Aerospace" src={tjAero} />
            <img alt="Vo Sandwiches" src={voSandwich} />
          </section>
        </div>
      </div>

      <Scroll />
    </>
  )
}
