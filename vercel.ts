const appUrl = (process.env.APP_URL ?? 'https://app.pixelstories.io').replace(/\/+$/, '');

export const config = {
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
