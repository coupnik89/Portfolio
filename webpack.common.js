const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
  ],
  module: {
    rules: [{
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash][ext]'
        },
      }
    ],
  },
};