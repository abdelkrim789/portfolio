import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Add this line for GitHub Pages deployment
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});