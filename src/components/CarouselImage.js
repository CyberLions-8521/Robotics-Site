import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function CarouselImage({ imageSrc, altText, captionHeader, captionText }) {
  return (
    <>
    <div className="carousel-image-container">
        <img src={imageSrc} className="d-block w-100 carousel-image" alt={altText} />
        <div className="carousel-image-overlay"></div>
        <Carousel.Caption style={{ zIndex: 10 }}>
            <h3>{captionHeader}</h3>
            <p>{captionText}</p>
        </Carousel.Caption>
    </div>
    </>
  )
}