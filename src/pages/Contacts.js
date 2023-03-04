import React, {useRef} from 'react'
import { Helmet } from "react-helmet"

import contactsBanner from "../images/icons/contacts-banner2.jpg"
import Label from "../helper-components/Label.js"

export default function Contacts() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  let br = "%0D%0A";
  let space = "%20";

  const submitForm = () => {
    // On the current browser page, open up a new email
    // Subject is the name of the user
    // Content of the email & end with the user's phone number
    window.location = `mailto:whslionsrobotics@gmail.com?subject=We're${space + nameRef.current.value} Let's${space}talk!&body=${messageRef.current.value + br + br +phoneRef.current.value}`
  }

  return (
    <>
      <Helmet>
        <title>Contacts | Cyberlions</title>
      </Helmet>

      <div className="contacts">
        <img className="contacts-banner" alt="cyberlions banner contacts" src={contactsBanner} />

        <div className="contacts-info">
          <div className="contacts-info-input">
            <h1>Contact Us</h1>

            <Label type="nowrap" header="Name:" id={nameRef} />
            <Label type="nowrap" header="Email:" id={emailRef} />
            <Label type="nowrap" header="Phone Number (Optional):" id={phoneRef} />
            <Label type="wrap" header="Message:" id={messageRef} />

            <button className="contacts-info-input-button" onClick={submitForm}>Submit</button>
          </div>

          <div className="contacts-info-google-maps">
            <iframe title="Westminster High School" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=14325%20Goldenwest%20St,%20Westminster,%20CA%2092683+(Westminster%20High%20School)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameborder="0"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe>

            <div className="contacts-info-google-maps-metadata">
            <section>
                <h1>Email</h1>
                <p>whslionsrobotics@gmail.com</p>
              </section>

              <section>
                <h1>Address</h1>
                <p>14325 Goldenwest St,<br /> Westminster, CA 92683</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
