// 1)
// . Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// . Возвращает true, если все аргументы, кроме первого входят в первый.
// . Первым всегда должен быть массив.
function isInArray(ar) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        if (indexOfAny(ar, item) === -1)
            return false;
    }
    return true;
}
var test_1 = function () {
    console.log("TEST 1: isInArray isInArray(['a',3,4,'b'], 5,3,'b')");
    var result = isInArray(['a', 3, 4, 'b'], 5, 3, 'b');
    console.log(result);
    console.log();
    return result;
};
function summator() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var summa = 0;
    for (var _a = 0, items_2 = items; _a < items_2.length; _a++) {
        var item = items_2[_a];
        summa += iString(item) ? parseFloat(item) || 0 : item; // parseInt(item)||0 - в случае NaN
        // Сначала был вариант:
        // summa += iString(item)?parseFloat(item):iNumber(item)?item:0;
        // Но первая проверка iString - оказывается сразу вычитает тип string из типа sn
        // поэтому вторую проверку на number убрал
    }
    return summa;
}
var test_2 = function () {
    console.log("TEST 2: summator(5,3,'b','7.312bas')");
    var result = summator(5, 3, 'b', '7.312bas');
    console.log(result);
    console.log();
    return result;
};
// 3)
// . Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// . и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// . Порядок элементов результирующего массива должен совпадать с порядком,
// . в котором они встречаются в оригинальной структуре.
function getUnique() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, items_3 = items; _a < items_3.length; _a++) {
        var item = items_3[_a];
        if (isInArray(result, item))
            continue;
        result.push(item);
    }
    return result;
}
var test_3 = function () {
    console.log("TEST 3: getUnique(5,3,'b',5,'a',{'i':2},{'i':2},{'i':3},3,'a','d',1)");
    var result = getUnique(5, 3, 'b', 5, 'a', { 'i': 2 }, { 'i': 2 }, { 'i': 3 }, 3, 'a', 'd', 1);
    console.log(result);
    console.log();
    return result;
};
function invertString(strS) {
    var regexp = /[A-z]/;
    var result = '';
    var word = '';
    var staticNumbers = [];
    var i = -1;
    // error TS2494: Using a string in a 'for...of' statement is only supported in ECMAScript 5 and higher.
    // OR 
    // error TS2407: The right-hand side of a 'for...in' statement must be of type 'any', an object type or a type parameter.
    for (var char_idx = 0; char_idx < strS.length; char_idx++) {
        var char = strS[char_idx];
        i++;
        if (regexp.exec(char)) {
            word = char + word;
            continue;
        }
        else if (char === ' ') {
            for (var _i = 0, staticNumbers_1 = staticNumbers; _i < staticNumbers_1.length; _i++) {
                var stat = staticNumbers_1[_i];
                word = word.slice(0, stat.position) + stat.value + word.slice(stat.position);
            }
            result += word + ' ';
            word = '';
            staticNumbers = [];
            i = -1;
            continue;
        }
        else {
            //i.e. number
            console.log('ERROR ===== ' + char);
            staticNumbers.push({ 'position': i, 'value': parseInt(char) });
            continue;
        }
    }
    return result;
}
var test_4 = function () {
    console.log("TEST 4: invertString('a1bc2def 3gh4 tf8')");
    var result = invertString('a1bc2def  3gh4 tf8 FDS');
    console.log(result);
    console.log();
    return result;
};
var programm = function () {
    test_1();
    test_2();
    test_3();
    test_4();
};
programm();
// ХЕЛПЕРЫ:
// Хелпер функция для проверки равенства любых типов
function isEquals(a, b) {
    // есди у нас простой тип - строка или число (можно добавить дополнительно либо вынести в отдельные гарды) то простая проверка
    if (a === b)
        return true;
    if (iString(a) || iNumber(a) || iString(b) || iNumber(b))
        return false;
    // если более сложный объект то проверяем по составу
    var keys_a = Object.keys(a);
    var keys_b = Object.keys(b);
    if (keys_a.length != keys_b.length) {
        return false;
    }
    return !keys_a.filter(function (key) {
        if (typeof a[key] == "object" || Array.isArray(a[key])) {
            return !isEquals(a[key], b[key]);
        }
        else {
            return a[key] !== b[key];
        }
    }).length;
}
// Хелпер функция для проверки вхождения в массив с учетом любых типов (как замена indexOf которая проверяет {} по ссылке а не по значению)
function indexOfAny(a, b) {
    for (var i = 0; i < a.length; i++) {
        if (isEquals(a[i], b)) {
            return i;
        }
    }
    return -1;
}
function iString(item) {
    return typeof item === 'string';
}
function iNumber(item) {
    return typeof item === 'number';
}
