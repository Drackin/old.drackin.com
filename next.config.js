const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

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
    disableStaticImages: true
  }
}