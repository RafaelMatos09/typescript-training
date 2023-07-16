class CustomerT2 {

    constructor(private _firtName: string, private _lastName: string) {

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
