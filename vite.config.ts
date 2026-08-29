import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tanstackRouter from '@tanstack/router-plugin/vite'

export default defineConfig({
  clearScreen: false,
  plugins: [tanstackRouter({ target: 'react', autoCodeSplitting: true }), react()],
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  }
})
