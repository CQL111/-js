const path = require('path');
const HtmlWebpakPlugin = require('html-webpack-plugin');//默认html模板
const webpack = require('webpack')
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  mode:'production',
  entry: {test:'./src/index.js',home:'./src/home.js'},
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[hash][name]bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //    })
      // },
      {
          test: /\.css$/i,
          use:  [
            MiniCssExtractPlugin.loader,
            // 'style-loader',
            'css-loader'
          ]
        },
    ],
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
    // new ExtractTextPlugin("style.css"),
    new MiniCssExtractPlugin({
      filename: '../dist/css/style.css',  // 从 .js 文件中提取出来的 .css 文件的名称
    }),
    new webpack.EvalSourceMapDevToolPlugin({}),
    
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`
      new HtmlMinimizerPlugin(),
    ],
  },
}