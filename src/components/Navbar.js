import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import logo from '../assets/images/square-logo.png'

export default function Navbar() {
  return (
    <>
        {/* DESKTOP NAVIGATION BAR */}
        <header className='cyberlions-desktop-header'>
            <nav className='cyberlions-desktop-nav'>
                <Link className='cyberlions-desktop-nav-logo' to="/">
                    <img src={logo} alt='cyberlions-logo' />
                    <p>Cyberlions 8521</p>
                </Link>
                <ul className='cyberlions-desktop-nav-links'>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/newsletter">Newsletter</CustomLink>
                    <CustomLink to="/our-robots">Our Robots</CustomLink>
                    <CustomLink to="/support-us">Support Us</CustomLink>
                    <CustomLink to="/contacts">Contacts</CustomLink>
                </ul>
            </nav>
        </header>

        {/* MOBILE NAVIGATION BAR */}
    </>

  )
}

function CustomLink({ to, children }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path:resolvedPath.pathname, end: true})

    return (
        <li className={ isActive ? "active" : "" }>
            <Link to={to}>
                {children}
            </Link>
        </li>
    )
}
