import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function TimelineItem({ year, title, description, imgSrc, imgAlt }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Card 
      className="timeline-item mb-4"
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      <Card.Body>
        <Card.Img 
            variant="top" 
            className={`timeline-item-img${hovered ? ' color ' : ''} mb-3}`}
            src={imgSrc} 
            alt={imgAlt} 
        />
        <Card.Title style={{marginTop: '1rem'} }>{year} - {title}</Card.Title>
        <Card.Text style={{color: 'var(--primary-color-1)', fontSize: '1.2rem'}}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}