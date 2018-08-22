require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL)
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css']
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    historyApiFallback: true
  }
};
