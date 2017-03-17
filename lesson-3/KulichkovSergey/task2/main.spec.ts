describe('Task2: function summator', () => {
    it('all numbers', () => {
        const result: number = summator(1, 2);
        expect(result).to.equal(3);
    });

    it('number is NaN', () => {
        const result: number = summator(1, NaN);
        expect(result).to.equal(1);
    });

    it('all strings', () => {
        const result: number = summator('1', '2');
        expect(result).to.equal(3);
    });

    it('mixed numbers and strings', () => {
        const result: number = summator('1', 2);
        expect(result).to.equal(3);
    });
});