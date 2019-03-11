const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const nodeExternals = require("webpack-node-externals");

const configs = [
  {
    entry: {
      browser: "./src/ClientApp.tsx"
    },
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "dist"),
      publicPath: "/"
    },
    devServer: {
      historyApiFallback: true,
      port: 9000
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    stats: {
      chunks: true,
      colors: true,
      reasons: true
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          loader: "ts-loader",
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
          ignore: ["*.tsx", "*.ts", "*.js", "*.css", "__tests__/**/*"]
        }
      ]),
      new Dotenv()
    ]
  },
  {
    entry: {
      server: "./server.tsx"
    },
    output: {
      filename: "server.js",
      path: path.join(__dirname, "dist")
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader"
        }
      ]
    },
    plugins: [new Dotenv()],
    target: "node",
    externals: [nodeExternals()]
  }
];

if (process.env.NODE_ENV === "development") {
  configs[0].devtool = "cheap-eval-source-map";
}

module.exports = configs;
