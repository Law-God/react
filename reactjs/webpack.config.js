
module.exports = {
	entry : {
		bundle : './main.jsx',
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
				loader : 'style-loader!css-loader'
			},
			{
				test : /\.(png|jpg)$/,
				loader : 'url-loader?limit=8192'
			}
		]
	}
}