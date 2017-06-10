var path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    title: 'Webpack',
    template: './views/home.ejs'
});


module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        hot: true,
        stats: 'errors-only',
        historyApiFallback: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
};
