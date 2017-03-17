type sn = string | number;

function isNumber(a: sn): a is number {
    return typeof a === 'number';
}

function summator(...params: sn[]): number {
    return params.reduce<number>(
        (acc: number, next: sn) => {
            return isNumber(next) ?
                (acc + next) :
                isNaN(Number(next)) ?
                    acc :
                    acc + Number(next)
        }, 0);
}