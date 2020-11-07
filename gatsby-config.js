/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-postcss`,
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                src: path.join(__dirname, './src'),
                components: path.join(__dirname, './src/components'),
                assets: path.join(__dirname, './src/assets'),
            },
        },
    ],
};
