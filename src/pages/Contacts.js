import React from 'react'
import { Helmet } from "react-helmet"

import contactsBanner from "../images/icons/contacts-banner.jpg"

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Contacts | Cyberlions</title>
      </Helmet>

      <div className="contacts">
        <img className="contacts-banner" alt="cyberlions banner contacts" src={contactsBanner} />

        <div className="contacts-info">
          <div className="contacts-info-input">
            <label for="name">Name:</label>
            <input type="text" placeholder="Name" />

            <label for="email">Email:</label>
            <input type="text" placeholder="email" />

            <label for="phone">Phone Number (Optional):</label>
            <input type="text" placeholder="phone" />

            <label for="message">message:</label>
            <input type="text" placeholder="message" />
          </div>

          <div className="contacts-info-google-maps">
            <iframe title="Westminster High School" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=14325%20Goldenwest%20St,%20Westminster,%20CA%2092683+(Westminster%20High%20School)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameborder="0"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe>
          </div>
        </div>
      </div>


    </>
  )
}
