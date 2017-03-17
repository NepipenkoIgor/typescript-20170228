var expect = chai.expect;
describe('Task1: function is in array', function () {
    it('1 number, 1 number, true', function () {
        var result = isInArray([1], 1);
        expect(result).to.equal(true);
    });
    it('1 number, 1 number, false', function () {
        var result = isInArray([1], 2);
        expect(result).to.equal(false);
    });
    it('mixed, 1 string, true', function () {
        var result = isInArray([1, '2'], '2');
        expect(result).to.equal(true);
    });
    it('1 number, 1 number, false', function () {
        var result = isInArray([1], '1');
        expect(result).to.equal(false);
    });
});
