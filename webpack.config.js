var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: __dirname + '/src/app.ts',
    output: {
        path: __dirname + '/build',
        filename: 'app.js',
    },
    module: {
        rules: [{
            test: /\.ts$/, // include .ts files
            //enforce: "pre", // preload the jshint loader
            //exclude: /node_modules/, // exclude any and all files in the node_modules folder
            include: path.resolve(__dirname, "src"),
            use: [{
                loader: "ts-loader"
            }]
        }]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    }
}