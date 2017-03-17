"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var main_1 = require("./main");
describe('test my func', function () {
    it('first test', function () {
        chai_1.expect(main_1.summator(1, 2, 3))
            .equal(6);
    });
    it('first test', function () {
        chai_1.expect(main_1.summator('asdas', '2sad', 3))
            .equal(3);
    });
});
