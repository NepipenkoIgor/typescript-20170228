describe('Task4: function revert sentence', function () {
    describe('function revert word', function () {
        it('all numbers, string stays the same', function () {
            var result = revertWord('12134');
            expect(result).to.equal('12134');
        });
        it('all symbols', function () {
            var result = revertWord('s1ta$%r3t');
            expect(result).to.equal('t1ra$%t3s');
        });
    });
    describe('function revert sentence', function () {
        it('string 1', function () {
            var result = revertSentence('s1tar3t 2 hellow');
            expect(result).to.equal('t1rat3s 2 wolleh');
        });
        it('string 2', function () {
            var result = revertSentence('s1ta$%r3t 2 hel^low');
            expect(result).to.equal('t1ra$%t3s 2 wol^leh');
        });
        it('string 3', function () {
            var result = revertSentence('s1tar3t 2   low5');
            expect(result).to.equal('t1rat3s 2   wol5');
        });
    });
});
