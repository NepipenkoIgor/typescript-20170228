// Object.defineProperty(window, "MySweetApp", { value: "v1.0.0", writable: false });

// function deliveryMethod() {
//     // TODO
//     return "overnight";
// }

// function shipWeight(){
//     return parseInt(document.getElementById('weight').textContent);
// }

// /*
//  * @param {(string | string[])} emailAddr - An email address of array of email addresses
//  */
// function sendUpdates(emailAddr:string | string[]) {
//     function sendEmail(addr){
//         // Default to standard delivery if empty
//         console.log(`Shipping to ${addr} via ${deliveryMethod() || "standard"} delivery`);

//         if (shipWeight() > 100){
//             console.log("WARNING: Oversize package");
//         }
//     }
//     // If it's an array, loop over it
//     if (Array.isArray(emailAddr)) {
//         emailAddr.forEach((val,idx) => {
//             sendEmail(val.trim());
//         });
//     } else {
//         sendEmail(emailAddr.trim());
//     }
// }

// interface Account {
//     firstName: string;
//     age: number;
// }

// let account = Account;


//let person = {
//     name: 'Igor',
//     age: 30
// }

// let myPerson:typeof person;

// myPerson = {
//     age: 30
// }

// class A {

// }

// let a:A;
// let b = new A();

// let age:number;
// let age1:number = 1;
// let age2 = 1;

// let num: number = 1;
// let str: string = 'sd';
// let bool: boolean = true;
// let un:undefined = undefined;
// let n:null = null;
// //let s:symbol = Symbol();


// let dynamic:{};
// let v:void = null;



// let account:{[key:string]:string | number};
// account = { name:'Igor'};
// account = { surname:'Nepipenko'};
// account.age = 30


// let account: {
//     name: string;
//     surname: string;
//     getName?: () => string
// };

// account = {
//     name: 'Igor',
//     surname: 'Igor',
// }

// const account: {
//    readonly name: string,
//    readonly surname: string,
// } = {
//         name: 'Igor',
//         surname: 'Igor',
//     }

// account.name = 'Vova'

// let a: Array<number> = [1,2,3,4,5];
// let a: ReadonlyArray<number> = [1,2,3,4,5];

// a[6]=3;
// a.push(4);
// a.length = 3

// let position: [string, number];
// position = ['sad',1]

// let cb: {new (a:string):number};

// interface IAccount {
//     setName():this;
// }

// function withoutThis(this:void,a:number){

// }
// withoutThis(1)


// interface UIElement {
//     addClickListener(onclick: (this: void, e: Event)=> void):void
// }

// class Handler {
//     info:string;
//     onClickBad(this:Handler, e: Event){
//         this.info = 'msg'
//     }
// }

// let h  = new Handler();
// let uIElement:UIElement = {
//      addClickListener(onclick: (this: void, e: Event)=> void):void{

//      }
// }

// uIElement.addClickListener(h.onClickBad)

// type account = {
//     name:string;
//     surname:string;
// }

// let acc:account;

// type g = {x:g}

// type IAcc= {
//     name:string;
//     surname:string;
// }

// interface Mover {
//     move(): void;
//     getStatus: () => { speed: number }
// }

// interface Shaker {
//     shake(): void;
//     getStatus (): { frequency: number }
// }

// type info ={
//     info:string;
// }

// type msg ={
//     msg:string;
// }

// interface MoverShaker extends Mover, Shaker, info {
//     getStatus: () => { speed: number, frequency: number }
// }

// interface IBase {
//     id: number;
// }

// let n: IBase = {
//     id: 1,
//     name: 'sd';
// }


// interface IBase {
//     name: string;
// }

// interface Window{
//         mozRequestAnimationFrame(callback: FrameRequestCallback): number;
// }

// interface A<T>{
//         someProperty:T
// }

// let a: Array<number>

// interface A<P extends string|number>{
//         someProperty:P
// }

// let b:A<{id:number,female:boolean}>
