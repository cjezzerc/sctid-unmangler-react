import { defineConfig, transformWithEsbuild} from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/

// export default defineConfig({
//   plugins: [react()],
// })

// The chunk below (from https://stackoverflow.com/questions/74620427/how-to-configure-vite-to-allow-jsx-syntax-in-js-files/74620428#74620428)
// seemed to fix the problem that a file named jsx was giving a mime type error 
// but have to name the component file .js (and this forces all files to go through jsx preprocessor I think)
// (yet I will swear that at some stage trying this a .jsx extension started being fine and there
// also seems to be something that can comment out the block bekow and keeps working (for a bit?)so
// not sure when this is run)

export default defineConfig({
  base:'/code-restorer/',
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/))  return null

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        })
      },
    },
    react(),
  ],

  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
