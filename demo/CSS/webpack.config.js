const path = require('path');
const HtmlWebpakPlugin = require('html-webpack-plugin');//默认html模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode:'production',
  entry: {test:'./src/index.js'},
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[hash][name]bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.css$/i,
          use:  [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test:/\.scss$/,
          use:[
            'style-loader',
            // {
            //   loader:'css-loader',
            //   options:{
            //     module:true,
            //     localIdentName:'[name]-[local]-[hash:base64:6]'
            //   }
            // },
            'css-loader','sass-loader'
          ]
        }
    ],
  },
  plugins:[
    new HtmlWebpakPlugin({
      filename:'index1.html',
      template: 'src/index.html',
      hash:true,
      chunks:['test']
    }),
    // // new ExtractTextPlugin("style.css"),
    // new MiniCssExtractPlugin({
    //   filename: '../dist/css/style.css',  // 从 .js 文件中提取出来的 .css 文件的名称
    // }),
    
  ]
}