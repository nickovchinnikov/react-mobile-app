const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const dist = 'lib'
const distRegexp = new RegExp(`/${dist}/`)

const webpackConfig = {
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname + `/../${dist}`,
    filename: 'index.js'
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
