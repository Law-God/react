/*
require.ensure(['./a'],function(require){
	var content = require('./a');
	document.open();
	document.write('<h1>Hello World ....</h1>');
	document.close();
	
	if(_DEV_){
		document.write(new Date());
	}

});
*/

/*var load = require('bundle-loader!./a.js');

load(function(file){
	document.open();
	document.write('<h1>' + file + '</h1>');
	document.close();
})*/

$('h1').text('Hello World');



