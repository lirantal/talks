import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  publicDir: fileURLToPath(new URL('../assets/', import.meta.url)),
  plugins: [svgLoader()],
})
