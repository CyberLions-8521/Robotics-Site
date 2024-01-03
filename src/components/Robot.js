import React from 'react'

// Creates a mini-profile for our robot given the name, image, and description 
export default function Robot({name, image, description, season}) {
  return (
    <>
        <div className="robot">
            <img alt={name} src={image} />

            <div className="robot-hero">
                <div className="robot-hero-metadata">
                  <h2>{season}</h2>
                  <h1>{name}</h1>
                </div>
                
                <p>{description}</p>
            </div>
        </div>
    </>
  )
}