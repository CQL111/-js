# webpack 

## 概念
- webpack 是模块打包工具，根据引用模块的规则（依赖图），进行有序打包。

### webpack 模块构成
1. Entry ：入口起点，指示文件从什么地方开始进行工作，按照依赖，依次处理，最后输出到称为bundle的文件中；
2. output：输出bundle的地方
3. module：webpack一切皆模块，webpack会从配置的entry开始递归寻找依赖模块
4. chunk：代码块，一个chunk由多个模块组合，用于代码合并和分割
5. loader：loader是为了处理除了js意外的文件，将所有类型的文件转换成有效的js模块，然后利用webpack的打包能力进行处理，
6. plugin：插件是用于执行范围更广的任务，从开始打包一直到重新定义变量，webpack提供一系列钩子可以进行对chunk或者module，或者bundle进行处理；

### webpack的构建流程

1. 初始化参数：从配置文件和shell语句中读取参数，
2. 开始编译：用得到的参数初始化compiler对象，加载所有的插件，执行run开始编译
3. 确定入口：找的entry
4. 从入口文件出发，调用配置好的loader对模块进行编译，再找出该模块依赖的地方，一直递归完成所有入口以来的文件都读取完毕；
5. 输入资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk，再将chunk转换成一个单独文件加入到输出列表上；
6. 确定好输入内容后，根绝配置好的路径进行输出；
> webpack 可以根据他设定好的钩子函数，在编译和输出资源的时候进行处理；



###  webpack 单独输入css文件；
```
    1. 因为使用了webpack5  所以一部分webpack的插件就不好使了；
    例如：extract-text-webpack-plugin
    他的使用方法也是：
        npm install -D extract-text-webpack-plugin
        webpack.config.js 文件中：
        引入，插件中初始化，在loader中使用；

    2. 使用mini-css-extract-plugin
    使用方法：
        npm i -D mini-css-extract-plugin 
        webpack.config.js 文件中：
        module>rule>css下的 use中这样写：
         use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader'
        ]
        plugins
            new MiniCssExtractPlugin({
        filename: '../dist/css/style.css',  // 从 .js 文件中提取出来的 .css 文件的名称
        }),
```

### webpack 压缩
`压缩和优化一般放在optimization中； `
1. HtmlMinimizerWebpackPlugin  html 压缩
2. ImageMinimizerWebpackPlugin 图片压缩
3. CssMinimizerWebpackPlugin css

