var style = require('./app.css');

var img = document.createElement('img');
img.src = require('./2.png');
document.body.appendChild(img);

var longVariableName = "hello";
longVariableName += "word";
document.writ('<h3>' + longVariableName + "</h3>");

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
	<div>
		<h1 className={style.h1}>Hello,World</h1>
		<h2 className="h2">Hello,webpack</h2>
	</div>,
	document.querySelector('#wrapper')
);
