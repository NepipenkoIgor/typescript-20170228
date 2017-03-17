"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Account = (function () {
    function Account(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Account;
}());
__decorate([
    logProperty,
    logProperty,
    __metadata("design:type", String)
], Account.prototype, "firstName", void 0);
function logProperty(target, key) {
    var _val = target[key];
    var _getter = function () {
        console.log("Get: " + key + " => " + _val);
        return _val;
    };
    var _setter = function (newValue) {
        console.log("Set: " + key + " => " + newValue);
        _val = newValue;
    };
    Object.defineProperty(target, key, {
        get: _getter,
        set: _setter,
        enumerable: true,
        configurable: true
    });
}
var me = new Account('Igor', 'Nepipenko');
var myName = me.firstName;
me.firstName = 'Stepan';
