import React from 'react'

// Creates a mini-profile for our robot given the name, image, and description 
export default function Robot({name, image, description, award}) {
  return (
    <>
        <div className="robot">
            <section className="robot-hero">
                <h1>{name}</h1>
                <img alt={name} src={image} />
            </section>

            <article>
                <div className="robot-awards">
                    <h1>{award}</h1>
                </div>

                <p>{description}</p>
            </article>
        </div>
    </>
  )
}