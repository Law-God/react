var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var devFlagPlugin = new webpack.DefinePlugin({
	_DEV_ : JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

//var HtmlWebpackPlugin = require('html-webpack-plugin');
//var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry : {
		bundle : './main.js',
	},
	output : {
		filename : 'bundle.js'
	},
	module : {
		loaders : [
			{
				test : /\.js[x]?$/,
				exclude : /node_modules/,
				loader : 'babel-loader?presets[]=es2015&presets[]=react'
			},
			{
				test : /\.css$/,
				loader : 'style-loader!css-loader?modules'
			},
			{
				test : /\.(png|jpg)$/,
				loader : 'url-loader?limit=8192'
			}
		]
	},
	plugins : [
		new CommonsChunkPlugin('init.js'),
		new webpack.ProvidePlugin({
			$ : "jquery",
			jQuery : 'jquery',
			"window.jQuery" : 'jquery'
		}),
		devFlagPlugin,
		new uglifyJsPlugin({
			compress : {
				warnings : false
			}
		}),
		//new HtmlWebpackPlugin({
			//title : 'Webpack-demos',
			//filename : 'index.html'
		//}),
		//new OpenBrowserPlugin({
			//url : 'http://localhost:8080'
		//}),
	]
}