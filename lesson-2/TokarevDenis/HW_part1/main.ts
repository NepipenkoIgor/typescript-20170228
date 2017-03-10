//Task 1
function isInArray(entryArr: (number | string)[], ...rest: (number | string)[]): boolean {
    for (let entry of rest) {
        if(entryArr.indexOf(entry) == -1) return false;
    }

    return true;
}


//Task 2
type sn = string | number;

function checkIfString(a: sn): a is string {
    return typeof a === 'string';
}

function NumberIsNaN(value: sn) {
    return typeof value === 'number' && isNaN(value);
}

function summator(...rest: number[]): number;
function summator(...rest: string[]): number;
function summator(...rest: sn[]): number;

function summator(...rest: sn[]): number {
    let result: number = 0;

    for (let i of rest) {
        result += checkIfString(i) ? (NumberIsNaN(parseInt(i, 10)) ? 0 : parseInt(i, 10)) : i;
    }

    return result;
}

console.log(summator(1, 2, 3, 4, '5'));
console.log(summator('1', 2, 3, 4, '5'));


//Task 3
function getUnique(...rest: (string | number)[]): (string | number)[] {
    let uniqueArr : (string | number)[] = [];
    for (let el of rest) {
        if(uniqueArr.indexOf(el) == -1) uniqueArr.push(el);
    }

    return uniqueArr;
}


//Task 4
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

console.log(smartReverse('  s1tar3t 2   hellow '));  //  t1rat3s 2   wolleh
console.log(smartReverse('s1ta$%r3t 2 hel^low'));  //t1ra$%t3s 2 wol^leh
console.log(smartReverse(' s1tar3t 2   low5  '));  // t1rat3s 2   wol5