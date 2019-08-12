const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [resolve(__dirname, 'src/index.js')],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    hot: true,
    historyApiFallback: true
  },
  devtool: 'eval',
  plugins: [
    new HtmlWebpackPlugin({
      title: "React-Redux",
      template: resolve(__dirname, 'src/static/index.html'),
    }),
  ],
};
