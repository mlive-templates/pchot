/**
 * webpack server prod 配置
 */
var path = require('path')
var rootPath = path.join(__dirname, '../')
var nodeExternals = require('webpack-node-externals')
var config = {
    entry: {
        app: path.join(rootPath, './src/server/bin/www.js')
    },
    target: 'node',
    output: {
        path: path.join(rootPath, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js']
    },
    externals: [nodeExternals({
        modulesDir: path.join(rootPath, 'node_modules')
    })],
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: false,
        __dirname: false,
        setImmediate: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
}

module.exports = config