import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CatsProvider from './contexts/CatsContext';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CatsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CatsProvider>
  </React.StrictMode>
);
