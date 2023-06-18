import React, { useState, useRef, useEffect } from 'react'

import banner from "./images/image-cyberlions-banner.jpg"
import bannerMobile from "./images/2023-images/minh-banner.jpg"

import sticker from "./images/icons/sticker.png"

import cadding from "./images/2023-images/cadding.jpg"
import kevilry from "./images/2022-images/kevilry.jpg"
import competition from "./images/2022-images/go-team.jpg"
import debugging from "./images/2022-images/debugging.jpg"
import kevilryHang from "./images/2022-images/kevilry-hang.jpg"
import planning from "./images/2022-images/planning.jpg"

import TJAero from "./images/sponsors/2023/TJ-Aero.png"
import Arden from "./images/sponsors/2023/Arden.png"
import VoSandwich from "./images/sponsors/2023/Vo-Sandwich.png"
import DynamicFab from "./images/sponsors/2023/Dynamic-Fab.png"
import HeimBearings from "./images/sponsors/2023/Heim-Bearings.png"
import Morstar from "./images/sponsors/2023/MorStar.png"
import Sugoi from "./images/sponsors/2023/Sugoi-Stuff.png"
import Sunmerry from "./images/sponsors/2023/Sunmerry.png"

import Section from './helper-components/Section'
export default function Home() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const backgroundBanner = useRef();
  const stickerCyberlion = useRef();
  const easterEgg = useRef();

  // Passing a callback function is better practice than passing a setState function (which won't work across files like a callback will)
  const changeScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  }

  // Whenever the cyberlion sticker is clicked, this function runs
  const mutateEasterEgg = () => {
    easterEgg.current.classList.toggle("content-gone");

    easterEgg.current.classList.toggle("rainbowCycleColors");
  }

  useEffect(() => {

    // When mounting, you instally add an event listener which will track the window's width for you
    // useEffect runs whenever the screenWidth state changes
    window.addEventListener("resize", () => changeScreenWidth());
    
    if (screenWidth < (40 * 16)){
      backgroundBanner.current.src = bannerMobile;
    }
    else{
      backgroundBanner.current.src = banner;
    }
    
    // When unmounting (on next render), you remove the event listener
    return () => {
      window.removeEventListener("resize", changeScreenWidth());
    } 
  }, [screenWidth]);
  
  useEffect(() => {
    let cyberlionSticker = stickerCyberlion.current;
    cyberlionSticker.addEventListener("click", mutateEasterEgg);

    return () => {
      cyberlionSticker.removeEventListener("click", mutateEasterEgg);
    }
  }, []);

  return (
    <>
      <main>
        <img className='main-team-background' alt="team background" ref={backgroundBanner} />

        <div className="main-team-banner">
          <img ref={stickerCyberlion} alt="cyberlions sticker" src={sticker} />
          
          <article className="main-team-slogan">
            <h1>The CyberLions</h1>
            <p ref={easterEgg} className="content-gone">If you can Cyber, you can Lion</p>
          </article>
          
        </div>
      </main>

      <Section 
        title="We're a High School Robotics Team Based In Westminster CA" 
        description="Founded in 2020, Team 8521 is a robotics team aiming to provide our community with hands-on opportunities and mentorships. We want to empower our community and give them the chance to show their leader and innovator ability."
        picture={cadding}      
        pictureLocation="left"
      />

      <Section 
        title="We Compete In The FIRST Robotics Competition" 
        description="FRC is an international competition where teams fundraise, design, build, and program a robot each year to compete in games involving various tasks, which change annually."
        picture={kevilry}      
        pictureLocation="right"
      />

      <div className="main-sponsor-thanks">
        <h1>Thank You To Our Sponsors</h1>

        <div className="main-sponsor-thanks-icons">
          <img alt="TJAero" src={TJAero} />
          <img alt="Arden" src={Arden} />
          <img alt="VoSandwich" src={VoSandwich} />
          <img alt="DynamicFab" src={DynamicFab} />
          <img alt="HeimBearings" src={HeimBearings} />
          <img alt="Morstar" src={Morstar} />
          <img alt="Sugoi Stuff" src={Sugoi} />
          <img alt="Sunmerry Bakery" src={Sunmerry} />
        </div>
      </div>

      <div className="main-support-container">
          <article>
            <h1>You Can Support Us!</h1>
            <p>We want to establish a strong foundation for STEM students for years to come. Your support will help our members learn the skills and have the materials to design and manufacture a competition-ready robot.</p>
          </article>
          
          <div className="main-support-images">
            <img id="main-support-images-cheer" alt="Go Team Cyberlions!" src={competition} />
            <img id="main-support-images-debug" alt="Go Team Cyberlions!" src={debugging} />
            <img id="main-support-images-hang" alt="Go Team Cyberlions!" src={kevilryHang} />
            <img id="main-support-images-plan" alt="Go Team Cyberlions!" src={planning} />

          </div>


          <a href="/support-us">Click To Learn More</a>
      </div>

    </>
  )
}
