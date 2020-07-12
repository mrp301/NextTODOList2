const withSass = require('@zeit/next-sass');
const path = require('path');

const nextConfig = withSass({
  cssModules: true,
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname)
    return config
  },
  generate: {
    routes: [
     '/settings/index',
    ]
  }
});

module.exports = nextConfig