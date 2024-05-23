// vite.config.js
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts(
    {
      include: 'src/thy-star-rating.ts',
    }
  )],
  build: {
    lib: {
      entry: 'src/thy-star-rating.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: [/^lit/],
    }
  }
})