const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: ['./src/javascript/index.js', './src/javascript/mail_services.js', './src/styles/scss/style.scss'],
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: (pathData) => {
            const filepath = path
                .dirname(pathData.filename)
                .split("/")
                .slice(1)
                .join("/");
            return `${filepath}/[name][ext]`;
        },

    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }), new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                generator: {
                    filename: 'static/[name][ext]',
                },

                // generator: {
                //     filename: 'static/[hash][ext]',
                //     publicPath: '/shared/icons',
                // },
            },

            {
                test: /\.(sass|scss)$/,
                sideEffects: true,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",

                ]
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            // },
            // {
            //     test: /\.(png|jpe?g|gif|svg)$/i,
            //     dependency: { not: ['url'] },
            //     type: "asset/resource",

            // },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                type: "asset/inline",
                // generator: {
                //     out
                // }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin()
        ],
    }


}