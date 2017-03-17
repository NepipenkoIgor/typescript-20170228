describe('Task4: function revert sentence', () => {
    describe('function revert word', () => {
        it('all numbers, string stays the same', () => {
            const result: string = revertWord('12134');
            expect(result).to.equal('12134');
        });

        it('all symbols', () => {
            const result: string = revertWord('s1ta$%r3t');
            expect(result).to.equal('t1ra$%t3s');
        });
    });

    describe('function revert sentence', () => {
        it('string 1', () => {
            const result: string = revertSentence('s1tar3t 2 hellow');
            expect(result).to.equal('t1rat3s 2 wolleh');
        });

        it('string 2', () => {
            const result: string = revertSentence('s1ta$%r3t 2 hel^low');
            expect(result).to.equal('t1ra$%t3s 2 wol^leh');
        });

        it('string 3', () => {
            const result: string = revertSentence('s1tar3t 2   low5');
            expect(result).to.equal('t1rat3s 2   wol5');
        });
    });
});