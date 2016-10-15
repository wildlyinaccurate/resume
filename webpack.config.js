const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
