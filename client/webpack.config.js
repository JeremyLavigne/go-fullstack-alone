const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        proxy: {
            "/api/matches": {
                target: "http://localhost:3000"
            }
        }
    }
};

// entry: [
//     './src/index.js'
// ],
// output: {
//     path: __dirname,
//     publicPath: '/',
//     filename: 'bundle.js'
// },