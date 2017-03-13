//======== 1. isInArray
function isInArray(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    // a length less than b
    if (a.length < b.length)
        return false;
    for (var _a = 0, b_1 = b; _a < b_1.length; _a++) {
        var bItem = b_1[_a];
        if (a.indexOf(bItem) < 0)
            return false;
    }
    return true;
}
function summator() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var result;
    if (typeof items[0] === 'string') {
        result = '';
    }
    else {
        result = 0;
    }
    items.forEach(function (item, i) { return result += item; });
    return result;
}
function getUnique() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var result = [];
    var i = 0;
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var item = arr_1[_a];
        result[i] = item;
        i++;
    }
    return result;
}
// Test getUnique
// console.log( getUnique( 5, 10, 20) );
//======== 4. wordReverse
function wordReverse(str) {
    var exp = /^[a-zA-Z]+$/;
    var words = str.split(' ');
    var newArr = [];
    var i = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var wordArr = [];
        var j = 0;
        for (var _a = 0, word_1 = word; _a < word_1.length; _a++) {
            var char = word_1[_a];
            var newIndex = (word.length - 1) - j;
            if (exp.test(char) && exp.test(word[newIndex])) {
                wordArr[newIndex] = char;
            }
            else {
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
