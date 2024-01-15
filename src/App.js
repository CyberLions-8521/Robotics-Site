import { React, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Home'
import About from './pages/About'
import Newsletter from './pages/Newsletter'
import OurRobots from './pages/OurRobots'
import SupportUs from './pages/SupportUs'
import Contacts from './pages/Contacts'
import cyberlions from './assets/images/cyberlions.png'
import instagram from './assets/images/icons/socials/instagram_white.png'
import youtube from './assets/images/icons/socials/youtube_white.png'
import github from './assets/images/icons/socials/github_white.png'
import envelope from './assets/images/icons/envelope.png'
import marker from './assets/images/icons/map-marker.png'

export default function App() {

  // On refresh, scroll restarts back to top
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  const instagramLink = () => {
    window.open('https://www.instagram.com/cyberlions8521');
  }
  const githubLink = () => {
    window.open('https://github.com/CyberLions-8521');
  }
  const youtubeLink = () => {
    window.open('https://www.youtube.com/@cyberlions8521');
  }

  const mapLink = () => {
    window.open('https://maps.app.goo.gl/iUiBFyJPX88M6aak9');
  }

  return (
    <>
      <div className="container">
        <Navbar />
        {/* Defines paths to page components */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/newsletter' element={<Newsletter />} />
          <Route path='/our-robots' element={<OurRobots />} />
          <Route path='/support-us' element={<SupportUs />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <footer>
          <div className="footer-team-name">
            <article className="footer-team-name-banner">
              <img src={cyberlions} alt='cyberlions logo' />
              <h1>CYBERLIONS 8521</h1>
            </article>
            <article className="footer-team-name-socials">
                <img src={instagram} alt='instagram' onClick={instagramLink}/>
                <img src={github} alt='github' onClick={githubLink}/>
                <img src={youtube} alt='youtube' onClick={youtubeLink}/>
            </article>
          </div>
          <article className="footer-team-contacts">
            <article className="footer-team-contacts-email">
              <img src={envelope}/>
              <p>whslionsrobotics@gmail.com</p>
            </article>
            <article className="footer-team-contacts-address" onClick={mapLink}>
              <img src={marker}/>
              <p>14325 Goldenwest St, Westminster, CA 92683</p>
            </article>
          </article>
          <p className='footer-copyright'>©2023 Team 8521 MIT License</p>
        </footer>
      </div>
    </>
  )
}
