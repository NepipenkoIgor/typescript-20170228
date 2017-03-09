function getUnique() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i - 0] = arguments[_i];
    }
    var result = [];
    params.forEach(function (param) {
        if (result.indexOf(param) === -1) {
            result.push(param);
        }
    });
    return result;
}
