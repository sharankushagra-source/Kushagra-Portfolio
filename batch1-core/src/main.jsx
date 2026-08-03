// The portfolio is a static HTML/CSS/JS build (index.html), not a React tree.
// This entry exists only so `vite build` has a module graph; it renders nothing.
import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('react-root');
if (el) {
  ReactDOM.createRoot(el).render(React.createElement(React.Fragment));
}
