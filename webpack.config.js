const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	plugins: [
		new HtmlWebPackPlugin({
			template: `./src/index.pug`,
			filename: `index.html`,
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'src/assets/public/'),
        to: path.resolve(__dirname, 'dist/images')
      },
    ]),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			//js
			{
				test: /.(js|jsx)$/,
				include: [],
				loader: 'babel-loader'
			},
			// html
			{
				test: /\.html$/,
				use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
			},
			// pug
			{
        test: /\.pug$/,
        use: [
          "html-loader",
          {
            loader: "pug-html-loader",
            // options: {
            //   pretty: true,
            //   minimize: false,
            //   basedir: path.join(__dirname, 'src')
            // }
          }
        ]
			},
			// css
			{
				test: /.css$/,
				use: [
					// {
					// 	loader: MiniCssExtractPlugin.loader
					// },
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: function() {
								return [
									require('precss'),
									require('autoprefixer'),
									require('postcss-nested'),
									require('postcss-custom-media')
								];
							}
						}
					}
				]
			},
			// img
			{
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
							name: '/images/[name].[ext]',
            }
          }
        ]
      }
		]
	},

	optimization: {
		minimizer: [new TerserPlugin()],

		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
