// npm install --save @types/mocha
// npm install --save @types/chai
let assert = chai.assert;
describe("isInArray", function () {
    it("массив и один аргумент (присутствующий)", function () {
        assert.equal(isInArray([1, 2, 3], 1), true);
    });
    it("массив и два аргумента (присутствующих)", function () {
        assert.equal(isInArray([1, 2, 3], 1, 2), true);
    });
    it("массив и три аргумента (присутствующих)", function () {
        assert.equal(isInArray([1, 2, 3], 1, 2, 3), true);
    });
    it("массив и три аргумента (один отсутствующий)", function () {
        assert.equal(isInArray([1, 2, 3], 1, 2, 4), false);
    });
    it("массив и два аргумента (один отсутствующий)", function () {
        assert.equal(isInArray([1, 2, 3], 1, 4), false);
    });
    it("массив и два аргумента (оба отсутствующих)", function () {
        assert.equal(isInArray([1, 2, 3], 4, 5), false);
    });
    it("массив и один аргумент (отсутствующий)", function () {
        assert.equal(isInArray([1, 2, 3], 4), false);
    });
});
describe("summator", function () {
    it("один аргумент (число)", function () {
        assert.equal(summator(1), 1);
    });
    it("два аргумента (числа)", function () {
        assert.equal(summator(1, 2), 3);
    });
    it("два аргумента (число и строка)", function () {
        assert.equal(summator(1, "2"), 3);
    });
    it("два аргумента (строки)", function () {
        assert.equal(summator("1", "2"), 3);
    });
    it("два аргумента (число и строка не содержащая числа)", function () {
        assert.equal(summator("1", "не число"), 1);
    });
});
describe("getUnique", function () {
    it("на входе массив из неуникальных чисел, на выходе массив из уникальных", function () {
        assert.deepEqual(getUnique(2, 1, 2, 2, 1, 3, 1), [2, 1, 3]);
    });
    it("на входе массив из неуникальных строк, на выходе массив из уникальных", function () {
        assert.deepEqual(getUnique('один', 'два', 'три', 'два'), ['один', 'два', 'три']);
    });
    it("на входе массив из неуникальных булевых, на выходе массив из уникальных", function () {
        assert.deepEqual(getUnique(true, true, false), [true, false]);
    });
    it("на входе массив из смешанных значений, на выходе массив из уникальных", function () {
        assert.deepEqual(getUnique(1, "два", false, 1, true, "два"), [1, "два", false, true]);
    });
});
