const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/ankit-portfolio' : '',
  assetPrefix: isProd ? '/ankit-portfolio/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
