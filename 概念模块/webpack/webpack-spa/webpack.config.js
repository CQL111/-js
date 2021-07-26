const path = require('path');
const HtmlWebpakPlugin = require('html-webpack-plugin');//默认html模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode:'production',
  entry: {index:'./src/index.js'},
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[hash][name]bundle.js'
  },
  module: {
  
  },
  plugins:[
    new HtmlWebpakPlugin({
      filename:'index.html',
      template: 'src/index.html',
      hash:true,
      chunks:['test']
    }),
    new MiniCssExtractPlugin({
      filename: '../dist/css/style.css',  // 从 .js 文件中提取出来的 .css 文件的名称
    }),
    
  ]
}


// 