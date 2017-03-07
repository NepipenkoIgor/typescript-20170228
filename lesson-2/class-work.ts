// function getAverage(a: number, b: number, c: number): string {
//     let total = a + b + c;
//     let average = total / 3;
//     return ` The average is ${average}`
// }

// getAverage('sd',1,1);
// getAverage(1,1,3,4);
// getAverage(1,15,3);


// function getAverage(a: number, b: number, c?: number): string {
//     let total = a;
//     let count = 1;

//     total += b;
//     count++;
//     if (typeof c !== 'undefined') {
//         total += c;
//         count++;
//     }
//     let average = total / count;
//     return ` The average is ${average}`
// }

// getAverage(1,15,3);
// getAverage(1,14);

// function getAverage(a: number, b: number, c: number = 0): string {
//     let total = a + b + c;
//     let average = total / 3;
//     return ` The average is ${average}`;
// }

// getAverage(1,2);
// getAverage(1,2,4 );


// function getAverage(...num: number[]): string {
//     let total = 0;
//     let count = 0;
//     for (let i = 0; i < num.length; i++) {
//         total += num[i];
//         count++
//     }
//     let average = total / count;
//     return ` The average is ${average}`;
// }

//  getAverage(...[1,2,3,4,5,5])

// function isString(a: sn): a is string {
//   return typeof a === 'string';
// }

// type sn = string | number;
// function getAverage(a: number, b: number, c: number): string;
// function getAverage(a: string, b: string, c: string): string;
// function getAverage(a: sn, b: sn, c: sn): string {

//     if (isString(a)) {
//         parseInt(a, 10)
//     } else {
//         a
//     }

//     let total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
//     let average = total / 3;
//     return ` The average is ${average}`;
// }
// getAverage('1', '2', '2')

// class Point {

//     constructor(
//         public _x: number,
//         public _y: number
//     ) { }

//     public sum(): number {
//         return this._x + this._y;
//     }
// }

// let point1 = new Point(1, 2)

// interface IPoint{
//       _x: number,
//       _y: number,
//       sum():number
// }

// class PointX implements IPoint {

//     constructor(
//         public _x: number,
//         public _y: number
//     ) { }

//     public sum(): number {
//         return 3;
//     }
// }

// class Singleton {
//     private static _instance:Singleton;

//     private constructor(){}

//     public static getInstance(){
//         if(!Singleton._instance){
//             Singleton._instance = new Singleton()
//         }
//         return Singleton._instance;
//     }
// }

// let inst1 = Singleton.getInstance();


abstract class A {
    sum(): number {
        return 2;
    }

    abstract getValue(): string;
}

class B extends A {
    getValue(){
        return 'sd'
    }
}

let b = new B();