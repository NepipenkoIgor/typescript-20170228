type sn = string | number;

function isString(a: sn): a is string {
    return typeof a === 'string';
}

function summator(...params: sn[]): number {
    let sum = 0;

    params.forEach((param) => sum += isString(param) ? parseInt(param) : param);

    return sum;
}