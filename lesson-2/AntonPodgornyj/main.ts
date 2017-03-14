//1
function isInArray(a: any[], ...b: any[]): boolean {
    if (!Array.isArray(a)) {
        return;
    }
    return b.every((item) => a.indexOf(item) !== -1);
};

//2
type sn = string | number;

function isNumber(a: sn): a is number {
    return typeof a === 'number';
}

function summator(...params: sn[]): number {
    let sum = 0;
    params.forEach((param) => sum += isNumber(param) ? param : parseInt(param));
    return sum;
}

//3.1
function getUnique_one(...a: any[]): any[]{
    return [...new Set(a)]
    // let set = new Set();
    // a.forEach((item)=>set.add(item));
    // return set;
}

//3.2
function getUnique_two(...a: any[]): any[]{
    let rez = [];
    a.forEach(function(item){
        if(rez.indexOf(item) == -1){
            rez.push(item);
        }
    });
    return rez;
}

//4

function isLet(char:string):boolean{
    return /[a-zA-z]/.test(char);
};

function revert(item:string):string{
    let chars = item.split('');
    let tmp = [];
    let rez = Array(chars.length);
    if (chars.every((char) => isLet(char))) {
        chars.reverse();
        return chars.join('');
    }
    chars.forEach(function (item, i, array) {
        if (!isLet(item)) {
            rez[i] = item;
        }else{
            tmp.push(item);
        }
    });
    for(let i= 0; i < chars.length; i++){
        if(!rez[i]){
            rez[i] = tmp.splice(-1)[0];
        }
    }
    return rez.join('');
};

function revertWords(str: string):string{
    if(typeof str === 'string'){
        return str.split(' ').map(revert).join(' ');
    }
};

//5*****************************************************************



