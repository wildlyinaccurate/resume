module.exports = {
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015'
      }
    ]
  },
  output: {
    filename: '[name].js'
  }
}
