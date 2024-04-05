class BankAccount {
  constructor(initialBalance = 0) {
    this._balance = initialBalance;
    this._transactionHistory = [];
  }

  get balance() {
    return this._balance;
  }

  set balance({ amount, description }) {
    //Validation
    if (description == undefined) {
      console.error("Transaction must include a description.");
      return;
    }
    this._prevBalance = this._balance;
    this._balance += amount;
    this._transactionHistory.push({
      amount,
      description,
      _prevBalance: this._prevBalance,
    });
  }

  getTrasactionHistory() {
    return this._transactionHistory;
  }
}

const myAccount = new BankAccount(100);

myAccount.balance = {
  amount: 80,
  description: "Deposit - saligramam ATM ICICI - Manikandan",
};
console.log(`New balance: ${myAccount.balance}`);

myAccount.balance = {
  amount: -50,
  description: "Grocery shopping",
};
console.log(`New balance: ${myAccount.balance}`);

myAccount.balance = {
  amount: 150,
  description: "Grocery shopping",
};
console.log(`New balance: ${myAccount.balance}`);

myAccount.balance = {
  amount: 250,
  description: "Grocery shopping",
};
console.log(`New balance: ${myAccount.balance}`);

myAccount.balance = {
  amount: -50,
  description: "Grocery shopping",
};
console.log(`New balance: ${myAccount.balance}`);

myAccount.balance = {
  amount: -50,
  description: "Grocery shopping",
};
console.log(`New balance: ${myAccount.balance}`);

myAccount.balance = {
  amount: -50,
};
console.log(`New balance: ${myAccount.balance}`);

console.log(myAccount.getTrasactionHistory());
