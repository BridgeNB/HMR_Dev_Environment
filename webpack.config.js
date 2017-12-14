const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'js/app': resolve(__dirname, 'src', 'index.js')
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: resolve(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
        include: resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'src', 'index.html'),
      inject: true,
      chunks: ['js/app']
    })
  ]
};
