require('./app.css');

var img = document.createElement('img');
img.src = require('./2.png');
document.body.appendChild(img);

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
	<h1>Hello,World</h1>,
	document.querySelector('#wrapper')
);
