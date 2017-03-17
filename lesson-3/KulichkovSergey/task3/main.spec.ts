describe('Task3: get unique', () => {
    it('all numbers', () => {
        const result: snb[] = getUnique(1, 2, 2, 1, 3);
        expect(result).to.deep.equal([1, 2, 3]);
    });

    it('all strings', () => {
        const result: snb[] = getUnique('1', '2', '2', '1', '3');
        expect(result).to.deep.equal(['1', '2', '3']);
    });

    it('all boolean', () => {
        const result: snb[] = getUnique(true, false, true, true, false, true);
        expect(result).to.deep.equal([true, false]);
    });

    it('mixed', () => {
        const result: snb[] = getUnique(1, '2', 2, true, true, '1', 1);
        expect(result).to.deep.equal([1, '2', 2, true, '1']);
    });
});