class BankAccount {
    constructor() {
        this.accountNumbers = [123, 243, 129];
        this.accountHolders = ["mamam", "dada", "sister", "brother"];
        this.balances = [100, 200, 300];
    }

    getAccountNumber(accountNumber) {
        let accountN = prompt("Enter your account number: ");
        if (this.accountNumbers.includes(parseInt(accountN))) {
            console.log("Your account number is: " + accountN);
        } else {
            console.log("Sorry, the account number does not match any account in the system.");
        }
    }

    getAccountHolder(accountHolder) {
        let accounth = prompt("Enter your account name holder: ");
        if (this.accountHolders.includes(accounth)) {
            console.log("Your account holder name is: " + accounth);
        } else {
            console.log("Sorry, the account holder name does not match any account holder in the system.");
        }
    }

    getBalance(accountNumber) {
        let accountN = prompt("Enter your account number: ");
        let index = this.accountNumbers.indexOf(parseInt(accountN));
        if (index !== -1) {
            let balance = this.balances[index];
            console.log("Your account balance is: " + balance);
        } else {
            console.log("Sorry, the account number does not match any account in the system.");
        }
    }

    deposit(accountNumber, amount) {
        let accountN = prompt("Enter your account number: ");
        let index = this.accountNumbers.indexOf(parseInt(accountN));
        if (index !== -1) {
            this.balances[index] += amount;
            console.log("Successfully deposited " + amount + " into your account.");
            console.log("Your new balance is: " + this.balances[index]);
        } else {
            console.log("Sorry, the account number does not match any account in the system.");
        }
    }

    withdrawal(accountNumber, amount) {
        let accountN = prompt("Enter your account number: ");
        let index = this.accountNumbers.indexOf(parseInt(accountN));
        if (index !== -1) {
            if (this.balances[index] >= amount) {
                this.balances[index] -= amount;
                console.log("Successfully withdrew " + amount + " from your account.");
                console.log("Your new balance is: " + this.balances[index]);
            } else {
                console.log("Insufficient balance in your account.");
            }
        } else {
            console.log("Sorry, the account number does not match any account in the system.");
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor() {
        super();
        this.interestRate = 0.1;//guessing maybe the rate is 10%
    }

    calculateInterest(accountNumber) {
        let accountN = prompt("Enter your account number: ");
        let index = this.accountNumbers.indexOf(parseInt(accountN));
        if (index !== -1) {
            let balance = this.balances[index];
            let interestAmount = balance * this.interestRate;
            console.log("Your interest amount is: " + interestAmount);
            return interestAmount;
        } else {
            console.log("Sorry, the account number does not match any account in the system.");
        }
    }
}

class CheckingAccount extends BankAccount {
    constructor() {
        super();
        this.overdraftLimit = 0;
    }

    getOverdraftLimit() {
        return this.overdraftLimit;
    }

    withdraw(accountNumber, amount) {
        let accountN = prompt("Enter your account number: ");
        let index = this.accountNumbers.indexOf(parseInt(accountN));
        if (index !== -1) {
            let balance = this.balances[index];
            if (balance + this.overdraftLimit >= amount) {
                this.balances[index] -= amount;
                console.log("Successfully withdrew " + amount + " from your account.");
                console.log("Your new balance is: " + this.balances[index]);
            } else {
                console.log("Insufficient balance in your account.");
            }
        } else {
            console.log("Sorry, the account number does not match any account in the system.");
        }
    }
}


const bankAccount = new BankAccount();
bankAccount.getAccountHolder();

const withdrawe = new BankAccount();
bankAccount.withdrawal();

const savins = new SavingsAccount();
SavingsAccount.calculateInterest();


