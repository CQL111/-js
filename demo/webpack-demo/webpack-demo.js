const fs = require('fs')
const parser = require('@babel/parser')
const options = require('./webpack.config')
const path = require('path')
const traverse = require('@babel/traverse').default;
const { tansformFromAst } = require('@babel/core')
const Parser = {
    getAst: path => {
        const content = fs.readFileSync(path, 'utf-8')
        return parser.parse(content, {
            sourceType: 'module'
        })
    },
    getDependecies: (ast, filename) => {
        const dependecies = {};
        traverse(ast, {
            ImportDeclaration({ node }) {
                const dirname = path.dirname(filename)
                const filepath = './' + path.join(dirname, node.source.value)
                dependecies[node.source.value] = filepath;
            }
        })
        return dependecies
    },
    getCode: ast => {
        // ast 转成code;
        const { code } = transformFromAst(ast, null, {
            presets: ['@babel/perset-env']
        })
        return code
    }

}






class Compiler {
    constructor(options) {
        const { entry, output } = options;
        this.entry = entry;
        this.output = output;
        this.modules = []

    }
    run() {
        const info = this.build(this.entry);
        this.modules.push(info)
        this.modules.forEach(({ dependecies }) => {
            if (dependecies) {
                for (const dependency in dependecies) {
                    this.modules.push(this.build(dependecies[dependency]))
                }
            }
        })
        const dependencyGraph = this.modules.reduce(
            (graph, item) => ({
                ...graph,
                [item.filename]: {
                    dependecies: item.dependecies,
                    code: item.code
                }
            }))
        this.generate(dependencyGraph)

    }
    build(filename) {
        const { getAst, getDependecies, getCode } = Parser;
        const ast = getAst(filename);
        const dependecies = getDependecies(ast, filename);
        const code = getCode(ast);
        return {
            filename, dependecies, code
        }

    }
    generate(code) {
        // 输出文件路径
        const filePath = path.join(this.output.path, this.output.filename)
        // 懵逼了吗? 没事,下一节我们捋一捋
        const bundle = `(function(graph){
                            function require(module){
                                function localRequire(relativePath){
                                return require(graph[module].dependecies[relativePath])
                                }
                                var exports = {};
                                (function(require,exports,code){
                                eval(code)
                                })(localRequire,exports,graph[module].code);
                                return exports;
                            }
                            require('${this.entry}')
                            })(${JSON.stringify(code)})`

        // 把文件内容写入到文件系统
        fs.writeFileSync(filePath, bundle, 'utf-8')
    }
}
new Compiler(options).run()
