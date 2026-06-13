import type { VercelConfig } from '@vercel/client';

const appUrl = process.env.APP_URL ?? 'https://app.pixelstories.io';

const config: VercelConfig = {
  rewrites: [
    {
      source: '/play',
      destination: `${appUrl}/play`
    },
    {
      source: '/play/:path*',
      destination: `${appUrl}/play/:path*`
    }
  ]
};

export default config;