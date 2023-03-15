import React from 'react'
import { Helmet } from "react-helmet"

import sticker from "../images/icons/sticker.png"

export default function Newsletter() {
  return (
    <>
      <Helmet>
        <title>Team 8521 - Newsletter</title>
      </Helmet>

      <div className="newsletter-container">
        <div className="newsletter">
          <img alt="cyberlions sticker" src={sticker} />

          <div className="newsletter-hero">
            <h1>You're Early!</h1>
            <p>This page is still in progress, but is on track to being complete. Check back soon!</p>
          </div>
        </div>
      </div>
    </>
  )
}
