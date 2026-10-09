import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Set SINGLE_FILE=1 to produce one self-contained index.html (used for quick previews)
export default defineConfig({
  plugins: [react(), ...(process.env.SINGLE_FILE ? [viteSingleFile()] : [])],
})
