import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },

  plugins: [
    react({
      jsxRuntime: 'classic', // Add this line
    }),
    VitePWA({ registerType: 'autoUpdate' }),
    viteTsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      input: {
        app: './index.html',
        'service-worker': './src/utils/sw/sw.ts',
      },
      output: {
        entryFileNames: (asset) => (asset.name === 'service-worker' ? '[name].js' : 'assets/[name].[hash].js'),
      },
    },
  },
});
