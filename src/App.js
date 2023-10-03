import { useState, useEffect, useRef } from 'react';

import './App.css';

import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Newsletter from './pages/Newsletter';
import SupportUs from './pages/SupportUs';
import Contacts from './pages/Contacts';
import OurRobots from './pages/OurRobots';
import About from './pages/About'

import Modal from './helper-components/Modal';
import logo from "./images/icons/cyberlions.png";
import burgerImage from "./images/icons/mobile-menu.png";

import instagram from "./images/icons/socials/instagram_white.png";
import github from "./images/icons/socials/github_white.png";
import flickr from "./images/icons/socials/flickr.png";

function App() {
  // useRef to get the navigation element
  const navigation = useRef();

  // useEffect hook used to change navigation background on page switch
  // [] means to run this callback only once when the component renders for the first time (mount)
  useEffect(() => {
    if (window.location.pathname !== "/"){
      navigation.current.style.backgroundColor = "rgb(42, 40, 40)";
      navigation.current.style.position = "static";
    }

    // If the window viewport is the size of mobile phones
    else if (window.innerWidth < (40 * 16)){
      navigation.current.style.backgroundColor = "rgb(42, 40, 40)";
      navigation.current.style.position = "static";
    }
  }, []);

  // useRef to set eventlisteners for footer socials
  const instagramLink = useRef();
  const githubLink = useRef();
  const flickrLink = useRef();

  // useEffect hook used to set eventlisteners for footer socials (run when they render)
  useEffect(() => {
    let instagram = instagramLink.current;
    let github = githubLink.current;
    let flickr = flickrLink.current;

    const instagramHandler = () => {
      window.open("https://www.instagram.com/cyberlions8521", "_blank");
    }
    const githubHandler = () => {
      window.open("https://github.com/CyberLions-8521");
    }
    const flickrHandler = () => {
      window.open("https://www.flickr.com/photos/195051844@N07/");
    }

    instagram.addEventListener("click", instagramHandler);
    github.addEventListener("click", githubHandler);
    flickr.addEventListener("click", flickrHandler);

    // You might be wondering why we have to return a function; react may render more than once. The first render is called
    // a "mount," and there is an "unmount" when finished (the return statement)
    // This prevents the script from adding multiple event listeners to the same element (ex. click instagram 1 time = 13 new tabs open)
    return () => {
      instagram.removeEventListener("click", instagramHandler);
      github.removeEventListener("click", githubHandler);
      flickr.removeEventListener("click", flickrHandler);
    }
  }, [instagramLink, githubLink, flickrLink])

  const [burger, setBurger] = useState(false);
  const body = useRef();

  const handleMobileBurger = () => {
    setBurger(!burger);
  }

  return (
  // <> is a React Fragment so we can return more than one DOM element
  // We can either use a fragment or a div
  <div className="body" ref={body}>
  
    {/* Example - Navigation Bar => This only renders once when you switch pages. I only ever have to write this code ONCE */}
    <nav ref={navigation}>
      <article className="nav-cyberlions-logo">
        <img src={logo} alt="cyberlions logo" draggable="false" />
        <h1>CyberLions 8521</h1>
      </article>
      
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/newsletter">Newsletter</a></li>
        <li><a href="/our-robots">Our Robots</a></li>
        <li><a href="/support-us">Support Us</a></li>
        <li><a href="/contacts">Contacts</a></li>
      </ul>

      <img id="nav-mobile-burger" alt="mobile navigation" src={burgerImage} onClick={(e) => handleMobileBurger()} />
    </nav>

    {/* Mobile Navigation Bar */}
    <Modal 
      content={
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/newsletter">Newsletter</a></li>
          <li><a href="/our-robots">Our Robots</a></li>
          <li><a href="/support-us">Support Us</a></li>
          <li><a href="/contacts">Contacts</a></li>
        </ul>
      }

      check={burger}

      // Pass callback function that updates the burger state when the exit modal is clicked
      checkFunction={handleMobileBurger}
    />

    <Routes>
      {/* Creating routes for each React page. Clicking on the nav bar lines directs you to these paths */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/our-robots" element={<OurRobots />} />
      <Route path="/support-us" element={<SupportUs />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>

    <footer>
      <p className="footer-address">Westminster High School <br /> Westminster, CA</p>
       
      <div className="footer-team-name">
        <article className="footer-team-name-banner">
          <img alt="cyberlions logo" src={logo} />
          <h1>CyberLions 8521</h1>
        </article>

        <article className="footer-team-name-socials">
          <img alt="instagram" src={instagram} ref={instagramLink} />
          <img alt="github" src={github} ref={githubLink} />
          <img alt="flickr"src={flickr} ref={flickrLink} />
        </article>
      </div>

      <div className="footer-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/newsletter">Newsletter</a></li>
          <li><a href="/our-robots">Our Robots</a></li>
          <li><a href="/support-us">Support Us</a></li>
          <li><a href="/contacts">Contacts</a></li>
        </ul>
      </div>

      <p className="footer-copyright">©2023 Larry Le MIT License</p>
    </footer>
  </div>  
  );
}

export default App;