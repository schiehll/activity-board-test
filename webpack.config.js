const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    vendor: [
      'react',
      'react-dom',
      'styled-components',
      'date-fns/sub_days',
      'date-fns/each_day',
      'date-fns/last_day_of_month',
      'date-fns/add_days',
      'date-fns/compare_asc',
      'date-fns/is_same_day'
    ],
    app: path.resolve(__dirname, 'src/index.js')
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      'src',
      'node_modules'
    ]
  },

  module: {
    rules: [
      {
        test: /\.js?/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader'
      },
      {
        test: /\.json?/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'json-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'js/[name].js'
    }),

    new HtmlWebpackPlugin({
      title: 'Activity Board',
      template: 'src/index.html'
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    port: 3000
  }
}
