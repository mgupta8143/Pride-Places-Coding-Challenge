import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* This allows App.js to be rendered in root and */
/* Basic styling for html, body, and the scrollbars are in ./App.cs */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
