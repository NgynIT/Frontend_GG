import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    cors: {
      origin: 'https://nguyennpcoder.netlify.app',  // Replace with your actual website URL
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Origin', 'Content-Type', 'Authorization'],
    },
  },
});
