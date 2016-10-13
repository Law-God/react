"use strict";

{
	var _a = 10;
	var b = 20;
}
//console.log(a);//error a is no defined
//console.log(b);


for (var _i = 0; _i < 10; _i++) {};

//console.log(i);//Uncaught ReferenceError: i is not defined

var a = [];
for (var i = 0; i < 10; i++) {
	a[i] = function () {
		console.log(i);
	};
}

a[6](); //因为i是全局变量，所以 输出都是最后一个值
a[0]();

var b = [];

var _loop = function _loop(j) {
	b[j] = function () {
		console.log(j);
	};
};

for (var j = 0; j < 10; j++) {
	_loop(j);
}
b[6](); //6  j为let作用域,


console.log(foo); // 变量提升	即脚本开始运行时，变量foo已经存在了，但是没有值，所以会输出undefined
var foo = 2;

console.log(bar); //无变量提升，所以报错 , 实际测试未报错
var bar = 3;

var tmp = "12";
if (true) {
	_tmp = "abc";
	var _tmp = void 0;
	console.log(_tmp);
}

function f1() {
	var n = 10;
	if (true) {
		var _n = 5;
	}
	console.log(n);
}

f1();

if (true) {
	var _f = function _f() {};
}

var PI = 3.14;