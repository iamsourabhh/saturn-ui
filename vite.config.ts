import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ outDir: 'dist/types', insertTypesEntry: true })],

  build: {
    sourcemap: true,
    lib: {
      entry: 'src/index.tsx',
      name: 'SaturnUi',
      fileName: (format) => `saturn-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
