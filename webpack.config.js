const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: './build/',
        filename: 'script.js',
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
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
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.vue', '.js', '.json'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        host: 'localhost',
        port: 8080,
    },
}
