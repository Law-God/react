
var [a,b,c] = [1,2,3];

//console.log(a);
//console.log(b);
//console.log(c);

let [foo, [[bar], baz]] = [1, [[2], 3]];

//console.log(foo);
//console.log(bar);
//console.log(baz);

let [,,third] = ['foo','bar','baz'];
console.log(third);

let [head,...tail] = [1,2,3,4];
console.log(tail);


var jsonData = {
	id : 2,
	username : 'phantom',
	age : 18
};

let {id,username,age} = jsonData;

console.log(id,username,age);


var map = new Map();
map.set('first','1');
map.set('second','2');

for(let[key,value] of map){
	console.log(key + ' ' + value);
}

for(let [key] of map){
	console.log(key);
}

for(let [,value] of map){
	console.log(value);
}


for(let codePoint of 'foo'){
	console.log(codePoint);
}


var text = String.fromCodePoint(0x20BB7);

for(let i of text){
	console.log(i);
}