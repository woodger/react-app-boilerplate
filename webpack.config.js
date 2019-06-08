const url = require('url');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv-safe');

module.exports = () => {
  dotenv.config();

  const {
    hostname:host,
    port
  } = url.parse(process.env.WEB_UPL);

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
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
        },
        {
          test: /\.svg$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].ext'
          }
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    devServer: {
      host,
      port,
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      compress: true,
      after() {
        console.log(
          `Application started on http://${host}:${port}`
        );
      }
    }
  };
};
