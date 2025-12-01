import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-9b5",
    project: "javascript-react"
  })],

  resolve: {
    alias: {
      'lodash.pick': 'lodash.pick/dist/lodash.pick.js'
    }
  },

  build: {
    sourcemap: true
  }
})