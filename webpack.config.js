'use strict';

var webpack = require('webpack');
var path = require("path");

var PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

var config = {
  entry: {
    app: path.join(PATHS.src, 'index.js')
  },

  output: {
    path: PATHS.dist,
    filename: "[name].bundle.js"
  }
};

module.exports = config;
