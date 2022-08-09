class Bank{
    account_details={
        1000:{account_number:1000,balance:3000,password:"userone",transactions:[]},
        1001:{account_number:1001,balance:2000,password:"usertwo",transactions:[]},
        1002:{account_number:1002,balance:4000,password:"userthree",transactions:[]},
        1003:{account_number:1003,balance:5000,password:"userfour",transactions:[]}
    }
    validate(ac_no){
        return ac_no in this.account_details?true:false
    }
    authenticate(ac_no,password){
        if(this.validate(ac_no)){
            let pwd=this.account_details[ac_no].password
            if(password==pwd){
                return "login success"
            }
            else{
                return "invalid password"
            }
        }
        else{
            return "invalid ac no"
        }
    }
    getBalance(ac_no){
        if(this.validate(ac_no)){
            return this.account_details[ac_no].balance
        }
        else{
            return "invalid ac no"
        }
    }
    fundTransfer(fromAcno,toAcno,amount){
       if(this.validate(fromAcno) && this.validate(toAcno)){
           let availBal=this.getBalance(fromAcno)
           if(amount>availBal){
               return "transaction failed insufficient balance"
           }
           else{
               this.account_details[fromAcno].balance-=amount
               this.account_details[toAcno].balance+=amount
           }
       }
       else{
           return "invalid credentials"
       }
    }
    transaction(toAcno,amount){
       if(this.validate(toAcno)){}
    }
}
var obj=new Bank()
console.log(obj.validate(1000));
console.log(obj.authenticate(10000,"userone"));
console.log(obj.fundTransfer(1000,1002,1000));
console.log(obj.getBalance(1000));
