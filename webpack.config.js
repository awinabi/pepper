const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './src/index.js',
  target: 'web',
  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sdk.js',
    library: {
      name: 'pepper',
      type: 'var',
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins: [
         new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"',
                'ZOID_FRAME_ONLY': true
            }
        })
  ],

  resolve: {
    alias: {
       process: "process/browser"
    },
    extensions: ['*', '.js', '.jsx'],
  },
}
