const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.bundle.js",
    clean: true,
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".jsx", ".js"],
    modules: ["node_modules", "src"],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: process.env.PORT ?? 8000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src", "index.dev.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
