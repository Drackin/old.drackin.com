const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    disableStaticImages: true,
    domains: [
      "avatars.githubusercontent.com",
      "localhost"
    ]
  }
}