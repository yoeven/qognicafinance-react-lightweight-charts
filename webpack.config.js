var path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/qognicafinance-react-lightweight-charts.js",
    output: {
        path: path.resolve("dist"),
        filename: "qognicafinance-react-lightweight-charts.min.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    externals: {
        react: "react"
    }
};
