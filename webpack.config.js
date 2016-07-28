/* @flow */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './dist/bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  module: {
    loaders: [
    {
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react']
      }
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }
    ]
  }
};
