'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: "./src/index.js",
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.js$/,
        use: 'babel-loader'
      }, {
        test: /\.styl(us)?$/,
        use: [ 'vue-style-loader', 'css-loader', 'stylus-loader' ]
      }, {
        test: /\.css$/,
        use: ['vue-style-loader','css-loader']
      }, {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      }, {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ]
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json']
  },
  output: {
    path: resolve('dist'),
    filename: 'simple-vue-tooltip.min.js',
    libraryTarget: 'window',
    library: 'SimpleVueTooltip'
  }
}
