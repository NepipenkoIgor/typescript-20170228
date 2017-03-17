type sn = string | number;

function getUnique(...rest: sn[]): sn[] {
    let uniqueArr : sn[] = [];
    for (let el of rest) {
        if(uniqueArr.indexOf(el) == -1) uniqueArr.push(el);
    }

    return uniqueArr;
}

function smartReverse(str: string): string {

    let strParts: string[] = str.split(' ');
    let regex = /[а-яА-ЯёЁa-zA-Z]/;
    let result: string[] = [];

    for(let part of strParts) {
        let letters: string[] = part.split('');
        let lettersIndexes: number[] = [];

        for (let i: number = 0; i < letters.length; i++) {
            if(regex.test(letters[i])) {
                lettersIndexes.push(i);
            }
        }

        for (let j: number = 0; j < lettersIndexes.length / 2; j++) {
            let tmp: string = letters[lettersIndexes[j]];
            letters[lettersIndexes[j]] = letters[lettersIndexes[lettersIndexes.length - 1 - j]];
            letters[lettersIndexes[lettersIndexes.length - 1 - j]] = tmp;
        }

        result.push(letters.join(''));
    }

    return result.join(' ');
}