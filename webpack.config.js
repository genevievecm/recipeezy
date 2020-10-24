const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: './dist/webpack.bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                // looks at the babel.config which determines how code should be transpiled
                test: /\.(js)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: './public',
        historyApiFallback:{
            index:'dist/index.html'
        }
    }
};
