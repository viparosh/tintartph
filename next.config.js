module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    })
    config.resolve.fallback = { fs: false }

    return config
  },
  serverRuntimeConfig: {
    maxRequestBodySize: '4mb',
  },
  //reactStrictMode: false,
  //webpack5: true,
  optimizeFonts: false,
}