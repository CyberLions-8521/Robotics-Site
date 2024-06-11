### **React Mini-Tutorial**

In react, we import elements into our code called "components." For example, we can have a component called description, which provides a *template* for descriptions like "who we are" and how we "compete in the FIRST Robotics Competition."

There's a folder called helper-components because we can use these components in other pages. For example, we can use the description component in the about page, the home page, and the contact page.

It's good practice for components and files to be capitialized (differentiate from DOM elements).

**Components are called like this:**
<br>
Ex. Header 

\<Header />

**We can insert "attributes" into components to give each react component a unique look.**
- Think of attributes as the parameters or arguments of a component.

Ex. Header<br><br>
\<Header title="CyberLions" />

**This is what a component looks like in code:**

import React from 'react'

export default function Header(title) {
  return (

    {/* {} is how you use your arguments in React JS */}

    <div>{title}</div>
  )
}

