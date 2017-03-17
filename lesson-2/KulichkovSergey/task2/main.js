function isNumber(a) {
    return typeof a === 'number';
}
function summator() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    return params.reduce(function (acc, next) {
        return isNumber(next) ?
            (acc + next) :
            isNaN(Number(next)) ?
                acc :
                acc + Number(next);
    }, 0);
}
