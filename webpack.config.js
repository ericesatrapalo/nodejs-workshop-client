var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        book_manager: ['./index.js']
    },
    output: {
        path: __dirname + '/public/js',
        filename: './[name].js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                include: [
                    path.resolve(__dirname, "app")
                ],
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
