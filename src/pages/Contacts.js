import React, {useRef} from 'react'
import { Helmet } from "react-helmet"

import contactsBanner from "../images/icons/contacts-banner2.jpg"
import Label from "../helper-components/Label.js"

import Scroll from '../helper-components/Scroll'

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
        <title>Team 8521 - Contacts</title>
      </Helmet>

      <div className="contacts">

        <div className="contacts-info">

          <div className="contact-content">
            <h1>Talk to our robotics team!</h1>
            <p>Learn about how we'll represent your company</p>
            <p>Watch our team in action and how we build and prototype our robots</p>
            <h3>Be one of our awesome supporters!</h3>
          </div>
          <div className="contacts-info-input">

        
            <Label type="nowrap" header="Name:" id={nameRef} />
            <Label type="nowrap" header="Email:" id={emailRef} />
            <Label type="nowrap" header="Phone Number (Optional):" id={phoneRef} />
            <Label type="wrap" header="Message:" id={messageRef} />

            <button className="contacts-info-input-button" onClick={submitForm}>Submit</button>
          </div>


        </div>
      </div>

      <Scroll />
    </>
  )
}
