// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// Возвращает true, если все аргументы, кроме первого входят в первый.
// Первым всегда должен быть массив.
function isInArray(array, ...restOfArgs) {
    let isArgInArray;
    for (let i = 0; i < restOfArgs.length; i++) {
        isArgInArray = false;
        for (let j = 0; j < array.length; j++) {
            if (restOfArgs[i] === array[j])
                isArgInArray = true;
        }
        if (!isArgInArray)
            return false;
    }
    return true;
}
console.log(isInArray([1, 2, 3], 1));
console.log(isInArray([1, 2, 3], 1, 2));
console.log(isInArray([1, 2, 3], 1, 2, 3));
console.log(isInArray([1, 2, 3], 4, 2, 3));
console.log(isInArray([1, 2, 3], 1, 4));
console.log(isInArray([1, 2, 3], 4));
