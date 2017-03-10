// 1)
// . Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// . Возвращает true, если все аргументы, кроме первого входят в первый.
// . Первым всегда должен быть массив.
function isInArray(ar:any[], ...items:any[]):boolean {
    for(let item of items){
        if (indexOfAny(ar, item) === -1 ) return false;
    }
    return true;
}
let test_1: () => boolean = () => {
    console.log(`TEST 1: isInArray isInArray(['a',3,4,'b'], 5,3,'b')`);
    let result = isInArray(['a',3,4,'b'], 5,3,'b');
    console.log(result);
    console.log();
    return result;
}

// 2)
// . писать функцию summator(), которая сумирует переданые ей аргументы.
// . Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
type ns = number | string;
function summator(...items: ns[]): number {
    let summa: number = 0;
    for(let item of items){

        summa += iString(item)?parseFloat(item)||0:item; // parseInt(item)||0 - в случае NaN
        // Сначала был вариант:
        // summa += iString(item)?parseFloat(item):iNumber(item)?item:0;
        // Но первая проверка iString - оказывается сразу вычитает тип string из типа sn
        // поэтому вторую проверку на number убрал
    }
    return summa;
}
let test_2: () => number = () => {
    console.log(`TEST 2: summator(5,3,'b','7.312bas')`);
    let result = summator(5,3,'b','7.312bas');
    console.log(result);
    console.log();
    return result;
}

// 3)
// . Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// . и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// . Порядок элементов результирующего массива должен совпадать с порядком,
// . в котором они встречаются в оригинальной структуре.
function getUnique(...items:any[]):any[] {
    let result: any[] = [];

    for(let item of items){
        if(isInArray(result, item)) continue;
        result.push(item);
    }

    return result;
}
let test_3: () => any[] = () => {
    console.log(`TEST 3: getUnique(5,3,'b',5,'a',{'i':2},{'i':2},{'i':3},3,'a','d',1)`);
    let result = getUnique(5, 3, 'b', 5, 'a', {'i':2}, {'i':2},{'i':3},3,'a','d',1);
    console.log(result);
    console.log();
    return result;
}

// 4)
// . Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
// . цифры и специальные символы должны остаться на месте
// .    s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
// .    s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
// .    s1tar3t 2   low5  ->  t1rat3s 2   wol5
type nn = {[idx:string]: number};
/**
 *  ЗДЕСЬ КАКАЯ ТО ОШИБКА - НЕ УЧИТЫВАЕТ ПОСЛЕДНЕЕ СЛОВО
 */
function invertString(strS: string): string {
    const regexp = /[A-z]/;
    let result: string = '';
    let word: string = '';
    let staticNumbers: nn[] = [];
    let i:number = -1;
    // error TS2494: Using a string in a 'for...of' statement is only supported in ECMAScript 5 and higher.
    // OR 
    // error TS2407: The right-hand side of a 'for...in' statement must be of type 'any', an object type or a type parameter.

    
    for(let char_idx = 0; char_idx < strS.length; char_idx++){
        let char = strS[char_idx];
        i++;
        if(regexp.exec(char)){
            word = char + word;
            continue;
        }else if(char === ' '){
            for(let stat of staticNumbers){
                word = word.slice(0,stat.position) + stat.value + word.slice(stat.position);
            }
            result += word + ' '
            word = '';
            staticNumbers = [];
            i = -1;
            continue;
        }else{
            //i.e. number
            staticNumbers.push({'position':i, 'value':parseInt(char)});
            continue;
        }
    }
    return result;
}
let test_4: () => string = () => {
    console.log(`TEST 4: invertString('a1bc2def 3gh4 tf8')`);
    let result = invertString('a1bc2def  3gh4 tf8 FDS');
    console.log(result);
    console.log();
    return result;
}



//  5) Улучшите класс с менюшкой добавив публичные методы
//     getElem -возвращает елемент в котором генерится меню;
//      toggle открыть/закрыть элемент меню по метке;
//      close закрыть элемент меню по метке;
//      open открыть элемент меню по метке

//     в интерфейсе реализуйте кнопками вызов этих методов ( например над меню)
//     P.S. для демонстрации




// 6) Реализуйте слайдер
// . http://learn.javascript.ru/task/slider



let programm: () => void = function(){
    test_1();
    test_2();
    test_3();
    test_4();
}
 
programm();




// ХЕЛПЕРЫ:

// Хелпер функция для проверки равенства любых типов
function isEquals( a:any, b:any ):boolean {
    // есди у нас простой тип - строка или число (можно добавить дополнительно либо вынести в отдельные гарды) то простая проверка
    if (a === b) return true;
    if (iString(a) || iNumber(a) || iString(b) || iNumber(b)) return false;

    // если более сложный объект то проверяем по составу
    let keys_a = Object.keys( a );
	let keys_b = Object.keys( b );

    if ( keys_a.length != keys_b.length ) {
		return false;
	}

	return !keys_a.filter( (key:ns)=>{
		if ( typeof a[key] == "object" || Array.isArray( a[key] ) ) {
			return !isEquals(a[key], b[key]);
		} else {
			return a[key] !== b[key];
		}
	}).length;
}
// Хелпер функция для проверки вхождения в массив с учетом любых типов (как замена indexOf которая проверяет {} по ссылке а не по значению)
function indexOfAny(a:any[], b:any):number {    
    for (let i = 0; i < a.length; i++) {
        if (isEquals(a[i],b)) {
            return i;
        }
    }
    return -1;
}
function iString(item:ns): item is string {
    return typeof item === 'string';
}
function iNumber(item:ns): item is number {
    return typeof item === 'number';
}