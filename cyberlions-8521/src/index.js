import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Wrap entire <App /> in <BrowserRouter> to enable routing for all pages */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
