import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function SubteamCard({ title, description, imgSrc, imgAlt}){
  const [hovered, setHovered] = useState(false);
  return (
      <>
        <Card className='mb-4 subteam-card'
          onMouseEnter={() => setHovered(true)} 
          onMouseLeave={() => setHovered(false)}
        >
          <Card.Img className={`subteam-card-img${hovered ? ' color' : ''}`} variant="top" src={imgSrc} alt={imgAlt} />
          <Card.Body>
            <Card.Title style={{ fontSize: '2rem', fontWeight: 'none', color: 'var(--primary-color-3)' }}>{title}</Card.Title>
            <Card.Text style={{ fontSize: '1.2rem'}}>{description}</Card.Text>
          </Card.Body>
        </Card>
      </>
  );
}