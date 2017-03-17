describe("getUnique", () => {

    it("Все элементы уникальны", () => {
        assert.deepEqual(getUnique(1, '1', 2, 3, 4), [1, '1', 2, 3, 4]);
    });

    it("Тест 2", () => {
        assert.deepEqual(getUnique(1, '1', '1', 2, 3, 4, 1), [1, '1', 2, 3, 4]);
    });

    it("Тест 3", () => {
        assert.deepEqual(getUnique('a', 1, 1, 3, 3, 4, 'b'), ['a', 1, 3, 4, 'b']);
    });

});

describe("smartReverse", () => {

    it("Тест 1", () => {
        assert.equal(smartReverse('  s1tar3t 2   hellow '), '  t1rat3s 2   wolleh ');
    });

    it("Тест 2", () => {
        assert.equal(smartReverse('s1ta$%r3t 2 hel^low'), 't1ra$%t3s 2 wol^leh');
    });

    it("Тест 3", () => {
        assert.equal(smartReverse(' s1tar3t 2   low5  '), ' t1rat3s 2   wol5  ');
    });

});