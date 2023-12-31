const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts',
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kphygwmctfuhcngdrhda.supabase.co',
      },
    ],
  },
  experimental: {
    externalDir: true,
  },
};

module.exports = withNextIntl(nextConfig);
