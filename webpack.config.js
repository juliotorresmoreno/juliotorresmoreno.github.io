const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const isDev = process.env.NODE_ENV !== 'production'

/**
 * @typedef {import('webpack').WebpackOptionsNormalized} WebpackOptionsNormalized
 */

/**
 * @type {WebpackOptionsNormalized}
 */
const configuration = {
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html',
    }),
    new Dotenv(),
  ],
  mode: isDev ? 'development' : 'production',
  cache: false,
  devServer: {
    compress: true,
    port: 9000,
    host: '127.0.0.1',
    static: path.resolve(__dirname, './public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/lib': path.resolve(__dirname, 'src/lib'),

      '@/features': path.resolve(__dirname, 'src/features'),
      '@/hoc': path.resolve(__dirname, 'src/hoc'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/store': path.resolve(__dirname, 'src/store'),
      '@/l18n': path.resolve(__dirname, 'src/l18n'),
    },
  },
}

module.exports = configuration
