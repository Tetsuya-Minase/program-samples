/** @type {import('next').NextConfig} */
const withLinaria = require('next-linaria');
module.exports = withLinaria({
  reactStrictMode: true,
  linaria: {
    // linariaのオプションはここに追加
  },
  // webpackのオプションはここに追加
  webpack(config, options) {
    return config;
  }
})
