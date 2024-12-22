import { RollupOptions } from 'rollup';

import importAttributes from '..';

const config: RollupOptions = {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [
    importAttributes({
      include: 'node_modules/**',
      exclude: ['node_modules/foo/**', 'node_modules/bar/**'],
      preferConst: true,
      indent: '  ',
      compact: true,
      namedExports: true
    })
  ]
};

export default config;
