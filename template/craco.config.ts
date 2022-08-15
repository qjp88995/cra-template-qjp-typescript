import { readFileSync } from 'fs';
import { resolve } from 'path';
const CracoLessPlugin = require('craco-less');
const { CracoAliasPlugin } = require('react-app-alias');
const lessToJS = require('less-vars-to-js');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: lessToJS(readFileSync(resolve(__dirname, 'src/theme.less'), 'utf8')),
            javascriptEnabled: true,
          },
        },
      }
    },
    {
      plugin: CracoAliasPlugin,
      options: {
        tsconfig: 'tsconfig.paths.json'
      },
    }
  ],
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true,
        },
      ]
    ]
  },
};

export {}
