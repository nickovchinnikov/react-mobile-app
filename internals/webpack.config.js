const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const dist = 'dist'
const distRegexp = new RegExp(`/${dist}/`)

const webpackConfig = {
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname + `/../${dist}`,
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].bundle.js',
    jsonpFunction: 'webpackJsonp' + Date.now()
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, '../src')],
        exclude: [/node_modules/, distRegexp],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  optimization: {
    minimize: true
  },
  plugins: [new webpack.HashedModuleIdsPlugin()]
}

module.exports = webpackConfig
