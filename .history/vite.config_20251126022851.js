import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'lodash.pick': 'lodash.pick/dist/lodash.pick.js'
    }
  }
})
