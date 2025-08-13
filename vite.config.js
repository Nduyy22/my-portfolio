import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Custom plugin to handle react-bits compatibility
const reactBitsPlugin = () => {
  return {
    name: 'react-bits-plugin',
    config(config) {
      config.optimizeDeps = config.optimizeDeps || {}
      config.optimizeDeps.exclude = config.optimizeDeps.exclude || []
      config.optimizeDeps.exclude.push('react-bits')
    },
    resolveId(id) {
      if (id === 'react-native-web/dist/apis/StyleSheet/registry') {
        return path.resolve(__dirname, 'src/shims/stylesheet-registry.js')
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactBitsPlugin()],
  server: {
    port: 3000,
    open: true
  },
  define: {
    global: 'globalThis',
    __DEV__: true
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
