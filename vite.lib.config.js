import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: './src/web-components/lib.ts',
      name: 'M3WebComponents',
      formats : ["cjs","iife","umd"]
    }
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      }
    })
  ]
})