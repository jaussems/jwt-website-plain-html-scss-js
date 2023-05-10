const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: ['./src/javascript/index.js', './src/javascript/mail_services.js', './src/styles/scss/style.scss'],
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }), new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                sideEffects: true,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                exclude: /node_modules/,
                use: 'url-loader?limit=1024&name=images/[name].[ext]'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                use: 'url-loader?limit=1024&name=shared/fonts/[name].[ext]'
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin()
        ]
    }


}