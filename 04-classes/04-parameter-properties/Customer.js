"use strict";
var CustomerT2 = /** @class */ (function () {
    function CustomerT2(_firtName, _lastName) {
        this._firtName = _firtName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerT2.prototype, "firstName", {
        get: function () {
            return this._firtName;
        },
        set: function (value) {
            this._firtName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerT2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerT2;
}());
var myCTomer = new CustomerT2('Martin', 'Dixon');
console.log(myCTomer.firstName);
console.log(myCTomer.lastName);
