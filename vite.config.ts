import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'workspace-denys.beago-bass.ts.net',
      '.ts.net',
      'localhost'
    ]
  }
})
