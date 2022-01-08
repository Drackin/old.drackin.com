const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`,
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
}

/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin({
      scan: {
        dirs: ['./'],
        exclude: ['node_modules', '.git', '.next/**/*'],
      },
    }))
    return config
  },
  images: {
    disableStaticImages: true,
    domains: [
      "avatars.githubusercontent.com",
      "localhost"
    ]
  }
}