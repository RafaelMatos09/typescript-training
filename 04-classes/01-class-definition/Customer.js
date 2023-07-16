var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firtName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer('Martin', 'Dixon');
console.log(myCustomer.firtName);
console.log(myCustomer.lastName);
