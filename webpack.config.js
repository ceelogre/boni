const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3001,
    hot: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      favicon: './assets/favicon.ico',
    }),
    new htmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html'
    })
  ].concat(devMode? []: [new MiniCssExtractPlugin()]),
  module: {
    rules: [
      // add css loader
      {
        test: /\.css$/,
        use: [
          devMode ?  'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true
  },
};