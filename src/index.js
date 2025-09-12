import  React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import './custom-bootstrap.scss'
import "./App.css";

import App from './App'

// export deconstructed prop into image as Kelvry
// export { default as Kevilry } from './assets/robots/kelv.jpg';

// The difference between regular web development and react is that react uses a "virtual DOM". React also renders in a "root" element because of this (check public folder < index.html)
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>

  </React.StrictMode>
);


