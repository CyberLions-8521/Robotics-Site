import React from 'react'

// Label is a component that is used to display a label and input field.
// For example, this is used in the contacts page, which has a form for users to fill out.
// {id} is the reference (equalvalent of getElementById) to the user input
export default function Label({type, header, id}) {
  return (
    <>
        {type === "nowrap" && <section className="label">
            <label for="name">{header}</label>
            <input type="text" placeholder="" ref={id} />
        </section>}

        {type === "wrap" && <section className="label">
            <label for="name">{header}</label>
            <textarea placeholder="" ref={id} />
        </section>}
    </>
  )
}
