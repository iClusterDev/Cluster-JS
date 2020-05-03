const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./main.js",
  stats: {
    children: false,
    modules: false,
    assets: false,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "boundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: ["style-loader", "css-loader", { loader: "sass-loader", options: { implementation: require("sass") } }, "resolve-url-loader"],
      // },
      {
        test: /\.s[ac]ss$/i,
        use: ["lit-scss-loader", "extract-loader", "css-loader", { loader: "sass-loader", options: { implementation: require("sass") } }, "resolve-url-loader"],
      },
      {
        test: /\.(eot|gif|otf|png|svg|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ["file-loader"],
      },
    ],
  },
};
