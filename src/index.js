import  React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from './pages/Home'
import About from './pages/About'
import Newsletter from './pages/Newsletter'
import OurRobots from './pages/OurRobots'
import SupportUs from './pages/SupportUs'
import Legal from './pages/Legal'

import SquareLogo from './assets/images/square-logo.png';

// export deconstructed prop into image as Kelvry
// export { default as Kevilry } from './assets/robots/kelv.jpg';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: 'newsletter',
    element: <Newsletter />,
  },
  {
    path: 'our-robots',
    element: <OurRobots />,
  },
  {
    path: 'support-us',
    element: <SupportUs />,
  },
  {
    path: 'legal',
    element: <Legal />,
  }]
);

// The difference between regular web development and react is that react uses a "virtual DOM" 
// React also renders in a "root" element because of this (check public folder < index.html)
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

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

    <RouterProvider router={router} />    

    <footer>
      <section className='footer-branding'>
        <img className='footer-branding-image-logo' src={SquareLogo} alt='Square Logo' />
        <p className='footer-branding-logo-text'>Cyberlions 8521</p>
      </section>

      <p className='footer-copyright'>©2024 Larry Le MIT License</p>
    </footer>

  </React.StrictMode>
);


