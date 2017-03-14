function isLetter(str: string): boolean {
    if (str.length !== 1) {
        throw new Error('Parameter must be a letter');
    }

    return /[a-zA-Z]/.test(str);
}

function revertWord(str: string): string {
    let result = [];
    let temp = [];
    let letters = str.split('');

    for (let i = 0, len = letters.length; i < len; i++) {
        if (isLetter(letters[i])) {
            temp.push(letters[i]);
        } else {
            result[i] = letters[i];
        }
    }

    for (let i = 0, len = letters.length; i < len; i++) {
        if (result[i] === undefined) {
            result[i] = temp.pop();
        }
    }

    return result.join('');
}

function revertSentence(str: string): string {
    return str.split(' ').map(revertWord).join(' ');
}