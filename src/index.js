import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// Exports are created here to make importing images a smoother process
// Syntax: import { Kevilry } from 'PATH/index.js';

// export deconstructed prop into image as Kelvry
export { default as Kevilry } from './assets/robots/kelv.jpg';
export { default as Robbie } from './assets/robots/robbie.png';
export { default as Froggers } from './assets/robots/froggers.jpg';

// The difference between regular web development and react is that react uses a "virtual DOM" 
// React also renders in a "root" element because of this (check public folder < index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Wrap entire <App /> in <BrowserRouter> to enable routing for all pages */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);


