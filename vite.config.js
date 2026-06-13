import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: set `base` to "/<your-repo-name>/".
// If deploying to a user/org page (username.github.io) or a custom domain, use "/".
export default defineConfig({
  plugins: [react()],
  base: '/3acExam/',
})
