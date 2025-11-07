const CopyPlugin = require('copy-webpack-plugin');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['github.blog'],
    deviceSizes: [320, 640, 1080, 1200],
    imageSizes: [64, 128],
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // Critical: Tell Next.js to NOT let Node's ESM loader handle external ESM imports.
  // This prevents errors when Radix UI (and other ESM packages) try to import
  // 'react/jsx-runtime' at the module level. Setting to false forces webpack to
  // bundle/transpile these externals, resolving bare specifiers like 'react/jsx-runtime'
  // to their actual .js files with proper module syntax.
  experimental: {
    esmExternals: false,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: [{ loader: '@svgr/webpack' }, { loader: 'url-loader' }],
    });

    // Ensure ESM imports of `react/jsx-runtime` resolve to the actual .js files
    // Some packages import 'react/jsx-runtime' from ESM bundles which can fail
    // to resolve in certain Node/Next setups. Map the specifiers to the files
    // with explicit extensions so resolution succeeds.
    config.resolve = config.resolve || {};
    config.resolve.alias = Object.assign({}, config.resolve.alias || {}, {
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
      'react/jsx-dev-runtime': require.resolve('react/jsx-dev-runtime')
    });

    return config;
  },
});
