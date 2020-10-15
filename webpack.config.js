const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, 'out'),
        publicPath: 'out/',
        filename: 'build.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader' ,
            },
            {
                test: /\.css$/,
                use: [ 'vue-style-loader', 'css-loader' ],
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts',
            '.vue',
            '.js',
            '.json',
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'out'),
        host: 'localhost',
        port: 8080,
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
}
