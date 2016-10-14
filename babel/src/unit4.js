console.log('\u0061');

console.log('\u20BB7');

console.log('\u{20BB7}');

console.log('\u0002');

console.log('\u0024');

console.log('\uD842\uDFB7');

var s = '几a';
for(let ch of s){
	console.log(ch.codePointAt(0));
}

function is32Bit(c){
	return c.codePointAt(0) > 0xFFFF;
}

console.log(is32Bit('𠮷'));
console.log(is32Bit('a'));

console.log(String.fromCodePoint(0x20BB7));


for(let codePoint of 'foo'){
	console.log(codePoint);
}


console.log('几'.charAt(0));
console.log('𠮷'.charAt(0));//无法显示大于0xFFFF的字符
//console.log('𠮷'.at(0));//需要es-shims 垫片库才能使用

{
	let s = 'abcdef';
	console.log(s.includes('cd'));
	console.log(s.startsWith('a'));
	console.log(s.startsWith('b'));
}

{
	let s = 'a';
	console.log(s.repeat(3));
	//console.log(s.repeat(-1));//error Invalid count value
}

{
	//console.log('x'.padStart(4,'bc'));//ES 7才有此功能
}
