var webpack = require('webpack');
module.exports = {
  entry: [
    './src/dom_add.js',
    './src/dom_delete.js',
    './src/tool.js',
    './src/css.js',
    './src/attr.js',
    './src/search.js',
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
