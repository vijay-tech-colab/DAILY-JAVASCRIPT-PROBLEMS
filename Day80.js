function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}, Balance: ${balance}`);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: ${amount}, Balance: ${balance}`);
      } else {
        console.log("Insufficient funds");
      }
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
account.deposit(50);  // 150
account.withdraw(30); // 120
console.log(account.getBalance()); // 120
