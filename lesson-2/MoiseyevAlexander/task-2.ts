// Написать функцию summator(), которая сумирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function summator(...restOfArgs: string[]): string;
function summator(...restOfArgs: number[]): number;
function summator(...restOfArgs: any[]): any {
  let result: any = restOfArgs[0];
  for (let i = 1; i < restOfArgs.length; i++) {
    result += restOfArgs[i];
  }
  return result;
}

console.log( summator(1) );
console.log( summator(1, 2) );
console.log( summator(1, 2, 3) );
console.log( summator('один') );
console.log( summator('один', 'два') );
console.log( summator('один', 'два', 'три') );
