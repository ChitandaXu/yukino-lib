const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "@teamsupercell/typings-for-css-modules-loader",
          {
            loader: "css-loader",
            options: { modules: true }  
          }],
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss/i,
        use: [
          'style-loader',
          "@teamsupercell/typings-for-css-modules-loader",
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: 'Development'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    library: 'yukino-webpack-numbers',
    libraryTarget: 'umd'
  }
};