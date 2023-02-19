import React from 'react'

// Returns a sections of a newsletter, AKA its contents. To be used in a newsletter list
// Takes in header title, newsletter image, and brief description
export default function NewsletterSection({title, image, text}) {
  return (
    <article className="newsletter-content">
    <h1>{title}</h1>
    <section>
      <img alt="sample" src={image} />
      <p>{text}</p>
    </section>
  </article>)
}
