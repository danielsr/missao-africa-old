const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../server/public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      core: path.resolve(__dirname, './src/core')
    },
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.jsx', '.js']
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/static/index.html'
    })
  ]
};
