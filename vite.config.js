import tailwindcss from '@tailwindcss/vite'; //added later
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),          //added later
    react()
  ],
})
