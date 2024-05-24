import { React } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Newsletter from './pages/Newsletter'
import OurRobots from './pages/OurRobots'
import SupportUs from './pages/SupportUs'

import SquareLogo from './assets/images/square-logo.png';

export default function App() {

    return (
    <>
        <div className='nav-background'>
            <nav>
                <section className='nav-branding'>
                <img className='nav-branding-image-logo' src={SquareLogo} alt='Square Logo' />
                <p className='nav-branding-logo-text'>Cyberlions 8521</p>
                </section>

                <ul>
                <li><a href='/about'>About</a></li>
                <li><a href='/newsletter'>Newsletter</a></li>
                <li><a href='/our-robots'>Our Robots</a></li>
                <li><a href='/support-us'>Support Us</a></li>
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

        <footer>
            <section className='footer-branding'>
                <img className='footer-branding-image-logo' src={SquareLogo} alt='Square Logo' />
                <p className='footer-branding-logo-text'>Cyberlions 8521</p>
            </section>

            <p className='footer-copyright'>©2024 Larry Le MIT License</p>
        </footer>
    </>
    )
}
