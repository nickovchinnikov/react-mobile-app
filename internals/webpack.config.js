const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const dist = 'lib'
const distRegexp = new RegExp(`/${dist}/`)

const libraryName = 'react-mobile-app'

const webpackConfig = {
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname + `/../${dist}`,
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
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
  plugins: [new webpack.HashedModuleIdsPlugin(), new CopyWebpackPlugin([{ from: './*.d.ts', to: './' }])]
}

module.exports = webpackConfig
