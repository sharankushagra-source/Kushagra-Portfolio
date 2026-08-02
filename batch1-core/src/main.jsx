import React from 'react';
import { createRoot } from 'react-dom/client';
// This portfolio is a static HTML/CSS/JS site (index.html). This mount point is reserved
// for any future React-driven UI; nothing needs to render here today.
const el = document.getElementById('react-root');
if (el) createRoot(el).render(null);
