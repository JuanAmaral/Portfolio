const isProd = process.env.NODE_ENV === 'production'
/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  distDir: 'build',
  images: isProd
    ? {
        loader: 'imgix',
        path: 'https://www.juanamaral.com.br',
        domains: ['www.juanamaral.com.br'],
        deviceSizes: [
          280, 300, 360, 375, 390, 393, 412, 414, 540, 640, 750, 768, 820, 828,
          912, 1080, 1200, 1280, 1920, 2048, 3840,
        ],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
      }
    : undefined,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  env: {
    version: require('./package.json')?.version || 'b.0.0',
  },
}
module.exports = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}
module.exports = nextConfig
