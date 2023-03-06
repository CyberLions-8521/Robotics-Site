import React from 'react'
import { Helmet } from "react-helmet"

import Profile from "../helper-components/Profile.js"
import path from "../images/icons/map-marker.png"
import bulb from "../images/icons/bulb.png"
import grape from "../images/icons/grape.png"

import TJAero from "../images/sponsors/2023/TJ-Aero-2.png"
import Arden from "../images/sponsors/2023/Arden.png"
import VoSandwich from "../images/sponsors/2023/Vo-Sandwich.png"
import DynamicFab from "../images/sponsors/2023/Dynamic-Fab.png"
import HeimBearings from "../images/sponsors/2023/Heim-Bearings.png"
import Morstar from "../images/sponsors/2023/MorStar.png"
import Sugoi from "../images/sponsors/2023/Sugoi-Stuff.png"
import Sunmerry from "../images/sponsors/2023/Sunmerry.png"

export default function SupportUs() {
  return (
    <>
      <Helmet>
        <title>Support Us | Cyberlions</title>
      </Helmet>

      <div className="support-us">
        <div className="support-us-hero">
          <h1>More Opportunity For Our Robotics Club!</h1>
          <p>Learn about what your help means to us.</p>
        </div>

        {/* What sponsoring CyberLions will entail. Includes link to GoFundMe */}
        <div className="support-us-content">
          <section className="support-us-content-benefits">

            <Profile
              image={path}
              imageDescription="Travel Costs"
              header="Travel Costs"
              text="Your funding can be used to help our team compete out-of-state and pay hotel fees so all our members can go."
            />

            <Profile
              image={bulb}
              imageDescription="Light Bulb"
              header="Future Inspiration"
              text="You'll let us to purchase robotics equipment, teach incoming members, and allow the CyberLions to grow within STEM."
            />

            <Profile
              image={grape}
              imageDescription="Grape"
              header="Food!"
              text="Often an overlooked expense, your contribution means we can build longer: dinner, snacks, and water."
            />
          </section>

          <a href="https://www.gofund.me/af92cbf7" target="_blank" rel="noreferrer">Visit Our GoFundMe</a>
        </div>

        <div className="support-us-sponsors">
          <h1>Thank You To Our Sponsors</h1>

          <section className="support-us-sponsors-list">
            <img alt="TJAero" src={TJAero} />
            <img alt="Arden" src={Arden} />
            <img alt="VoSandwich" src={VoSandwich} />
            <img alt="DynamicFab" src={DynamicFab} />
            <img alt="HeimBearings" src={HeimBearings} />
            <img alt="Morstar" src={Morstar} />
            <img alt="Sugoi Stuff" src={Sugoi} />
            <img alt="Sunmerry Bakery" src={Sunmerry} />
          </section>
        </div>
      </div>
    </>
  )
}
