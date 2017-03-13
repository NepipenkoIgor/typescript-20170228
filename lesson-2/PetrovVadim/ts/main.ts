//======== 1. isInArray
function isInArray<T>( a:T[], ...b:T[] ):boolean {
	// a length less than b
	if(a.length < b.length) return false;

	for(let bItem of b){
		if(a.indexOf(bItem) < 0) return false;
	}

	return true;
}

// Test isInArray
// console.log( isInArray<number>( [1, 500, 2], 1, 500, 2 ) );


//======== 2. summator
type sn = string|number;
function summator(...items:string[]):string;
function summator(...items:number[]):number;
function summator(...items:sn[]):sn{
	let result:any;
	if(typeof items[0] === 'string'){
		result = '';
	} else {
		result = 0;
	}
	items.forEach((item:sn, i:number)=> result += item);
	return result;
}

// Test summator
// console.log( summator(1,2,3,4,5) );
// console.log( summator('some',' string') );


//======== 3. getUnique
type numArr = number[];
function getUnique( ...arr:numArr ):numArr{
	let result:numArr = [];
	let i = 0;
	for (let item of arr) {
		result[i] = item;
		i++;
	}
	return result;
}

// Test getUnique
// console.log( getUnique( 5, 10, 20) );


//======== 4. wordReverse
function wordReverse(str:string):string{
	let exp = /^[a-zA-Z]+$/;
	let words:string[] = str.split(' ');
	let newArr = [];

	let i = 0;
	for(let word of words){
		let wordArr = [];
		let j = 0;
		for(let char of word){
			let newIndex = (word.length - 1) - j;
			if( exp.test(char) && exp.test(word[newIndex]) ){
				wordArr[newIndex] = char;
			} else {
				wordArr[j] = char;
			}
			j++;
		}
		newArr[i] = wordArr.join('');
		i++;
	}
	return newArr.join(' ');
}

// Test wordReverse
// console.log('t1rat3s 2 wolleh');
// console.log(wordReverse('s1tar3t 2 hellow'), '<=== result');

// console.log('t1ra$%t3s 2 wol^leh');
// console.log(wordReverse('s1ta$%r3t 2 hel^low'), '<=== result');

// console.log('t1rat3s 2   wol5');
// console.log(wordReverse('s1tar3t 2   low5'), '<=== result');

