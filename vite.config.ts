import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [svelte()]
// })

export default defineConfig({
  plugins: [
    svelte({
      exclude: ['./src/web-components/**/*.svelte']
    }),
    svelte({
      include: ['./src/web-components/**/*.svelte'],
      compilerOptions: {
        customElement: true,
      }
    })
  ]
})