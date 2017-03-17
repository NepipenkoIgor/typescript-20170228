type prim = string | number | boolean;

function isInArray(arr: prim[], ...params: prim[]): boolean {
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }

    return params.every((param) => arr.indexOf(param) !== -1);
}