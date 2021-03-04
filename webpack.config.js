const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: true,
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

// const path = require('path');

// module.exports = {
//   entry: path.resolve(__dirname, './src/index.jsx'),
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader'],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx'],
//   },
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'bundle.js',
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, './dist'),
//   },
// };