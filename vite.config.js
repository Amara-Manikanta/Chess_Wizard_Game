import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // relative paths for GitHub Pages deployment
  build: {
    outDir: 'dist'
  }
});
