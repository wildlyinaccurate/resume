module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015&presets[]=react'
      }
    ]
  },
  output: {
    filename: '[name].js'
  }
}
