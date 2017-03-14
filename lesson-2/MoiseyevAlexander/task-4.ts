// Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
// цифры и специальные символы должны остаться на месте
//   s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
//   s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
//   s1tar3t 2   low5  ->  t1rat3s 2   wol5

function rotateWords(str: string): string {
  let words: string[] = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = rotate(words[i]);
  }
  return words.join(' ');
}

function rotate(word: string): string {
  let regex: RegExp = /[a-zA-Zа-яА-Я]/;
  let arrayOfLetters: string[] = word.split('');
  let startPointer: number = 0;
  let endPointer: number = word.length - 1;

  while (startPointer < endPointer) {
    while (!regex.test(arrayOfLetters[startPointer])) startPointer++;
    while (!regex.test(arrayOfLetters[endPointer])) endPointer--;
    let letter: string = arrayOfLetters[startPointer];
    arrayOfLetters[startPointer] = arrayOfLetters[endPointer];
    arrayOfLetters[endPointer] = letter;
    startPointer++;
    endPointer--;
  }
  return arrayOfLetters.join('');
}

console.log( rotateWords('s1tar3t 2 hellow'));
console.log( rotateWords('s1ta$%r3t 2 hel^low'));
console.log( rotateWords('s1tar3t 2   low5'));