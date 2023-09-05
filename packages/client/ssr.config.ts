import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

const aliases = {
  '@app': 'src/app',
  '@api': 'src/api',
  '@store': 'src/store',
  '@components': 'src/components',
  '@routes': 'src/routes',
  '@fuature': 'src/fuature',
  '@pages': 'src/pages',
  '@services': 'src/services',
  '@layouts': 'src/layouts',
  '@utils': 'src/utils',
  '@lib': 'src/lib',
  '@config': 'src/config',
  '@repository': 'src/repository',
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
    outDir: 'ssr-dist',
    //lib говорит о том, что мы делаем сборку как отдельный пакет, который может использоваться в другом пакете, например в npm
    lib: {
      entry: path.resolve(__dirname, 'ssr/ssr.tsx'),
      name: 'Client',
      formats: ['cjs'], // ES6 не подойдет для node
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
