import path from 'path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/todos-app/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
