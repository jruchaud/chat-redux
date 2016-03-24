"use strict";

let path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        "./src/js/index",
        "./src/scss/main.scss"
    ],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    debug: true,
    devtool: "source-map",
    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loader: "eslint",
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, "src"),
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(["css", "sass"])
            }
        ]
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            title: "Chat with redux"
        })
    ]
};
