var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        vendor: [path.join(__dirname, "dev", "vendors.js")]
    },
    output: {
        path: path.join(__dirname, "_build", "dll"),
        filename: "dll.[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dll", "[name]-manifest.json"),
            name: "[name]",
            context: path.resolve(__dirname, "dev")
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        modules: [
        path.resolve(__dirname, "dev"),
        "node_modules"
        ]
    }
};