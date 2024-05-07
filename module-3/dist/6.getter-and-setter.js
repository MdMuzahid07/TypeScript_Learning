"use strict";
{
    // getter and setter
    class BankAccount {
        // _ is convenstion of private property
        constructor(id, name, balance) {
            this.id = id;
            this._name = name;
            this._balance = balance;
        }
        ;
        // initialy this propertis is public
        set addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        ;
        get myCurrentBalance() {
            return this._balance;
        }
    }
    const poorDeveloperAccount = new BankAccount(143134, "mr.poor", 20);
    poorDeveloperAccount.addDeposit = 50;
    const myBalance = poorDeveloperAccount.myCurrentBalance;
    console.table(myBalance);
}
