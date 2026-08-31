import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you rename the GitHub repo, update `base` below to match:
// https://<your-username>.github.io/<repo-name>/  ->  base: '/<repo-name>/'
export default defineConfig({
  plugins: [react()],
  base: '/in-office/',
})
