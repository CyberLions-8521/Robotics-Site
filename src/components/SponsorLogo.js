import React from 'react';

export default function SponsorLogo({ logoSrc, altText, linkUrl }) {
    return (
        <>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <img src={logoSrc} alt={altText} className="sponsor-logo" />
        </a>
        </>
    )
}