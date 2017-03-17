function isLetter(str: string): boolean {
    if (str.length !== 1) {
        throw new Error('Parameter must be a letter');
    }

    return /[a-zA-Z]/.test(str);
}

function revertWord(str: string): string {
    const result: string[] = [];
    const temp: string[] = [];
    const letters: string[] = str.split('');
    const len: number = letters.length;

    for (let i: number = 0; i < len; i++) {
        if (isLetter(letters[i])) {
            temp.push(letters[i]);
        } else {
            result[i] = letters[i];
        }
    }

    for (let i: number = 0; i < len; i++) {
        if (result[i] === undefined) {
            result[i] = temp.pop();
        }
    }

    return result.join('');
}

function revertSentence(str: string): string {
    return str.split(' ').map(revertWord).join(' ');
}