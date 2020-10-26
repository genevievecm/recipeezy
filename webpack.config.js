const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        filename: 'webpack.bundle.js',
        publicPath: '/'
    },
    entry: './src/index.js',
    module: {
        rules: [{
            // looks at the babel.config which determines how code should be transpiled
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            },
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            exclude: /node_modules/,
            use: [{
                loader: 'file-loader',
            }]
        }, ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: {
            index: 'dist/index.html'
        }
    }
};
