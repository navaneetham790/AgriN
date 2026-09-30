import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 3000,
    open: false,
    watch: {
      // Ignore dataset CSV folder to prevent Windows EBUSY file watch locks
      ignored: ['**/datasets/**', '**/microservices/**']
    }
  }
})
