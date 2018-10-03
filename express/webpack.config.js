const path = require('path');

module.exports = {
  mode: 'development',
  entry: './tsserver/bin/www.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "tsserver"),
      'node_modules'
    ],
    extensions: [
      '.ts', '.js'
    ]
  },
  output: {
    // 出力するファイル名
    filename: 'server.js',
    path: path.join(__dirname, 'dist')
  }
};