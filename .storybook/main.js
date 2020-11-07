const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        // set alias// Add aliases support
        config.resolve.alias = {
            src: path.join(__dirname, '../src'),
            components: path.join(__dirname, '../src/components'),
            assets: path.join(__dirname, '../src/assets'),
        };
        // Return the altered config
        return config;
    },
};
