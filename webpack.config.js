const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV === "production";

module.exports = {
    entry: "./src/index.ts",
    plugins: devMode
        ? [
              new MiniCssExtractPlugin({ filename: "[name].css" }),
              new CleanWebpackPlugin(["dist"]),
              new HtmlWebpackPlugin({
                  title: "Drum Kit",
                  template: "src/index.html"
              })
          ]
        : [],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    devMode
                        ? [
                              MiniCssExtractPlugin.loader,
                              "css-loader",
                              "postcss-loader",
                              "sass-loader"
                          ]
                        : "style-loader"
                ]
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            { test: /\.wav$/, use: [{ loader: "file-loader", options: {} }] }
        ]
    },
    resolve: {
        extensions: ["tsx", ".ts", ".js"]
    }
};
