import { React, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Newsletter from './pages/Newsletter'
import OurRobots from './pages/OurRobots'
import SupportUs from './pages/SupportUs'
import Contacts from './pages/Contacts'

export default function App() {

  // On refresh, scroll restarts back to top
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <>
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
    </>
  )
}
