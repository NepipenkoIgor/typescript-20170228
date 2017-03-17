describe('Task3: get unique', function () {
    it('all numbers', function () {
        var result = getUnique(1, 2, 2, 1, 3);
        expect(result).to.deep.equal([1, 2, 3]);
    });
    it('all strings', function () {
        var result = getUnique('1', '2', '2', '1', '3');
        expect(result).to.deep.equal(['1', '2', '3']);
    });
    it('all boolean', function () {
        var result = getUnique(true, false, true, true, false, true);
        expect(result).to.deep.equal([true, false]);
    });
    it('mixed', function () {
        var result = getUnique(1, '2', 2, true, true, '1', 1);
        expect(result).to.deep.equal([1, '2', 2, true, '1']);
    });
});
