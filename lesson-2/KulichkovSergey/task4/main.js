function isLetter(str) {
    if (str.length !== 1) {
        throw new Error('Parameter must be a letter');
    }
    return /[a-zA-Z]/.test(str);
}
function revertWord(str) {
    var result = [];
    var temp = [];
    var letters = str.split('');
    for (var i = 0, len = letters.length; i < len; i++) {
        if (isLetter(letters[i])) {
            temp.push(letters[i]);
        }
        else {
            result[i] = letters[i];
        }
    }
    for (var i = 0, len = letters.length; i < len; i++) {
        if (result[i] === undefined) {
            result[i] = temp.pop();
        }
    }
    return result.join('');
}
function revertSentence(str) {
    return str.split(' ').map(revertWord).join(' ');
}
