module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-classes'
  ]
}
