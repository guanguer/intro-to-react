const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const config = {
  context: __dirname,
  entry: ["./src/ClientApp.js"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true,
    port: 9000
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: "babel-loader",
        exclude: [path.resolve(__dirname, "src/__tests__")]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: "src",
        ignore: ["*.jsx", "*.js", "*.css", "__tests__/**/*"]
      }
    ]),
    new Dotenv()
  ]
};

if (process.env.NODE_ENV === "development") {
  config.devtool = "cheap-eval-source-map";
}

module.exports = config;
