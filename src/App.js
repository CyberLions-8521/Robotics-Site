import { React, useRef, useState } from 'react'
import { Route, Routes, useLocation, Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap'
import Logo from './assets/images/8521-logo.png'
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
        {/*
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
        */}
        <Navbar expand="lg" className="bg-body-tertiary nav-background-color-default">
        <Container className='nav-container'>
            <Navbar.Brand className="nav-brand" href="#home">
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
                <Nav.Link className="nav-tab" href="/">Home</Nav.Link>
                <Nav.Link className="nav-tab" href="/about">About</Nav.Link>
                <Nav.Link className="nav-tab" href="/newsletter">Newsletter</Nav.Link>
                <Nav.Link className="nav-tab" href="/our-robots">Our Robots</Nav.Link>
                <Nav.Link className="nav-tab" href="/support-us">Support Us</Nav.Link>
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

        <footer ref={footer} className='footer-background-color-default'>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <div className="footer-form">
                        <Form.Group>
                            <Form.Control 
                                name="name" 
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
                                placeholder="yourname@example.com"
                                value={form.email} 
                                onChange={handleChange} 
                                required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                                name="subject" 
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
                    <Button type="submit" variant="primary" className="mt-3 footer-button">Send</Button>
                </Form>
            </Container>
            <p className='footer-copyright'>©2025 by 8521 CyberLions</p>
        </footer>
    </>
    )
}
