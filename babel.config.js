module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-classes',
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        preprocess: true,
        minify: true
      }
    ],
    [
      'module-resolver',
      {
        root: ['src'],
        alias: {
          components: './src/components',
          modules: './src/modules',
          showSplash: './src/decorators',
          Baccarat: './src/modules/Baccarat',
          services: './src/services',
          context: './src/context',
          lib: './src/lib',
          helpers: './src/helpers',
          flowTypes: './src/flowTypes',
          mock: './src/infrastructure/Mock',
          'server-mock': './src/infrastructure/ServerMock',
          i18n: './i18n'
        }
      }
    ]
  ]
}
