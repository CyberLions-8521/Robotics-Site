import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationCard({ imgSrc, title, text, buttonText, buttonLink }) {
    return (
        <Card className="navigation-card" style={{ width: '20rem'}}>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>
                <Card.Title style={{ fontSize: '2rem', color: 'var(--primary-color-2)' }}>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button as={Link} to={buttonLink} variant="primary" className='navigation-card-button'>{buttonText}</Button>
            </Card.Body>
        </Card>
    )
}