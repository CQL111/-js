const path = require('path')
module.exports = {
  mode:'',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [{
      test: /\.css$/, 
      use: ['css-loader', 'style-loader']
    }]
  }
}