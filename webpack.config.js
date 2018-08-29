// 自动注入模块
require('./schema.config');

// READYED
require('colors');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 自带版本 (整合工程到后端,后端提供版本识别;否则使用自带版本命名规则)
// const SCRIPT_FORMAT = '[name].[chunkhash:8].js';
// const STYLES_FORMAT = '[name].[contenthash:8].css';
const SCRIPT_FORMAT = '[name].js';
const STYLES_FORMAT = '[name].css';

// 自带版本
// const SCRIPT_CHUNK = '[name].[chunkhash:8].js';
// const STYLES_CHUNK = '[name].[contenthash:8].css';
const SCRIPT_CHUNK = '[name].js';
const STYLES_CHUNK = '[name].css';

module.exports = function(env, args) {
  const IS_PRODUCTION = args.mode === 'production';
  return {
    entry: {
      bitmainui: IS_PRODUCTION ? './src/library/index.js' : './src/index.js',
    },
    output: {
      filename: SCRIPT_FORMAT,
      chunkFilename: SCRIPT_CHUNK,
      path: path.resolve(__dirname, 'dist/'),
      publicPath: '/',
    },
    devtool: 'source-map',
    mode: args.mode || 'development',
    // https://github.com/webpack/webpack/issues/3486
    performance: { hints: false },
    resolve: {
      extensions: ['.js', '.jsx', '.vue'],
      alias: {
        // 不需要编译器
        vue$: 'vue/dist/vue.runtime.esm.js',
      },
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            name: 'vendor',
          },
        },
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin(),
      ],
    },

    plugins: [
      new CleanWebpackPlugin(['dist']), // 多版本共存模式时 必须要取消这个插件
      new HtmlWebpackPlugin({
        title: 'BITMAIN',
        template: 'index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.DEBUG_ENV': JSON.stringify(env),
      }),
      new MiniCssExtractPlugin({
        filename: STYLES_FORMAT,
        chunkFilename: STYLES_CHUNK,
      }),
      new VueLoaderPlugin(),
    ],

    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: false,
                minimize: true,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true },
            },
            {
              loader: 'less-loader',
              options: { sourceMap: true },
            },
          ],
        },
        {
          test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
          loader: 'file-loader',
          options: {
            name: 'assets/images/[hash:8].[ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: 'file-loader',
          options: {
            name: 'assets/fonts/[hash:8].[ext]',
          },
        },
        {
          test: /\.vue$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false,
            },
          },
        },
        {
          enforce: 'pre',
          test: /\.vue$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'eslint-loader',
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
            {
              loader: 'eslint-loader',
            },
          ],
        },
      ],
    },

    devServer: {
      contentBase: './dist',
      port: '7777',
      host: '0.0.0.0',
      openPage: 'example',
      disableHostCheck: true,
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:8001',
          pathRewrite: { '^/api': '' },
        },
      },
    },
  };
};
