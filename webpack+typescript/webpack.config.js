const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  // ---Entry section---
  entry: './src/index.ts',

  // ---Output section---
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },

  // ---Loaders---
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  // ---Plugins---
  plugins: [
    new HtmlWebpackPlugin(),
  ],
}
