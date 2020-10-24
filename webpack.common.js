module.exports = {
    output: {
        filename: 'webpack.bundle.js',
        publicPath: '/'
    },
    entry: './src/index.js',
    module: {
        rules: [
            {
                // looks at the babel.config which determines how code should be transpiled
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react']
                    }
                },
            }
        ]
    }
};
