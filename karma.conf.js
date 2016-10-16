const connect = require('connect')
const serveStatic = require('serve-static')

connect()
  .use(serveStatic('.'))
  .listen(9877)

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*-spec.js',
      'node_modules/babel-polyfill/dist/polyfill.js',

      { pattern: 'data/*.json', included: false }
    ],
    exclude: [],
    preprocessors: {
      'test/**/*-spec.js': ['webpack']
    },

    proxies: {
      '/': 'http://127.0.0.1:9877/'
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader?presets=es2015',
            exclude: /node_modules/
          }
        ]
      }
    },

    reporters: ['mocha'],
    colors: true,
    logLevel: config.LOG_INFO,

    // urlRoot: '/karma',
    port: 9876,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
