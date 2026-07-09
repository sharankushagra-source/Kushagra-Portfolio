import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' keeps asset URLs relative so the build works whether it's served
// from a domain root or a subfolder.
export default defineConfig({
  base: './',
  plugins: [react()],
});
