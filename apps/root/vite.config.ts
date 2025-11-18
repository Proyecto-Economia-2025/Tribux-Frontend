import { defineConfig, type Plugin } from 'vite';
import { federation } from '@module-federation/vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    federation({
      name: 'root',
      remotes: {
        content: {
          type: 'module',
          name: 'content',
          entry: 'http://localhost:3026/remoteEntry.js',
        },
      },
      shared: {
        react: {
          singleton: true,
        },
        'react/': {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        'react-dom/': {
          singleton: true,
        },
        'single-spa': {
          singleton: true,
          requiredVersion: false,
        },
        'single-spa-react': {
          singleton: true,
          requiredVersion: false,
        },
      },
    }) as Plugin[],
  ],
  server: {
    proxy: {
      '/_content': {
        target: 'http://localhost:4972',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/_content/, ''),
      },
    },
  },
  build: {
    target: 'chrome89',
  },
});
