import { useEffect, useRef } from 'react';

import './App.css';

import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Newsletter from './pages/Newsletter';
import SupportUs from './pages/SupportUs';
import Media from './pages/Media';
import Contacts from './pages/Contacts';
import OurRobots from './pages/OurRobots';

import logo from "./images/icons/cyberlions.png";

import instagram from "./images/icons/socials/instagram_white.png";
import github from "./images/icons/socials/github_white.png";
import flickr from "./images/icons/socials/flickr.png";

function App() {

  // useRef to get the navigation element
  const navigation = useRef();

  // useRef to set eventlisteners for footer socials
  const instagramLink = useRef();
  const githubLink = useRef();
  const flickrLink = useRef();

  // useEffect hook used to change navigation background on page switch
  // [] means to run this callback only once when the component renders for the first time (mount)
  useEffect(() => {
    if (window.location.pathname !== "/"){
      navigation.current.style.backgroundColor = "rgb(42, 40, 40)";
    }
  }, []);

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

  return (
  
  // <> is a React Fragment so we can return more than one DOM element
  // We can either use a fragment or a div
  <div className="body">
  
    {/* Example - Navigation Bar => This only renders once when you switch pages. I only ever have to write this code ONCE */}
    <nav ref={navigation}>
      <article className="nav-cyberlions-logo">
        <img src={logo} alt="cyberlions logo" draggable="false" />
        <h1>CyberLions 8521</h1>
      </article>
      
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/newsletter/">Newsletter</a></li>
        <li><a href="/our-robots/">Our Robots</a></li>
        <li><a href="/support-us/">Support Us</a></li>
        <li><a href="/media/">Media</a></li>
        <li><a href="/contacts/">Contacts</a></li>
      </ul>
    </nav>

    <Routes>
      {/* Creating routes for each React page. Clicking on the nav bar lines directs you to these paths */}
      <Route path="/" element={<Home navigation={navigation} />} />
      <Route path="/newsletter/" element={<Newsletter />} />
      <Route path="/our-robots/" element={<OurRobots />} />
      <Route path="/support-us/" element={<SupportUs />} />
      <Route path="/media/" element={<Media />} />
      <Route path="/contacts/" element={<Contacts />} />
    </Routes>

    <footer>
      <p className="footer-slogan">If you can dream it, you can do it</p>
       
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
          <li><a href="/newsletter">Newsletter</a></li>
          <li><a href="/our-robots">Our Robots</a></li>
          <li><a href="/support-us">Support Us</a></li>
          <li><a href="/media">Media</a></li>
          <li><a href="/contacts">Contacts</a></li>
        </ul>
      </div>

      <p className="footer-copyright">©2023 Larry Le All Rights Reserved</p>
    </footer>
  </div>  
  );
}

export default App;