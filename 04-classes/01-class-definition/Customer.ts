class Customer {

    firtName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firtName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer('Martin', 'Dixon');

console.log(myCustomer.firtName)
console.log(myCustomer.lastName)