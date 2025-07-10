/** @type {import('next').NextConfig} */
const Dotenv = require('dotenv-webpack');

/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },
  webpack: (config) => {
    config.plugins.push(
      new Dotenv({
        systemvars: true, // Load system environment variables as well
      })
    );
    return config;
  },
}

