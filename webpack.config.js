const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const DIST_PATH = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/client.js',

  output: {
    path: DIST_PATH,
    filename: 'bundle.js'
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist'
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       loader: 'buble-loader',
  //       include: path.join(__dirname, 'src'),
  //       options: {
  //         target: { chrome: 60 },
  //         jsx: 'h'
  //       }
  //     }
  //   ]
  // },

  plugins: [
    new webpack.DefinePlugin({
      DISABLE_DEHYDRATOR: JSON.stringify(true),
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}
