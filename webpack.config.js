const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin= require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
 
  entry:  {
    app:'./src/index.js'
  },
  
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: '',
    filename: "main.js"
  },

  mode: "development",

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 1939,
    overlay: true,
    writeToDisk: true,
  
  },

  module: {
    rules: [

      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery'],
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
              {
                loader: MiniCssExtractPlugin.loader, 
                options: {
                  publicPath: '../' 
                }
              },
              'css-loader',
              'sass-loader'
            ]
      },
      
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader", 
            options: {
              name: '[name].[ext]',
              outputPath: "images",
            }
          }
        ]
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader", 
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
              esModule: false,
            }
          }
        ]
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            // options: {
            //   minimize: true,
            // }
          }
        ]
      }
    ]
  },
 
  plugins: [
    
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),

    new HtmlWebpackPlugin({
      filename: "book1.html",
      template: "src/book1.html",
    }),

    new HtmlWebpackPlugin({
      filename: "book2.html",
      template: "src/book2.html",
    }),

 
    new MiniCssExtractPlugin({filename: "css/style.css"}),

    new OptimizeCSSAssetsPlugin({}),

  ],

};
