import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/to-do-app-javascript-react-3.9',
  plugins: [react()],
});
