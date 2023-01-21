import { useEffect, useRef } from 'react';

import './App.css';

import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import logo from "./images/icons/cyberlions.png";

function App() {

  // useRef to get the navigation element
  const navigation = useRef();

  // useEffect hook used to chnage navigation background on page switch
  // [] means to run this callback on every render
  useEffect(() => {
    if (window.location.pathname !== "/"){
      navigation.current.style.backgroundColor = "rgb(42, 40, 40)";
    }
  }, []);

  return (
  
  // <> is a React Fragment so we can return more than one DOM element
  <>
  
    {/* Example - Navigation Bar => This only renders once when you switch pages. I only ever have to write this code ONCE */}
    <nav ref={navigation}>
      <article className="nav-cyberlions-logo">
        <img src={logo} alt="cyberlions logo" draggable="false" />
        <h1>CyberLions 8521</h1>
      </article>
      
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/our-robots">Our Robots</a></li>
        <li><a href="/support-us">Support Us</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/sponsors">Sponsors</a></li>
        <li><a href="/contacts">Contacts</a></li>
      </ul>
    </nav>

    <Routes>

      {/* Creating routes for each React page. Clicking on the nav bar lines directs you to these paths */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/our-robots" element={} />
      <Route path="/support-us" element={} />
      <Route path="/gallery" element={} />
      <Route path="/sponsors" element={} />
      <Route path="/contacts" element={} /> */}
      
    </Routes>

  </>  
  );
}

export default App;
