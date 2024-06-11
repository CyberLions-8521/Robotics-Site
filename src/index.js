import  React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import App from './App'

// export deconstructed prop into image as Kelvry
// export { default as Kevilry } from './assets/robots/kelv.jpg';

// The difference between regular web development and react is that react uses a "virtual DOM". React also renders in a "root" element because of this (check public folder < index.html)
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    {/* BrowserRouter allows for nested routing. I can create routes in this file or App.js or other child files */}
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);


