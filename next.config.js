const withImages = require('next-images');

module.exports = withImages({
  poweredByHeader: false,
  webpack(config) {
    return config;
  }
});
