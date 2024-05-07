{

    // getter and setter






    class BankAccount {
        public readonly id: number;
        private _name: string;
        private _balance: number;

        // _ is convenstion of private property

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this._name = name;
            this._balance = balance;
        };

        // initialy this propertis is public
        set addDeposit(amount: number) {
            this._balance = this._balance + amount;
        };

        get myCurrentBalance() {
            return this._balance;
        }

    }


    const poorDeveloperAccount = new BankAccount(143134, "mr.poor", 20);




    poorDeveloperAccount.addDeposit = 50


    const myBalance = poorDeveloperAccount.myCurrentBalance;

    console.table(myBalance);

























}