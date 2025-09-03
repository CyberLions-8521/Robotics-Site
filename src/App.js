import { React, useRef, useEffect } from 'react'
import { Route, Routes, useLocation, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Newsletter from './pages/Newsletter'
import OurRobots from './pages/OurRobots'
import SupportUs from './pages/SupportUs'

import SquareLogo from './assets/images/square-logo.png';

export default function App() {
    let nav = useRef();
    let footer = useRef();

    function openHome() {
        window.location.href = '/';
    }

    return (
    <>
        <div ref={nav} className='nav-background-color-default nav-background'>
            <nav>
                <section onClick={openHome} className='nav-branding'>
                <img className='nav-branding-image-logo' src={SquareLogo} alt='Square Logo' />
                <p className='nav-branding-logo-text'>Cyberlions 8521</p>
                </section>

                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/newsletter">Newsletter</Link></li>
                    <li><Link to="/our-robots">Our Robots</Link></li>
                    <li><Link to="/support-us">Support Us</Link></li>
                </ul>
            </nav>
        </div>

        {/* I prefer to create routes in the App.js file because it's not top level (index.js is) and I can use React hooks */}
        <Routes>
            <Route 
                path="/" 
                element={<Home />} 
            />
            <Route 
                path="/about" 
                element={<About />} 
            />
            <Route 
                path="/newsletter" 
                element={<Newsletter />} 
            />
            <Route 
                path="/our-robots" 
                element={<OurRobots />} 
            />
            <Route 
                path="/support-us" 
                element={<SupportUs />} 
            />
        </Routes>

        <footer ref={footer} class='footer-background-color-default'>
            <section className='footer-branding'>
                <div className='brand-name'>
                    <img className='footer-branding-image-logo' src={SquareLogo} alt='Square Logo' />
                    <p className='footer-branding-logo-text'>Cyberlions 8521</p>
                </div>
                <div className='socials'>
                    
                </div>
            </section>
            <p className='footer-copyright'>©2025 by 8521 CyberLions</p>
        </footer>
    </>
    )
}
