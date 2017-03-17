type sn = string | number;

const isString: (a: sn) => a is string = (a: sn): a is string => typeof a === 'string';

function summator(...params: sn[]): number {
    return params.reduce<number>((sum: number, param: sn) =>
        isString(param) ?
            sum + parseInt(param) :
            isNaN(param) ?
                sum :
                sum + param, 0);
}