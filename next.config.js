const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/ankit-portfolio/' : '',
  images: {
    unoptimized: true,
  },
  output: 'export', // Important for GitHub Pages deployment
};
