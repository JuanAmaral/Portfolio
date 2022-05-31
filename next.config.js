const withImages = require('next-images')
module.exports = withImages({
 esModule: true
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
    path: "https://juanamaral.com.br/", //ambiente de desenvolvimento
    domains: ['juanamaral.com.br', 'www.juanamaral.com.br','https://juanamaral.com.br/'],
    deviceSizes: [ 280, 300, 360, 375, 390, 393, 412, 414, 540, 640, 750, 768, 820, 828, 912, 1080, 1200, 1280, 1920, 2048, 3840 ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256,],

  } 
}
