class CustomerT2 {

    private _firtName: string;
    private _lastName: string;


    constructor(theFirst: string, theLast: string) {
        this._firtName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firtName;
    }

    public set firstName(value: string) {
        this._firtName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

let myCTomer = new CustomerT2('Martin', 'Dixon');

console.log(myCTomer.firstName)
console.log(myCTomer.lastName)