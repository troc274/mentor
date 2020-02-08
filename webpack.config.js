const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TransformReactJsx = require("@babel/plugin-transform-react-jsx");

module.exports = (env, options) => {
  return {
    entry: "./app/main.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename:
        options.mode == "production"
          ? "[name].[chunkhash].js"
          : "[name].[hash].js",
      publicPath: options.mode == "production" ? "/main/" : "/"
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
            priority: 1,
            enforce: true
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.js|.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
              }
            }
          ]
        },
        {
          test: /\.css|.scss$/,
          use:
            options.mode == "production"
              ? [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "postcss-loader",
                  "sass-loader"
                ]
              : ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "assets/img/"
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "assets/fonts/"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./app/index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css"
      }),
      ...(options.mode == "production"
        ? [
            new CompressionPlugin({
              filename: "[path].br[query]",
              algorithm: "brotliCompress",
              test: /\.(js|css|html|svg)$/,
              compressionOptions: { level: 11 },
              threshold: 10240,
              minRatio: 0.8,
              deleteOriginalAssets: false
            }),
            new CompressionPlugin({
              filename: "[path].gz[query]",
              algorithm: "gzip",
              test: /\.(js|css|html|svg)$/,
              compressionOptions: { level: 9 },
              threshold: 10240,
              minRatio: 0.8,
              deleteOriginalAssets: false
            })
          ]
        : [])
    ],
    resolve: {
      alias: {
        react: "preact/compat",
        "react-dom": "preact/compat",
        components: path.resolve(__dirname, "app/components"),
        contextApis: path.resolve(__dirname, "app/context-apis"),
        pages: path.resolve(__dirname, "app/pages"),
        services: path.resolve(__dirname, "app/services"),
        assets: path.resolve(__dirname, "app/assets")
      },
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    devServer: {
      historyApiFallback: true
    }
  };
};
