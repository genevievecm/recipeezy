const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback:{
            index:'dist/index.html'
        }
    }
});
