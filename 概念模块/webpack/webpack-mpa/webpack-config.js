const path = require('path');
const HtmlWebpakPlugin = require('html-webpack-plugin');//默认html模板

module.exports = {
  mode:'production',
  entry: {test:'./src/index.js',home:'./src/home.js'},
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[hash][name]bundle.js'
  },
  module: {
 
  },
  plugins:[
    new HtmlWebpakPlugin({
      filename:'index1.html',
      template: 'src/index.html',
      hash:true,
      chunks:['test']
    }),
    new HtmlWebpakPlugin({
      filename:'index2.html',
      template: 'src/index.html',
      hash:true,
      chunks:['home']
    }),
  ]
}