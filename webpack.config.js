var path = require('path');
module.exports = {
  entry: {
    raytracer: "./public/javascripts/raytracer/entry.ts"
  },
  output: {
      filename: '[name].bundle.js'
  },
  resolve: {
      root:[path.join(__dirname,'node_modules')],
      extensions:['', '.ts', '.webpack.js', '.web.js', '.js']
  },
  module: {
      loaders: [
          { test: /\.ts$/, loader: 'ts-loader' }
      ]
  }
};  