import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';

// NOTE: StrictMode is intentionally not used — the portfolio's interaction
// scripts are one-shot IIFEs that attach global listeners, and StrictMode's
// double-invoke of effects in dev would run them twice.
createRoot(document.getElementById('root')).render(<App />);
