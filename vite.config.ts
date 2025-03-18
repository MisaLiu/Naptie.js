import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'naptie.js',
      formats: ['es', 'umd'],
      fileName: 'naptie',
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      include: [ './lib/**/*' ],
      exclude: [ './src/**/*' ],
    }),
  ],
});
