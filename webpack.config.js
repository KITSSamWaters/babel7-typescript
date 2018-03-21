const path = require('path')
const webpack = require('webpack')

const APP_DIR = path.join(__dirname, 'src')
const BUILD_DIR = path.join(__dirname, 'dist')

const config = {
  devServer: {
    contentBase: './dist',
    hot: true,
    filename: 'bundle.dev.js',
    port: 9002,
    proxy: {
      "/api": "http://localhost:9001"
    },
    publicPath: '/'
  },
  entry: [
    APP_DIR + '/index.tsx'
  ],
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'tslint-loader',
        test: /\.(js|jsx|ts|tsx)$/
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {loader: "url-loader"}
        ]
      },
      {
        exclude: /node_modules/,
        include: APP_DIR,
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {loader: "babel-loader"}
        ]
      }
    ]
  },
  output: {
    filename: process.env.NODE_ENV === 'development' ? 'bundle.dev.js' : '[name].prod.js',
    path: BUILD_DIR
  },
  plugins: [
    new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify('development')}}),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'src', 'actions'),
      components: path.resolve(__dirname, 'src', 'components'),
      reducers: path.resolve(__dirname, 'src', 'reducers'),
      selectors: path.resolve(__dirname, 'src', 'selectors'),
      theme: path.resolve(__dirname, 'src', 'theme')
    },
    extensions: ['.css', '.js', '.jsx', '.json', '.scss', '.ts', '.tsx'],
    modules: ['node_modules']
  }
}

module.exports = config