type snb = string | number | boolean;

function isInArray(arr: snb[], ...params: snb[]): boolean {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }

    return params.every((param: snb) => arr.indexOf(param) !== -1);
}


type innerObject = {
    x: number;
    y?: number;
};

type mainObject = {
    a: innerObject;
    b: innerObject;
};

let obj: mainObject = {
    a: {
        x: 1,
        y: 1
    },
    b: {
        x: 2
    }
};