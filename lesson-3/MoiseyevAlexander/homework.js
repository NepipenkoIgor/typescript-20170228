// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// Возвращает true, если все аргументы, кроме первого входят в первый.
// Первым всегда должен быть массив.
function isInArray(array, ...elements) {
    for (let element of elements) {
        if (array.indexOf(element) === -1)
            return false;
    }
    return true;
}
// Написать функцию summator(), которая сумирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
function summator(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += Number(args[i]) || 0;
    }
    return result;
}
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// Порядок элементов результирующего массива должен совпадать с порядком,
// в котором они встречаются в оригинальной структуре.
function getUnique(...array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) === i) {
            result.push(array[i]);
        }
    }
    return result;
}
