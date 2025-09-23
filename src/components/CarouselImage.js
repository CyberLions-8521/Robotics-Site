import React from 'react';

export default function CarouselImage({ imageSrc, altText}) {
  return (
    <>
    <div className="carousel-image-container">
        <img src={imageSrc} className="d-block w-100 carousel-image" alt={altText} />
        <div className="carousel-image-overlay"></div>
    </div>
    </>
  )
}