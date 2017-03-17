var isString = function (a) { return typeof a === 'string'; };
function summator() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    return params.reduce(function (sum, param) {
        return isString(param) ?
            sum + parseInt(param) :
            isNaN(param) ?
                sum :
                sum + param;
    }, 0);
}
