const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const getFileName = (ext = '[ext]', name = '[name]') => {
  return isDev ? `${name}.${ext}` : `${name}.[hash].${ext}`
}

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: isDev ? {} : { minimize: true, minimizer: [new OptimizeCssAssetsWebpackPlugin()] },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `./css/${getFileName('css')}`,
      chunkFilename: getFileName('css', '[id]'),
      ignoreOrder: false,

    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'messenger',
      template: path.resolve(__dirname, 'public/index.html'),
      inject: true,
      minify: {
        removeComments: !isDev,
        removeAttributeQuites: !isDev
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [isDev ? 'style-loader' : {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: path.resolve(__dirname, 'dist/')
          }
        },
        {
          loader: 'css-loader', options: {
            sourceMap: isDev,
          }
        }
        ]
      },
      {
        test:/\.(png|jpg|jpeg|svg|gif)$/,
        use:['file-loader']
      },
      {
        test:/\.(ttf|woff|woff2|eot)$/,
        exclude: /node_modules/,
        use:[isDev?{loader:'file-loader'}:{
          loader:'file-loader',
          options:{
            name: `./fonts/${getFileName()}`,
          }
        }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      '@app': path.resolve(__dirname, 'src/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: 'Google Chrome',
    hot: true,
    port: 3000,
  },
  devtool: isDev ? 'source-map' : false,
}