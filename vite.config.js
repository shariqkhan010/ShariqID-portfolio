import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        format: 'es', // Ensures ES module output
      },
    },
  },
  base: './',  // Set base path to handle relative paths
});
