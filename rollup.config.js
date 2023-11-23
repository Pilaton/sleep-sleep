import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

/** @type {import('rollup').RollupOptions} */
const rollupConfig = {
  input: 'src/sleep.ts',
  output: [
    {
      exports: 'default',
      file: 'build/sleep.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      exports: 'default',
      file: 'build/sleep.esm.mjs',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [typescript(), terser()],
};

export default rollupConfig;
