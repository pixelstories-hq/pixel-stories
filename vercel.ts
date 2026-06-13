import { routes, type VercelConfig } from '@vercel/config/v1';

const appUrl = (process.env.APP_URL ?? 'https://app.pixelstories.io').replace(/\/+$/, '');

export const config: VercelConfig = {
  rewrites: [
    routes.rewrite('/play', `${appUrl}/play`),
    routes.rewrite('/play/:path*', `${appUrl}/play/:path*`)
  ]
};
