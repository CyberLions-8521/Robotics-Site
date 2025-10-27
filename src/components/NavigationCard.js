import React from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationCard({ imgSrc, title, text, buttonText, buttonLink }) {
    const [hovered, setHovered] = useState(false);
    return (
        <Card 
            className="navigation-card" 
            style={{ width: '20rem'}}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Card.Img 
                variant="top" 
                className={`navigation-card-img${hovered ? ' color' : ''}`}
                src={imgSrc} 
                alt={title}
            />
            <Card.Body>
                <Card.Title style={{ fontSize: '2rem', color: 'var(--primary-color-2)' }}>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button 
                as={Link} 
                to={buttonLink} 
                variant="primary" 
                className='navigation-card-button'
                >
                    {buttonText}
                </Button>
            </Card.Body>
        </Card>
    )
}