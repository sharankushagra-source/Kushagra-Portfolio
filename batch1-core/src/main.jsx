import React from 'react';
import { createRoot } from 'react-dom/client';
const el = document.getElementById('react-root');
if (el) createRoot(el).render(React.createElement(React.Fragment, null));
