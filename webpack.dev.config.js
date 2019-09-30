const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ["@babel/polyfill", "./src/public/index.js"]
  },
  output: {
    path: path.join(__dirname, 'dist/public'),
    publicPath: "/",
    filename: "js/[name].js"
  },
  target: 'web',
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: "ejs-webpack-loader",
            options: {
                  data: {prodId: "124"},
                  htmlmin: true
                }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
      //  use: ['file-loader']
        loader: 'file-loader',
        options:{
            name: 'img/[name].[ext]',
         },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/public/index.html',
      filename: 'index.html',
      excludeChunks: ['server']
    }),
    new HtmlWebpackPlugin({
      template: 'src/public/cart.html',
      filename: 'cart.html',
      excludeChunks: ['server']
    }),
    new HtmlWebpackPlugin({
      template: 'src/public/catalog.html',
      filename: 'catalog.html',
      excludeChunks: ['server']
    }),
    new HtmlWebpackPlugin({
      template: 'src/public/checkout.html',
      filename: 'checkout.html',
      excludeChunks: ['server']
    }),
    new HtmlWebpackPlugin({
      //hash: false,
      template: 'src/public/views/product.ejs',
      filename: './views/product.ejs',
      excludeChunks: ['server']
    })
  ]
};
