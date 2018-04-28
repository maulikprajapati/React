var webpack = require("webpack");
var path = require("path");
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})
var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: path.resolve('dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    devServer: {
        contentBase: "./src",
        hot: true
    },
    plugins: [HtmlWebpackPluginConfig]
};
module.exports = config;