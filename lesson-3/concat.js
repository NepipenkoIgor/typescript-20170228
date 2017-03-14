var Validation;
(function (Validation) {
    var NameValidator = (function () {
        function NameValidator() {
        }
        NameValidator.prototype.isValids = function (name) {
            return /^([aA-zZ\-]||[аА-яЯ\-]+)$/.test(name);
        };
        return NameValidator;
    }());
    Validation.NameValidator = NameValidator;
    var PhoneValidator = (function () {
        function PhoneValidator() {
        }
        PhoneValidator.prototype.isValids = function (phone) {
            return /^093\d{7}$/.test(phone);
        };
        return PhoneValidator;
    }());
    Validation.PhoneValidator = PhoneValidator;
})(Validation || (Validation = {}));
var nameValidator = new Validation.NameValidator();
