const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // watch: true,
  // mode: 'none',
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        //
        // loader: 'style-loader!css-loader',
        //
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/src/index.html"
    }),
    // "@babel/plugin-proposal-function-bind",
  ],
};