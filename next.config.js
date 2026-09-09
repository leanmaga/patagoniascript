import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/core/i18n/request.js');

const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 100],
  },
};

export default withNextIntl(nextConfig);
