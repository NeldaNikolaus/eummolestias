import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';

const pkg = require('./package.json');

const libraryName = 'uprtcl-wikis';

export default {
  input: `src/${libraryName}.ts`,
  output: [
    { file: pkg.main, name: libraryName, format: 'umd', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  watch: {
    include: 'src/**'
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({
      objectHashIgnoreUnknownHack: true,

      useTsconfigDeclarationDir: true,
      cacheRoot: `${require('temp-dir')}/.rpt2_cache`
    }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs({
      include: /node_modules/
    }),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/@rollup/plugin-node-resolve#usage
    resolve(),

    // Resolve source maps to the original source
    sourceMaps()
  ],
  preserveSymlinks: true
};
