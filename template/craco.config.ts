const CracoLessPlugin = require('craco-less');
const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
    {
      plugin: CracoAliasPlugin,
      options: {
        tsconfig: 'tsconfig.paths.json'
      },
    }
  ],
};

export {}
