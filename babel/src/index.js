"use strict"

{
	let a = 10;
	var b= 20;
}
//console.log(a);//error a is no defined
//console.log(b);


for(let i=0;i<10;i++){};

//console.log(i);//Uncaught ReferenceError: i is not defined

var a = [];
for(var i=0;i<10;i++){
	a[i] = function(){
		console.log(i);
	}
}

a[6]();//因为i是全局变量，所以 输出都是最后一个值
a[0]();


var b=[];
for(let j=0;j<10;j++){
	b[j] = function(){
		console.log(j);
	}
}
b[6]();//6  j为let作用域,


console.log(foo); // 变量提升	即脚本开始运行时，变量foo已经存在了，但是没有值，所以会输出undefined
var foo = 2;

//console.log(bar);//无变量提升，所以报错 


var tmp = "12";
/*if(true){
	tmp = "abc";//error tmp is not defined
	let tmp;
	console.log(tmp);
}*/

function f1(){
	let n = 10;
	if(true){
		let n = 5;
	}
	console.log(n);
}

f1();


// if(true) //error f1 函数必须定义在if(){f1}
// 	function f1(){}


const PI = 3.14;

//PI = 3;//error Uncaught TypeError: Assignment to constant variable.


if(true){
	const Max = 5;
}

//console.log(Max); //const  也有块级作用域概念 error Max is not defined