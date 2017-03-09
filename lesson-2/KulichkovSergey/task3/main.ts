function getUnique(...params: any[]): any[] {
    let result = [];

    params.forEach((param) => {
        if (result.indexOf(param) === -1) {
            result.push(param)
        }
    });

    return result;
}