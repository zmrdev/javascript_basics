class Bank {
    createAccount(ac_no, pName, branch, pan, ph_no, bal) {
        this.accountNumber = ac_no
        this.personName = pName
        this.branch = branch
        this.pan = pan
        this.phone = ph_no
        this.balance = bal
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`transaction failed insufficient balance on your account number ${this.accountNumber}`);
        }
        else {
            this.balance -= amount
            console.log(`your account number ${this.accountNumber} has been debited with ${amount}
             your avail balance is ${this.balance}`);
        }
    }
    deposit(amount){
        this.balance+=amount
        console.log(`your account number ${this.accountNumber} has been credited with ${amount}
        your avail balance is ${this.balance}`);
    }
    balanceEnquiry(){
        console.log(`your avail balance=${this.balance}`);
    }
}

var bank=new Bank()
bank.createAccount(13232423,"raj","ocr",23234234,34234234,2000)
bank.withdraw(3000)
bank.withdraw(2000)