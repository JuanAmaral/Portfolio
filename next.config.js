const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
  webpack(config, options) {
    return config
  }
})

module.exports = {
  basePath: '/docs',
}

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "imgix",
    path: "http://localhost:3000", //ambiente de desenvolvimento
    domains: ['juanamaral.com.br','localhost'],
    deviceSizes: [ 280, 300, 360, 375, 390, 393, 412, 414, 540, 640, 750, 768, 820, 828, 912, 1080, 1200, 1280, 1920, 2048, 3840 ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256,],

  } 
}
