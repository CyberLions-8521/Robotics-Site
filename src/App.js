import './App.css';

import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import logo from "./images/icons/cyberlions.png";

function App() {
  return (
  
  // <> is a React Fragment so we can return more than one DOM element
  <>
  
    {/* Example - Navigation Bar => This only renders once when you switch pages. I only ever have to write this code ONCE */}
    <nav>
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
