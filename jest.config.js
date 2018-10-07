module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: './internals/jest/settings.js',
  transform: {
    '^.+\\.(js|jsx)$': './node_modules/babel-jest',
    '^.+\\.(ts|tsx)$': './node_modules/ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './internals/jest/fileTransform.js',
    '\\.(css|less)$': './internals/jest/cssTransform.js'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?|ts?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testURL: 'http://localhost/',
  setupFiles: ['./internals/jest/global.js']
}
