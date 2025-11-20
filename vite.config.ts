import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/wokwi-embed-example/',
  server: {
    port: 2222,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
