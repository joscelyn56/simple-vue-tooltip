module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
  extends: [
    'plugin:vue/recommended'
  ]
}
