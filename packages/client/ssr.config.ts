import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

const aliases = {
  '@app': 'src/app',
  '@store': 'src/store',
  '@components': 'src/components',
  '@routes': 'src/routes',
  '@feature': 'src/feature',
  '@pages': 'src/pages',
  '@services': 'src/services',
  '@layouts': 'src/layouts',
  '@utils': 'src/utils',
  '@lib': 'src/lib',
  '@config': 'src/config',
};

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

//конфиг для ssr сборки (js для того, чтобы поддрежривался в nodejs)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true,
    lib: {
      entry: path.resolve(__dirname, 'ssr.tsx'),
      name: 'Client',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'ssr-dist',
      },
      external: ['utils/sw/Cache', 'utils/sw/sw', 'utils/hashCode', 'utils/logger', 'routes'],
    },
  },
  ssr: {
    format: 'cjs',
  },
  resolve: {
    alias: {
      ...resolvedAliases,
    },
  },
});

// external: [
//   '@store/index',
//   '@pages/error',
//   '@pages/forum/id',
//   '@pages/forum',
//   '@pages/game',
//   '@pages/leaders',
//   '@pages/login'
// ]
