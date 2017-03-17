describe('Task2: function summator', function () {
    it('all numbers', function () {
        var result = summator(1, 2);
        expect(result).to.equal(3);
    });
    it('number is NaN', function () {
        var result = summator(1, NaN);
        expect(result).to.equal(1);
    });
    it('all strings', function () {
        var result = summator('1', '2');
        expect(result).to.equal(3);
    });
    it('mixed numbers and strings', function () {
        var result = summator('1', 2);
        expect(result).to.equal(3);
    });
});
