const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    output: {                 // all js will available through Client lib
        libraryTarget: 'var',
        library: 'Client'
    },
    devtool: 'source-map',
    stats: 'minimal',
    module: {
        rules: [

            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },       
        ]
    },
    
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        
        new WorkboxPlugin.GenerateSW()
        
    ]
}