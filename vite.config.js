// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // ← import the plugin

export default defineConfig({
  plugins: [
      react(),
          tailwindcss()   // ← call it as a function
            ],
            })
