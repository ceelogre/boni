const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

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
      template: './index.html',
      filename: './index.html',
      favicon: './assets/favicon.ico'
    })
  ],
  module: {
    rules: [
      // add css loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
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