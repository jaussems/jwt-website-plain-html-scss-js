const path = require('path');

module.exports = {
    entry: "./src/javascript/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"

                ]
            }
        ]
    }


}