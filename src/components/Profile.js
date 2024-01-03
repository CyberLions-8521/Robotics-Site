import React from 'react'

// This component is used to display an image with a header and text.
// For example, this is used in the support us page, which states where sponsor funds will go.
export default function Profilew({image, imageDescription, text, header}) {
    console.log("hello");

  return (
    <>
        <div className="profile">
            <img alt={imageDescription} src={image} />
            <h1>{header}</h1>
            <p>{text}</p>
        </div>
    </>
  )
}
