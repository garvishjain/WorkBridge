import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    allowedHosts: ['workbridge-z5ek.onrender.com'], // ✅ Add your backend domain here
  }
})
