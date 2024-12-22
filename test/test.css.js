const test = require('ava');

const { rollup } = require('rollup');

const importAttributes = require('../dist'); // eslint-disable-line import/no-unresolved

const { testBundle } = require('./util.js');

process.chdir(__dirname);

test('converts css', async (t) => {
  const bundle = await rollup({
    input: 'fixtures/css/main.js',
    plugins: [importAttributes()]
  });
  t.plan(1);
  return testBundle(t, bundle);
});
