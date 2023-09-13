import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
dotenv.config();

//конфиг для клиентской сборки (html, css)
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT || 3001,
  },

  plugins: [
    react({
      jsxRuntime: 'classic', // Add this line
    }),
    viteTsconfigPaths(),
  ],
});
