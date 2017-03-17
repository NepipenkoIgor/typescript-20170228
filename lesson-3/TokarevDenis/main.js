function getUnique() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var uniqueArr = [];
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var el = rest_1[_a];
        if (uniqueArr.indexOf(el) == -1)
            uniqueArr.push(el);
    }
    return uniqueArr;
}
function smartReverse(str) {
    var strParts = str.split(' ');
    var regex = /[а-яА-ЯёЁa-zA-Z]/;
    var result = [];
    for (var _i = 0, strParts_1 = strParts; _i < strParts_1.length; _i++) {
        var part = strParts_1[_i];
        var letters = part.split('');
        var lettersIndexes = [];
        for (var i = 0; i < letters.length; i++) {
            if (regex.test(letters[i])) {
                lettersIndexes.push(i);
            }
        }
        for (var j = 0; j < lettersIndexes.length / 2; j++) {
            var tmp = letters[lettersIndexes[j]];
            letters[lettersIndexes[j]] = letters[lettersIndexes[lettersIndexes.length - 1 - j]];
            letters[lettersIndexes[lettersIndexes.length - 1 - j]] = tmp;
        }
        result.push(letters.join(''));
    }
    return result.join(' ');
}
