const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'buble-loader',
        include: path.join(__dirname, 'src'),
        options: {
          target: { chrome: 60 },
          jsx: 'h'
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist')
  }
}
