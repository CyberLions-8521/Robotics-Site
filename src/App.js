import { React, useRef, useState } from 'react'
import { Route, Routes, useLocation, Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Robots from './pages/Robots'
import Sponsors from './pages/Sponsors'

import Logo from './assets/images/8521-logo.png'
import StickerLogo from './assets/images/chillguy-sticker.png'
import GitHubLogo from './assets/icons/socials/github_white.png'
import InstagramLogo from './assets/icons/socials/instagram_white.png'
import YoutubeLogo from './assets/icons/socials/youtube_white.png'

export default function App() {
    let nav = useRef();
    let footer = useRef();

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const mailto = `mailto:whslionsrobotics@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        )}`;
        window.location.href = mailto;
    };

    return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary nav-background-color-default sticky-top">
        <Container className='nav-container'>
            <Navbar.Brand className="nav-brand" href="/">
                <img 
                    src={Logo}
                    className="d-inline-block align-top nav-logo" 
                    alt="CyberLions 8521 Logo" 
                />
                CyberLions 8521
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-tabgroup">
                <Nav.Link className="nav-tab" as={Link} to="/">Home</Nav.Link>
                <Nav.Link className="nav-tab" as={Link} to="/about">About</Nav.Link>
                <Nav.Link className="nav-tab" as={Link} to="/robots">Robots</Nav.Link>
                <Nav.Link className="nav-tab" as={Link} to="/sponsors">Sponsors</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

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
                path="/robots" 
                element={<Robots />} 
            />
            <Route 
                path="/sponsors" 
                element={<Sponsors />} 
            />
        </Routes>

        <footer ref={footer} className='footer-background-color-default'>
            <img src={StickerLogo} alt="Sticker Logo" className='footer-sticker-logo' />
            <Container className="footer-contact-container">
                <h1>CONTACT US</h1>
                <p>Westminster High School</p>
                <p>14325 Goldenwest St., Westminster, CA 92683</p>
                <p><strong>Email:</strong> whslionsrobotics@gmail.com</p>
                <Container className="footer-socials-container">
                    <a href="https://github.com/CyberLions-8521" target="_blank" rel="noopener noreferrer">
                        <img className="footer-socials-icon" src={GitHubLogo} alt="GitHub Logo" />
                    </a>
                    <a href="https://www.instagram.com/cyberlions8521/" target="_blank" rel="noopener noreferrer">
                        <img className="footer-socials-icon" src={InstagramLogo} alt="Instagram Logo" />
                    </a>
                    <a href="https://www.youtube.com/@cyberlions8521" target="_blank" rel="noopener noreferrer">
                        <img className="footer-socials-icon" src={YoutubeLogo} alt="YouTube Logo" />
                    </a>
                </Container>
            </Container>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <div className="footer-form">
                        <Form.Group>
                            <Form.Control 
                                name="name" 
                                className="footer-info-box"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                                type="email" 
                                name="email" 
                                className="footer-info-box"
                                placeholder="yourname@example.com"
                                value={form.email} 
                                onChange={handleChange} 
                                required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                                name="subject" 
                                className="footer-info-box"
                                placeholder="Subject"
                                value={form.subject} 
                                onChange={handleChange} 
                                required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                name="message" 
                                className="footer-message-box"
                                placeholder="Your message here..."
                                value={form.message} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>
                    </div>
                    <Button type="submit" variant="primary" className="mt-3 footer-button">Send an Inquiry Through Email</Button>
                </Form>
            </Container>
            <p className='footer-copyright'>©2025 by 8521 CyberLions</p>
        </footer>
    </>
    )
}
