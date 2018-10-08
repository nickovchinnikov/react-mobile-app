module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: './internals/jest/settings.js',
  transform: {
    '^.+\\.(js|jsx)$': './node_modules/babel-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?)$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testURL: 'http://localhost/',
  setupFiles: ['./internals/jest/global.js']
}
