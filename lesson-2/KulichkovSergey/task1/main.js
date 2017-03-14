function isInArray(arr) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    if (!Array.isArray(arr)) {
        throw new Error('First argument must be an array');
    }
    return params.every(function (param) { return arr.indexOf(param) !== -1; });
}
