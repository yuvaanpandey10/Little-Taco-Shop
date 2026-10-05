import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        about: 'about.html',
        hours: 'hours.html',
        contact: 'contact.html',
      },
    },
  },
})
