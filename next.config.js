/** @type {import('next').NextConfig} */
module.exports = {
    async headers() {
      return [
        {
          target: 'serverless',
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
  }
  
