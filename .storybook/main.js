// module.exports = {
//   stories: ['../stories/**/*.stories.js'],
//   addons: ['@storybook/addon-actions', '@storybook/addon-links'],
//   webpackFinal: async config => {
//     // do mutation to the config
//
//     return config;
//   },
// };


const webpack = require('webpack');

module.exports = {
  // stories: ['../stories/**/*.stories.js'],
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    return config;
  }
};
