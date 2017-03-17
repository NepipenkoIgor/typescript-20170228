var functions = require("../functions.js");
var expect = require('chai').expect;

function test(funcName, assertVal, ...args) {
	expect(functions[funcName](...args)).to.eql(assertVal, `function ${funcName} failed. Arguments was the following: ${JSON.stringify(args)}`);
}

describe('isInArray function', function(){
	it('should be true', function(done){
		test("isInArray", true, [2,3,5,"a","b","c"], 2, 3, "c");
		done();
	});
	it('should be false', function(done){
		test("isInArray", false, [2,3,5,"a","b","c"], 2, 3, "c", "d");
		done();
	});
});

describe('summator function', function(){
	it('should be 10', function(done){
		test("summator", 10, 1, 2, 3, 4);
		done();
	});
	it('should be 15', function(done){
		test("summator", 15, 1, "2", 3, 4, 5);
		done();
	});
	it('should be 6', function(done){
		test("summator", 6, "1", "2", "3");
		done();
	});
});

describe('getUnique function', function(){
	it('should be [1,2,3,"d"]', function(done){
		test("getUnique", [1,2,3,"d"], 1, 2, 3, 1, 3, 'd');
		done();
	});
	it('should be [1,"d",true,3,false]', function(done){
		test("getUnique", [1,"d",true,3,false], 1,'d',true,3,false,3,'d');
		done();
	});
});

describe('getUnique function', function(){
	it('reverseLetters be "t1rat3s 2 wolleh"', function(done){
		test("reverseLetters", "t1rat3s 2 wolleh", 's1tar3t 2 hellow');
		done();
	});
	it('reverseLetters be "t1ra$%t3s 2 wol^leh"', function(done){
		test("reverseLetters", "t1ra$%t3s 2 wol^leh", 's1ta$%r3t 2 hel^low');
		done();
	});
	it('reverseLetters be "t1rat3s 2   wol5"', function(done){
		test("reverseLetters", "t1rat3s 2   wol5", 's1tar3t 2   low5');
		done();
	});
	it('reverseLetters be "t1rat3s 2   wol5e"', function(done){
		test("reverseLetters", "t1rat3s 2   wol5e", 's1tar3t 2   elo5w');
		done();
	});
});