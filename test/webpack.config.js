var webpack = require('webpack');
module.exports = {
  entry: [
    './src/dom_add.js',
    './src/tool.js',
  ],
  output: {
    path: __dirname,
    filename: 'build.es5.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};
