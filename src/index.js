import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your global CSS if needed
import App from './App';
import reportWebVitals from './reportWebVitals';

// Include the font link dynamically in the head section
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure performance with Web Vitals, uncomment the following line:
// reportWebVitals();

