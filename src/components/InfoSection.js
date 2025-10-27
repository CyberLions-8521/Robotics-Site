import React from 'react';
import { useState } from 'react';

export default function InfoSection({imgSrc, imgAlt, description, imgLeft}){
    const [hovered, setHovered] = useState(false);
    return(
        <>
            <div className='info-section-container'>
                {imgLeft && 
                <img 
                    className={`info-section-img ${hovered ? 'color' : ''}`} 
                    src={imgSrc} alt={imgAlt} 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)} 
                />}
                <p className='info-section-description'>{description}</p>
                {!imgLeft && 
                <img 
                    className={`info-section-img ${hovered ? 'color' : ''}`} 
                    src={imgSrc} 
                    alt={imgAlt} 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)} 
                />}
            </div>
        </>
    );
}