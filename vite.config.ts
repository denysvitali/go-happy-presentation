import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'workspace-denys.beago-bass.ts.net',
      '.ts.net',
      'localhost',
      'slides-gophers.k2.k8s.best',
      '.k8s.best'
    ]
  }
})
