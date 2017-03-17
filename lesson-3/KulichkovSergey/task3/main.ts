function getUnique(...params: snb[]): snb[] {
    const result: snb[] = [];

    params.forEach((param: snb) => {
        if (result.indexOf(param) === -1) {
            result.push(param);
        }
    });

    return result;
}