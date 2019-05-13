const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpack = require('dotenv-webpack');
const dotenv = require('dotenv');

module.exports = () => {
  dotenv.config();

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index-bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new DotenvWebpack({
        safe: true,
        systemvars: true
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      host: process.env.HOST,
      port: process.env.PORT,
      after() {
        console.log(
          `Application started on http://${process.env.HOST}:${process.env.PORT}`
        );
      }
    }
  };
};
