// type sn = (string | number)
// type snb = (string | number | boolean)
// function isNumber(n: sn): n is number {
//     return typeof n === 'number'
// }
// function summator(...n: sn[]): number {
//     return n.reduce<number>((acc: number, next: sn) => {
//         return isNumber(next)
//             ? (next + acc)
//             : Number.isNaN(Number(next))
//                 ? acc + 0
//                 : acc + Number(next)
//     }, 0)
// }
// function getUnique<T extends snb>(...arr: T[]): T[] {
//     return arr.reduce((acc: T[], next: T) => {
//         return !acc.includes(next) ? acc.concat([next]) : acc
//     }, [])
// }
// interface IValidator {
//     isValids(s: string): boolean;
// }
//
// export class NameValidator implements IValidator {
//     public isValids(name: string): boolean {
//         return /^([aA-zZ\-]||[аА-яЯ\-]+)$/.test(name);
//     }
// }
//
// export class PhoneValidator implements IValidator {
//     public isValids(phone: string): boolean {
//         return /^093\d{7}$/.test(phone);
//     }
// }
//
// declare const Google:{
//   new ():void;
// }
// type Google ={
//   new ():void;
// }
// declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
//
// fetch()
// declare const google:any
// google.map

// type sn = (string | number)
// type snb = (string | number | boolean)
//let nameValidator = new Validation.NameValidator(); 

