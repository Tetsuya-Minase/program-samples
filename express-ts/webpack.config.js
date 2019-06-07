const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
      'bin/www': path.join(__dirname, 'src/bin/www.ts'),
      'routes/index.js': path.join(__dirname, 'src/routes/index.ts'),
      'routes/users.js': path.join(__dirname, 'src/routes/users.ts'),
      'app.js': path.join(__dirname, 'src/app.ts')
  },
  target: 'node',
  node: {
    __dirname: false
  },
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
      'node_modules'
    ],
    extensions: [
      '.ts', '.js'
    ]
  },
  output: {
    // 出力するファイル名(entryのkeyを指定)
    filename: '[name]',
    path: path.join(__dirname, 'dist')
  }
};