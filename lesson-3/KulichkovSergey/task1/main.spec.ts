let expect: Chai.ExpectStatic = chai.expect;

describe('Task1: function is in array', () => {
    it('1 number, 1 number, true', () => {
        const result: boolean = isInArray([1], 1);
        expect(result).to.equal(true);
    });

    it('1 number, 1 number, false', () => {
        const result: boolean = isInArray([1], 2);
        expect(result).to.equal(false);
    });

    it('mixed, 1 string, true', () => {
        const result: boolean = isInArray([1, '2'], '2');
        expect(result).to.equal(true);
    });

    it('1 number, 1 number, false', () => {
        const result: boolean = isInArray([1], '1');
        expect(result).to.equal(false);
    });
});