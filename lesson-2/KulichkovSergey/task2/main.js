function isString(a) {
    return typeof a === 'string';
}
function summator() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    var sum = 0;
    params.forEach(function (param) { return sum += isString(param) ? parseInt(param) : param; });
    return sum;
}
